const socials = [
  { icon: 'fa-brands fa-instagram', label: 'Instagram' },
  { icon: 'fa-brands fa-twitter',   label: 'Twitter'   },
  { icon: 'fa-brands fa-tiktok',    label: 'TikTok'    },
  { icon: 'fa-brands fa-youtube',   label: 'YouTube'   },
  { icon: 'fa-brands fa-linkedin',  label: 'LinkedIn'  },
]

const cols = [
  { title: 'Produto',  links: ['Funcionalidades', 'Planos e Preços', 'Download do App', 'Novidades'] },
  { title: 'Empresa',  links: ['Sobre nós', 'Blog', 'Carreiras', 'Imprensa'] },
  { title: 'Suporte',  links: ['Contato', 'Central de Ajuda', 'Comunidade', 'Status do Serviço'] },
]

export default function Footer() {
  return (
    <footer style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '3.5rem 2rem 2rem' }}>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap: '3rem',
          marginBottom: '3rem',
        }}>
          {/* Brand */}
          <div style={{ gridColumn: 'span 1' }}>
            <a href="#" style={{ textDecoration: 'none' }}>
              <span className="gradient-text" style={{ fontFamily: 'Syne, sans-serif', fontSize: '1.5rem', fontWeight: 800 }}>♪ Melodia</span>
            </a>
            <p style={{ fontSize: '.9rem', color: 'var(--text-muted)', lineHeight: 1.7, margin: '.75rem 0 1.5rem' }}>
              A plataforma de streaming musical que coloca a qualidade e descoberta em primeiro lugar. Feita para quem ama música de verdade.
            </p>
            <div style={{ display: 'flex', gap: '.75rem', flexWrap: 'wrap' }}>
              {socials.map(s => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  style={{
                    width: '38px', height: '38px', borderRadius: '10px',
                    background: 'var(--bg-card)', border: '1px solid var(--border-color)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--text-muted)', fontSize: '.9rem', textDecoration: 'none',
                    transition: 'background .25s, color .25s, border-color .25s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'var(--purple-glow)'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = 'var(--purple-glow)' }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'var(--bg-card)'; e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.borderColor = 'var(--border-color)' }}
                >
                  <i className={s.icon} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {cols.map(col => (
            <div key={col.title}>
              <div style={{ fontFamily: 'Syne, sans-serif', fontSize: '.9rem', fontWeight: 700, marginBottom: '1.25rem' }}>{col.title}</div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '.6rem' }}>
                {col.links.map(l => (
                  <li key={l}>
                    <a
                      href="#"
                      style={{ fontSize: '.88rem', color: 'var(--text-muted)', textDecoration: 'none', transition: 'color .2s' }}
                      onMouseEnter={e => e.currentTarget.style.color = 'var(--purple-soft)'}
                      onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <p style={{ fontSize: '.82rem', color: 'var(--text-muted)' }}>
            © {new Date().getFullYear()} Melodia. Todos os direitos reservados.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            {['Política de Privacidade', 'Termos de Uso', 'Cookies'].map(l => (
              <a
                key={l}
                href="#"
                style={{ fontSize: '.82rem', color: 'var(--text-muted)', textDecoration: 'none', transition: 'color .2s' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--purple-soft)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
              >
                {l}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  )
}
