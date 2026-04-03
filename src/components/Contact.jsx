import { useEffect, useRef, useState } from 'react'

const genres = ['Pop', 'Rock', 'Hip-Hop / Rap', 'Eletrônica', 'MPB / Bossa Nova', 'Sertanejo', 'Jazz / Blues', 'Clássico', 'Outro']

const perks = [
  'Acesso gratuito por 30 dias',
  'Sem cartão de crédito necessário',
  'Cancele quando quiser',
  'Suporte em português 24/7',
]

const inputStyle = {
  width: '100%',
  background: 'var(--bg-card)',
  border: '1.5px solid var(--border-color)',
  borderRadius: '12px',
  padding: '.8rem 1rem',
  color: 'var(--text-primary)',
  fontFamily: 'DM Sans, sans-serif',
  fontSize: '.95rem',
  outline: 'none',
  transition: 'border-color .25s, box-shadow .25s',
}

function FormInput({ as: Tag = 'input', ...props }) {
  const [focused, setFocused] = useState(false)
  return (
    <Tag
      {...props}
      style={{
        ...inputStyle,
        borderColor: focused ? 'var(--purple-bright)' : 'var(--border-color)',
        boxShadow: focused ? '0 0 0 3px rgba(124,58,237,.15)' : 'none',
        ...(props.style || {}),
      }}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
    />
  )
}

export default function Contact() {
  const refs = useRef([])
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target) } }),
      { threshold: 0.1 }
    )
    refs.current.forEach(el => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => { setSubmitted(false); e.target.reset() }, 3500)
  }

  return (
    <section id="contato" style={{ position: 'relative', zIndex: 1, background: 'var(--bg-primary)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '5rem 2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem', alignItems: 'center' }}>

          {/* Left — info */}
          <div ref={el => refs.current[0] = el} className="reveal">
            <div className="section-label"><i className="fa-solid fa-envelope" /> Contato</div>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 800, marginBottom: '1rem', fontFamily: 'Syne, sans-serif' }}>
              Fique por<br /><span className="gradient-text">dentro de tudo</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '2rem' }}>
              Inscreva-se para receber novidades, lançamentos exclusivos e acesso antecipado às novas funcionalidades do Melodia.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '.85rem' }}>
              {perks.map(p => (
                <div key={p} style={{ display: 'flex', alignItems: 'center', gap: '.75rem', fontSize: '.9rem', color: 'var(--text-secondary)' }}>
                  <i className="fa-solid fa-check-circle" style={{ color: 'var(--purple-soft)', width: '20px', textAlign: 'center' }} />
                  {p}
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div ref={el => refs.current[1] = el} className="reveal" style={{ transitionDelay: '.15s' }}>
            <form
              onSubmit={handleSubmit}
              style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '24px', padding: '2.5rem' }}
            >
              <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '1.5rem', fontFamily: 'Syne, sans-serif' }}>
                Comece agora <span className="gradient-text">gratuitamente</span>
              </h3>

              {[
                { id: 'nome',  label: 'Nome completo', type: 'text',  placeholder: 'Seu nome',       required: true },
                { id: 'email', label: 'E-mail',         type: 'email', placeholder: 'seu@email.com',  required: true },
              ].map(f => (
                <div key={f.id} style={{ marginBottom: '1.25rem' }}>
                  <label htmlFor={f.id} style={{ display: 'block', fontSize: '.82rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '.5rem', letterSpacing: '.04em' }}>
                    {f.label}
                  </label>
                  <FormInput id={f.id} type={f.type} placeholder={f.placeholder} required={f.required} />
                </div>
              ))}

              <div style={{ marginBottom: '1.25rem' }}>
                <label htmlFor="interesse" style={{ display: 'block', fontSize: '.82rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '.5rem', letterSpacing: '.04em' }}>
                  Qual seu gênero favorito?
                </label>
                <FormInput as="select" id="interesse" defaultValue="">
                  <option value="" disabled>Selecione...</option>
                  {genres.map(g => <option key={g}>{g}</option>)}
                </FormInput>
              </div>

              <div style={{ marginBottom: '1.25rem' }}>
                <label htmlFor="mensagem" style={{ display: 'block', fontSize: '.82rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '.5rem', letterSpacing: '.04em' }}>
                  Mensagem (opcional)
                </label>
                <FormInput as="textarea" id="mensagem" placeholder="Alguma sugestão ou comentário?" style={{ resize: 'vertical', minHeight: '100px' }} />
              </div>

              <button
                type="submit"
                className="btn-primary"
                style={{
                  width: '100%', justifyContent: 'center',
                  background: submitted ? 'linear-gradient(135deg, #16A34A, #22C55E)' : undefined,
                }}
              >
                <i className={`fa-solid ${submitted ? 'fa-check' : 'fa-headphones'}`} />
                {submitted ? 'Inscrito com sucesso!' : 'Começar gratuitamente'}
              </button>

              <p style={{ textAlign: 'center', fontSize: '.75rem', color: 'var(--text-muted)', marginTop: '1rem' }}>
                Ao se inscrever você concorda com nossa{' '}
                <a href="#" style={{ color: 'var(--purple-soft)', textDecoration: 'none' }}>Política de Privacidade</a>.
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}
