import { useState, useMemo } from 'react'
import { ArrowRight, Clock } from 'lucide-react'
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
          <span className="inline-block px-4 py-1.5 rounded-md bg-primary/10 border border-primary/15 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
            Fiyatlandirma
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Tez Yazim <span className="gradient-text">Fiyat Hesaplama</span>
          </h2>
          <p className="text-slate-400 mt-3 max-w-md mx-auto">
            Formu doldurarak teziniz icin aninda fiyat teklifi alin.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Form */}
          <div className="space-y-6">
            {/* Tez Turu */}
            <div>
              <label className="block text-sm font-semibold text-slate-300 mb-2">Tez Turu</label>
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
              <label className="block text-sm font-semibold text-slate-300 mb-2">Tez Dili</label>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { value: 'turkce', label: 'Turkce' },
                  { value: 'ingilizce', label: 'Ingilizce' },
                ].map(lang => (
                  <label
                    key={lang.value}
                    className={`flex items-center gap-3 px-4 py-3.5 rounded-lg border cursor-pointer transition-all ${
                      form.language === lang.value
                        ? 'border-primary bg-primary/5'
                        : 'border-border bg-bg-card hover:border-border-light'
                    }`}
                  >
                    <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all ${
                      form.language === lang.value ? 'border-primary' : 'border-slate-600'
                    }`}>
                      {form.language === lang.value && (
                        <div className="w-2 h-2 rounded-full bg-primary" />
                      )}
                    </div>
                    <span className="text-sm font-medium text-slate-200">{lang.label}</span>
                    <input
                      type="radio"
                      name="lang"
                      value={lang.value}
                      checked={form.language === lang.value}
                      onChange={e => setForm(prev => ({ ...prev, language: e.target.value }))}
                      className="sr-only"
                    />
                  </label>
                ))}
              </div>
            </div>

            {/* Alan */}
            <div>
              <label className="block text-sm font-semibold text-slate-300 mb-2">Akademik Alan</label>
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
              <label className="block text-sm font-semibold text-slate-300 mb-2">Sayfa Sayisi</label>
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
                  <span className="text-xs text-slate-500">Onerilen: {selectedType.pages} sayfa</span>
                )}
              </div>
            </div>

            {/* Ek Hizmetler */}
            <div>
              <label className="block text-sm font-semibold text-slate-300 mb-2">Ek Hizmetler</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {EXTRAS.map(extra => (
                  <label
                    key={extra.id}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg border cursor-pointer transition-all ${
                      form.extras.includes(extra.id)
                        ? 'border-primary bg-primary/5'
                        : 'border-border bg-bg-card hover:border-border-light'
                    }`}
                  >
                    <div className={`w-4 h-4 rounded flex items-center justify-center flex-shrink-0 border-2 transition-all ${
                      form.extras.includes(extra.id) ? 'bg-primary border-primary' : 'border-slate-600'
                    }`}>
                      {form.extras.includes(extra.id) && (
                        <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                          <path d="M2 6l3 3 5-5" stroke="#0a0f1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-200 leading-tight">{extra.label}</div>
                      <div className="text-xs text-slate-500">{extra.desc}</div>
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

            <button
              onClick={handleCalculate}
              disabled={!form.type || !form.field}
              className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-lg text-base font-semibold
                bg-primary text-slate-900 hover:bg-primary-hover transition-all shadow-lg shadow-primary/20
                disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:shadow-none cursor-pointer"
            >
              Fiyat Hesapla
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Result panel */}
          <div className="bg-bg-card border border-border rounded-xl p-8 flex flex-col justify-center items-center min-h-[420px] lg:sticky lg:top-24">
            {!showResult || !result ? (
              <div className="text-center">
                <div className="w-16 h-16 rounded-xl bg-border/50 flex items-center justify-center mx-auto mb-4">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-slate-600">
                    <path d="M9 7h6M9 11h6M9 15h4M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z"/>
                  </svg>
                </div>
                <p className="text-sm text-slate-500">Formu doldurup &quot;Fiyat Hesapla&quot;<br />butonuna tiklayin</p>
              </div>
            ) : (
              <div className="w-full space-y-5">
                <div>
                  <span className="inline-block px-2.5 py-0.5 rounded-md bg-emerald-900/30 border border-emerald-800/30 text-emerald-400 text-xs font-semibold mb-2">
                    Fiyat Teklifi
                  </span>
                  <h3 className="text-xl font-bold text-white">{result.typeName}</h3>
                </div>

                {/* Price */}
                <div className="bg-primary/5 border border-primary/15 rounded-lg p-6 text-center">
                  <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Toplam Fiyat</div>
                  <div className="text-4xl font-black gradient-text">{formatPrice(result.total)}</div>
                  <div className="text-sm text-slate-400 mt-1">sayfa basi {formatPrice(result.perPage)}</div>
                </div>

                {/* Details */}
                <div className="space-y-0">
                  {[
                    ['Tez Turu', result.typeName],
                    ['Dil', form.language === 'turkce' ? 'Turkce' : 'Ingilizce'],
                    ['Alan', result.fieldName],
                    ['Sayfa', `${form.pages} sayfa`],
                    ['Temel Ucret', formatPrice(result.baseTotal)],
                    ...(result.extrasTotal > 0 ? [['Ek Hizmetler', `+${formatPrice(result.extrasTotal)}`]] : []),
                    ...(result.rushFee > 0 ? [['Acil Teslimat (%40)', `+${formatPrice(result.rushFee)}`]] : []),
                  ].map(([label, value]) => (
                    <div key={label} className="flex justify-between text-sm py-2 border-b border-border last:border-0">
                      <span className="text-slate-400">{label}</span>
                      <span className="font-semibold text-slate-200">{value}</span>
                    </div>
                  ))}
                </div>

                {/* Timeline */}
                <div className="flex items-center gap-2 px-4 py-3 bg-blue-950/30 border border-blue-900/30 rounded-lg text-blue-300 text-sm">
                  <Clock size={16} />
                  <span>Tahmini teslimat: <strong>{result.deliveryDays} is gunu</strong></span>
                </div>

                <button
                  onClick={() => setModalOpen(true)}
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-lg text-base font-semibold cursor-pointer
                    bg-primary text-slate-900 hover:bg-primary-hover transition-all shadow-lg shadow-primary/20"
                >
                  Siparis Ver
                  <ArrowRight size={18} />
                </button>

                <p className="text-[11px] text-slate-600 text-center">
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
