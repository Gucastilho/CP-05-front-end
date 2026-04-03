import { useState, useEffect } from 'react'

const links = [
  { label: 'Benefícios',       href: '#beneficios' },
  { label: 'Funcionalidades',  href: '#funcionalidades' },
  { label: 'Depoimentos',      href: '#depoimentos' },
  { label: 'Contato',          href: '#contato' },
]

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)
  const [theme, setTheme]         = useState(() =>
    typeof document !== 'undefined'
      ? document.documentElement.getAttribute('data-theme') || 'dark'
      : 'dark'
  )

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    document.documentElement.setAttribute('data-theme', next)
    localStorage.setItem('melodia-theme', next)
    setTheme(next)
  }

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      {/* Mobile menu */}
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        {links.map(l => (
          <a
            key={l.label}
            href={l.href}
            onClick={closeMenu}
            style={{
              display: 'block',
              padding: '.9rem 0',
              fontSize: '1.1rem',
              fontWeight: 600,
              color: 'var(--text-primary)',
              textDecoration: 'none',
              borderBottom: '1px solid var(--border-color)',
              fontFamily: 'Syne, sans-serif',
            }}
          >
            {l.label}
          </a>
        ))}
      </div>

      <nav
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 999,
          padding: '1rem 2rem',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          transition: 'background .4s, backdrop-filter .4s, box-shadow .4s',
          background: scrolled
            ? theme === 'dark' ? 'rgba(10,10,18,.85)' : 'rgba(244,240,255,.88)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          boxShadow: scrolled ? '0 1px 0 rgba(168,85,247,.15)' : 'none',
        }}
      >
        {/* Logo */}
        <a href="#inicio" style={{ textDecoration: 'none' }}>
          <span className="gradient-text" style={{ fontFamily: 'Syne, sans-serif', fontSize: '1.5rem', fontWeight: 800 }}>
            ♪ Melodia
          </span>
        </a>

        {/* Desktop links */}
        <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', margin: 0, padding: 0 }} className="hidden md:flex">
          {links.map(l => (
            <li key={l.label}>
              <a
                href={l.href}
                style={{
                  fontSize: '.9rem', fontWeight: 500,
                  color: 'var(--text-secondary)', textDecoration: 'none',
                  transition: 'color .2s',
                }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--purple-soft)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            title="Alternar tema"
            aria-label="Alternar entre modo escuro e claro"
          />
          {/* Hamburger */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Menu"
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '.25rem', display: 'flex', flexDirection: 'column', gap: '5px' }}
          >
            {[0, 1, 2].map(i => (
              <span key={i} style={{ display: 'block', width: '22px', height: '2px', background: 'var(--text-primary)', borderRadius: '2px' }} />
            ))}
          </button>
        </div>
      </nav>
    </>
  )
}
