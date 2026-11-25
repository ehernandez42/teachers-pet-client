import { useState } from 'react'

import { useTranslate } from '../queries/hooks/useTeachersPet'

export function TranslatePage() {
  const [textPrompt, setTextPrompt] = useState('')
  const translate = useTranslate()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!textPrompt.trim()) return
    await translate.mutateAsync({ text: textPrompt })
    setTextPrompt('')
  }

  return (
    <main className="translate-page">
      <h1>Translate English to Spanish</h1>
      <h2>Enter your text below.</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={textPrompt}
          onChange={(e) => setTextPrompt(e.target.value)}
          placeholder="Enter English text"
          rows={6}
        />
        <button type="submit" disabled={translate.isPending}>
          {translate.isPending ? 'Translating...' : 'Submit'}
        </button>
      </form>
      {translate.isError ? <p role="alert">Translation failed. Please try again.</p> : null}
      {translate.data ? <p aria-live="polite">{translate.data.translated_text}</p> : null}
    </main>
  )
}
