import { I18nextProvider, Trans } from 'react-i18next';
import { HelmetProvider } from 'react-helmet-async';
import i18n from '../i18n';
import { JsonLd, PageSEO } from '../components/seo';
import seoConfig from '../config/seo';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Contact from '../sections/Contact';
import HeroInternal from '../sections/HeroInternal';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation('about');

  const paragraphs = t('originSection.paragraphs', {
    returnObjects: true,
  }) as string[];

  const missionParagraphs = t('missionSection.paragraphs', {
    returnObjects: true,
  }) as string[];

  const valuesList = t('valuesSection.list', {
    returnObjects: true,
  }) as string[];

  const aboutCharlesParagraphs = t('aboutCharlesSection.paragraphs', {
    returnObjects: true,
  }) as Array<{
    title: string;
    description: string;
  }>;

  return (
    <HelmetProvider>
      <I18nextProvider i18n={i18n}>
        <PageSEO pageName='about' keywords={['intea', 'sobre a Intea']} />
        <JsonLd data={seoConfig.organizationSchema} />

        <div className='min-h-screen relative'>
          <Header />
          <main>
            <HeroInternal nameSpace='about' />

            <section className='bg-intea-gray-light pt-16'>
              <div className='container mx-auto'>
                <div className='flex px-4 xl:px-0'>
                  <div className='flex flex-col items-center justify-center px-24 hidden xl:flex'>
                    <img src='/images/intea-logo-big.svg' alt='Logo Intea' />
                  </div>
                  <div className='flex flex-col items-start gap-10 flex-1 shadow-[0px_12px_16px_-4px_rgba(41,37,36,0.08)] p-6 lg:p-10 z-20 relative bg-white rounded-xl'>
                    <h2 className='font-bold text-4xl lg:text-7xl text-intea-teal'>
                      <Trans
                        i18nKey='about:originSection.title'
                        components={{
                          highlight: (
                            <span className='text-intea-teal-darkest' />
                          ),
                        }}
                      />
                    </h2>
                    <div className='flex flex-col gap-2 text-lg lg:text-2xl font-medium text-intea-teal-dark'>
                      {paragraphs.map((paragraph: string, index: number) => (
                        <p key={index}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                </div>

                <div className='flex flex-col lg:flex-row gap-10 mt-11 px-4 xl:px-0'>
                  <div
                    className='flex flex-col gap-6 bg-intea-orange p-6 lg:p-10 rounded-4xl flex-1'
                    style={{
                      backgroundImage: `url("/images/benefits-card/pattern-orange.svg")`,
                      backgroundSize: '500px',
                      backgroundPosition: 'top center',
                      backgroundRepeat: 'repeat-x',
                    }}
                  >
                    <h2 className='text-intea-orange-darkest font-bold text-5xl lg:text-7xl'>
                      {t('missionSection.title')}
                    </h2>
                    <div className='flex flex-col'>
                      {missionParagraphs.map(
                        (paragraph: string, index: number) => (
                          <p
                            key={index}
                            className='text-white font-medium text-lg lg:text-2xl'
                          >
                            {paragraph}
                          </p>
                        )
                      )}
                    </div>
                  </div>

                  <div
                    className='flex flex-col gap-6 bg-intea-pink p-6 lg:p-10 rounded-4xl flex-1'
                    style={{
                      backgroundImage: `url("/images/benefits-card/pattern-pink.svg")`,
                      backgroundSize: '500px',
                      backgroundPosition: 'top center',
                      backgroundRepeat: 'repeat-x',
                    }}
                  >
                    <h2 className='text-intea-pink-darkest font-bold text-5xl lg:text-7xl'>
                      {t('valuesSection.title')}
                    </h2>
                    <div className='text-white font-medium text-lg lg:text-2xl'>
                      <ul className='list-disc list-inside marker-sm flex flex-col gap-4'>
                        {valuesList.map((value: string, index: number) => (
                          <li
                            key={index}
                            dangerouslySetInnerHTML={{ __html: value }}
                          />
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className='p-4 xl:px-0'>
                  <div
                    className='flex flex-col gap-6 bg-intea-violet-card p-6 lg:p-10 rounded-4xl flex-1 mt-11'
                    style={{
                      backgroundImage: `url("/images/benefits-card/pattern-violet.svg")`,
                      backgroundSize: '500px',
                      backgroundPosition: 'top center',
                      backgroundRepeat: 'repeat-x',
                    }}
                  >
                    <div className='flex flex-col lg:flex-row gap-6'>
                      <div className='flex flex-col gap-10 flex-1'>
                        <h2 className='text-intea-violet-darkest font-bold text-5xl lg:text-7xl'>
                          {t('aboutCharlesSection.title')}
                        </h2>

                        {aboutCharlesParagraphs.map((paragraph, index) => (
                          <div className='flex flex-col gap-4' key={index}>
                            <h3 className='text-white font-bold text-2xl lg:text-4xl'>
                              {paragraph.title}
                            </h3>
                            <p className='text-white font-medium text-lg lg:text-2xl'>
                              {paragraph.description}
                            </p>
                          </div>
                        ))}
                      </div>

                      <div className='flex flex-col gap-10 flex-1'>
                        <div
                          className='flex flex-col gap-4 rounded-4xl overflow-hidden h-[300px] lg:h-[400px] bg-position-[center_-60px] xl:bg-position-[center_-160px]'
                          style={{
                            backgroundImage: `url("/images/about/charles.jpg")`,
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                          }}
                        />

                        <div
                          className='flex flex-col gap-4 rounded-4xl overflow-hidden h-[300px] lg:h-[540px] bg-position-[center_-60px] xl:bg-position-[center_-160px]'
                          style={{
                            backgroundImage: `url("/images/about/charles-intea.jpg")`,
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <Contact />
          </main>
          <Footer />
        </div>
      </I18nextProvider>
    </HelmetProvider>
  );
};

export default About;
