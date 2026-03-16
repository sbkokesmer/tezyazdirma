import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

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
          ? 'bg-bg/85 backdrop-blur-xl border-b border-border py-3'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 text-xl font-extrabold text-zinc-50 no-underline">
          <span className="gradient-text text-2xl">&#9670;</span>
          Akademi<span className="gradient-text">X</span>
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8 list-none">
          {NAV_LINKS.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-zinc-400 hover:text-zinc-50 text-sm font-medium transition-colors no-underline"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#fiyat"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white no-underline transition-all
            bg-gradient-to-r from-violet-500 to-pink-500 hover:-translate-y-0.5 shadow-lg shadow-violet-500/25"
        >
          Teklif Al
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-zinc-50 bg-transparent border-none cursor-pointer p-1"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-bg/95 backdrop-blur-xl border-b border-border px-6 py-6">
          <ul className="flex flex-col gap-4 list-none">
            {NAV_LINKS.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-zinc-300 hover:text-zinc-50 text-base font-medium transition-colors no-underline"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#fiyat"
            onClick={() => setMobileOpen(false)}
            className="mt-4 w-full flex justify-center items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white no-underline
              bg-gradient-to-r from-violet-500 to-pink-500"
          >
            Teklif Al
          </a>
        </div>
      )}
    </nav>
  )
}
