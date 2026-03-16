import { BookOpen, Library, GraduationCap, Award, FileText, Globe } from 'lucide-react'
import { useScrollRevealGroup } from '../hooks/useScrollReveal'

const SERVICES = [
  { icon: BookOpen, title: 'Lisans Tezi', desc: '30-40 sayfa kapsaminda, lisans duzeyinde akademik standartlara uygun tez hazirlama.', tag: 'Populer', color: 'from-indigo-500 to-violet-500' },
  { icon: Library, title: 'Yuksek Lisans (Tezsiz)', desc: '50-60 sayfa, donem projesi formatinda yuksek lisans duzeyinde akademik calisma.', color: 'from-violet-500 to-purple-500' },
  { icon: GraduationCap, title: 'Yuksek Lisans (Tezli)', desc: '80-100 sayfa, arastirma bazli, savunmaya hazir kapsamli tez calismasi.', tag: 'En Cok Tercih', color: 'from-purple-500 to-fuchsia-500' },
  { icon: Award, title: 'Doktora Tezi', desc: '100+ sayfa, ozgun arastirma ve katki iceren doktora duzeyinde akademik eser.', color: 'from-fuchsia-500 to-pink-500' },
  { icon: FileText, title: 'Uzmanlik Tezi', desc: 'Tip ve saglik bilimleri alaninda uzmanlik duzeyinde tez hazirlama hizmeti.', color: 'from-pink-500 to-rose-500' },
  { icon: Globe, title: 'Uluslararasi Makale', desc: 'SCI, SSCI indeksli dergilere uygun, Ingilizce akademik makale yazimi.', color: 'from-rose-500 to-orange-500' },
]

export default function Services() {
  const containerRef = useScrollRevealGroup()

  return (
    <section id="hizmetler" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/15 text-violet-300 text-xs font-semibold uppercase tracking-wider mb-4">
            Hizmetlerimiz
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">
            Her Akademik Seviye Icin
            <br />
            <span className="gradient-text">Kapsamli Cozumler</span>
          </h2>
        </div>

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => (
            <div
              key={service.title}
              data-reveal={i}
              className="opacity-0 group relative p-8 bg-bg-card border border-border rounded-2xl
                hover:bg-bg-card-hover hover:border-border-light hover:-translate-y-1
                transition-all duration-300 cursor-default"
            >
              {service.tag && (
                <span className="absolute top-5 right-5 px-3 py-1 rounded-full bg-gradient-to-r from-violet-500 to-pink-500 text-[11px] font-bold text-white">
                  {service.tag}
                </span>
              )}
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} p-[1px] mb-5`}>
                <div className="w-full h-full rounded-xl bg-bg-card flex items-center justify-center text-violet-400 group-hover:text-violet-300 transition-colors">
                  <service.icon size={22} />
                </div>
              </div>
              <h3 className="text-lg font-bold mb-2">{service.title}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
