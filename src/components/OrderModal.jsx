import { useState } from 'react'
import { X, CheckCircle2 } from 'lucide-react'

export default function OrderModal({ open, onClose, result, form }) {
  const [step, setStep] = useState(1)
  const [fields, setFields] = useState({ name: '', email: '', phone: '', topic: '' })
  const [orderRef, setOrderRef] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = () => {
    if (!fields.name || !fields.email || !fields.phone) {
      setError('Lutfen tum zorunlu alanlari doldurun.')
      return
    }
    setError('')
    const ref = 'AKX-' + Date.now().toString(36).toUpperCase().slice(-6) + Math.random().toString(36).slice(2, 4).toUpperCase()
    setOrderRef(ref)
    setStep(2)
  }

  const handleClose = () => {
    onClose()
    setTimeout(() => {
      setStep(1)
      setFields({ name: '', email: '', phone: '', topic: '' })
      setError('')
    }, 300)
  }

  if (!open) return null

  const formatPrice = (n) => `₺${n?.toLocaleString('tr-TR') || 0}`

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-black/70 backdrop-blur-sm animate-[fadeIn_0.2s_ease]"
      onClick={e => e.target === e.currentTarget && handleClose()}
    >
      <div className="bg-bg-card border border-border rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto relative">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-bg border-none text-zinc-400 hover:text-zinc-50 hover:bg-border flex items-center justify-center cursor-pointer transition-all"
        >
          <X size={18} />
        </button>

        {step === 1 ? (
          <div className="p-8">
            <h2 className="text-2xl font-bold mb-1">Siparis Bilgileri</h2>
            <p className="text-sm text-zinc-400 mb-6">Siparisinizi tamamlamak icin bilgilerinizi girin.</p>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-1.5">Ad Soyad *</label>
                <input
                  type="text"
                  placeholder="Adiniz Soyadiniz"
                  value={fields.name}
                  onChange={e => setFields(p => ({ ...p, name: e.target.value }))}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1.5">E-posta *</label>
                <input
                  type="email"
                  placeholder="ornek@email.com"
                  value={fields.email}
                  onChange={e => setFields(p => ({ ...p, email: e.target.value }))}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1.5">Telefon *</label>
                <input
                  type="tel"
                  placeholder="05XX XXX XXXX"
                  value={fields.phone}
                  onChange={e => setFields(p => ({ ...p, phone: e.target.value }))}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1.5">Tez Konusu / Aciklama</label>
                <textarea
                  rows={3}
                  placeholder="Tez konunuzu veya varsa ozel isteklerinizi yazin..."
                  value={fields.topic}
                  onChange={e => setFields(p => ({ ...p, topic: e.target.value }))}
                  className="resize-y min-h-[80px]"
                />
              </div>
            </div>

            {/* Summary */}
            {result && (
              <div className="mt-6 p-4 bg-bg rounded-xl space-y-1.5 text-sm">
                {[
                  ['Tez Turu', result.typeName],
                  ['Dil', form?.language === 'turkce' ? 'Turkce' : 'Ingilizce'],
                  ['Sayfa', `${form?.pages} sayfa`],
                  ['Teslimat', `${result.deliveryDays} is gunu`],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between">
                    <span className="text-zinc-400">{k}</span>
                    <span className="font-medium">{v}</span>
                  </div>
                ))}
                {result.selectedExtras?.length > 0 && (
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Ek Hizmetler</span>
                    <span className="font-medium text-right">{result.selectedExtras.join(', ')}</span>
                  </div>
                )}
                <div className="flex justify-between border-t border-border pt-2 mt-2 text-base font-bold">
                  <span>Toplam</span>
                  <span className="gradient-text">{formatPrice(result.total)}</span>
                </div>
              </div>
            )}

            {error && (
              <p className="mt-4 text-sm text-red-400">{error}</p>
            )}

            <button
              onClick={handleSubmit}
              className="w-full mt-6 flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white cursor-pointer
                bg-gradient-to-r from-violet-500 to-pink-500 shadow-lg shadow-violet-500/25
                hover:-translate-y-0.5 transition-all"
            >
              Siparisi Onayla
            </button>
          </div>
        ) : (
          <div className="p-8 text-center">
            <div className="mb-6">
              <CheckCircle2 size={64} className="mx-auto text-emerald-400" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Talebiniz Alindi!</h2>
            <p className="text-zinc-400 mb-6 max-w-sm mx-auto">
              En kisa surede sizinle iletisime gececegiz. Siparis detaylariniz e-posta adresinize gonderilecektir.
            </p>
            <div className="inline-block px-5 py-2.5 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-400 font-medium mb-6">
              Siparis No: <strong>{orderRef}</strong>
            </div>
            <br />
            <button
              onClick={handleClose}
              className="mt-2 px-8 py-3 rounded-xl text-sm font-semibold text-white cursor-pointer
                bg-gradient-to-r from-violet-500 to-pink-500 transition-all hover:-translate-y-0.5"
            >
              Tamam
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
