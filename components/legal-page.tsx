import { PageHero } from '@/components/page-hero'

type LegalSection = {
  heading: string
  body: string[]
  list?: string[]
}

type LegalPageProps = {
  eyebrow?: string
  title: string
  subtitle: string
  intro: string
  lastUpdated: string
  sections: LegalSection[]
}

export function LegalPage({
  eyebrow = 'Legal',
  title,
  subtitle,
  intro,
  lastUpdated,
  sections,
}: LegalPageProps) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} subtitle={subtitle} />

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-border bg-card p-8 shadow-sm sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-green">
            Last updated: {lastUpdated}
          </p>
          <p className="mt-4 text-base leading-8 text-muted-foreground">{intro}</p>

          <div className="mt-8 space-y-8">
            {sections.map((section, index) => (
              <div key={`${section.heading}-${index}`}>
                <h2 className="text-xl font-bold tracking-tight text-navy">{section.heading}</h2>
                <div className="mt-3 space-y-3 text-sm leading-7 text-muted-foreground">
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  {section.list && (
                    <ul className="list-disc space-y-2 pl-5">
                      {section.list.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
