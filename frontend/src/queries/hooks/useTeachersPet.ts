import { useMutation } from '@tanstack/react-query'

import { api } from '../../lib/api'

export interface TranslateResult {
  text: string
  translated_text: string
  source_lang: string
  target_lang: string
}

export function useTranslate() {
  return useMutation({
    mutationFn: ({ text }: { text: string }) =>
      api.post<TranslateResult>('/translate-eng-to-span', { text }),
  })
}

export function useSession() {
  return useMutation({
    mutationFn: () => api.request<{ email: string; name: string; picture: string }>('/auth/session'),
  })
}
