import { useEffect, useRef } from 'react'

const benefits = [
  {
    icon: 'fa-solid fa-wave-square',
    title: 'Qualidade de Som Superior',
    desc: 'Ouça suas músicas favoritas em qualidade lossless com suporte a áudio espacial. Cada nota, como o artista pretendia.',
  },
  {
    icon: 'fa-solid fa-sliders',
    title: 'Playlists Personalizadas',
    desc: 'Nossa IA aprende seus gostos e cria playlists únicas que acompanham seu humor, rotina e momentos especiais.',
    delay: '.1s',
  },
  {
    icon: 'fa-solid fa-compass',
    title: 'Descubra Novos Artistas',
    desc: 'Explore talentos independentes e artistas emergentes de todo o mundo. Seja o primeiro a descobrir o próximo grande nome.',
    delay: '.2s',
  },
  {
    icon: 'fa-solid fa-wand-magic-sparkles',
    title: 'Interface Intuitiva',
    desc: 'Design pensado para ser simples e poderoso. Navegue sem esforço, foque no que importa: a música.',
    delay: '.3s',
  },
]

export default function Benefits() {
  const refs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target) } }),
      { threshold: 0.12 }
    )
    refs.current.forEach(el => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="beneficios" style={{ position: 'relative', zIndex: 1, background: 'var(--bg-secondary)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '5rem 2rem' }}>

        {/* Header */}
        <div ref={el => refs.current[0] = el} className="reveal" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="section-label">
            <i className="fa-solid fa-star" /> Por que Melodia?
          </div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, lineHeight: 1.15 }}>
            Benefícios que fazem a<br />
            <span className="gradient-text">diferença</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', marginTop: '1rem', maxWidth: '520px', marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.75 }}>
            Desenvolvemos cada detalhe pensando em você. Música não é só entretenimento — é experiência.
          </p>
        </div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
          {benefits.map((b, i) => (
            <div
              key={b.title}
              ref={el => refs.current[i + 1] = el}
              className="reveal glass"
              style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem', transitionDelay: b.delay || '0s' }}
            >
              <div style={{
                width: '52px', height: '52px', borderRadius: '14px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.2rem',
                background: 'linear-gradient(135deg, var(--purple-glow), var(--purple-bright))',
                color: '#fff', flexShrink: 0,
              }}>
                <i className={b.icon} />
              </div>
              <div>
                <div style={{ fontSize: '1.05rem', fontWeight: 700, fontFamily: 'Syne, sans-serif', marginBottom: '.5rem' }}>{b.title}</div>
                <div style={{ fontSize: '.9rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>{b.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
