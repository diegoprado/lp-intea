import ButtonLink from '@/components/ui/ButtonLink';
import { Trans, useTranslation } from 'react-i18next';

const Impact = () => {
  const { t } = useTranslation();
  return (
    <section className='bg-intea-gray-light px-4 lg:px-0'>
      <div className='container mx-auto bg-intea-teal rounded-3xl relative overflow-hidden after:content-[] after:absolute after:w-[70%] after:h-[100%] after:right-[0] after:top-0 after:bg-[url(/images/hero-spheres.png)] bg-contain py-8 lg:py-12 px-8 lg:px-16'>
        <div className='flex flex-col md:flex-row gap-8 items-center justify-center'>
          <div className='w-full lg:min-w-[600px] 2xl:max-w-[700px] text-white'>
            <h2 className='text-4xl lg:text-6xl font-bold mb-6'>
              <Trans
                i18nKey='impact.title'
                components={{
                  highlight: <span className='text-intea-teal-darkest' />,
                }}
              />
            </h2>

            <div className='flex flex-col gap-6'>
              <p className='text-xl lg:text-2xl'>{t('impact.description1')}</p>

              <p className='text-xl lg:text-2xl'>{t('impact.description2')}</p>

              <div className='flex justify-center lg:justify-start'>
                <ButtonLink
                  href='#contact'
                  variant='primary'
                  leftIcon='arrow-down'
                  className='text-lg'
                >
                  {t('impact.button')}
                </ButtonLink>
              </div>
            </div>
          </div>

          <div className='flex justify-center items-center relative z-10'>
            <img
              src='/images/impact.png'
              alt='Interface do aplicativo Intea com ilustração'
              className='max-w-full'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
