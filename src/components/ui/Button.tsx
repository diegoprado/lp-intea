import React, { ButtonHTMLAttributes } from 'react';
import Icon from './Icon';
import { IconName, IconSize } from './Icon';

type ButtonVariant = 'primary' | 'secondary' | 'active';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  leftIcon?: IconName;
  rightIcon?: IconName;
  iconSize?: IconSize;
  className?: string;
  size?: 'sm' | 'md';
}

/**
 * Componente Button - Botão de ação com estilos predefinidos
 *
 * Uso:
 * ```tsx
 * <Button variant="primary">Texto do botão</Button>
 * <Button variant="secondary" leftIcon="plus">Com ícone</Button>
 * ```
 *
 * Variantes disponíveis:
 * - primary: Fundo verde escuro com texto branco
 * - secondary: Transparente com borda branca
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
    ' rounded-full font-medium flex items-center gap-2 transition-colors cursor-pointer';

  const sizeStyles = {
    sm: 'py-2 px-3',
    md: 'py-4 px-6',
  };

  // Estilos específicos para cada variante
  const variantStyles = {
    primary: 'bg-intea-teal-darker text-white hover:bg-intea-teal-darker/80',
    secondary:
      'bg-transparent border-2 border-white text-white hover:bg-white/10',
    active: 'bg-white text-intea-teal-darker',
  };

  // Cor do ícone com base na variante
  const iconColor = 'white';

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
