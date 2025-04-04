#!/usr/bin/env node

import fetch from 'node-fetch';
import readline from 'readline';
import chalk from 'chalk';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/**
 * Script para forçar a atualização do cache de Open Graph em redes sociais
 * Útil quando você fez alterações nas meta tags ou imagens e quer testar
 * o compartilhamento no WhatsApp sem esperar pela atualização natural do cache.
 *
 * Uso: node scripts/update-og-cache.js
 */

console.log(chalk.blue('=== Atualização de Cache de Compartilhamento ==='));
console.log(
  chalk.grey(
    'Este script ajuda a limpar o cache de previsualização usado por WhatsApp, Facebook, etc.'
  )
);
console.log('');

async function refreshFacebookCache(url) {
  try {
    console.log(chalk.grey(`Limpando cache do Facebook para: ${url}`));

    const apiUrl = `https://graph.facebook.com/?id=${encodeURIComponent(
      url
    )}&scrape=true`;
    const response = await fetch(apiUrl, { method: 'POST' });

    if (response.ok) {
      const data = await response.json();
      console.log(chalk.green('✓ Cache do Facebook limpo com sucesso!'));
      console.log(chalk.grey('  Isso afeta o Facebook, Instagram e WhatsApp'));
      return true;
    } else {
      console.log(
        chalk.red(
          `✗ Erro ao limpar cache: ${response.status} ${response.statusText}`
        )
      );
      return false;
    }
  } catch (error) {
    console.error(chalk.red('✗ Erro ao limpar cache:'), error.message);
    return false;
  }
}

async function checkTwitterCard(url) {
  console.log(chalk.grey(`\nPara verificar o cartão do Twitter, visite:`));
  console.log(
    chalk.blue(
      `https://cards-dev.twitter.com/validator?url=${encodeURIComponent(url)}`
    )
  );
}

async function main() {
  rl.question(
    chalk.yellow(
      'Digite a URL completa do ngrok para atualizar (ex: https://exemplo.ngrok-free.app): '
    ),
    async (ngrokUrl) => {
      if (!ngrokUrl.startsWith('http')) {
        console.log(chalk.red('A URL deve começar com http:// ou https://'));
        rl.close();
        return;
      }

      console.log('');
      const success = await refreshFacebookCache(ngrokUrl);

      if (success) {
        console.log('');
        console.log(chalk.yellow('Dicas para testar no WhatsApp:'));
        console.log(
          '1. Aguarde alguns minutos para que o cache seja completamente atualizado'
        );
        console.log(
          '2. Envie a URL para um contato diferente do que foi usado antes'
        );
        console.log(
          '3. Ou teste no WhatsApp Web se estava testando no celular (e vice-versa)'
        );
        console.log('');

        await checkTwitterCard(ngrokUrl);
      }

      rl.close();
    }
  );
}

main().catch((error) => {
  console.error(chalk.red('Erro:'), error);
  rl.close();
});
