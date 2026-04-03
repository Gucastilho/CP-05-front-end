import { useEffect, useRef } from 'react'

const TAG = ({ children }) => (
  <span style={{
    background: 'rgba(168,85,247,.12)', border: '1px solid var(--border-color)',
    borderRadius: '50px', padding: '.3rem .8rem', fontSize: '.75rem', color: 'var(--purple-soft)',
  }}>
    {children}
  </span>
)

const Card = ({ style, children }) => (
  <div className="glass reveal" style={{ padding: '2rem', ...style }}>{children}</div>
)

const FeatureNum = ({ n }) => (
  <div style={{
    fontFamily: 'Syne, sans-serif', fontSize: '3.5rem', fontWeight: 800, lineHeight: 1,
    background: 'linear-gradient(135deg, rgba(124,58,237,.3), rgba(168,85,247,.2))',
    WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
    marginBottom: '.5rem',
  }}>{n}</div>
)

const playlist = [
  { num: '1',  icon: 'fa-play',        title: 'Violet Haze',  artist: 'Sable Echo',  dur: '3:24', active: false },
  { num: '♪',  icon: 'fa-wave-square', title: 'Neon Dreams',  artist: 'Luna Wave',   dur: '1:24', active: true  },
  { num: '3',  icon: 'fa-music',       title: 'Crystal Rain', artist: 'Nova Pulse',  dur: '4:12', active: false },
  { num: '4',  icon: 'fa-headphones',  title: 'Midnight Sun', artist: 'Aurora Keys', dur: '5:07', active: false },
]

const offline = [
  { icon: 'fa-download',     color: 'var(--purple-soft)', label: 'Violet Haze',  status: '4.2 MB',  statusColor: 'var(--text-muted)' },
  { icon: 'fa-check-circle', color: '#22C55E',            label: 'Neon Dreams',  status: 'Baixado', statusColor: '#22C55E' },
  { icon: 'fa-check-circle', color: '#22C55E',            label: 'Crystal Rain', status: 'Baixado', statusColor: '#22C55E' },
]

const discovery = [
  { icon: 'fa-globe',      color: 'var(--purple-soft)', title: 'Artistas Globais', sub: '200+ países',      bg: 'linear-gradient(135deg,rgba(124,58,237,.25),rgba(232,121,249,.1))' },
  { icon: 'fa-fire',       color: 'var(--accent)',      title: 'Tendências',       sub: 'Atualizado diário', bg: 'linear-gradient(135deg,rgba(232,121,249,.2),rgba(124,58,237,.1))' },
  { icon: 'fa-chart-line', color: 'var(--purple-soft)', title: 'Charts',           sub: 'Top 50 gêneros',   bg: 'linear-gradient(135deg,rgba(168,85,247,.15),rgba(124,58,237,.1))' },
  { icon: 'fa-star',       color: '#FBBF24',            title: 'Curadoria',        sub: 'By especialistas', bg: 'linear-gradient(135deg,rgba(124,58,237,.2),rgba(76,29,149,.15))' },
]

