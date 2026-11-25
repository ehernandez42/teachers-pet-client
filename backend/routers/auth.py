import os
from urllib.parse import urlencode

import httpx
from fastapi import APIRouter, HTTPException, Request
from fastapi.responses import RedirectResponse

router = APIRouter(tags=["auth"])

GOOGLE_AUTH_URL = "https://accounts.google.com/o/oauth2/v2/auth"
GOOGLE_TOKEN_URL = "https://oauth2.googleapis.com/token"
GOOGLE_USERINFO_URL = "https://www.googleapis.com/oauth2/v3/userinfo"

FRONTEND_ORIGIN = os.environ.get("FRONTEND_ORIGIN", "http://localhost:5173")


def _client_id() -> str:
    return os.environ.get("AUTH_GOOGLE_ID", "")


def _client_secret() -> str:
    return os.environ.get("AUTH_GOOGLE_SECRET", "")


@router.get("/auth/google/login")
def google_login(request: Request):
    client_id = _client_id()
    if not client_id:
        raise HTTPException(status_code=503, detail="AUTH_GOOGLE_ID is not configured")

    redirect_uri = str(request.base_url).rstrip("/") + "/auth/google/callback"
    params = {
        "client_id": client_id,
        "redirect_uri": redirect_uri,
        "response_type": "code",
        "scope": "openid email profile",
        "access_type": "offline",
        "prompt": "select_account",
    }
    return RedirectResponse(f"{GOOGLE_AUTH_URL}?{urlencode(params)}")


@router.get("/auth/google/callback")
async def google_callback(code: str, request: Request):
    client_id = _client_id()
    client_secret = _client_secret()
    if not client_id or not client_secret:
        raise HTTPException(status_code=503, detail="Google OAuth is not configured")

    redirect_uri = str(request.base_url).rstrip("/") + "/auth/google/callback"
    async with httpx.AsyncClient() as client:
        token_response = await client.post(
            GOOGLE_TOKEN_URL,
            data={
                "code": code,
                "client_id": client_id,
                "client_secret": client_secret,
                "redirect_uri": redirect_uri,
                "grant_type": "authorization_code",
            },
        )
        if token_response.status_code != 200:
            raise HTTPException(status_code=502, detail="Google token exchange failed")
        access_token = token_response.json().get("access_token", "")

        userinfo_response = await client.get(
            GOOGLE_USERINFO_URL,
            headers={"Authorization": f"Bearer {access_token}"},
        )
        if userinfo_response.status_code != 200:
            raise HTTPException(status_code=502, detail="Google userinfo lookup failed")
        userinfo = userinfo_response.json()

    request.session["user"] = {
        "email": userinfo.get("email", ""),
        "name": userinfo.get("name", ""),
        "picture": userinfo.get("picture", ""),
    }
    return RedirectResponse(f"{FRONTEND_ORIGIN}/account")


@router.get("/auth/session")
def session(request: Request):
    return request.session.get("user")


@router.post("/auth/signout")
def signout(request: Request):
    request.session.clear()
    return {"status": "ok"}
