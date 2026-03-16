export const THESIS_TYPES = [
  { value: 'lisans', label: 'Lisans Tezi', pages: '30-40', delivery: 21 },
  { value: 'tezsiz_yl', label: 'Yuksek Lisans (Tezsiz)', pages: '50-60', delivery: 30 },
  { value: 'tezli_yl', label: 'Yuksek Lisans (Tezli)', pages: '80-100', delivery: 45 },
  { value: 'doktora', label: 'Doktora Tezi', pages: '100-200', delivery: 75 },
  { value: 'uzmanlik', label: 'Uzmanlik Tezi', pages: '100-150', delivery: 60 },
  { value: 'makale', label: 'Uluslararasi Makale', pages: '15-25', delivery: 20 },
]

export const FIELDS = [
  { value: 'sosyal', label: 'Sosyal Bilimler', multiplier: 1.0 },
  { value: 'saglik', label: 'Saglik Bilimleri', multiplier: 1.25 },
  { value: 'hukuk', label: 'Hukuk', multiplier: 1.15 },
  { value: 'ilahiyat', label: 'Ilahiyat', multiplier: 1.0 },
  { value: 'muhendislik', label: 'Muhendislik', multiplier: 1.2 },
  { value: 'egitim', label: 'Egitim Bilimleri', multiplier: 1.0 },
  { value: 'fen', label: 'Fen Bilimleri', multiplier: 1.15 },
  { value: 'diger', label: 'Diger', multiplier: 1.05 },
]

export const BASE_PRICES = {
  lisans:    { turkce: 150, ingilizce: 325 },
  tezsiz_yl: { turkce: 200, ingilizce: 400 },
  tezli_yl:  { turkce: 250, ingilizce: 500 },
  doktora:   { turkce: 350, ingilizce: 650 },
  uzmanlik:  { turkce: 350, ingilizce: 650 },
  makale:    { turkce: 400, ingilizce: 700 },
}

export const EXTRAS = [
  { id: 'turnitin', label: 'Turnitin Raporu', desc: 'Intihal tespit raporu', price: 500, default: true },
  { id: 'istatistik', label: 'Istatistik Analiz', desc: 'SPSS / R / Python analiz', price: 2500 },
  { id: 'sunum', label: 'Sunum Hazirlama', desc: 'PowerPoint sunumu', price: 1000 },
  { id: 'acil', label: 'Acil Teslimat', desc: 'Sureyi %50 kisalt', price: 0, isPercentage: true, rate: 0.4 },
]

export function calculatePrice({ type, language, field, pages, extras }) {
  const basePerPage = BASE_PRICES[type]?.[language] || 0
  const fieldData = FIELDS.find(f => f.value === field)
  const multiplier = fieldData?.multiplier || 1
  const typeData = THESIS_TYPES.find(t => t.value === type)

  const baseTotal = Math.round(basePerPage * multiplier * pages)

  let extrasTotal = 0
  const selectedExtras = []

  extras.forEach(extraId => {
    const extra = EXTRAS.find(e => e.id === extraId)
    if (!extra) return
    if (extra.id === 'acil') return
    extrasTotal += extra.price
    selectedExtras.push(extra.label)
  })

  const subtotal = baseTotal + extrasTotal
  let rushFee = 0

  if (extras.includes('acil')) {
    rushFee = Math.round(subtotal * 0.4)
    selectedExtras.push('Acil Teslimat')
  }

  const total = subtotal + rushFee
  const perPage = Math.round(total / pages)

  let deliveryDays = typeData?.delivery || 30
  if (extras.includes('acil')) deliveryDays = Math.ceil(deliveryDays * 0.5)

  return {
    baseTotal,
    extrasTotal,
    rushFee,
    total,
    perPage,
    deliveryDays,
    selectedExtras,
    typeName: typeData?.label || '',
    fieldName: fieldData?.label || '',
  }
}
