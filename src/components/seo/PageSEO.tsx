import React from 'react';
import SEO from './SEO';
import seoConfig from '../../config/seo';

interface PageSEOProps {
  pageName: keyof typeof seoConfig.pages;
  platform?: 'all' | 'whatsapp' | 'twitter' | 'facebook' | 'linkedin';
  keywords?: string[];
  additionalDescription?: string;
}

/**
 * Componente para gerenciar SEO por página, com suporte a imagens específicas por plataforma
 *
 * Uso:
 * ```tsx
 * <PageSEO
 *   pageName="home"
 *   platform="whatsapp"
 *   keywords={['intea', 'tecnologia']}
 * />
 * ```
 */
const PageSEO: React.FC<PageSEOProps> = ({
  pageName,
  platform = 'all',
  keywords = [],
  additionalDescription = '',
}) => {
  // Obter dados da página da configuração central
  const pageConfig = seoConfig.pages[pageName];

  if (!pageConfig) {
    console.error(`Configuração para página "${pageName}" não encontrada`);
    return null;
  }

  // Determinar qual imagem usar com base na plataforma
  let imageUrl = pageConfig.image || seoConfig.defaultImage;

  // Se houver uma imagem específica para a plataforma, use-a
  if (platform !== 'all' && seoConfig.sharingImages[platform]) {
    imageUrl = seoConfig.sharingImages[platform];
  }

  // Construir descrição completa
  const description = additionalDescription
    ? `${pageConfig.description} ${additionalDescription}`
    : pageConfig.description;

  // Para WhatsApp, podemos usar um título mais curto
  const whatsAppTitle =
    platform === 'whatsapp' ? `Intea - ${pageConfig.title}` : undefined;

  return (
    <SEO
      title={pageConfig.title}
      description={description}
      keywords={keywords}
      image={imageUrl}
      url={pageConfig.path}
      fbAppId={seoConfig.facebookAppId}
      twitterCreator={seoConfig.twitterHandle}
      whatsAppTitle={whatsAppTitle}
      imageWidth={1200}
      imageHeight={630}
      twitterCard={platform === 'twitter' ? 'summary_large_image' : undefined}
    />
  );
};

export default PageSEO;
