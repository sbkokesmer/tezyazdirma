import { BookOpen, Library, GraduationCap, Award, FileText, Globe } from 'lucide-react'
import { useScrollRevealGroup } from '../hooks/useScrollReveal'

const SERVICES = [
  {
    icon: BookOpen,
    title: 'Lisans Tezi',
    desc: '30-40 sayfa kapsaminda, lisans duzeyinde akademik standartlara uygun tez hazirlama. Literatur taramasi ve arastirma yontemi dahil.',
    tag: 'Populer',
  },
  {
    icon: Library,
    title: 'Yuksek Lisans (Tezsiz)',
    desc: '50-60 sayfa, donem projesi formatinda yuksek lisans duzeyinde akademik calisma. Alan arastirmasi ve veri analizi destegi.',
  },
  {
    icon: GraduationCap,
    title: 'Yuksek Lisans (Tezli)',
    desc: '80-100 sayfa, arastirma bazli, savunmaya hazir kapsamli tez calismasi. Ozgun arastirma tasarimi ve metodoloji.',
    tag: 'En Cok Tercih',
  },
  {
    icon: Award,
    title: 'Doktora Tezi',
    desc: '100+ sayfa, ozgun arastirma ve katki iceren doktora duzeyinde akademik eser. Uluslararasi standartlarda bilimsel calisma.',
  },
  {
    icon: FileText,
    title: 'Uzmanlik Tezi',
    desc: 'Tip ve saglik bilimleri alaninda uzmanlik duzeyinde tez hazirlama. Klinik arastirma ve istatistiksel analiz destegi.',
  },
  {
    icon: Globe,
    title: 'Uluslararasi Makale',
    desc: 'SCI, SSCI indeksli dergilere uygun, Ingilizce akademik makale yazimi. Dergi secimi ve yayin sureci danismanligi.',
  },
]

export default function Services() {
  const containerRef = useScrollRevealGroup()

  return (
    <section id="hizmetler" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-md bg-primary/10 border border-primary/15 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
            Hizmetlerimiz
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Her Akademik Seviye Icin
            <br />
            <span className="gradient-text">Kapsamli Cozumler</span>
          </h2>
        </div>

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((service, i) => (
            <div
              key={service.title}
              data-delay={i}
              className="reveal-item group relative p-7 bg-bg-card border border-border rounded-xl
                hover:bg-bg-card-hover hover:border-border-light hover:-translate-y-1
                transition-all duration-300"
            >
              {service.tag && (
                <span className="absolute top-5 right-5 px-2.5 py-0.5 rounded-md bg-primary/15 text-primary text-[11px] font-bold uppercase tracking-wide">
                  {service.tag}
                </span>
              )}
              <div className="w-11 h-11 rounded-lg bg-primary/10 border border-primary/15 flex items-center justify-center text-primary mb-5 group-hover:bg-primary/15 transition-colors">
                <service.icon size={20} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
