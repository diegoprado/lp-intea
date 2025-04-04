# Configuração do Ngrok para Testes de Compartilhamento

Este guia explica como configurar e usar o ngrok para testar o compartilhamento do site em diferentes plataformas sociais.

## O que é o Ngrok?

Ngrok é uma ferramenta que cria um túnel seguro para seu servidor local, tornando-o acessível publicamente através de uma URL temporária. Isso é essencial para testar recursos como:

- Compartilhamento em redes sociais
- Visualização de meta tags Open Graph
- Teste em dispositivos móveis reais
- Webhooks de serviços externos

## Instalação

### 1. Instalar o Ngrok

**Opção 1: Usando NPM (recomendado)**

```bash
npm install -g ngrok
```

**Opção 2: Download direto**
Visite [ngrok.com/download](https://ngrok.com/download) e siga as instruções de instalação para seu sistema operacional.

### 2. Criar uma conta e autenticar

1. Crie uma conta gratuita em [dashboard.ngrok.com](https://dashboard.ngrok.com/signup)
2. Obtenha seu token de autenticação no dashboard
3. Configure o token:
   ```bash
   ngrok config add-authtoken SEU_TOKEN_AQUI
   ```

## Usando com o Projeto

### Método 1: Script NPM Dedicado

Nós já configuramos um script npm especial para desenvolvimento com ngrok:

```bash
# Primeiro, inicie o projeto com a configuração para ngrok
npm run dev:ngrok

# Em outro terminal, inicie o ngrok apontando para a porta usada pelo Vite (normalmente 5173)
ngrok http 5173
```

### Método 2: Linha de Comando Direta

```bash
# Terminal 1: Inicie o servidor de desenvolvimento
npm run dev

# Terminal 2: Inicie o túnel ngrok
ngrok http 5173
```

## Testando Compartilhamento

Depois de executar os comandos acima, o ngrok fornecerá uma URL pública (por exemplo: `https://exemplo-aleatorio.ngrok-free.app`).

Use esta URL para testar:

1. **Facebook**: Use o [Debugger de Compartilhamento](https://developers.facebook.com/tools/debug/)
2. **Twitter**: Use o [Card Validator](https://cards-dev.twitter.com/validator)
3. **WhatsApp**: Compartilhe a URL diretamente no WhatsApp
4. **LinkedIn**: Use o [Post Inspector](https://www.linkedin.com/post-inspector/)

## Solução de Problemas

### Erro de Host não Permitido

Se você ver um erro semelhante a:

```
Blocked request. This host is not allowed.
```

Isso significa que o Vite está bloqueando o domínio do ngrok. Nossa configuração já deve ter resolvido isso, mas se ainda ocorrer:

1. Verifique se está usando o script `npm run dev:ngrok`
2. Confirme que o arquivo `vite.config.ts` contém `.ngrok-free.app` na lista de `allowedHosts`

### CORS ou Outros Erros

Se você estiver enfrentando erros de CORS ou comportamentos inesperados com a URL do ngrok:

1. Tente limpar o cache do navegador
2. Use o modo de navegação anônima/privada
3. Verifique se está usando HTTPS (ngrok fornece por padrão)

## Limitações da Versão Gratuita

A versão gratuita do ngrok tem algumas limitações:

- URLs aleatórias a cada sessão
- Sessões expiram após algum tempo
- Número limitado de conexões

Para testes mais intensivos, considere atualizar para um plano pago do ngrok.
