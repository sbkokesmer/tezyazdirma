import { useState, useEffect } from 'react'
import { Menu, X, GraduationCap } from 'lucide-react'

const NAV_LINKS = [
  { href: '#hizmetler', label: 'Hizmetler' },
  { href: '#nasil-calisir', label: 'Nasil Calisir' },
  { href: '#fiyat', label: 'Fiyat Hesapla' },
  { href: '#yorumlar', label: 'Yorumlar' },
  { href: '#iletisim', label: 'Iletisim' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-bg/90 backdrop-blur-xl border-b border-border py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5 text-xl font-extrabold text-white no-underline">
          <GraduationCap size={28} className="text-primary" />
          <span>Akademi<span className="gradient-text">X</span></span>
        </a>

        <ul className="hidden md:flex items-center gap-8 list-none">
          {NAV_LINKS.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-slate-400 hover:text-white text-sm font-medium transition-colors no-underline"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#fiyat"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold no-underline transition-all
            bg-primary text-slate-900 hover:bg-primary-hover"
        >
          Teklif Al
        </a>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-white bg-transparent border-none cursor-pointer p-1"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-bg/95 backdrop-blur-xl border-b border-border px-6 py-6">
          <ul className="flex flex-col gap-4 list-none">
            {NAV_LINKS.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-slate-300 hover:text-white text-base font-medium transition-colors no-underline"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#fiyat"
            onClick={() => setMobileOpen(false)}
            className="mt-4 w-full flex justify-center items-center px-5 py-3 rounded-lg text-sm font-semibold no-underline
              bg-primary text-slate-900"
          >
            Teklif Al
          </a>
        </div>
      )}
    </nav>
  )
}
