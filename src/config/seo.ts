export const seoConfig = {
  // Configurações gerais
  siteName: 'Intea',
  siteUrl: 'https://intea.com.br',

  // Valores padrão
  defaultTitle: 'Intea - Soluções Inovadoras',
  defaultDescription:
    'Conheça a Intea e nossas soluções inovadoras para o seu negócio',
  defaultImage: '/images/sharing/og-home-all.jpg',
  defaultLocale: 'pt_BR',
  defaultType: 'website',

  // Imagens por plataforma (novas configurações)
  sharingImages: {
    whatsapp: '/images/sharing/og-home-whatsapp.jpg', // Versão mais leve para WhatsApp (<300KB)
    twitter: '/images/sharing/og-home-twitter.jpg', // Versão para Twitter
    facebook: '/images/sharing/og-home-facebook.jpg', // Versão para Facebook/Instagram
    linkedin: '/images/sharing/og-home-linkedin.jpg', // Versão para LinkedIn
  },

  // Social Media
  twitterHandle: '@intea',
  facebookAppId: '123456789',

  // Páginas
  pages: {
    home: {
      path: '/',
      title: 'Início',
      description: 'Página inicial da Intea com nossas principais soluções',
      image: '/images/sharing/og-home-all.jpg', // Imagem específica para esta página
    },
    about: {
      path: '/sobre',
      title: 'Sobre Nós',
      description: 'Conheça mais sobre a história e os valores da Intea',
      image: '/images/sharing/og-about-all.jpg',
    },
    services: {
      path: '/servicos',
      title: 'Nossos Serviços',
      description: 'Veja todos os serviços e soluções oferecidos pela Intea',
      image: '/images/sharing/og-services-all.jpg',
    },
    contact: {
      path: '/contato',
      title: 'Entre em Contato',
      description: 'Entre em contato com a equipe da Intea',
      image: '/images/sharing/og-contact-all.jpg',
    },
  },

  // Schemas estruturados
  organizationSchema: {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Intea',
    url: 'https://intea.com.br',
    logo: 'https://intea.com.br/images/logo.png',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+55-11-1234-5678',
      contactType: 'customer service',
      availableLanguage: ['Portuguese', 'English'],
    },
    sameAs: [
      'https://facebook.com/intea',
      'https://twitter.com/intea',
      'https://instagram.com/intea',
      'https://linkedin.com/company/intea',
    ],
  },
};

export default seoConfig;
