import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import isMobile from '@/utils/isMobile';

// Interface para os passos
interface Step {
  id: number;
  number: string;
  title: React.ReactNode;
  description: string;
  color: string;
  textColor: string;
  illustration: string;
}

// Mock de dados para o carrossel
const stepsData: Step[] = [
  {
    id: 1,
    number: '1.',
    title: (
      <>
        Crie sua <span className='text-intea-teal-darkest'>conta grátis</span>{' '}
        no Intea!
      </>
    ),
    description:
      'Baixe o INTEA no seu dispositivo (Android/iOS) e crie uma conta gratuita. Preencha os dados do responsável pela criança e, em seguida, finalize o cadastro com as informações da criança e as permissões necessárias.',
    color: 'bg-intea-teal-dark',
    textColor: 'text-white',
    illustration: '/images/how-to-work/create.png',
  },
  {
    id: 2,
    number: '2.',
    title: (
      <>
        Conecte-se com{' '}
        <span className='text-intea-orange-darkest'>
          clínicas e profissionais
        </span>
        .
      </>
    ),
    description:
      'Busque a clínica ou profissional que atende sua criança e envie um convite para se conectar. Quando o convite for aceito, você poderá acessar as informações da jornada do paciente de forma segura e privada.',
    color: 'bg-intea-orange-dark',
    textColor: 'text-white',
    illustration: '/images/how-to-work/connect.png',
  },
  {
    id: 3,
    number: '3.',
    title: (
      <>
        Acompanhe o{' '}
        <span className='text-intea-pink-darkest'>desenvolvimento</span>.
      </>
    ),
    description:
      'Dentro do ambiente seguro, os profissionais irão registrar todos os dados relevantes (anamneses, avaliações, planos de intervenção). Você poderá consultar essas informações diretamente no aplicativo.',
    color: 'bg-intea-pink-dark',
    textColor: 'text-white',
    illustration: '/images/how-to-work/follow.png',
  },
  {
    id: 4,
    number: '4.',
    title: (
      <>
        <span className='text-intea-violet-darkest'>Maximizar</span> o
        desenvolvimento do paciente.
      </>
    ),
    description:
      'A escola e a família também podem participar, recebendo orientações e feedbacks diretamente no app. O INTEA facilita a colaboração entre todos os envolvidos, promovendo o desenvolvimento contínuo da criança.',
    color: 'bg-intea-violet-dark',
    textColor: 'text-white',
    illustration: '/images/how-to-work/maximize.png',
  },
];

// Componente do card
interface StepCardProps {
  step: Step;
}

const StepCard: React.FC<StepCardProps> = ({ step }) => {
  return (
    <div
      className={`${step.color} rounded-3xl p-8 text-white shadow-lg h-full relative overflow-hidden flex min-h-[550px]`}
    >
      <div className='relative z-10 w-full lg:w-1/2 pr-4 flex flex-col gap-2 lg:gap-6'>
        <h3 className='text-5xl md:text-7xl font-bold mb-6'>{step.number}</h3>
        <h4 className='text-3xl md:text-5xl font-bold mb-4'>{step.title}</h4>

        <p className='text-lg md:text-2xl font-medium leading-relaxed'>
          {step.description}
        </p>
      </div>
      <div className='hidden w-1/2 lg:flex items-center justify-center absolute right-0 top-0'>
        <img
          src={step.illustration}
          alt={`Passo ${step.number}`}
          className='max-w-full h-auto z-10 relative'
        />
      </div>
    </div>
  );
};

// Componente principal
const HowToUse: React.FC = () => {
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
    <section className='py-24 bg-intea-gray-light'>
      <div
        ref={isMobile() ? null : containerRef}
        className='container mx-auto px-4 mb-8 '
      >
        <h2 className='text-4xl md:text-6xl font-bold text-intea-teal text-center mb-16'>
          Como utilizar o <span className='text-intea-teal-darker'>Intea?</span>
        </h2>
      </div>

      <div className='w-full overflow-visible'>
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
          {stepsData.map((step, index) => (
            <SwiperSlide
              key={index}
              className='!w-[85%] md:!w-[70%] lg:!w-[60%]'
            >
              <StepCard step={step} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className='flex justify-center mt-4'>
        <div className='swiper-pagination'></div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `

      .swiper-slide {
        height: auto;
        display: flex;
      }
      .swiper-pagination {
        position: relative;
        bottom: 0;
        margin-top: 32px;
      }
      .swiper-pagination-bullet {
        width: 10px;
        height: 10px;
        background-color: var(--color-intea-teal-dark);
        opacity: 1;
        margin: 0 5px;
        cursor: pointer;
        border-radius: 50%;
        transition: background-color 0.3s;
      }
      .swiper-pagination-bullet-active {
        background-color: var(--color-intea-teal-darker);
      }
    `,
        }}
      />
    </section>
  );
};

export default HowToUse;
