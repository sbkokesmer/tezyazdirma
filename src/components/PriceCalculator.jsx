import { useState, useMemo } from 'react'
import { ArrowRight, Clock, CheckCircle2 } from 'lucide-react'
import { THESIS_TYPES, FIELDS, EXTRAS, calculatePrice } from '../data/pricing'
import OrderModal from './OrderModal'

export default function PriceCalculator() {
  const [form, setForm] = useState({
    type: '',
    language: 'turkce',
    field: '',
    pages: 80,
    extras: ['turnitin'],
  })
  const [showResult, setShowResult] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)

  const selectedType = THESIS_TYPES.find(t => t.value === form.type)

  const toggleExtra = (id) => {
    setForm(prev => ({
      ...prev,
      extras: prev.extras.includes(id)
        ? prev.extras.filter(e => e !== id)
        : [...prev.extras, id],
    }))
  }

  const result = useMemo(() => {
    if (!form.type || !form.field) return null
    return calculatePrice(form)
  }, [form])

  const handleCalculate = () => {
    if (!form.type || !form.field) return
    setShowResult(true)
  }

  const formatPrice = (n) => `₺${n.toLocaleString('tr-TR')}`

  return (
    <section id="fiyat" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/15 text-violet-300 text-xs font-semibold uppercase tracking-wider mb-4">
            Fiyatlandirma
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">
            Tez Yazim <span className="gradient-text">Fiyat Hesaplama</span>
          </h2>
          <p className="text-zinc-400 mt-3 max-w-md mx-auto">
            Asagidaki formu doldurarak teziniz icin aninda fiyat teklifi alin.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Form */}
          <div className="space-y-6">
            {/* Tez Turu */}
            <div>
              <label className="block text-sm font-semibold mb-2">Tez Turu</label>
              <select
                value={form.type}
                onChange={e => setForm(prev => ({ ...prev, type: e.target.value }))}
              >
                <option value="">Seciniz...</option>
                {THESIS_TYPES.map(t => (
                  <option key={t.value} value={t.value}>{t.label}</option>
                ))}
              </select>
            </div>

            {/* Dil */}
            <div>
              <label className="block text-sm font-semibold mb-2">Tez Dili</label>
              <div className="grid grid-cols-2 gap-3">
                {['turkce', 'ingilizce'].map(lang => (
                  <label
                    key={lang}
                    className={`flex items-center gap-3 px-4 py-3.5 rounded-xl border cursor-pointer transition-all ${
                      form.language === lang
                        ? 'border-primary bg-violet-500/5'
                        : 'border-border bg-bg-card hover:border-border-light'
                    }`}
                  >
                    <div className={`w-4.5 h-4.5 rounded-full border-2 flex items-center justify-center transition-all ${
                      form.language === lang ? 'border-primary' : 'border-border-light'
                    }`}>
                      {form.language === lang && (
                        <div className="w-2 h-2 rounded-full bg-primary" />
                      )}
                    </div>
                    <span className="text-sm font-medium">{lang === 'turkce' ? 'Turkce' : 'Ingilizce'}</span>
                    <input
                      type="radio"
                      name="lang"
                      value={lang}
                      checked={form.language === lang}
                      onChange={e => setForm(prev => ({ ...prev, language: e.target.value }))}
                      className="sr-only"
                    />
                  </label>
                ))}
              </div>
            </div>

            {/* Alan */}
            <div>
              <label className="block text-sm font-semibold mb-2">Akademik Alan</label>
              <select
                value={form.field}
                onChange={e => setForm(prev => ({ ...prev, field: e.target.value }))}
              >
                <option value="">Seciniz...</option>
                {FIELDS.map(f => (
                  <option key={f.value} value={f.value}>{f.label}</option>
                ))}
              </select>
            </div>

            {/* Sayfa Sayisi */}
            <div>
              <label className="block text-sm font-semibold mb-2">Sayfa Sayisi</label>
              <input
                type="range"
                min={10}
                max={300}
                step={5}
                value={form.pages}
                onChange={e => setForm(prev => ({ ...prev, pages: Number(e.target.value) }))}
              />
              <div className="flex justify-between mt-2">
                <span className="text-base font-bold text-primary">{form.pages} sayfa</span>
                {selectedType && (
                  <span className="text-xs text-zinc-500">Onerilen: {selectedType.pages} sayfa</span>
                )}
              </div>
            </div>

            {/* Ek Hizmetler */}
            <div>
              <label className="block text-sm font-semibold mb-2">Ek Hizmetler</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {EXTRAS.map(extra => (
                  <label
                    key={extra.id}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl border cursor-pointer transition-all ${
                      form.extras.includes(extra.id)
                        ? 'border-primary bg-violet-500/5'
                        : 'border-border bg-bg-card hover:border-border-light'
                    }`}
                  >
                    <div className={`w-4.5 h-4.5 rounded-md border-2 flex items-center justify-center flex-shrink-0 transition-all ${
                      form.extras.includes(extra.id) ? 'bg-primary border-primary' : 'border-border-light'
                    }`}>
                      {form.extras.includes(extra.id) && (
                        <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                          <path d="M2 6l3 3 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                    </div>
                    <div>
                      <div className="text-sm font-semibold leading-tight">{extra.label}</div>
                      <div className="text-xs text-zinc-500">{extra.desc}</div>
                    </div>
                    <input
                      type="checkbox"
                      checked={form.extras.includes(extra.id)}
                      onChange={() => toggleExtra(extra.id)}
                      className="sr-only"
                    />
                  </label>
                ))}
              </div>
            </div>

            {/* Hesapla button */}
            <button
              onClick={handleCalculate}
              disabled={!form.type || !form.field}
              className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white
                bg-gradient-to-r from-violet-500 to-pink-500 shadow-lg shadow-violet-500/25
                hover:-translate-y-0.5 hover:shadow-xl hover:shadow-violet-500/30 transition-all
                disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:translate-y-0 cursor-pointer"
            >
              Fiyat Hesapla
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Result panel */}
          <div className="bg-bg-card border border-border rounded-2xl p-8 flex flex-col justify-center items-center min-h-[420px] lg:sticky lg:top-24">
            {!showResult || !result ? (
              <div className="text-center text-zinc-600">
                <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="mx-auto mb-4 opacity-40">
                  <path d="M9 7h6M9 11h6M9 15h4M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z"/>
                </svg>
                <p className="text-sm text-zinc-500">Formu doldurup &quot;Fiyat Hesapla&quot; butonuna tiklayin</p>
              </div>
            ) : (
              <div className="w-full space-y-6">
                {/* Header */}
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold mb-2">
                    Fiyat Teklifi
                  </span>
                  <h3 className="text-xl font-bold">{result.typeName}</h3>
                </div>

                {/* Price */}
                <div className="bg-violet-500/5 border border-violet-500/15 rounded-xl p-6 text-center">
                  <div className="text-xs text-zinc-500 uppercase tracking-wider mb-1">Toplam Fiyat</div>
                  <div className="text-4xl font-black gradient-text">{formatPrice(result.total)}</div>
                  <div className="text-sm text-zinc-400 mt-1">sayfa basi {formatPrice(result.perPage)}</div>
                </div>

                {/* Details */}
                <div className="space-y-2">
                  {[
                    ['Tez Turu', result.typeName],
                    ['Dil', form.language === 'turkce' ? 'Turkce' : 'Ingilizce'],
                    ['Alan', result.fieldName],
                    ['Sayfa', `${form.pages} sayfa`],
                    ['Temel Ucret', formatPrice(result.baseTotal)],
                    ...(result.extrasTotal > 0 ? [['Ek Hizmetler', `+${formatPrice(result.extrasTotal)}`]] : []),
                    ...(result.rushFee > 0 ? [['Acil Teslimat (%40)', `+${formatPrice(result.rushFee)}`]] : []),
                  ].map(([label, value]) => (
                    <div key={label} className="flex justify-between text-sm py-1.5 border-b border-border last:border-0">
                      <span className="text-zinc-400">{label}</span>
                      <span className="font-semibold">{value}</span>
                    </div>
                  ))}
                </div>

                {/* Timeline */}
                <div className="flex items-center gap-2 px-4 py-3 bg-blue-500/5 border border-blue-500/15 rounded-xl text-blue-400 text-sm">
                  <Clock size={16} />
                  <span>Tahmini teslimat: <strong>{result.deliveryDays} is gunu</strong></span>
                </div>

                {/* Order button */}
                <button
                  onClick={() => setModalOpen(true)}
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white cursor-pointer
                    bg-gradient-to-r from-violet-500 to-pink-500 shadow-lg shadow-violet-500/25
                    hover:-translate-y-0.5 hover:shadow-xl transition-all"
                >
                  Siparis Ver
                  <ArrowRight size={18} />
                </button>

                <p className="text-[11px] text-zinc-600 text-center">
                  * Fiyatlar tahminidir, kesin fiyat konu detayina gore degisebilir.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <OrderModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        result={result}
        form={form}
      />
    </section>
  )
}
