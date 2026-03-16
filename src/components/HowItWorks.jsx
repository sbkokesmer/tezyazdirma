import { ClipboardList, UserCheck, PenTool, PackageCheck, ArrowRight } from 'lucide-react'
import { useScrollRevealGroup } from '../hooks/useScrollReveal'

const STEPS = [
  { icon: ClipboardList, num: '01', title: 'Bilgileri Girin', desc: 'Tez turu, dil, alan ve sayfa sayisi bilgilerinizi girerek aninda fiyat teklifi alin.' },
  { icon: UserCheck, num: '02', title: 'Uzman Eslesmesi', desc: 'Alaniniza uygun en nitelikli akademisyen ile eslestirilirsiniz.' },
  { icon: PenTool, num: '03', title: 'Yazim Sureci', desc: 'Bolum bolum ilerleme raporlari ile tezinizin yazim surecini takip edin.' },
  { icon: PackageCheck, num: '04', title: 'Teslimat', desc: 'Turnitin raporu ile birlikte tezinizi teslim alin, sinirsiz revizyon hakki sizde.' },
]

export default function HowItWorks() {
  const containerRef = useScrollRevealGroup()

  return (
    <section id="nasil-calisir" className="py-24 bg-bg-alt">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/15 text-violet-300 text-xs font-semibold uppercase tracking-wider mb-4">
            Surec
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">
            Sadece <span className="gradient-text">4 Adimda</span>
            <br />
            Tezinize Kavusun
          </h2>
        </div>

        <div ref={containerRef} className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-3">
          {STEPS.map((step, i) => (
            <div key={step.num} className="flex items-center gap-3">
              <div
                data-reveal={i}
                className="opacity-0 flex-1 min-w-[220px] max-w-[280px] p-8 bg-bg-card border border-border rounded-2xl text-center
                  hover:border-primary hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-4xl font-black gradient-text leading-none mb-4">{step.num}</div>
                <div className="w-11 h-11 rounded-xl bg-violet-500/10 flex items-center justify-center text-violet-400 mx-auto mb-4">
                  <step.icon size={20} />
                </div>
                <h3 className="text-base font-bold mb-2">{step.title}</h3>
                <p className="text-sm text-zinc-400">{step.desc}</p>
              </div>
              {i < STEPS.length - 1 && (
                <div className="hidden lg:block text-zinc-600">
                  <ArrowRight size={24} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
