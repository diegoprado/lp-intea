import React from 'react';
import { Trans } from 'react-i18next';
// import CurveShape from '../ui/CurveShape';

/**
 * Componente Footer - Rodapé principal do site
 * Contém o copyright e informações legais
 */
const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className='bg-intea-gray-light'>
      <img src='/svgs/footer-curve.svg' alt='Intea' className='w-full' />
      <footer className='bg-intea-teal relative pb-12'>
        {/* Curva na parte superior */}
        {/* <div className='absolute top-0 left-0 right-0 transform rotate-180'>
        <CurveShape type='up' fill='white' height={80} />
      </div> */}

        {/* Conteúdo do Footer */}
        <div className='container mx-auto px-4 relative z-10'>
          {/* Logo */}
          <div className='flex justify-center  mb-8'>
            <a href='/' className='inline-block'>
              <img
                src='/svgs/intea-logo.svg'
                alt='Intea'
                className='w-32 h-auto'
              />
            </a>
          </div>

          {/* Divider */}
          <div className='w-full h-px bg-white/30 my-8'></div>

          {/* Copyright */}
          <div className='text-center '>
            <p className='text-white text-xl'>
              <Trans
                i18nKey='footer.copyright'
                values={{ currentYear: currentYear }}
              />
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
