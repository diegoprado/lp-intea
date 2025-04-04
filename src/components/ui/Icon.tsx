import React, { useEffect, useState } from 'react';

// A lista de nomes de ícones deve corresponder aos arquivos SVG na pasta /public/svgs/
// Por exemplo, 'plus' corresponde a '/svgs/plus.svg'
export type IconName = string;

// Tamanhos predefinidos para ícones
export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

// Mapeamento de tamanhos para classes Tailwind
const SIZE_CLASSES: Record<IconSize, string> = {
  xs: 'w-3 h-3', // 12px
  sm: 'w-4 h-4', // 16px
  md: 'w-6 h-6', // 24px
  lg: 'w-8 h-8', // 32px
  xl: 'w-12 h-12', // 48px
};

interface IconProps {
  name: IconName;
  size?: IconSize;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Componente Icon - Carrega ícones SVG da pasta /public/svgs/
 *
 * Uso:
 * ```tsx
 * <Icon name="plus" size="md" color="white" />
 * ```
 *
 * Tamanhos disponíveis:
 * - xs: 12px
 * - sm: 16px
 * - md: 24px (padrão)
 * - lg: 32px
 * - xl: 48px
 *
 * Este componente busca o SVG e o insere diretamente no DOM,
 * permitindo que a propriedade color substitua o fill do SVG.
 */
const Icon: React.FC<IconProps> = ({
  name,
  size = 'md',
  color = 'currentColor',
  className = '',
  style,
}) => {
  const [svgContent, setSvgContent] = useState<string | null>(null);

  useEffect(() => {
    // Função para buscar o conteúdo do SVG
    const fetchSvg = async () => {
      try {
        const response = await fetch(`/svgs/${name}.svg`);
        if (!response.ok) {
          console.error(`Erro ao carregar o ícone: ${name}`);
          return;
        }

        const svgText = await response.text();
        setSvgContent(svgText);
      } catch (error) {
        console.error(`Erro ao carregar o ícone ${name}:`, error);
      }
    };

    fetchSvg();
  }, [name]);

  // Classes de tamanho com base no tamanho selecionado
  const sizeClass = SIZE_CLASSES[size];

  // Se ainda não carregou o SVG, mostra um placeholder
  if (!svgContent) {
    return <span className={`inline-block ${sizeClass} ${className}`} />;
  }

  // Substituir a cor no SVG (fill="currentColor" ou qualquer cor) com a cor desejada
  let modifiedSvg = svgContent;
  if (color !== 'currentColor') {
    // Substitui fill="..." por fill={color}
    modifiedSvg = modifiedSvg.replace(/fill="[^"]*"/g, `fill="${color}"`);
    // Também substitui o caso sem valor de fill
    modifiedSvg = modifiedSvg.replace(/fill='[^']*'/g, `fill='${color}'`);
    // Para SVGs que não especificam fill, adiciona o atributo ao elemento path
    modifiedSvg = modifiedSvg.replace(/<path\s/g, `<path fill="${color}" `);
  }

  // Modifica o SVG para remover width/height fixos e garantir que preencha o container
  modifiedSvg = modifiedSvg.replace(/<svg([^>]*)>/, (match, attributes) => {
    // Remove atributos width e height
    const cleanedAttrs = attributes
      .replace(/width="[^"]*"/g, '')
      .replace(/width='[^']*'/g, '')
      .replace(/height="[^"]*"/g, '')
      .replace(/height='[^']*'/g, '');

    // Adiciona atributos para garantir que o SVG preencha o container
    return `<svg${cleanedAttrs} width="100%" height="100%" preserveAspectRatio="xMidYMid meet">`;
  });

  return (
    <span
      className={`inline-flex items-center justify-center ${sizeClass} ${className}`}
      dangerouslySetInnerHTML={{ __html: modifiedSvg }}
      style={style}
    />
  );
};

export default Icon;
