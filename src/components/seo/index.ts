/**
 * Componentes relacionados a SEO
 *
 * Este barril (barrel file) permite importar facilmente vários componentes de SEO de uma só vez:
 * import { SEO, JsonLd, PageSEO } from '@components/seo';
 */

export { default as SEO } from './SEO';
export { default as JsonLd } from './JsonLd';
export { default as PageSEO } from './PageSEO';

// Exportar tipos
export type { SEOProps } from './SEO';
