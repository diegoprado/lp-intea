import Icon from '@/components/ui/Icon';
import { Trans } from 'react-i18next';
import { useTranslation } from 'react-i18next';

interface HeroInternalProps {
  nameSpace: string;
}

const HeroInternal = ({ nameSpace = 'common' }: HeroInternalProps) => {
  const { t } = useTranslation(nameSpace);

  return (
    <section className='relative w-full pb-[240px] lg:pb-[280px] xl:pb-[350px] bg-intea-teal relative'>
      <img
        src='/images/hero-spheres.png'
        alt='Hero Background'
        className='absolute -top-[300px] right-0 pointer-events-none lg:max-w-[70%] 2xl:max-w-[60%]'
      />

      <svg
        viewBox='0 0 1920 152'
        xmlns='http://www.w3.org/2000/svg'
        className='absolute bottom-[-1px] left-0 w-full h-[50px] lg:h-[152px]'
        preserveAspectRatio='none'
      >
        <rect width='1920' height='152' className='fill-intea-gray-light' />
        <circle cx='960' cy='-2950' r='3100' fill='#0BB8A5' />
      </svg>

      <Icon
        name='arrow-down'
        className='absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white'
        size='lg'
      />

      <div className='container mx-auto relative z-10 pt-5 px-4'>
        <div className='flex flex-col xl:flex-row items-start xl:items-start justify-between relative top-32'>
          <div className='lg:pt-16 xl:pt-28 lg:w-6/12 2xl:w-7/12 text-white'>
            <h1 className='text-4xl xl:text-6xl 2xl:text-8xl font-bold mb-6'>
              <Trans
                i18nKey={t('hero.title')}
                ns={nameSpace}
                components={{
                  highlight: <span className='text-intea-teal-darkest' />,
                  break: <br />,
                }}
              />
            </h1>

            <p
              className='text-lg lg:text-xl 2xl:text-2xl mb-8'
              dangerouslySetInnerHTML={{
                __html: t('hero.description'),
              }}
            />
          </div>

          <div className='hidden xl:block lg:w-6/12 2xl:w-5/12 mt-12 lg:mt-0 relative'>
            <img
              src={t('hero.image')}
              alt='App Intea'
              // className='max-w-full h-auto ml-auto transform translate-y-12'
              className='absolute xl:max-w-[700px] 2xl:max-w-[840px] xl:top-60 2xl:top-44 xl:left-[-50px] 2xl:left-[-100px]'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroInternal;
