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
          <div className="text-xl font-heading font-semibold">Blue Yard</div>
          <button
            type="button"
            onClick={() => setDark(!dark)}
            className="rounded-md border border-border bg-muted px-4 py-2 text-sm font-medium text-foreground hover:bg-muted/80 focus:outline-none"
          >
            {dark ? 'Светлая тема' : 'Тёмная тема'}
          </button>
        </nav>

        {/* Typography showcase */}
        <section className="space-y-4">
          <h1 className="text-5xl font-heading font-bold">Заголовок 1</h1>
          <h2 className="text-4xl font-heading font-semibold">Заголовок 2</h2>
          <h3 className="text-3xl font-heading font-semibold">Заголовок 3</h3>
          <p className="max-w-prose text-base font-normal">
            Это абзац основного текста. Он демонстрирует базовый размер шрифта, межстрочный
            интервал и цвет нашей дизайн‑системы. Обратите внимание на щедрый межстрочный
            интервал и чёткий контраст на фоне пастельного градиента.
          </p>
          <button className="mt-4 inline-flex items-center justify-center rounded-md bg-primary px-6 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none">
            Основной призыв
          </button>
        </section>

        {/* Card grid */}
        <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <TintedCard>
            <h4 className="mb-2 text-xl font-heading font-semibold">Футуристические инвестиции</h4>
            <p className="text-sm text-foreground/80">
              Мы инвестируем в технологии, которые приближают человечество к утопии:
              вычисления, биология, аэрокосмос и крипто.
            </p>
          </TintedCard>
          <TintedCard>
            <h4 className="mb-2 text-xl font-heading font-semibold">Устойчивые системы</h4>
            <p className="text-sm text-foreground/80">
              Наш фокус — на открытых, беспрепятственных системах, масштабируемых для
              более быстрых, технологически развитых экономик.
            </p>
          </TintedCard>
          <TintedCard>
            <h4 className="mb-2 text-xl font-heading font-semibold">Наука, ориентированная на человека</h4>
            <p className="text-sm text-foreground/80">
              Более длинные и здоровые жизненные циклы человека достигаются благодаря
              фундаментальным исследованиям в области биологии и химии.
            </p>
          </TintedCard>
        </section>

        {/* Form elements */}
        <section className="space-y-4">
          <label htmlFor="email" className="block text-sm font-medium">
            Адрес электронной почты
          </label>
          <input
            id="email"
            type="email"
            placeholder="ваш@пример.ком"
            className="w-full rounded-md border border-border bg-muted px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
          <button className="rounded-md bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground shadow-sm transition-colors hover:bg-secondary/90 focus:outline-none">
            Подписаться
          </button>
        </section>
      </div>
    </main>
  )
}