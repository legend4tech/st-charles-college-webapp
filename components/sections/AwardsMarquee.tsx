const awards = [
  "Wole Soyinka Int'l Cultural Exchange — 1st Prize 2017",
  "Governor's Debate Championship — 3rd Prize 2019",
  "Anambra State Business Plan Competition — 1st Prize 2019",
  "Global MWEAAN Community Challenge — Finalist 2020 & 2021",
  "Onitsha City Board Games — 1st Prize 2021",
  "98% WAEC Pass Rate — Class of 2025",
  "Top School in Anambra State — Consistently",
  "Wole Soyinka Int'l Cultural Exchange — 1st Prize 2017",
  "Governor's Debate Championship — 3rd Prize 2019",
  "Anambra State Business Plan Competition — 1st Prize 2019",
  "Global MWEAAN Community Challenge — Finalist 2020 & 2021",
  "Onitsha City Board Games — 1st Prize 2021",
  "98% WAEC Pass Rate — Class of 2025",
  "Top School in Anambra State — Consistently",
]

export default function AwardsMarquee() {
  return (
    <section className="overflow-hidden border-y border-border bg-card py-4">
      <div className="flex animate-marquee gap-0 whitespace-nowrap">
        {awards.map((a, i) => (
          <div key={i} className="flex shrink-0 items-center gap-4 px-6">
            <span className="text-primary text-sm">★</span>
            <span className="font-mono-custom text-[11px] tracking-[0.15em] text-muted-foreground uppercase">{a}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
