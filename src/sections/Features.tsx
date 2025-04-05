import React, { useEffect, useRef, useState } from 'react';
import Button from '../components/ui/Button';
import Icon from '@/components/ui/Icon';
import { Swiper, SwiperSlide } from 'swiper/react';

// Categorias das funcionalidades
type FeatureCategory =
  | 'dados'
  | 'desenvolvimento'
  | 'plano'
  | 'integracao'
  | 'direitos'
  | 'sustentabilidade';

// Estrutura de card de funcionalidade
interface FeatureCard {
  id: number;
  number: string;
  title: string;
  description: string;
  category: FeatureCategory;
}

// Mock de dados para os cards de funcionalidades
const featuresData: FeatureCard[] = [
  {
    id: 1,
    number: '1.',
    title: 'Anamneses e Laudos',
    description:
      'Registro completo do histórico médico, incluindo diagnósticos, avaliações e relatórios.',
    category: 'dados',
  },
  {
    id: 2,
    number: '2.',
    title: 'Prescrições Terapêuticas',
    description:
      'Armazenamento de planos de tratamento, medicamentos, terapias e intervenções recomendadas.',
    category: 'dados',
  },
  {
    id: 3,
    number: '3.',
    title: 'Dados de Crescimento e Evolução',
    description:
      'Curvas de crescimento, gráficos de desenvolvimento e indicadores de progresso.',
    category: 'dados',
  },
  {
    id: 4,
    number: '4.',
    title: 'Registro de Metas e Dificuldades',
    description:
      'Definição de objetivos terapêuticos e educacionais, com monitoramento contínuo.',
    category: 'desenvolvimento',
  },
  {
    id: 5,
    number: '5.',
    title: 'Histórico do Paciente',
    description:
      'Acesso rápido a todas as informações atualizadas, permitindo uma visão longitudinal do desenvolvimento.',
    category: 'desenvolvimento',
  },
  {
    id: 6,
    number: '6.',
    title: 'Devolutivas Automáticas',
    description:
      'Geração de relatórios e gráficos evolutivos para facilitar a análise do progresso.',
    category: 'desenvolvimento',
  },
  {
    id: 7,
    number: '7.',
    title: 'Elaboração Personalizada',
    description:
      'Ferramentas para criação de planos de intervenção individualizados, considerando as necessidades específicas do paciente.',
    category: 'plano',
  },
  {
    id: 8,
    number: '8.',
    title: 'Habilidades a Serem Desenvolvidas',
    description:
      'Identificação de áreas de foco, como comunicação, habilidades sociais, motoras e cognitivas.',
    category: 'plano',
  },
  {
    id: 9,
    number: '9.',
    title: 'Acompanhamento de Metas',
    description:
      'Conexão entre terapeutas, médicos, professores e cuidadores, permitindo a troca de informações e estratégias.',
    category: 'integracao',
  },
  {
    id: 10,
    number: '10.',
    title: 'Estratégias Interdisciplinares',
    description:
      'Sugestões de abordagens integradas, baseadas nas melhores práticas e nas necessidades do paciente.',
    category: 'integracao',
  },
  {
    id: 11,
    number: '11.',
    title: 'Acesso a Informações de Saúde',
    description:
      'Dados atualizados sobre problemas de saúde, medicamentos e intervenções em andamento.',
    category: 'direitos',
  },
  {
    id: 12,
    number: '12.',
    title: 'Prescrições',
    description:
      'Funcionalidade para prescrições digitais de medicamentos e terapias, com alertas e lembretes para famílias e profissionais.',
    category: 'direitos',
  },
  {
    id: 13,
    number: '13.',
    title: 'Facilitação de Direitos',
    description:
      'Informações sobre políticas públicas, benefícios e recursos disponíveis para pessoas com autismo.',
    category: 'direitos',
  },
  {
    id: 14,
    number: '14.',
    title: 'Redução de Custos',
    description:
      'Eliminação do uso de papel e armazenamento físico, com todos os dados guardados em nuvem.',
    category: 'sustentabilidade',
  },
  {
    id: 15,
    number: '15.',
    title: 'Compartilhamento Seguro',
    description:
      'Troca de informações entre profissionais e famílias com criptografia e proteção de dados, em conformidade com a LGPD (Lei Geral de Proteção de Dados).',
    category: 'sustentabilidade',
  },
];

