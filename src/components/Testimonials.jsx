import { useEffect, useRef } from 'react'

const testimonials = [
  { initials: 'AM', name: 'Ana Morais',    handle: '@anamorais.music',  quote: 'Nunca pensei que um app de música pudesse me fazer redescobrir meu amor pela música. As recomendações são incríveis e a qualidade do áudio é surpreendente.' },
  { initials: 'RB', name: 'Rafael Braga',  handle: '@rafabraga',        quote: 'A funcionalidade de playlist com IA é incrível. Ela parece ler minha mente — sempre toca exatamente o que quero ouvir no momento certo.' },
  { initials: 'CL', name: 'Carla Lima',    handle: '@carlalovers',      quote: 'Descobri meu artista favorito pelo Melodia há 6 meses. Desde então não consigo parar de usar. A seção de descoberta é o diferencial que faltava.' },
  { initials: 'MT', name: 'Marcos Teles',  handle: '@marcosteles',      quote: 'Interface linda, intuitiva e responsiva. O modo offline salvou meu dia em viagens. Recomendo para todos que amam música de verdade!' },
  { initials: 'JS', name: 'Julia Santos',  handle: '@juliasantos.hifi', quote: 'O som em qualidade lossless é o grande diferencial. Uso fones de ouvido de alta fidelidade e finalmente encontrei um app que respeita esse nível.' },
]

function TestimonialCard({ t }) {
  return (
    <div
      className="glass"
      style={{ minWidth: '300px', maxWidth: '300px', padding: '1.75rem', flexShrink: 0 }}
    >
      <div style={{ color: '#FBBF24', fontSize: '.85rem', letterSpacing: '.1em', marginBottom: '.75rem' }}>★★★★★</div>
      <p style={{ fontSize: '.9rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.25rem', fontStyle: 'italic' }}>
        "{t.quote}"
      </p>
      <div style={{ display: 'flex', alignItems: 'center', gap: '.75rem' }}>
        <div style={{
          width: '40px', height: '40px', borderRadius: '50%',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '.85rem', color: '#fff',
          background: 'linear-gradient(135deg, var(--purple-glow), var(--accent))',
          flexShrink: 0,
        }}>
          {t.initials}
        </div>
        <div>
          <div style={{ fontSize: '.88rem', fontWeight: 600 }}>{t.name}</div>
          <div style={{ fontSize: '.78rem', color: 'var(--text-muted)' }}>{t.handle}</div>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const headerRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target) } },
      { threshold: 0.12 }
    )
    if (headerRef.current) observer.observe(headerRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="depoimentos" style={{ position: 'relative', zIndex: 1, background: 'var(--bg-secondary)', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '5rem 2rem 2rem' }}>
        <div ref={headerRef} className="reveal" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="section-label"><i className="fa-solid fa-comment-dots" /> Depoimentos</div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, lineHeight: 1.15 }}>
            O que nossos usuários<br />
            <span className="gradient-text">estão dizendo</span>
          </h2>
        </div>
      </div>

      {/* Infinite scroll track */}
      <div className="testimonial-track" style={{ paddingBottom: '3rem' }}>
        {/* Group 1 */}
        <div className="testimonial-group">
          {testimonials.map(t => <TestimonialCard key={t.name} t={t} />)}
        </div>
        {/* Group 2 — clone for seamless loop */}
        <div className="testimonial-group" aria-hidden="true">
          {testimonials.map(t => <TestimonialCard key={t.name + '-clone'} t={t} />)}
        </div>
      </div>
    </section>
  )
}
