import { Phone, Mail, MessageCircle } from 'lucide-react'
import { useScrollRevealGroup } from '../hooks/useScrollReveal'

const CHANNELS = [
  { icon: Phone, title: 'Telefon', value: '+90 (212) 555 0199' },
  { icon: Mail, title: 'E-posta', value: 'info@akademix.com.tr' },
  { icon: MessageCircle, title: 'WhatsApp', value: '+90 (532) 555 0199' },
]

export default function Contact() {
  const containerRef = useScrollRevealGroup()

  return (
    <section id="iletisim" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-md bg-primary/10 border border-primary/15 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
            Iletisim
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Hemen <span className="gradient-text">Bize Ulasin</span>
          </h2>
          <p className="text-slate-400 mt-3">Sorulariniz mi var? 7/24 destek ekibimizle iletisime gecin.</p>
        </div>

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-3xl mx-auto">
          {CHANNELS.map((ch, i) => (
            <div
              key={ch.title}
              data-delay={i}
              className="reveal-item text-center p-7 bg-bg-card border border-border rounded-xl
                hover:border-primary/40 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/15 flex items-center justify-center text-primary mx-auto mb-4">
                <ch.icon size={22} strokeWidth={1.5} />
              </div>
              <h3 className="text-base font-bold text-white mb-1">{ch.title}</h3>
              <p className="text-sm text-slate-400">{ch.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
