import { ArrowRight, Shield, CheckCircle, BookOpen } from 'lucide-react'

const FEATURES = [
  'Turnitin Raporlu',
  'Sinirsiz Revizyon',
  'Gizlilik Garantisi',
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px] animate-float" />
        <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full bg-emerald-800/10 blur-[100px] animate-float-reverse" />
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-8">
            <Shield size={14} />
            %100 Orijinal Akademik Calisma
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-white" style={{ fontFamily: 'var(--font-display)' }}>
            Akademik Basariniz
            <br />
            Icin <span className="gradient-text">Profesyonel</span>
            <br />
            Tez Destegi
          </h1>

          <p className="mt-6 text-lg text-slate-400 max-w-xl leading-relaxed">
            Alaninda uzman akademisyenlerle, lisanstan doktoraya kadar her seviyede tez yazim hizmeti. Zamaninda teslimat, titiz akademik standartlar.
          </p>

          {/* Feature chips */}
          <div className="flex flex-wrap gap-3 mt-8">
            {FEATURES.map(f => (
              <div key={f} className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-emerald-900/20 border border-emerald-800/30 text-emerald-400 text-xs font-medium">
                <CheckCircle size={12} />
                {f}
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mt-10">
            <a
              href="#fiyat"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg text-base font-semibold no-underline
                bg-primary text-slate-900 hover:bg-primary-hover transition-all shadow-lg shadow-primary/20"
            >
              Fiyat Hesapla
              <ArrowRight size={18} />
            </a>
            <a
              href="#nasil-calisir"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg text-base font-semibold text-slate-200 no-underline
                bg-transparent border border-border hover:bg-bg-card hover:border-border-light transition-all"
            >
              Nasil Calisir?
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-16 max-w-md">
            {[
              { value: '2.500+', label: 'Tamamlanan Tez' },
              { value: '%98', label: 'Memnuniyet' },
              { value: '150+', label: 'Akademisyen' },
            ].map(stat => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                <div className="text-xs text-slate-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
