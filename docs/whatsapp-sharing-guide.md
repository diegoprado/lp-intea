# Guia de Compartilhamento no WhatsApp

Este documento explica como corrigir problemas de compartilhamento no WhatsApp e garantir que suas imagens apareçam corretamente.

## Problemas Comuns

O WhatsApp pode não exibir as imagens de previsualização (Open Graph) por diversos motivos:

1. **Cache do WhatsApp**: O WhatsApp armazena em cache as prévias de URL por um período
2. **URLs temporárias**: URLs do ngrok podem causar problemas de cache
3. **Caminho incorreto para imagens**: As URLs das imagens precisam ser absolutas
4. **HTTPS/CORS**: Problemas de segurança podem bloquear o acesso às imagens
5. **Tamanho da imagem**: Imagens muito grandes podem ser rejeitadas

## Solução Passo a Passo

### 1. Usar a página de teste específica para WhatsApp

Nós criamos uma página de teste especializada que resolve muitos dos problemas comuns:

```
https://seu-site-ngrok.app/whatsapp-test.html
```

Esta página:

- Inclui meta tags otimizadas para WhatsApp
- Usa uma imagem estática em localização de fácil acesso
- Configura dinamicamente URLs absolutas
- Mostra informações de diagnóstico úteis

### 2. Limpar o cache do Facebook/WhatsApp

O WhatsApp usa a infraestrutura do Facebook para gerar as prévias. Para limpar o cache:

```bash
node scripts/update-og-cache.js
```

Esse script força o Facebook a recarregar a prévia da sua URL.

### 3. Testar com contatos diferentes

O WhatsApp armazena o cache de prévias por conversas. Tente:

- Enviar para um contato diferente
- Usar WhatsApp Web se estava testando no celular (ou vice-versa)
- Criar um grupo de teste com você mesmo

### 4. Verificar no Debugger do Facebook

O Facebook oferece uma ferramenta oficial para verificar problemas de Open Graph:

1. Acesse: https://developers.facebook.com/tools/debug/
2. Cole a URL do ngrok completa
3. Clique em "Depurar"
4. Verifique os erros ou avisos exibidos

### 5. Checklist de problemas

Se ainda houver problemas, verifique:

- [ ] A imagem está acessível publicamente (teste a URL diretamente no navegador)
- [ ] A URL da imagem é absoluta (começa com https://)
- [ ] O servidor está rodando com `npm run dev:ngrok`
- [ ] O ngrok está funcionando e a URL é válida
- [ ] A imagem tem menos de 300KB
- [ ] A imagem tem dimensões próximas a 1200x630px
- [ ] As meta tags são válidas (verifique com o debugger do Facebook)

## Otimizações Específicas para WhatsApp

Para optimizar as prévias no WhatsApp:

1. **Título curto**: Use `whatsAppTitle` mais curto que o título normal
2. **Imagem com contraste alto**: Use cores vibrantes e elementos grandes
3. **Descrição concisa**: 35-65 caracteres funciona melhor no WhatsApp
4. **Tags adicionais**: Inclua `og:image:alt` para acessibilidade

## Referências

- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- [WhatsApp Sharing Documentation](https://developers.facebook.com/docs/sharing/whatsapp/)
- [Meta Open Graph Protocol](https://ogp.me/)
