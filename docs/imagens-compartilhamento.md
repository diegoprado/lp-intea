# Guia de Imagens para Compartilhamento Social

Este documento fornece orientações detalhadas sobre as imagens necessárias para compartilhamento nas redes sociais.

## Tamanhos Recomendados por Rede Social

### WhatsApp

- **Dimensões**: 1200 x 630 pixels
- **Formato**: JPG ou PNG
- **Relação de aspecto**: 1.91:1
- **Tamanho máximo**: 300KB
- **Dicas específicas**:
  - O WhatsApp mostra uma prévia pequena, então use elementos visuais grandes
  - Evite texto pequeno que ficará ilegível na miniatura

### Facebook/Instagram

- **Dimensões**: 1200 x 630 pixels
- **Formato**: JPG ou PNG
- **Relação de aspecto**: 1.91:1
- **Tamanho máximo**: 8MB
- **Dicas específicas**:
  - Facebook recorta as imagens em formato quadrado nos feeds móveis
  - Mantenha elementos importantes no centro
  - Limite o texto a menos de 20% da área total da imagem

### Twitter

- **Para summary_large_image**: 1200 x 628 pixels
- **Para summary (quadrado)**: 800 x 800 pixels
- **Formato**: JPG, PNG ou GIF
- **Tamanho máximo**: 5MB
- **Dicas específicas**:
  - O formato "summary_large_image" oferece mais visibilidade
  - Images com fundo colorido tendem a se destacar no feed
  - Twitter trunca a descrição, então coloque informações importantes na imagem

### LinkedIn

- **Dimensões**: 1200 x 627 pixels
- **Formato**: JPG ou PNG
- **Relação de aspecto**: 1.91:1
- **Tamanho máximo**: 5MB
- **Dicas específicas**:
  - LinkedIn prefere imagens profissionais e minimalistas
  - Evite texto demais na imagem

## Nomenclatura de Arquivos Recomendada

Para organizar suas imagens de compartilhamento, use a seguinte convenção:

```
og-[página]-[plataforma].[formato]
```

Exemplo:

- `og-home-all.jpg` - Imagem 1200x630 universal para todas plataformas
- `og-home-twitter.jpg` - Versão específica para Twitter
- `og-home-whatsapp.jpg` - Versão otimizada para WhatsApp (mais leve)

## Diretório de Imagens

Todas as imagens de compartilhamento devem ser armazenadas em:

```
/public/images/sharing/
```

## Lista de Verificação para Imagens de Compartilhamento

- [ ] Imagem base criada em 1200x630 pixels
- [ ] Versão comprimida para WhatsApp (<300KB)
- [ ] Elementos importantes centrados para evitar recorte
- [ ] Texto ocupando menos de 20% da área total
- [ ] Logo da empresa visível mas não dominante
- [ ] Sem texto pequeno ilegível em miniaturas
- [ ] Cores consistentes com a identidade visual
- [ ] Alto contraste para melhor legibilidade

## Ferramentas Recomendadas

- **Criação**: Figma, Adobe Photoshop, Canva
- **Compressão**: TinyPNG, ImageOptim
- **Teste**: [Shared Link Debugger do Facebook](https://developers.facebook.com/tools/debug/)
- **Verificação OG**: [Twitter Card Validator](https://cards-dev.twitter.com/validator)

## Exemplos de Boas Práticas

1. **Simplicidade** - Evite imagens muito complexas
2. **Relevância** - A imagem deve representar o conteúdo da página
3. **Consistência** - Manter identidade visual em todas as imagens
4. **Acessibilidade** - Use alto contraste e evite depender apenas de cores

## Informações Adicionais

Para testar como sua página aparece quando compartilhada:

1. Facebook: https://developers.facebook.com/tools/debug/
2. Twitter: https://cards-dev.twitter.com/validator
3. LinkedIn: https://www.linkedin.com/post-inspector/
4. WhatsApp: Teste enviando a URL para um contato ou grupo de teste
