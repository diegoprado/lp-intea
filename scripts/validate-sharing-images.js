/**
 * Script para validar se todas as imagens de compartilhamento existem
 * Execute com: node scripts/validate-sharing-images.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import chalk from 'chalk';

// Obter o diretório atual usando ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Diretório base
const publicDir = path.resolve(__dirname, '../public');
const sharingDir = path.join(publicDir, 'images/sharing');

// Função para verificar se um arquivo existe
const fileExists = (filePath) => {
  try {
    return fs.existsSync(filePath);
  } catch (err) {
    return false;
  }
};

// Carregar configuração de SEO
const seoConfigPath = path.resolve(__dirname, '../src/config/seo.ts');
let seoConfig;

try {
  // Extrair conteúdo do arquivo TypeScript
  const configContent = fs.readFileSync(seoConfigPath, 'utf8');

  // Extrair caminhos de imagem com regex
  const extractPaths = (content) => {
    const regex = /'\/images\/sharing\/([^']+)'/g;
    const paths = [];
    let match;

    while ((match = regex.exec(content)) !== null) {
      paths.push(`/images/sharing/${match[1]}`);
    }

    return paths;
  };

  const imagePaths = extractPaths(configContent);

  console.log(chalk.blue('=== Validação de Imagens de Compartilhamento ==='));
  console.log(chalk.gray(`Diretório de imagens: ${sharingDir}`));
  console.log(
    chalk.gray(`Total de imagens referenciadas: ${imagePaths.length}`)
  );
  console.log('');

  // Verificar cada caminho
  let missingCount = 0;
  imagePaths.forEach((imgPath) => {
    const fullPath = path.join(publicDir, imgPath);
    const exists = fileExists(fullPath);

    if (exists) {
      console.log(chalk.green(`✓ ${imgPath}`));

      // Verificar o tamanho
      const stats = fs.statSync(fullPath);
      const fileSizeKB = Math.round(stats.size / 1024);
      if (imgPath.includes('whatsapp') && fileSizeKB > 300) {
        console.log(
          chalk.yellow(
            `  ⚠️ Imagem para WhatsApp muito grande: ${fileSizeKB}KB (deve ser < 300KB)`
          )
        );
      } else {
        console.log(chalk.gray(`  Tamanho: ${fileSizeKB}KB`));
      }
    } else {
      console.log(chalk.red(`✗ ${imgPath} (FALTANDO)`));
      missingCount++;
    }
  });

  console.log('');
  if (missingCount > 0) {
    console.log(chalk.red(`⚠️ ${missingCount} imagens estão faltando!`));
    console.log(
      chalk.yellow(
        'Por favor, crie as imagens faltantes usando as diretrizes em docs/imagens-compartilhamento.md'
      )
    );
    process.exit(1);
  } else {
    console.log(
      chalk.green('✓ Todas as imagens de compartilhamento estão presentes!')
    );
    process.exit(0);
  }
} catch (error) {
  console.error(chalk.red('Erro ao validar imagens de compartilhamento:'));
  console.error(error);
  process.exit(1);
}
