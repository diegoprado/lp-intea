import React from 'react';
import { Helmet } from 'react-helmet-async';

interface JsonLdProps {
  data: Record<string, unknown>;
}

/**
 * Componente para adicionar dados estruturados JSON-LD para SEO
 * Melhora a interpretação dos motores de busca sobre o conteúdo da página
 */
const JsonLd: React.FC<JsonLdProps> = ({ data }) => {
  return (
    <Helmet>
      <script type='application/ld+json'>{JSON.stringify(data)}</script>
    </Helmet>
  );
};

export default JsonLd;
