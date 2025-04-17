import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { saveLanguagePreference, getCurrentLanguage } from '../i18n';

import Button from './ui/Button';

const ToggleLanguage: React.FC = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    const preferredLanguage = getCurrentLanguage();
    if (preferredLanguage && preferredLanguage !== i18n.language) {
      i18n.changeLanguage(preferredLanguage);
    }
  }, [i18n]);

  const isPT = i18n.language === 'pt';

  const toggleLanguage = () => {
    const newLang = isPT ? 'en' : 'pt';
    i18n.changeLanguage(newLang);
    saveLanguagePreference(newLang);
  };

  return (
    <Button
      onClick={toggleLanguage}
      variant='primary-teal'
      size='sm'
      className='py-3'
    >
      <div className='flex items-center justify-between rounded-full  overflow-hidden px-2 pr-4 transition-colors '>
        <div className='relative w-14 h-8 bg-[#0E9488] rounded-full mr-3'>
          <div
            className={`absolute top-1 left-1 w-6 h-6 transition-transform duration-300 ${
              isPT ? 'translate-x-0' : 'translate-x-6'
            }`}
          >
            {isPT ? (
              <img src='/svgs/pt.svg' alt='PT' className='w-full h-full' />
            ) : (
              <img src='/svgs/en.svg' alt='EN' className='w-full h-full' />
            )}
          </div>
        </div>

        {/* Texto do idioma atual */}
        <span className='text-white text-md font-medium'>
          {isPT ? 'PT' : 'EN'}
        </span>
      </div>
    </Button>
  );
};

export default ToggleLanguage;
