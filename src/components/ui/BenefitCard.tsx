import React from 'react';
import Icon from './Icon';
import { IconName } from './Icon';

export type BenefitCardColor = 'teal' | 'orange' | 'pink' | 'violet';

interface BenefitCardProps {
  icon: IconName;
  title: string;
  text: string;
  link?: string;
  linkText?: string;
  color: BenefitCardColor;
  className?: string;
}

/**
 * Componente de card para a seção de benefícios
 * Recebe ícone, título, texto, link opcional e cor de fundo
 */
const BenefitCard: React.FC<BenefitCardProps> = ({
  icon,
  title,
  text,
  link,
  linkText = 'Ver Mais',
  color,
  className = '',
}) => {
  const colorClasses = {
    teal: 'bg-intea-teal-light',
    orange: 'bg-intea-orange',
    pink: 'bg-intea-pink-light',
    violet: 'bg-intea-violet-light',
  };

  const bgColorClass = colorClasses[color];

  return (
    <div
      className={`rounded-3xl p-6 text-white relative overflow-hidden ${bgColorClass} ${className}`}
    >
      <div className='absolute bottom-0 left-0 right-0 h-24 w-full h-full'>
        {/* <svg
          width='100%'
          height='100%'
          viewBox='0 0 400 200'
          preserveAspectRatio='none'
        >
          <path
            d='M0,192 C80,160 140,96 200,96 C260,96 320,160 400,192 L400,200 L0,200 Z'
            fill='white'
          />
        </svg> */}
        <img
          className='w-full h-full w-3xs h-3xs absolute bottom-0 left-0'
          src={`/images/benefits-card/${color}.png`}
          alt='wave'
        />
      </div>

      <div className='relative z-10 flex flex-col gap-4'>
        <div className='flex gap-3 items-center'>
          <Icon name={icon} size='lg' color='white' />
          <h3 className='text-2xl font-bold'>{title}</h3>
        </div>

        <p className='text-lg'>{text}</p>

        {link && (
          <a
            href={link}
            className='inline-flex items-center gap-2 font-light hover:underline self-end mt-4'
            aria-label={`${linkText} sobre ${title}`}
          >
            {linkText}
            <div className='flex items-center justify-center rounded-full bg-white p-2 rotate-225'>
              <Icon name='arrow-down' size='sm' color='black' />
            </div>
          </a>
        )}
      </div>
    </div>
  );
};

export default BenefitCard;
