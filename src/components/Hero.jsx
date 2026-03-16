import { ArrowRight, Shield, Clock, Users } from 'lucide-react'

const STATS = [
  { icon: Shield, value: '2.500+', label: 'Tamamlanan Tez' },
  { icon: Users, value: '98%', label: 'Musteri Memnuniyeti' },
  { icon: Clock, value: '150+', label: 'Uzman Akademisyen' },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-48 -right-24 w-[600px] h-[600px] rounded-full bg-violet-600/15 blur-[120px] animate-float" />
        <div className="absolute -bottom-24 -left-24 w-[400px] h-[400px] rounded-full bg-pink-500/12 blur-[100px] animate-float-reverse" />
        <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] rounded-full bg-indigo-500/10 blur-[80px] animate-float-slow" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-sm font-semibold mb-8">
            <Shield size={14} />
            %100 Orijinal &bull; Turnitin Raporlu
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
            Akademik Basariniz
            <br />
            Icin <span className="gradient-text">Profesyonel</span>
            <br />
            Tez Destegi
          </h1>

          <p className="mt-6 text-lg text-zinc-400 max-w-xl leading-relaxed">
            Alaninda uzman akademisyenlerle, lisanstan doktoraya kadar her seviyede tez yazim hizmeti. Zamaninda teslimat, sinirsiz revizyon garantisi.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mt-10">
            <a
              href="#fiyat"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white no-underline
                bg-gradient-to-r from-violet-500 to-pink-500 shadow-lg shadow-violet-500/25
                hover:-translate-y-0.5 hover:shadow-xl hover:shadow-violet-500/30 transition-all"
            >
              Fiyat Hesapla
              <ArrowRight size={18} />
            </a>
            <a
              href="#nasil-calisir"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-zinc-50 no-underline
                bg-transparent border border-border-light hover:bg-bg-card hover:border-zinc-500 transition-all"
            >
              Nasil Calisir?
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap items-center gap-8 mt-16">
            {STATS.map((stat, i) => (
              <div key={stat.label} className="flex items-center gap-3">
                {i > 0 && <div className="hidden sm:block w-px h-10 bg-border -ml-4 mr-0" />}
                <div className="w-10 h-10 rounded-lg bg-violet-500/10 flex items-center justify-center text-violet-400">
                  <stat.icon size={18} />
                </div>
                <div>
                  <div className="text-xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-xs text-zinc-500">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
