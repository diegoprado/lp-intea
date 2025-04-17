import React, { ButtonHTMLAttributes } from 'react';
import Icon from './Icon';
import { IconName, IconSize } from './Icon';

// Adicionando variantes primárias e ativas específicas por cor
export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'active' // Variante ativa padrão (teal)
  | 'active-teal' // Alias explícito para active
  | 'active-orange'
  | 'active-pink'
  | 'active-violet'
  | 'primary-teal'
  | 'primary-orange'
  | 'primary-pink'
  | 'primary-violet';

export type ButtonSize = 'sm' | 'md';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  leftIcon?: IconName;
  rightIcon?: IconName;
  iconSize?: IconSize;
  size?: ButtonSize;
  className?: string;
}

/**
 * Componente Button - Botão de ação com estilos predefinidos
 *
 * Uso:
 * ```tsx
 * <Button variant="primary">Texto do botão</Button>
 * <Button variant="secondary" leftIcon="plus">Com ícone</Button>
 * <Button variant="primary-pink">Pink Button</Button>
 * <Button variant="active">Filtro Ativo</Button>
 * ```
 *
 * Variantes disponíveis:
 * - primary: Fundo verde escuro padrão
 * - secondary: Transparente com borda branca
 * - active: Fundo branco com texto teal (padrão ativo)
 * - active-teal, active-orange, active-pink, active-violet: Fundo branco com texto da cor correspondente
 * - primary-teal, primary-orange, primary-pink, primary-violet: Fundo da cor correspondente com texto branco
 */
const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  leftIcon,
  rightIcon,
  iconSize = 'sm',
  size = 'md',
  className = '',
  ...props
}) => {
  // Estilos base para todos os botões
  const baseStyles =
    'rounded-full font-medium flex items-center justify-center gap-2 transition-colors cursor-pointer';

  const sizeStyles: Record<ButtonSize, string> = {
    sm: 'py-2 px-3',
    md: 'py-4 px-6',
  };

  // Mapeamento de cores para texto/ícone das variantes ativas
  const activeColorMap: Record<string, string> = {
    teal: 'text-intea-teal-darker',
    orange: 'text-intea-orange-darkest',
    pink: 'text-intea-pink-darkest',
    violet: 'text-intea-violet-darkest',
  };

  // Estilos específicos para cada variante
  const variantStyles: Record<ButtonVariant, string> = {
    primary: 'bg-intea-teal-darker text-white hover:bg-intea-teal-darker/80',
    secondary:
      'bg-transparent border-2 border-white text-white hover:bg-white/10',
    // Variantes Ativas
    active: `bg-white ${activeColorMap.teal}`,
    'active-teal': `bg-white ${activeColorMap.teal}`,
    'active-orange': `bg-white ${activeColorMap.orange}`,
    'active-pink': `bg-white ${activeColorMap.pink}`,
    'active-violet': `bg-white ${activeColorMap.violet}`,
    // Variantes Primárias Coloridas
    'primary-teal':
      'bg-intea-teal-darkest text-white hover:bg-intea-teal-darkest/80',
    'primary-orange':
      'bg-intea-orange-darkest text-intea-orange-lightest hover:bg-intea-orange-darkest/80',
    'primary-pink':
      'bg-intea-pink-darkest text-intea-pink-lightest hover:bg-intea-pink-darkest/80',
    'primary-violet':
      'bg-intea-violet-darkest text-intea-violet-lightest hover:bg-intea-violet-darkest/80',
  };

  // Cor do ícone com base na variante
  const getIconColor = (variant: ButtonVariant): string => {
    if (variant.startsWith('active')) {
      const colorKey = variant.split('-')[1] || 'teal'; // 'teal' é o padrão para 'active'
      // Mapeia a chave de cor para a variável CSS correspondente
      const cssVarMap: Record<string, string> = {
        teal: 'var(--color-intea-teal-darker)',
        orange: 'var(--color-intea-orange-darkest)',
        pink: 'var(--color-intea-pink-darkest)',
        violet: 'var(--color-intea-violet-darkest)',
      };
      return cssVarMap[colorKey] || 'var(--color-intea-teal-darker)'; // Fallback
    }
    return 'white'; // Cor padrão para variantes não ativas
  };

  const iconColor = getIconColor(variant);

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {leftIcon && <Icon name={leftIcon} size={iconSize} color={iconColor} />}
      {children}
      {rightIcon && <Icon name={rightIcon} size={iconSize} color={iconColor} />}
    </button>
  );
};

export default Button;
