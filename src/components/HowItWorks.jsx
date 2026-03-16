import { ClipboardList, UserCheck, PenTool, PackageCheck } from 'lucide-react'
import { useScrollRevealGroup } from '../hooks/useScrollReveal'

const STEPS = [
  {
    icon: ClipboardList,
    num: '01',
    title: 'Bilgileri Girin',
    desc: 'Tez turu, dil, alan ve sayfa sayisi bilgilerinizi girerek aninda fiyat teklifi alin.',
  },
  {
    icon: UserCheck,
    num: '02',
    title: 'Uzman Eslesmesi',
    desc: 'Alaniniza uygun en nitelikli akademisyen ile eslestirilirsiniz.',
  },
  {
    icon: PenTool,
    num: '03',
    title: 'Yazim Sureci',
    desc: 'Bolum bolum ilerleme raporlari ile tezinizin yazim surecini takip edin.',
  },
  {
    icon: PackageCheck,
    num: '04',
    title: 'Teslimat',
    desc: 'Turnitin raporu ile birlikte tezinizi teslim alin, sinirsiz revizyon hakki sizde.',
  },
]

export default function HowItWorks() {
  const containerRef = useScrollRevealGroup()

  return (
    <section id="nasil-calisir" className="py-24 bg-bg-alt">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-md bg-primary/10 border border-primary/15 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
            Surec
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Sadece <span className="gradient-text">4 Adimda</span> Tezinize Kavusun
          </h2>
        </div>

        <div ref={containerRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {STEPS.map((step, i) => (
            <div
              key={step.num}
              data-delay={i}
              className="reveal-item relative p-7 bg-bg-card border border-border rounded-xl text-center
                hover:border-primary/40 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Connector line */}
              {i < STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 border-t border-dashed border-border-light" />
              )}

              <div className="text-3xl font-black gradient-text leading-none mb-4">{step.num}</div>
              <div className="w-11 h-11 rounded-lg bg-emerald-900/20 border border-emerald-800/30 flex items-center justify-center text-emerald-400 mx-auto mb-4">
                <step.icon size={20} strokeWidth={1.5} />
              </div>
              <h3 className="text-base font-bold text-white mb-2">{step.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
