import './index.css';
import { I18nextProvider } from 'react-i18next';
import { HelmetProvider } from 'react-helmet-async';
import i18n from './i18n';
import { JsonLd, PageSEO } from './components/seo';
import seoConfig from './config/seo';
import Header from './components/layout/Header';
import Hero from './sections/Hero';
import Benefits from './sections/Benefits';
import PlatformBenefits from './sections/PlatformBenefits';
import Features from './sections/Features';
import Impact from './sections/Impact';
import HowToUse from './sections/HowToUse';

function App() {
  return (
    <HelmetProvider>
      <I18nextProvider i18n={i18n}>
        <PageSEO
          pageName='home'
          keywords={['intea', 'soluções', 'inovação', 'tecnologia']}
        />
        <JsonLd data={seoConfig.organizationSchema} />

        <div className='min-h-screen'>
          <Header />
          <main>
            <Hero />
            <Benefits />
            <PlatformBenefits />
            <Features />
            <Impact />
            <HowToUse />
            {/* Outras seções serão adicionadas aqui */}
          </main>
        </div>
      </I18nextProvider>
    </HelmetProvider>
  );
}

export default App;
