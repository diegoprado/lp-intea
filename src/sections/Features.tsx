import React, { useEffect, useRef, useState } from 'react';
import Button from '../components/ui/Button';
import Icon from '@/components/ui/Icon';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ButtonVariant } from '../components/ui/Button';
import './features.css';
import { useTranslation } from 'react-i18next';
import i18n from '@/i18n';

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

const categories = [
  {
    label: {
      pt: 'Dados',
      en: 'Data',
    },
    icon: 'info',
    category: 'dados' as FeatureCategory,
    color: 'orange',
  },
  {
    label: {
      pt: 'Desenvolvimento',
      en: 'Development',
    },
    icon: 'trend-up',
    category: 'desenvolvimento' as FeatureCategory,
    color: 'pink',
  },
  {
    label: {
      pt: 'Plano de Desenvolvimento Individual',
      en: 'Individual Development Plan',
    },
    icon: 'user-single',
    category: 'plano' as FeatureCategory,
    color: 'violet',
  },
  {
    label: {
      pt: 'Integração Multidisciplinar',
      en: 'Multidisciplinary Integration',
    },
    icon: 'slider-control',
    category: 'integracao' as FeatureCategory,
    color: 'orange',
  },
  {
    label: {
      pt: 'Direitos',
      en: 'Rights',
    },
    icon: 'document',
    category: 'direitos' as FeatureCategory,
    color: 'pink',
  },
  {
    label: {
      pt: 'Sustentabilidade e Segurança',
      en: 'Sustainability and Security',
    },
    icon: 'key',
    category: 'sustentabilidade' as FeatureCategory,
    color: 'violet',
  },
];

const categoryColorMap: Record<FeatureCategory, string> = {
  dados: 'bg-intea-orange',
  desenvolvimento: 'bg-intea-pink',
  plano: 'bg-intea-violet-dark',
  integracao: 'bg-intea-orange-dark',
  direitos: 'bg-intea-pink-dark',
  sustentabilidade: 'bg-intea-violet-dark',
};

// Mapeamento da chave de cor para a variante do botão INATIVO (primária colorida)
const colorToInactiveVariantMap: Record<string, ButtonVariant> = {
  orange: 'primary-orange',
  pink: 'primary-pink',
  violet: 'primary-violet',
  teal: 'primary-teal',
};

// Mapeamento da chave de cor para a variante do botão ATIVO (ativa colorida)
const colorToActiveVariantMap: Record<string, ButtonVariant> = {
  orange: 'active-orange',
  pink: 'active-pink',
  violet: 'active-violet',
  teal: 'active-teal',
};

// Componente de card de funcionalidade
const FeatureCard: React.FC<{ feature: FeatureCard }> = ({ feature }) => {
  return (
    <div
      className={`${
        categoryColorMap[feature.category]
      } rounded-3xl py-16 px-12 text-white shadow-lg h-full relative overflow-hidden min-h-[375px] lg:min-h-[initial]`}
      style={{
        backgroundImage: `url("/images/benefits-card/pattern-${
          categories.find((cat) => cat.category === feature.category)?.color
        }.svg")`,
        backgroundSize: 'contain',
        backgroundPosition: 'top center',
        backgroundRepeat: 'repeat-x',
      }}
    >
      <div className='relative z-10'>
        <h3 className='text-5xl md:text-6xl font-bold mb-6'>
          {feature.number}{' '}
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
  const { t } = useTranslation();
  const featuresData: FeatureCard[] = t('features.cards', {
    returnObjects: true,
  }) as FeatureCard[];

  const currentLanguage = i18n.language;

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

  // Encontra a categoria ativa atual
  const currentActiveCategoryDetails = categories.find(
    (cat) => cat.category === activeCategory
  );
  // Determina a cor de fundo da barra de filtros
  const filterBarBgColor = currentActiveCategoryDetails
    ? categoryColorMap[currentActiveCategoryDetails.category]
    : 'bg-intea-teal-dark';
  // Determina a variante para botões INATIVOS com base na cor da categoria ATIVA
  const inactiveButtonVariant = currentActiveCategoryDetails
    ? colorToInactiveVariantMap[currentActiveCategoryDetails.color]
    : 'primary';
  // Determina a variante para o botão ATIVO com base na cor da categoria ATIVA
  const activeButtonVariant = currentActiveCategoryDetails
    ? colorToActiveVariantMap[currentActiveCategoryDetails.color]
    : 'active';

  return (
    <section className='pt-10 pb-20 2xl:pt-16 2xl:pb-16 bg-intea-gray-light'>
      <div className='container mx-auto '>
        <div className='text-center mb-16 px-4'>
          <h2 className='text-5xl 2xl:text-6xl font-bold text-intea-teal-dark mb-6'>
            {t('features.title')}
          </h2>
          <p className='text-intea-teal-dark text-xl max-w-4xl mx-auto'>
            {t('features.description')}
          </p>
        </div>

        <div className='hidden lg:flex justify-center mb-16'>
          <div
            className={`${filterBarBgColor} rounded-full flex flex-wrap gap-2 shadow-md inline-flex p-5 transition-colors duration-300`}
          >
            {categories.map((category) => {
              const buttonVariant =
                activeCategory === category.category
                  ? activeButtonVariant
                  : inactiveButtonVariant;

              return (
                <Button
                  key={
                    category.label[
                      currentLanguage as keyof typeof category.label
                    ]
                  }
                  variant={buttonVariant}
                  className={`text-sm  lg:text-xs 2xl:text-base whitespace-nowrap transition-all`}
                  onClick={() => setActiveCategory(category.category)}
                >
                  <Icon name={category.icon} size='md' />
                  {
                    category.label[
                      currentLanguage as keyof typeof category.label
                    ]
                  }
                </Button>
              );
            })}
          </div>
        </div>

        {/* Grid de cards */}
        {/* <div className='hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'> */}
        <div className='hidden lg:flex gap-4 justify-stretch items-stretch'>
          {filteredFeatures.map((feature) => (
            <div className={`flex-1 ${feature.category}`}>
              <FeatureCard key={feature.id} feature={feature} />
            </div>
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
