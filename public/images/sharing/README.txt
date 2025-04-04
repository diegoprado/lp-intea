# Imagens para Compartilhamento Social

Este diretório contém todas as imagens usadas para compartilhamento em redes sociais.

## Imagens Necessárias

### Páginas
- og-home-all.jpg (1200x630px) - Imagem universal para Home
- og-about-all.jpg (1200x630px) - Imagem universal para página Sobre
- og-services-all.jpg (1200x630px) - Imagem universal para página Serviços
- og-contact-all.jpg (1200x630px) - Imagem universal para página Contato

### Imagens Específicas por Plataforma
- og-home-whatsapp.jpg (1200x630px, <300KB) - Otimizada para WhatsApp
- og-home-twitter.jpg (1200x628px) - Otimizada para Twitter
- og-home-facebook.jpg (1200x630px) - Otimizada para Facebook/Instagram
- og-home-linkedin.jpg (1200x627px) - Otimizada para LinkedIn

## Instruções

1. Consulte o guia completo em `docs/imagens-compartilhamento.md`
2. Use o script de validação `node scripts/validate-sharing-images.js` 
   para verificar se todas as imagens necessárias estão presentes

## Problemas com WhatsApp

Se as imagens não aparecerem no WhatsApp quando compartilhar via ngrok:

1. Teste a página especial de preview: `https://seu-site-ngrok.app/whatsapp-test.html`
2. Use o script para limpar o cache: `node scripts/update-og-cache.js`
3. Verifique se a URL da imagem está completa e acessível publicamente
4. Compartilhe com um contato diferente (WhatsApp armazena previews por URL)
5. Reinicie seu servidor com `npm run dev:ngrok`

## Dicas para Design

- Mantenha elementos importantes no centro da imagem
- Use texto grande e legível (menos de 20% da área total)
- Use cores que contrastem bem
- Inclua o logo da empresa em tamanho adequado
- Crie versões específicas para cada plataforma considerando suas especificidades 