// Mapeamento das categorias para exibição no filtro
const categories = [
  {
    label: 'Dados',
    icon: 'info',
    category: 'dados' as FeatureCategory,
  },
  {
    label: 'Desenvolvimento',
    icon: 'trend-up',
    category: 'desenvolvimento' as FeatureCategory,
  },
  {
    label: 'Plano de Desenvolvimento Individual',
    icon: 'user-single',
    category: 'plano' as FeatureCategory,
  },
  {
    label: 'Integração Multidisciplinar',
    icon: 'slider-control',
    category: 'integracao' as FeatureCategory,
  },
  {
    label: 'Direitos',
    icon: 'document',
    category: 'direitos' as FeatureCategory,
  },
  {
    label: 'Sustentabilidade e Segurança',
    icon: 'key',
    category: 'sustentabilidade' as FeatureCategory,
  },
];

const categoryColorMap = {
  dados: 'bg-intea-orange',
  desenvolvimento: 'bg-intea-pink',
  plano: 'bg-intea-violet',
  integracao: 'bg-intea-orange-dark',
  direitos: 'bg-intea-pink-dark',
  sustentabilidade: 'bg-intea-violet-light',
};

// Componente de card de funcionalidade
const FeatureCard: React.FC<{ feature: FeatureCard }> = ({ feature }) => {
  return (
    <div
      className={`${
        categoryColorMap[feature.category]
      } rounded-3xl p-8 text-white shadow-lg h-full relative overflow-hidden after:content-[url("/images/benefits-card/pattern.svg")] after:absolute after:w-full after:left-0 after:top-0 min-h-[375px] lg:min-h-[initial]`}
    >
      <div className='relative z-10'>
        <h3 className='text-5xl md:text-6xl font-bold mb-6'>
          {feature.number}
        </h3>
        <h4 className='text-2xl md:text-3xl font-bold mb-4'>{feature.title}</h4>
        <p className='text-white text-opacity-90 text-lg leading-relaxed'>
          {feature.description}
        </p>
      </div>
    </div>
  );
};

const Features = () => {
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

  const [activeCategory, setActiveCategory] =
    useState<FeatureCategory>('dados');

  const filteredFeatures = featuresData.filter(
    (feature) => feature.category === activeCategory
  );

  return (
    <section className='pt-10 pb-20 lg:pt-24 lg:pb-24 bg-intea-gray-light'>
      <div className='container mx-auto lg:px-4'>
        <div className='text-center mb-16 px-4'>
          <h2 className='text-5xl 2xl:text-6xl font-bold text-intea-teal-dark mb-6'>
            Principais Funcionalidade
          </h2>
          <p className='text-intea-teal-dark text-xl max-w-4xl mx-auto'>
            Conheça as funcionalidades do INTEA, que facilitam o acompanhamento
            do desenvolvimento de pacientes com TEA, promovendo integração e
            eficiência no tratamento.
          </p>
        </div>

        <div className='hidden lg:flex justify-center mb-16'>
          <div className='bg-intea-teal-dark rounded-full flex flex-wrap gap-2 shadow-md inline-flex p-5'>
            {categories.map((category) => (
              <Button
                key={category.label}
                variant={
                  activeCategory === category.category ? 'active' : 'primary'
                }
                className={`text-sm md:text-base whitespace-nowrap transition-all`}
                onClick={() => setActiveCategory(category.category)}
              >
                <Icon name={category.icon} size='md' />
                {category.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Grid de cards */}
        <div className='hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {filteredFeatures.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>

        <div className='lg:hidden'>
          <Swiper
            spaceBetween={24}
            slidesPerView={'auto'}
            slidesOffsetBefore={offset}
            slidesOffsetAfter={offset}
            className='pb-16'
          >
            {featuresData.map((feature, index) => (
              <SwiperSlide
                key={index}
                className='!w-[85%] md:!w-[70%] lg:!w-[60%]'
              >
                <FeatureCard key={feature.id} feature={feature} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Features;
