import React, { AnchorHTMLAttributes } from 'react';
import Icon from './Icon';
import { IconName, IconSize } from './Icon';

type ButtonVariant = 'primary' | 'secondary';

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
 * ```
 *
 * Variantes disponíveis:
 * - primary: Fundo verde escuro com texto branco
 * - secondary: Transparente com borda branca
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
  // Estilos base para todos os botões
  const baseStyles =
    'py-4 px-6 rounded-full font-medium flex items-center gap-2 transition-colors cursor-pointer';

  // Estilos específicos para cada variante
  const variantStyles = {
    primary: 'bg-intea-teal-darker text-white hover:bg-intea-teal-darker/80',
    secondary:
      'bg-transparent border-2 border-white text-white hover:bg-white/10',
  };

  // Cor do ícone com base na variante
  const iconColor = 'white';

  return (
    <a
      href={href}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {leftIcon && <Icon name={leftIcon} size={iconSize} color={iconColor} />}
      {children}
      {rightIcon && <Icon name={rightIcon} size={iconSize} color={iconColor} />}
    </a>
  );
};

export default ButtonLink;
