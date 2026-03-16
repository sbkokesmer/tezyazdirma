import { GraduationCap } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-border pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <a href="#" className="flex items-center gap-2.5 text-xl font-extrabold text-white no-underline mb-3">
              <GraduationCap size={24} className="text-primary" />
              <span>Akademi<span className="gradient-text">X</span></span>
            </a>
            <p className="text-sm text-slate-400 max-w-xs leading-relaxed">
              Profesyonel akademik destek hizmetleri ile ogrencilerin yaninda. Kaliteli, orijinal ve zamaninda teslimat.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Hizmetler</h4>
            <ul className="space-y-2 list-none">
              {['Lisans Tezi', 'Yuksek Lisans Tezi', 'Doktora Tezi', 'Makale Yazimi'].map(l => (
                <li key={l}>
                  <a href="#hizmetler" className="text-sm text-slate-500 hover:text-slate-200 no-underline transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Sirket</h4>
            <ul className="space-y-2 list-none">
              {['Hakkimizda', 'Gizlilik Politikasi', 'Kullanim Sartlari', 'SSS'].map(l => (
                <li key={l}>
                  <a href="#" className="text-sm text-slate-500 hover:text-slate-200 no-underline transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-xs text-slate-600">&copy; 2026 AkademiX. Tum haklari saklidir.</p>
        </div>
      </div>
    </footer>
  )
}
