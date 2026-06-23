# 📁 Estrutura do Projeto - Mary Assistência

## 🎯 Nova Organização

```
mary.assistencia/
├── src/
│   ├── index.html              # Página principal (HTML limpo)
│   ├── css/
│   │   └── styles.css          # Estilos CSS
│   ├── js/
│   │   └── main.js             # JavaScript e interatividade
│   └── images/                 # Pasta para imagens locais (futura)
├── .github/
│   └── agents/                 # Agentes customizados VS Code
├── .vscode/
├── README.md
└── Codigo.MaryAssistencia      # ❌ ARQUIVO ANTIGO (pode ser removido)
```

## 📂 O que mudou?

### ✅ ANTES (Monolítico)
- Um único arquivo `Codigo.MaryAssistencia` com HTML, CSS e JavaScript misturados
- Difícil de manter e escalar
- Sem separação de responsabilidades

### ✅ AGORA (Profissional)
- **`src/index.html`** — HTML estruturado e semântico
- **`src/css/styles.css`** — Todo CSS centralizado e organizado
- **`src/js/main.js`** — JavaScript com funções bem documentadas
- **Comentários e seções** — Código legível e fácil de manter
- **Responsividade melhorada** — Breakpoints para mobile, tablet, desktop

## 🚀 Como usar?

1. **Abra o arquivo:**
   ```
   src/index.html
   ```

2. **Estrutura está pronta para:**
   - 📱 Adicionar mais páginas (sobre, portfolio, etc)
   - 🎨 Expandir CSS com componentes novos
   - ⚡ Adicionar funcionalidades JavaScript
   - 🚀 Integrar com ferramentas de build (webpack, Vite, etc)

## 🛠️ Próximos Passos Sugeridos

### 1. **Build & Deploy**
```bash
# Criar package.json para automação
npm init -y

# Adicionar scripts de build
npm install --save-dev live-server  # Servidor local
```

### 2. **Adicionar mais páginas**
- `src/pages/sobre.html`
- `src/pages/portfolio.html`
- `src/pages/contato.html`

### 3. **Componentes reutilizáveis**
- Criar `src/css/components.css` para componentes
- Organizar `src/js/` em módulos:
  - `src/js/formulario.js`
  - `src/js/utils.js`
  - etc

### 4. **Otimizações**
- Minificar CSS e JS
- Otimizar imagens
- Adicionar cache headers
- Implementar PWA

## 📝 Ferramentas Recomendadas

- **Live Server**: Serve local com auto-reload
- **Prettier**: Formata código
- **ESLint**: Valida JavaScript
- **PostCSS**: Processa CSS (autoprefixer, minify)

## ❓ Dúvidas?

- **CSS não está carregando?** Verifique os caminhos relativos em `src/index.html`
- **JavaScript não funciona?** Abra DevTools (F12) e verifique a console
- **Imagens não carregam?** Use URLs absolutas (CloudBB) ou coloque em `src/images/`

---

**Status**: ✅ Estrutura profissional implementada  
**Última atualização**: 2026-06-23
