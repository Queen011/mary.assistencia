# 🌐 Guia: Domínio Grátis + Hospedagem para Mary Assistência

## 🎯 Opções Recomendadas (Do melhor para o pior)

---

## 1️⃣ **NETLIFY** ⭐⭐⭐⭐⭐ RECOMENDADO
**Melhor opção: Hospedagem grátis + subdomínio grátis + SSL automático**

### Setup Rápido (5 minutos)
1. **Acesse**: https://netlify.com
2. **Faça login** com GitHub (recomendado) ou email
3. **Clique**: "Add new site" → "Deploy manually"
4. **Arraste a pasta `src/`** para publicar
5. **Pronto!** Site ao vivo em `seu-site.netlify.app`

### Como usar domínio próprio (depois)
```bash
# Se comprar um domínio, configure em:
# Netlify Dashboard → Domain settings → Add custom domain
```

### Vantagens ✅
- ✅ Hospedagem ilimitada grátis
- ✅ HTTPS automático (SSL grátis)
- ✅ Subdomínio grátis (.netlify.app)
- ✅ Deploy automático via Git
- ✅ Email & formulários (Netlify Forms)
- ✅ CDN global
- ✅ Muito fácil de usar

**URL resultante**: `https://mary-assistencia.netlify.app`

---

## 2️⃣ **VERCEL** ⭐⭐⭐⭐⭐ TAMBÉM ÓTIMO
**Similar ao Netlify, muito usado para Next.js mas também suporta sites estáticos**

### Setup Rápido
1. **Acesse**: https://vercel.com
2. **Clique**: "New Project"
3. **Selecione sua repo GitHub** (ou faça upload)
4. **Deploy automático**

### Vantagens ✅
- ✅ Grátis para projetos estáticos
- ✅ Subdmínio grátis (.vercel.app)
- ✅ HTTPS automático
- ✅ Muito rápido (CDN próprio)
- ✅ Analytics incluído

**URL resultante**: `https://mary-assistencia.vercel.app`

---

## 3️⃣ **GITHUB PAGES** ⭐⭐⭐⭐ GRATUITO + CONTROLE
**Se o código já está no GitHub, é a opção mais simples**

### Setup (8 minutos)
1. **Vá para**: Seu repositório GitHub
2. **Clique**: Settings → Pages
3. **Source**: Branch → main (ou master)
4. **Folder**: / (raiz) ou /src
5. **Clique**: Save

### Resultado
- URL: `https://seu-usuario.github.io/mary-assistencia/`
- Ou apenas: `https://seu-usuario.github.io/` (se usar repo `seu-usuario.github.io`)

### Vantagens ✅
- ✅ Totalmente grátis
- ✅ Integrado com Git
- ✅ HTTPS automático
- ✅ Controle total do código

---

## 4️⃣ **FREENOM** ⭐⭐⭐ DOMÍNIO TOTALMENTE GRÁTIS
**Receba um domínio próprio GRÁTIS** (extensões: `.ml`, `.ga`, `.cf`, `.tk`)

### Como conseguir domínio grátis
1. **Acesse**: https://www.freenom.com
2. **Procure** por: "maryassistencia.ml"
3. **Adicione ao carrinho**
4. **Checkout** (selecione "12 months FREE")
5. **Pronto!** Domínio seu por 1 ano

### Depois, redirecione para seu site
**Opção A: Apontar para Netlify**
- No Freenom: DNS Settings
- Aponte para Netlify (eles guiam)

**Opção B: Usar Freenom + hospedagem própria**
- Configure os nameservers conforme sua hospedagem

### Vantagens ✅
- ✅ Domínio PRÓPRIO e GRÁTIS
- ✅ 1 ano renovável (se continuar livre)
- ✅ Perfeito para portfolio/teste
- ⚠️ Domínios `.ml`, `.ga` têm reputação baixa

---

## 5️⃣ **CLOUDFLARE PAGES** ⭐⭐⭐⭐ EXCELENTE
**CDN + Hospedagem + Domínio grátis**

### Setup
1. **Acesse**: https://pages.cloudflare.com
2. **Conecte GitHub** (ou use Wrangler CLI)
3. **Selecione repository**
4. **Defina build**: Pasta: `src/`
5. **Deploy**

### Vantagens ✅
- ✅ CDN super rápido
- ✅ Subdomínio grátis
- ✅ DDoS protection
- ✅ Analytics
- ✅ Pode adicionar domínio próprio

**URL resultante**: `https://mary-assistencia.pages.dev`

---

## 🏆 RECOMENDAÇÃO FINAL

### Para começar AGORA (melhor opção):
```
1. Hospede em NETLIFY (30 segundos)
   → mary-assistencia.netlify.app

2. Depois, compre/pegue domínio grátis no FREENOM
   → maryassistencia.ml (grátis)

3. Aponte Freenom para Netlify (2 minutos)
   → maryassistencia.ml → Netlify
```

**Resultado**: Domínio PRÓPRIO + Hospedagem PROFISSIONAL + GRÁTIS! 🎉

---

## 📋 Comparativa Rápida

| Plataforma | Hospedagem | Domínio | SSL | Facilidade | Custo |
|-----------|-----------|--------|-----|-----------|-------|
| **Netlify** | Grátis | `.netlify.app` | ✅ | Muito fácil | **Grátis** |
| **Vercel** | Grátis | `.vercel.app` | ✅ | Muito fácil | **Grátis** |
| **GitHub Pages** | Grátis | `github.io` | ✅ | Fácil | **Grátis** |
| **Freenom** | — | `.ml/.ga` | ❌ | Médio | **Grátis 1 ano** |
| **Cloudflare** | Grátis | `.pages.dev` | ✅ | Fácil | **Grátis** |

---

## 🚀 PASSO A PASSO: Netlify (30 segundos)

```bash
# Se for fazer via CLI (opcional):
npm install -g netlify-cli

# Fazer login
netlify login

# Deploy
netlify deploy --prod --dir=src

# Pronto! URL no console
```

Ou **simplesmente arraste a pasta `src/` no site da Netlify**!

---

## ❓ Dúvidas Frequentes

**P: Qual é a melhor opção?**  
R: Netlify + Freenom = Melhor custo-benefício (100% grátis)

**P: Quanto custa depois de grátis?**  
R: Netlify continua grátis (mesmo para sites profissionais)

**P: Posso usar meu próprio domínio?**  
R: Sim! Compre em outro lugar (namecheap, etc) e aponte para Netlify

**P: E se quiser hospedagem brasileira?**  
R: Considere Hostinger/Umbler depois (não é grátis)

---

## 📞 Próximos Passos

1. **Escolha uma opção** (recomendo Netlify)
2. **Deploy em 5 minutos**
3. **Compartilhe a URL** com clientes
4. **Depois** (opcional): Compre domínio próprio

---

**Seu site está pronto! 🚀**
