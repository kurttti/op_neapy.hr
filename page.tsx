import { useState, useEffect } from 'react'
import TintedCard from '@/components/TintedCard'

export const metadata = {
  title: 'Предпросмотр темы',
  description: 'Визуализируйте текущие дизайн‑токены в светлой и тёмной темах.'
}

export default function ThemePreview() {
  const [dark, setDark] = useState(false)

  // Apply the dark class to the <html> element whenever the toggle changes
  useEffect(() => {
    const root = window.document.documentElement
    if (dark) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }, [dark])

  return (
    <main className="min-h-screen bg-background text-foreground antialiased">
      <div className="mx-auto max-w-6xl py-12 px-6 space-y-12">
        {/* Navigation bar */}
        <nav className="flex items-center justify-between">
          <div className="text-xl font-heading font-semibold">neapy.hr</div>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="#how" className="opacity-90 hover:opacity-100">Как это работает</a>
            <a href="#features" className="opacity-90 hover:opacity-100">Возможности</a>
            <a href="#pricing" className="opacity-90 hover:opacity-100">Цены</a>
            <a href="#faq" className="opacity-90 hover:opacity-100">FAQ</a>
          </div>
          <button
            type="button"
            onClick={() => setDark(!dark)}
            className="rounded-md border border-border bg-muted px-4 py-2 text-sm font-medium text-foreground hover:bg-muted/80 focus:outline-none"
          >
            {dark ? 'Светлая тема' : 'Тёмная тема'}
          </button>
        </nav>

        {/* Hero section */}
        <section className="space-y-6">
          <span className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-full border border-border bg-muted/40 w-fit">
            ИИ-интервью • Облако или On‑Prem
          </span>
          <h1 className="text-4xl sm:text-5xl font-heading font-extrabold leading-tight max-w-4xl">
            ИИ‑собеседования, которые&nbsp;<span className="bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text text-transparent">экономят время HR</span>
          </h1>
          <p className="max-w-2xl text-base text-foreground/90">
            Кандидат отвечает тогда, когда удобно ему. Вы получаете транскрипты, оценки по
            вопросам и короткий шорт‑лист — без лишних созвонов.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mt-4">
            <a
              href="#contact"
              className="rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-md transition-colors hover:bg-primary/90 focus:outline-none"
            >
              Посмотреть демо
            </a>
            <a
              href="#how"
              className="rounded-full bg-muted px-6 py-3 text-sm font-bold text-foreground border border-border shadow-md transition-colors hover:bg-muted/80 focus:outline-none"
            >
              Как это работает
            </a>
          </div>
        </section>

        {/* Feature cards */}
        <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <TintedCard>
            <h4 className="mb-2 text-xl font-heading font-semibold">Интервью любым форматом</h4>
            <p className="text-sm text-foreground/80">
              Голос, видео или текст. RU/EN на старте. Структурные и этичные промпты.
            </p>
          </TintedCard>
          <TintedCard>
            <h4 className="mb-2 text-xl font-heading font-semibold">Транскрипты и скоринг</h4>
            <p className="text-sm text-foreground/80">
              Чистые расшифровки и баллы по вопросам. Плюсы, риски и follow‑up.
            </p>
          </TintedCard>
          <TintedCard>
            <h4 className="mb-2 text-xl font-heading font-semibold">Адаптивные сценарии</h4>
            <p className="text-sm text-foreground/80">
              Уточняющие вопросы на основе ответов — близко к живому диалогу.
            </p>
          </TintedCard>
        </section>

        {/* Contact form */}
        <section className="space-y-4">
          <label htmlFor="email" className="block text-sm font-medium">
            Рабочая почта
          </label>
          <input
            id="email"
            type="email"
            placeholder="ваш@пример.ком"
            className="w-full rounded-md border border-border bg-muted px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
          <button className="rounded-md bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground shadow-sm transition-colors hover:bg-secondary/90 focus:outline-none">
            Запросить демо
          </button>
        </section>
      </div>
    </main>
  )
}
