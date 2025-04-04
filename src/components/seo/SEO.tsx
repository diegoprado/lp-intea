import React from 'react';
import { Helmet } from 'react-helmet-async';

export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: string;
  locale?: string;
  noIndex?: boolean;
  // Novas propriedades para compartilhamento
  imageWidth?: number;
  imageHeight?: number;
  twitterCard?: 'summary' | 'summary_large_image';
  twitterCreator?: string;
  fbAppId?: string;
  whatsAppTitle?: string; // Título especial para WhatsApp
}

/**
 * Componente SEO - Otimiza a página para motores de busca e redes sociais
 *
 * IMAGENS POR PLATAFORMA:
 *
 * WhatsApp:
 * - Tamanho recomendado: 1200 x 630 pixels
 * - Formato: JPG ou PNG
 * - Relação de aspecto: 1.91:1
 * - Max: 300KB
 *
 * Facebook/Instagram:
 * - Tamanho ideal para feed: 1200 x 630 pixels
 * - Formato: JPG ou PNG
 * - Relação de aspecto: 1.91:1
 * - Max: 8MB
 *
 * Twitter:
 * - Para summary_large_image: 1200 x 628 pixels
 * - Para summary (quadrado): 800 x 800 pixels
 * - Formato: JPG, PNG ou GIF
 * - Max: 5MB
 *
 * LinkedIn:
 * - Tamanho recomendado: 1200 x 627 pixels
 * - Formato: JPG ou PNG
 * - Relação de aspecto: 1.91:1
 *
 * NOTAS:
 * 1. Crie uma imagem master em 1200 x 630px e use-a como base
 * 2. Tenha versões específicas para cada plataforma se necessário
 * 3. O texto na imagem deve ser mínimo (< 20% da área)
 * 4. Centralize elementos importantes para evitar cortes
 */
const SEO: React.FC<SEOProps> = ({
  title = 'Intea',
  description = 'Landing Page da Intea',
  keywords = [],
  image = '/images/og-image.jpg',
  url = 'https://intea.com.br',
  type = 'website',
  locale = 'pt_BR',
  noIndex = false,
  imageWidth = 1200,
  imageHeight = 630,
  twitterCard = 'summary_large_image',
  twitterCreator = '@intea',
  fbAppId = '123456789',
  whatsAppTitle, // Título opcional específico para WhatsApp
}) => {
  const siteTitle = `${title} | Intea`;
  const fullUrl = url.startsWith('http') ? url : `https://intea.com.br${url}`;

  // Obter URL base da janela atual para imagens
  const baseUrl =
    typeof window !== 'undefined'
      ? window.location.origin
      : 'https://intea.com.br';

  // Resolver caminhos de imagem para URL absoluto
  const defaultImage = image.startsWith('http') ? image : `${baseUrl}${image}`;

  // WhatsApp usa o 'og:title' mas pode ser mais curto que o título normal
  const whatsAppTitleFinal = whatsAppTitle || siteTitle;

  return (
    <Helmet>
      {/* Básico */}
      <title>{siteTitle}</title>
      <meta name='description' content={description} />
      {keywords.length > 0 && (
        <meta name='keywords' content={keywords.join(', ')} />
      )}
      <link rel='canonical' href={fullUrl} />

      {/* Open Graph / Facebook / Instagram / WhatsApp */}
      <meta property='og:type' content={type} />
      <meta property='og:title' content={whatsAppTitleFinal} />
      <meta property='og:description' content={description} />
      <meta property='og:url' content={fullUrl} />
      <meta property='og:image' content={defaultImage} />
      <meta property='og:image:width' content={imageWidth.toString()} />
      <meta property='og:image:height' content={imageHeight.toString()} />
      <meta property='og:locale' content={locale} />
      <meta property='og:site_name' content='Intea' />
      {fbAppId && <meta property='fb:app_id' content={fbAppId} />}

      {/* Twitter */}
      <meta name='twitter:card' content={twitterCard} />
      <meta name='twitter:title' content={siteTitle} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content={defaultImage} />
      <meta name='twitter:creator' content={twitterCreator} />
      <meta name='twitter:site' content={twitterCreator} />

      {/* WhatsApp específico - embora use og:tags, alguns ajustes ajudam */}
      <meta property='og:image:alt' content={description} />

      {/* Controle de Indexação */}
      {noIndex && <meta name='robots' content='noindex, nofollow' />}
    </Helmet>
  );
};

export default SEO;
