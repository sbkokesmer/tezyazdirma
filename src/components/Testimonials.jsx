import { Star } from 'lucide-react'
import { useScrollRevealGroup } from '../hooks/useScrollReveal'

const REVIEWS = [
  {
    name: 'Ayse K.',
    initials: 'AK',
    role: 'Yuksek Lisans - Sosyal Bilimler',
    stars: 5,
    text: 'Yuksek lisans tezimi cok kisa surede ve akademik standartlara tam uygun sekilde teslim ettiler. Danismanim cok begendi.',
  },
  {
    name: 'Mehmet Y.',
    initials: 'MY',
    role: 'Doktora - Egitim Bilimleri',
    stars: 5,
    text: 'Doktora tezimde istatistik analizler mukemmeldi. Her asamada bilgilendirildim, surec cok seffaf ilerledi.',
  },
  {
    name: 'Selin O.',
    initials: 'SO',
    role: 'Makale - Muhendislik',
    stars: 4,
    text: 'Ingilizce makalemi uluslararasi dergiye kabul ettirdik. Dil kalitesi ve akademik duzey gercekten profesyoneldi.',
  },
]

export default function Testimonials() {
  const containerRef = useScrollRevealGroup()

  return (
    <section id="yorumlar" className="py-24 bg-bg-alt">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/15 text-violet-300 text-xs font-semibold uppercase tracking-wider mb-4">
            Musteri Yorumlari
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">
            Ogrencilerimiz <span className="gradient-text">Ne Diyor?</span>
          </h2>
        </div>

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {REVIEWS.map((review, i) => (
            <div
              key={review.name}
              data-reveal={i}
              className="opacity-0 p-8 bg-bg-card border border-border rounded-2xl
                hover:border-border-light hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    size={16}
                    className={j < review.stars ? 'text-amber-400 fill-amber-400' : 'text-zinc-600'}
                  />
                ))}
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed italic mb-6">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-pink-500 flex items-center justify-center text-xs font-bold text-white flex-shrink-0">
                  {review.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold">{review.name}</div>
                  <div className="text-xs text-zinc-500">{review.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
