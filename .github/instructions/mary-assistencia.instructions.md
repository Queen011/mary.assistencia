---
description: "Mary Assistência project guidelines. Use when: working on HTML/CSS/JS for the website, adding features to landing page, or optimizing styling. Apply to all files in src/."
applyTo: "src/**"
---

# Mary Assistência - Instruções do Projeto

## 📋 Padrões do Projeto

### HTML
- Use HTML5 semântico
- Mantenha comentários no formato: `<!-- ====================== SEÇÃO ====================== -->`
- IDs para âncoras de navegação: snake_case (ex: `id="pre-orcamento"`)
- Classes para estilo: kebab-case (ex: `class="hero-texto"`)
- Atributos alt em todas as imagens

### CSS
- Organização por seções com comentários
- Mantém ordem: Reset → Layout → Componentes → Responsividade
- Use variáveis CSS quando houver cores repetidas
- Mobile-first approach
- Breakpoints: 480px (mobile), 768px (tablet), 1200px+ (desktop)

### JavaScript
- Funções com JSDoc (documentação)
- Nomes descritivos: `handleFormSubmit()`, `formatarMensagem()`
- Evite variáveis globais
- Use `const` por padrão, `let` quando necessário

## 🎨 Estilo e Cores

- **Primária**: `#6d3b92` (roxo Mary)
- **Verde WhatsApp**: `#25d366`
- **Fundo**: `#f6f2fa` (roxo muito claro)
- **Texto**: `#333` (cinza escuro)

## 📱 Responsividade

```css
/* Desktop */
@media (max-width: 1200px) { }

/* Tablet */
@media (max-width: 768px) { }

/* Mobile */
@media (max-width: 480px) { }
```

## 🚀 Quando adicionar features

1. **Novo componente?** → Crie em `src/css/styles.css` com seção comentada
2. **Nova página?** → `src/pages/nova-pagina.html`
3. **Função JavaScript?** → Adicione em `src/js/main.js` com JSDoc
4. **Imagem local?** → Coloque em `src/images/` (não use CloudBB para assets locais)

## ⚠️ O que NÃO fazer

- Não misture CSS inline com classes
- Não use `!important` sem necessidade
- Não adicione JavaScript diretamente no HTML
- Não comite `node_modules/`
- Não modifique `Codigo.MaryAssistencia` (arquivo antigo)
