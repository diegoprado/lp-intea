import Icon from '@/components/ui/Icon';
import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import ButtonLink from '@/components/ui/ButtonLink';

interface BenefitCardProps {
  title: string;
  color: string;
  subtitle1: string;
  description1: string;
  subtitle2: string;
  description2: string;
  icon: string;
  isEven?: boolean;
  illustration: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({
  title,
  color,
  subtitle1,
  description1,
  subtitle2,
  description2,
  icon,
  isEven = false,
  illustration,
}) => {
  const bgColorMap: { [key: string]: string } = {
    teal: 'bg-intea-teal',
    orange: 'bg-intea-orange',
    pink: 'bg-intea-pink',
    violet: 'bg-intea-violet-card',
  };

  const iconColorMap: { [key: string]: string } = {
    teal: 'var(--color-intea-teal)',
    orange: 'var(--color-intea-orange)',
    pink: 'var(--color-intea-pink)',
    violet: 'var(--color-intea-violet)',
  };

  const titleColorMap: { [key: string]: string } = {
    teal: 'text-intea-teal-darkest',
    orange: 'text-intea-orange-darkest',
    pink: 'text-intea-pink-darkest',
    violet: 'text-intea-violet-darkest',
  };

  const buttonVariantMap: {
    [key: string]:
      | 'primary-teal'
      | 'primary-orange'
      | 'primary-pink'
      | 'primary-violet';
  } = {
    teal: 'primary-teal',
    orange: 'primary-orange',
    pink: 'primary-pink',
    violet: 'primary-violet',
  };

  const bgColor = bgColorMap[color] || 'intea-teal';
  const buttonVariant = buttonVariantMap[color];

  return (
    <div
      className={`relative ${
        isEven ? 'ml-auto' : ''
      } w-full lg:max-w-[750px] 2xl:max-w-[1075px]`}
    >
      <div
        className={`${bgColor} rounded-3xl p-8 2xl:p-12 text-white shadow-lg flex flex-col gap-4 w-full relative z-10 min-h-[350px] bg-cover lg:bg-contain`}
        style={{
          backgroundImage: `url(/images/benefits-card/spiral-${color}.png)`,

          backgroundPosition: 'center right',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className='flex justify-between items-center'>
          <h3
            className={`text-2xl xl:text-5xl 2xl:text-7xl font-bold ${titleColorMap[color]} leading-[80px]`}
          >
            {title}
          </h3>
          <div className='rounded-full bg-white bg-opacity-20 w-16 h-16 flex items-center justify-center'>
            <Icon name={icon} size='lg' color={iconColorMap[color]} />
          </div>
        </div>

        <div className='flex flex-col gap-4'>
          <div className='flex flex-col gap-4'>
            <h4 className='xl:text-2xl 2xl:text-4xl font-bold leading-11'>
              {subtitle1}
            </h4>
            <p className='text-white font-regular text-opacity-90 xl:text-xl 2xl:text-2xl'>
              {description1}
            </p>
          </div>

          <div className='flex flex-col gap-4'>
            <h4 className='xl:text-2xl 2xl:text-4xl font-bold leading-11'>
              {subtitle2}
            </h4>
            <p className='text-white font-regular text-opacity-90 xl:text-xl 2xl:text-2xl'>
              {description2}
            </p>
          </div>
        </div>
        <div className='flex justify-start'>
          <ButtonLink
            href='#contact'
            variant={buttonVariant}
            rightIcon='arrow-right'
            className='mt-8'
          >
            Veja mais benefícios {title.toLowerCase()}
          </ButtonLink>
        </div>
      </div>

      <div
        className={`hidden lg:flex absolute top-1/2 -translate-y-1/2 ${
          isEven
            ? 'lg:left-[-70%] 2xl:left-[-60%]'
            : 'lg:right-[-70%] 2xl:right-[-60%]'
        }`}
      >
        <img
          src={illustration}
          alt='illustration'
          className='w-full lg:max-w-[700px] 2xl:max-w-[800px]'
        />
      </div>
    </div>
  );
};

const cards = [
  {
    title: 'Para Pacientes',
    color: 'teal',
    subtitle1: 'Terapia Individualizada',
    description1:
      'Acompanhamento personalizado, com foco nas necessidades específicas de cada indivíduo.',
    subtitle2: 'Monitoramento Contínuo',
    description2:
      'Registro detalhado do progresso, permitindo ajustes rápidos nas intervenções.',
    icon: 'user-single',
    illustration: '/images/plafform-benefits/illustration-1.svg',
  },
  {
    title: 'Para Famílias',
    color: 'orange',
    subtitle1: 'Orientação e Empoderamento',
    description1:
      'Acesso a informações claras e organizadas, facilitando a tomada de decisões.',
    subtitle2: 'Facilidade de Uso',
    description2:
      'Registro detalhado do progresso, permitindo ajustes rápidos nas intervenções.',
    icon: 'user-triple',
    illustration: '/images/plafform-benefits/illustration-2.svg',
  },
  {
    title: 'Para Profissionais',
    color: 'pink',
    subtitle1: 'Integração e Colaboração',
    description1:
      'Ferramentas para trabalho em equipe, com compartilhamento de informações em tempo real.',
    subtitle2: 'Eficiência no Atendimento',
    description2:
      'Redução de tempo gasto com burocracia e organização de documentos.',
    icon: 'hospital',
    illustration: '/images/plafform-benefits/illustration-3.svg',
  },
  {
    title: 'Para a Sociedade',
    color: 'violet',
    subtitle1: 'Inclusão e Acesso',
    description1:
      'Promoção da garantia de direitos e acesso a serviços para pessoas com autismo.',
    subtitle2: 'Sustentabilidade',
    description2:
      'Redução do impacto ambiental com a eliminação do uso de papel.',
    icon: 'user-triple',
    illustration: '/images/plafform-benefits/illustration-4.svg',
  },
];

const PlatformBenefits = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(16);

  useEffect(() => {
    const updateOffset = () => {
      if (containerRef.current) {
        const left = containerRef.current.getBoundingClientRect().left;
        setOffset(left);
      }
    };

    updateOffset();
    window.addEventListener('resize', updateOffset);
    return () => window.removeEventListener('resize', updateOffset);
  }, []);
  return (
    <section className='py-10 lg:py-0 2xl:py-5 bg-intea-gray-light relative overflow-hidden'>
      <div className='container mx-auto lg:px-4'>
        <div className='hidden lg:flex flex-col gap-24'>
          {cards.map((card, index) => (
            <BenefitCard key={index} {...card} isEven={index % 2 === 1} />
          ))}
        </div>
        <div className='lg:hidden'>
          <Swiper
            modules={[Pagination]}
            spaceBetween={24}
            slidesPerView={'auto'}
            slidesOffsetBefore={offset}
            slidesOffsetAfter={offset}
            pagination={{
              clickable: true,
              bulletClass: 'swiper-pagination-bullet',
              bulletActiveClass: 'swiper-pagination-bullet-active',
            }}
            className='pb-16'
          >
            {cards.map((card, index) => (
              <SwiperSlide
                key={index}
                className='!w-[85%] md:!w-[70%] lg:!w-[60%]'
              >
                <BenefitCard key={index} {...card} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default PlatformBenefits;
