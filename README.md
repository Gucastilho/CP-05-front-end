# 🎵 Melodia — Landing Page

Landing page moderna e responsiva para o aplicativo de música **Melodia**, desenvolvida como projeto acadêmico (CP-05) para a disciplina de Front-End da FIAP.

---

## 📋 Sobre o Projeto

O **Melodia** é um app de streaming musical focado em jovens e amantes de música que buscam novas descobertas sonoras. Esta landing page foi criada para apresentar o produto de forma atrativa, com design dark mode, elementos visuais inspirados em música e animações modernas.

---

## ✨ Funcionalidades da Página

- **Navbar fixa** com efeito glassmorphism ao rolar, theme toggle dark/light e menu hambúrguer mobile
- **Hero Section** com mockup animado do app, waveform interativa, badge e estatísticas
- **Seção de Benefícios** com cards em grid responsivo e scroll reveal
- **Funcionalidades** com cards numerados, mini-player animado, demo de playlist e modo offline
- **Depoimentos** com carrossel infinito horizontal (pausa no hover)
- **Formulário de Contato** com campos de nome, e-mail, gênero musical e mensagem
- **Rodapé** com links de navegação, redes sociais e links legais
- **Tema claro/escuro** com persistência via `localStorage`

---

## 🎨 Estilo Visual

| Elemento | Valor |
|---|---|
| Tema | Dark Mode (padrão) + Light Mode |
| Cor principal | `#7C3AED` (roxo) |
| Cor de destaque | `#E879F9` (fúcsia neon) |
| Background | `#0A0A12` |
| Fonte headings | [Syne](https://fonts.google.com/specimen/Syne) |
| Fonte body | [DM Sans](https://fonts.google.com/specimen/DM+Sans) |

---

## 🛠️ Tecnologias

- **[React 19](https://react.dev/)** — biblioteca de UI
- **[Vite 8](https://vite.dev/)** — bundler e dev server
- **[Tailwind CSS 4](https://tailwindcss.com/)** — utilitários de estilo
- **[Font Awesome 6](https://fontawesome.com/)** — ícones
- **[Google Fonts](https://fonts.google.com/)** — Syne + DM Sans

---

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── Navbar.jsx        # Menu fixo com theme toggle e menu mobile
│   ├── Hero.jsx          # Seção principal com mockup do app
│   ├── Benefits.jsx      # 4 cards de diferenciais
│   ├── Features.jsx      # Cards numerados com demos interativas
│   ├── Testimonials.jsx  # Carrossel infinito de depoimentos
│   ├── Contact.jsx       # Formulário de contato completo
│   └── Footer.jsx        # Rodapé com links e redes sociais
├── App.jsx               # Composição das seções + dividers
├── index.css             # Variáveis CSS, animações e estilos globais
└── main.jsx              # Entry point
```

---

## 🚀 Como Rodar Localmente

**Pré-requisitos:** Node.js 18+

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/cp-05-front-end.git
cd cp-05-front-end

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

Acesse `http://localhost:5173` no navegador.

### Outros comandos

```bash
npm run build    # Gera o build de produção em /dist
npm run preview  # Visualiza o build de produção localmente
npm run lint     # Executa o ESLint
```

---

## 🌐 Deploy

O projeto está configurado para deploy no **Vercel**. O arquivo `vercel.json` garante o redirecionamento correto de rotas para o `index.html` (necessário para SPAs).

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

Para fazer o deploy manualmente:

```bash
npm run build
# Faça upload da pasta /dist no Vercel, Netlify ou GitHub Pages
```

---

## 📱 Responsividade

A página foi desenvolvida com abordagem **mobile-first** e se adapta a todos os tamanhos de tela:

| Breakpoint | Layout |
|---|---|
| Mobile (`< 768px`) | 1 coluna, menu hambúrguer, mockup oculto |
| Tablet (`768px–1024px`) | 2 colunas, grid adaptativo |
| Desktop (`> 1024px`) | Layout completo com mockup do app visível |

---

## 👥 Participantes

| Nome | RM |
|---|---|
| Eduarda da Silva Brito | RM567347 |
| Gustavo Castilho Gonçalves | RM566970 |
| Gustavo Moretim Canzi | RM567683 |
| Lucca Ghiraldi Urso | RM556739 |

---

## 🌐 Acesse o Projeto Online

O site está disponível através do Vercel:

🔗 [Acesse aqui](https://cp-05-front-end-rho.vercel.app/)

---