export default function Features() {
  const refs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target) } }),
      { threshold: 0.1 }
    )
    refs.current.forEach(el => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="funcionalidades" style={{ position: 'relative', zIndex: 1, background: 'var(--bg-primary)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '5rem 2rem' }}>

        {/* Header */}
        <div ref={el => refs.current[0] = el} className="reveal" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="section-label"><i className="fa-solid fa-sparkles" /> Funcionalidades</div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, lineHeight: 1.15 }}>
            Tudo que você precisa<br />
            <span className="gradient-text">em um só lugar</span>
          </h2>
        </div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>

          {/* Big card — full width */}
          <div
            ref={el => refs.current[1] = el}
            className="glass reveal"
            style={{
              gridColumn: '1 / -1',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              alignItems: 'center',
              gap: '2rem',
              padding: '2.5rem',
            }}
          >
            <div>
              <FeatureNum n="01" />
              <div style={{ fontSize: '1.2rem', fontWeight: 700, fontFamily: 'Syne, sans-serif', marginBottom: '.75rem' }}>Player Inteligente</div>
              <div style={{ fontSize: '.9rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                Controles avançados com equalizador dinâmico, crossfade automático e visualizações de áudio em tempo real. Personalize cada detalhe da sua experiência de escuta.
              </div>
              <div style={{ display: 'flex', gap: '.5rem', flexWrap: 'wrap' }}>
                <TAG>Lossless Audio</TAG>
                <TAG>Spatial Audio</TAG>
                <TAG>Equalizer</TAG>
              </div>
            </div>

            {/* Mini player */}
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '16px', padding: '1.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '10px', background: 'linear-gradient(135deg, var(--purple-glow), var(--accent))', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '1.1rem', flexShrink: 0 }}>
                  <i className="fa-solid fa-music" />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: '.9rem', fontWeight: 600, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Neon Dreams</div>
                  <div style={{ fontSize: '.78rem', color: 'var(--text-muted)' }}>Luna Wave</div>
                </div>
                <i className="fa-solid fa-ellipsis" style={{ color: 'var(--text-muted)' }} />
              </div>
              <div style={{ height: '3px', background: 'rgba(168,85,247,.2)', borderRadius: '3px', marginTop: '1rem', overflow: 'hidden' }}>
                <div className="progress-fill" />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '.4rem' }}>
                <span style={{ fontSize: '.7rem', color: 'var(--text-muted)' }}>1:24</span>
                <span style={{ fontSize: '.7rem', color: 'var(--text-muted)' }}>3:58</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1.5rem', marginTop: '.75rem' }}>
                <i className="fa-solid fa-shuffle" style={{ color: 'var(--purple-soft)', fontSize: '.85rem' }} />
                <i className="fa-solid fa-backward-step" style={{ color: 'var(--text-secondary)', fontSize: '1rem' }} />
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'linear-gradient(135deg,var(--purple-glow),var(--accent))', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                  <i className="fa-solid fa-pause" style={{ color: '#fff', fontSize: '.85rem' }} />
                </div>
                <i className="fa-solid fa-forward-step" style={{ color: 'var(--text-secondary)', fontSize: '1rem' }} />
                <i className="fa-solid fa-repeat" style={{ color: 'var(--purple-soft)', fontSize: '.85rem' }} />
              </div>
            </div>
          </div>

          {/* Card 02 — Playlists IA */}
          <div ref={el => refs.current[2] = el} className="glass reveal" style={{ padding: '2rem', transitionDelay: '.1s' }}>
            <FeatureNum n="02" />
            <div style={{ fontSize: '1.2rem', fontWeight: 700, fontFamily: 'Syne, sans-serif', marginBottom: '.75rem' }}>Playlists com IA</div>
            <div style={{ fontSize: '.9rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              Nossa inteligência artificial analisa seus padrões de escuta e cria playlists que evoluem com você.
            </div>
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '14px', padding: '1rem' }}>
              {playlist.map(t => (
                <div key={t.title} className="playlist-item" style={t.active ? { background: 'rgba(168,85,247,.08)' } : {}}>
                  <div style={{ fontSize: '.78rem', color: t.active ? 'var(--purple-soft)' : 'var(--text-muted)', width: '18px', textAlign: 'center' }}>{t.num}</div>
                  <div style={{ width: '34px', height: '34px', borderRadius: '8px', background: 'linear-gradient(135deg, var(--purple-glow), var(--purple-bright))', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '.75rem', flexShrink: 0 }}>
                    <i className={`fa-solid ${t.icon}`} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '.85rem', fontWeight: 500 }}>{t.title}</div>
                    <div style={{ fontSize: '.75rem', color: 'var(--text-muted)' }}>{t.artist}</div>
                  </div>
                  <div style={{ fontSize: '.75rem', color: t.active ? 'var(--purple-soft)' : 'var(--text-muted)', marginLeft: 'auto' }}>{t.dur}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Card 03 — Offline */}
          <div ref={el => refs.current[3] = el} className="glass reveal" style={{ padding: '2rem', transitionDelay: '.2s' }}>
            <FeatureNum n="03" />
            <div style={{ fontSize: '1.2rem', fontWeight: 700, fontFamily: 'Syne, sans-serif', marginBottom: '.75rem' }}>Modo Offline</div>
            <div style={{ fontSize: '.9rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              Baixe qualquer música, álbum ou playlist e ouça sem internet, sem interrupções, em qualquer lugar do mundo.
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
              {offline.map(o => (
                <div key={o.label} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '.85rem 1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '.75rem' }}>
                    <i className={`fa-solid ${o.icon}`} style={{ color: o.color }} />
                    <span style={{ fontSize: '.88rem' }}>{o.label}</span>
                  </div>
                  <span style={{ fontSize: '.75rem', color: o.statusColor }}>{o.status}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Card 04 — Discovery */}
          <div ref={el => refs.current[4] = el} className="glass reveal" style={{ padding: '2rem', transitionDelay: '.3s', gridColumn: 'span 1' }}>
            <FeatureNum n="04" />
            <div style={{ fontSize: '1.2rem', fontWeight: 700, fontFamily: 'Syne, sans-serif', marginBottom: '.75rem' }}>Descoberta Musical</div>
            <div style={{ fontSize: '.9rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              Algoritmos avançados apresentam artistas independentes e gêneros novos alinhados ao seu gosto único.
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '.75rem' }}>
              {discovery.map(d => (
                <div key={d.title} style={{ background: d.bg, border: '1px solid var(--border-color)', borderRadius: '14px', padding: '1rem', textAlign: 'center' }}>
                  <i className={`fa-solid ${d.icon}`} style={{ color: d.color, fontSize: '1.3rem', marginBottom: '.5rem', display: 'block' }} />
                  <div style={{ fontSize: '.8rem', fontWeight: 600 }}>{d.title}</div>
                  <div style={{ fontSize: '.7rem', color: 'var(--text-muted)' }}>{d.sub}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
