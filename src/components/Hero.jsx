import { useEffect } from 'react'

const WAVE_BARS = [
  { h: 30, d: '.6s', delay: '0s' },   { h: 60, d: '.7s', delay: '.05s' },
  { h: 90, d: '.5s', delay: '.1s' },  { h: 50, d: '.8s', delay: '.15s' },
  { h: 100,d: '.6s', delay: '.2s' },  { h: 70, d: '.7s', delay: '.25s' },
  { h: 40, d: '.5s', delay: '.3s' },  { h: 80, d: '.9s', delay: '.35s' },
  { h: 60, d: '.6s', delay: '.4s' },  { h: 90, d: '.7s', delay: '.45s' },
  { h: 45, d: '.5s', delay: '.5s' },  { h: 70, d: '.8s', delay: '.55s' },
  { h: 100,d: '.6s', delay: '.6s' },  { h: 55, d: '.7s', delay: '.65s' },
  { h: 35, d: '.5s', delay: '.7s' },
]

export default function Hero() {
  useEffect(() => {
    document.querySelectorAll('.wave-bar').forEach(bar => {
      bar.style.height = (Math.floor(Math.random() * 70) + 30) + 'px'
    })
  }, [])

  return (
    <section
      id="inicio"
      style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}
    >
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        background: `
          radial-gradient(ellipse 80% 60% at 60% 40%, rgba(124,58,237,.22) 0%, transparent 60%),
          radial-gradient(ellipse 50% 50% at 20% 80%, rgba(192,132,252,.12) 0%, transparent 55%),
          var(--bg-primary)
        `,
      }} />

      <div className="animate-float1" style={{
        position: 'absolute', width: '400px', height: '400px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(124,58,237,.3), transparent 70%)',
        filter: 'blur(70px)', top: '-100px', right: '5%', pointerEvents: 'none',
      }} />
      <div className="animate-float2" style={{
        position: 'absolute', width: '300px', height: '300px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(232,121,249,.2), transparent 70%)',
        filter: 'blur(70px)', bottom: '10%', left: '5%', pointerEvents: 'none',
      }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '1280px', margin: '0 auto', padding: '8rem 2rem 5rem', width: '100%' }}>

        <div className="animate-fade-up" style={{
          display: 'inline-flex', alignItems: 'center', gap: '.5rem',
          background: 'rgba(168,85,247,.12)', border: '1px solid rgba(168,85,247,.3)',
          color: 'var(--purple-soft)', padding: '.45rem 1.1rem', borderRadius: '50px',
          fontSize: '.8rem', fontWeight: 600, letterSpacing: '.06em', marginBottom: '1.75rem',
        }}>
          <i className="fa-solid fa-bolt" style={{ fontSize: '.7rem' }} />
          NOVO — Qualidade de áudio sem igual
        </div>

        <h1
          className="animate-fade-up"
          style={{
            fontSize: 'clamp(2.8rem, 7vw, 5.5rem)',
            fontWeight: 800, lineHeight: 1.05, marginBottom: '1.5rem',
            animationDelay: '.1s',
          }}
        >
          Melodia:<br />
          <span className="gradient-text">Sua Música,</span><br />
          Sua Forma.
        </h1>

        <p
          className="animate-fade-up"
          style={{
            fontSize: '1.1rem', color: 'var(--text-secondary)',
            maxWidth: '560px', lineHeight: 1.75, marginBottom: '2.5rem',
            animationDelay: '.2s',
          }}
        >
          Descubra artistas incríveis, crie playlists personalizadas e experiencie o som da forma que ele foi criado — com a qualidade que você merece.
        </p>

        <div className="animate-fade-up" style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', animationDelay: '.3s' }}>
          <a href="#contato" className="btn-primary">
            <i className="fa-solid fa-headphones" />
            Ouvir Agora
          </a>
          <a href="#funcionalidades" className="btn-ghost">
            <i className="fa-solid fa-play" />
            Ver como funciona
          </a>
        </div>

        <div className="animate-fade-up" style={{ display: 'flex', flexWrap: 'wrap', gap: '2.5rem', marginTop: '4rem', animationDelay: '.4s' }}>
          {[
            { num: '5M+',  label: 'Usuários ativos' },
            { num: '80M+', label: 'Faixas disponíveis' },
            { num: '4.9★', label: 'Avaliação nas lojas' },
          ].map(s => (
            <div key={s.label}>
              <div style={{ fontFamily: 'Syne, sans-serif', fontSize: '2rem', fontWeight: 800, color: 'var(--purple-soft)' }}>{s.num}</div>
              <div style={{ fontSize: '.85rem', color: 'var(--text-muted)', marginTop: '.15rem' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div
        className="animate-fade-left hidden lg:block"
        style={{ position: 'absolute', right: '2%', top: '50%', transform: 'translateY(-50%)', width: '420px' }}
      >
        <div style={{ width: '260px', margin: '0 auto', position: 'relative' }}>
          <div style={{
            background: 'var(--bg-card)',
            border: '2px solid rgba(168,85,247,.3)',
            borderRadius: '36px', padding: '12px',
            boxShadow: '0 40px 120px rgba(0,0,0,.5), 0 0 0 1px rgba(255,255,255,.04), inset 0 0 60px rgba(124,58,237,.05)',
          }}>
            <div style={{
              background: 'linear-gradient(160deg, #1A0A2E, #0A0A18)',
              borderRadius: '28px', overflow: 'hidden', padding: '1.5rem 1rem',
              minHeight: '400px', position: 'relative',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                <span style={{ fontSize: '.65rem', color: '#B8B0D0', fontWeight: 600 }}>9:41</span>
                <div style={{ display: 'flex', gap: '.35rem', alignItems: 'center' }}>
                  <i className="fa-solid fa-signal" style={{ fontSize: '.6rem', color: '#B8B0D0' }} />
                  <i className="fa-solid fa-wifi" style={{ fontSize: '.6rem', color: '#B8B0D0' }} />
                  <i className="fa-solid fa-battery-three-quarters" style={{ fontSize: '.6rem', color: '#B8B0D0' }} />
                </div>
              </div>

              <p style={{ fontFamily: 'Syne,sans-serif', fontWeight: 800, fontSize: '.95rem', color: '#F0EDFF', marginBottom: '.25rem' }}>♪ Melodia</p>
              <p style={{ fontSize: '.7rem', color: '#6B6490', marginBottom: '1rem' }}>Tocando agora</p>

              <div style={{ width: '100%', paddingTop: '100%', borderRadius: '18px', background: 'linear-gradient(135deg,#4C1D95,#7C3AED,#E879F9)', position: 'relative', marginBottom: '1rem' }}>
                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <i className="fa-solid fa-music" style={{ fontSize: '2.2rem', color: 'rgba(255,255,255,0.8)' }} />
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '.75rem' }}>
                <div>
                  <p style={{ fontFamily: 'Syne,sans-serif', fontWeight: 700, fontSize: '.9rem', color: '#F0EDFF' }}>Neon Dreams</p>
                  <p style={{ fontSize: '.7rem', color: '#6B6490' }}>Luna Wave</p>
                </div>
                <i className="fa-solid fa-heart" style={{ color: '#A855F7' }} />
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '3px', height: '60px', margin: '1rem 0' }}>
                {WAVE_BARS.map((b, i) => (
                  <div
                    key={i}
                    className="wave-bar"
                    style={{ '--d': b.d, '--delay': b.delay, height: b.h + 'px' }}
                  />
                ))}
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '.5rem' }}>
                <i className="fa-solid fa-backward-step" style={{ color: '#B8B0D0', fontSize: '1rem' }} />
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'linear-gradient(135deg,#7C3AED,#A855F7)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <i className="fa-solid fa-pause" style={{ color: '#fff', fontSize: '.85rem' }} />
                </div>
                <i className="fa-solid fa-forward-step" style={{ color: '#B8B0D0', fontSize: '1rem' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
