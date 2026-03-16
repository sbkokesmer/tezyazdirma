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
          <span className="inline-block px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/15 text-violet-300 text-xs font-semibold uppercase tracking-wider mb-4">
            Iletisim
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">
            Hemen <span className="gradient-text">Bize Ulasin</span>
          </h2>
          <p className="text-zinc-400 mt-3">Sorulariniz mi var? 7/24 destek ekibimizle iletisime gecin.</p>
        </div>

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {CHANNELS.map((ch, i) => (
            <div
              key={ch.title}
              data-reveal={i}
              className="opacity-0 text-center p-8 bg-bg-card border border-border rounded-2xl
                hover:border-primary hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-violet-500/10 flex items-center justify-center text-primary mx-auto mb-4">
                <ch.icon size={24} />
              </div>
              <h3 className="text-base font-bold mb-1">{ch.title}</h3>
              <p className="text-sm text-zinc-400">{ch.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
