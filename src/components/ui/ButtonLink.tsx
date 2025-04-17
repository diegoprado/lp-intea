import React, { AnchorHTMLAttributes } from 'react';
import Icon from './Icon';
import { IconName, IconSize } from './Icon';

// Adicionando variantes primárias específicas por cor
type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'primary-teal'
  | 'primary-orange'
  | 'primary-pink'
  | 'primary-violet';

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: ButtonVariant;
  leftIcon?: IconName;
  rightIcon?: IconName;
  iconSize?: IconSize;
  className?: string;
  href: string;
}

/**
 * Componente ButtonLink - Link com aparência de botão
 *
 * Uso:
 * ```tsx
 * <ButtonLink href="/contato" variant="primary">Contato</ButtonLink>
 * <ButtonLink href="/sobre" variant="secondary" leftIcon="info">Sobre nós</ButtonLink>
 * <ButtonLink href="/teal" variant="primary-teal">Teal Button</ButtonLink>
 * ```
 *
 * Variantes disponíveis:
 * - primary: Fundo verde escuro padrão com texto branco
 * - secondary: Transparente com borda branca
 * - primary-teal: Fundo teal com texto branco
 * - primary-orange: Fundo laranja com texto branco
 * - primary-pink: Fundo rosa com texto branco
 * - primary-violet: Fundo violeta com texto branco
 */
const ButtonLink: React.FC<ButtonLinkProps> = ({
  children,
  variant = 'primary',
  leftIcon,
  rightIcon,
  iconSize = 'sm',
  className = '',
  href,
  ...props
}) => {
  const baseStyles =
    'py-4 px-6 rounded-full font-medium flex items-center gap-2 transition-colors cursor-pointer';

  const variantStyles: Record<ButtonVariant, string> = {
    primary: 'bg-intea-teal-darkest text-white hover:bg-intea-teal-darkest/80',
    secondary:
      'bg-transparent border-2 border-white text-white hover:bg-white/10',
    'primary-teal':
      'bg-intea-teal-darkest text-white hover:bg-intea-teal-darkest/80',
    'primary-orange':
      'bg-intea-orange-darkest text-white hover:bg-intea-orange-darkest/80',
    'primary-pink':
      'bg-intea-pink-darkest text-white hover:bg-intea-pink-darkest/80',
    'primary-violet':
      'bg-intea-violet-darkest text-white hover:bg-intea-violet-darkest/80',
  };

  const iconColor = 'white';

  return (
    <a
      href={href}
      className={`${baseStyles} ${className} ${variantStyles[variant]}`}
      {...props}
    >
      {leftIcon && <Icon name={leftIcon} size={iconSize} color={iconColor} />}
      {children}
      {rightIcon && <Icon name={rightIcon} size={iconSize} color={iconColor} />}
    </a>
  );
};

export default ButtonLink;
