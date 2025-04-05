import Icon from '@/components/ui/Icon';
import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

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
    teal: 'intea-teal',
    orange: 'intea-orange',
    pink: 'intea-pink',
    purple: 'intea-violet',
  };

  const iconColorMap: { [key: string]: string } = {
    teal: 'var(--color-intea-teal)',
    orange: 'var(--color-intea-orange)',
    pink: 'var(--color-intea-pink)',
    purple: 'var(--color-intea-violet)',
  };

  const bgColor = bgColorMap[color] || 'intea-teal';

  return (
    <div className={`relative ${isEven ? 'ml-auto' : ''} xl:w-7/12 2xl:w-8/12`}>
      <div
        className={`bg-${bgColor} rounded-3xl p-6 text-white shadow-lg flex flex-col gap-4 w-full relative z-10 min-h-[350px]`}
      >
        <div className='flex justify-between items-center'>
          <h3 className='text-2xl xl:text-5xl 2xl:text-7xl font-bold'>
            {title}
          </h3>
          <div className='rounded-full bg-white bg-opacity-20 p-2 w-10 h-10 flex items-center justify-center'>
            <Icon name={icon} size='md' color={iconColorMap[color]} />
          </div>
        </div>

        <div className='flex flex-col gap-4'>
          <div className='flex flex-col gap-4'>
            <h4 className='xl:text-2xl 2xl:text-4xl font-bold'>{subtitle1}</h4>
            <p className='text-white font-regular text-opacity-90 xl:text-xl 2xl:text-2xl'>
              {description1}
            </p>
          </div>

          <div className='flex flex-col gap-4'>
            <h4 className='xl:text-2xl 2xl:text-4xl font-bold'>{subtitle2}</h4>
            <p className='text-white font-regular text-opacity-90 xl:text-xl 2xl:text-2xl'>
              {description2}
            </p>
          </div>
        </div>
      </div>

      <div
        className={`hidden lg:flex absolute top-1/2 -translate-y-1/2 ${
          isEven
            ? 'xl:left-[-90%] 2xl:left-[-60%]'
            : 'xl:right-[-90%] 2xl:right-[-60%]'
        }`}
      >
        <img
          src={illustration}
          alt='illustration'
          className='w-full xl:max-w-[700px] 2xl:max-w-[800px]'
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
    color: 'purple',
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
    <section className='py-10 lg:py-40 bg-intea-gray-light relative overflow-hidden'>
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
