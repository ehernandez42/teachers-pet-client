import { useQuery } from '@tanstack/react-query'

import { API_BASE, api } from '../lib/api'

export function LoginPage() {
  return (
    <main className="login-page">
      <h1>Teachers-Pet.ai</h1>
      <h2>Sign in to your account</h2>
      <a href={`${API_BASE}/auth/google/login`}>
        <button type="button">Sign in with Google</button>
      </a>
    </main>
  )
}

export function AccountPage() {
  const { data: session, isLoading } = useQuery({
    queryKey: ['session'],
    queryFn: () => api.request<{ email?: string; name?: string } | null>('/auth/session'),
  })

  return (
    <main className="account-page">
      <h1>Account Page</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : session?.email ? (
        <p>Signed in as {session.email}</p>
      ) : (
        <p>Not signed in.</p>
      )}
    </main>
  )
}
