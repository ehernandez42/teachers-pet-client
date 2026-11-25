import os

import deepl
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

router = APIRouter(tags=["translate"])

SOURCE_LANG = "EN"
TARGET_LANG = "ES"


class TranslateRequest(BaseModel):
    text: str


class TranslateResponse(BaseModel):
    text: str
    translated_text: str
    source_lang: str
    target_lang: str


@router.post("/translate-eng-to-span")
def translate_eng_to_span(payload: TranslateRequest) -> TranslateResponse:
    api_key = os.environ.get("DEEPL_API_KEY")
    if not api_key:
        raise HTTPException(status_code=503, detail="DEEPL_API_KEY is not configured")

    try:
        translator = deepl.Translator(api_key)
        result = translator.translate_text(
            payload.text, source_lang=SOURCE_LANG, target_lang=TARGET_LANG
        )
    except deepl.DeepLException as exc:
        raise HTTPException(status_code=502, detail=str(exc)) from exc

    return TranslateResponse(
        text=payload.text,
        translated_text=result.text,
        source_lang=SOURCE_LANG,
        target_lang=TARGET_LANG,
    )
