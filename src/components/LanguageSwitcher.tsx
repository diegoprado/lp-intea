import React, { useEffect, useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { saveLanguagePreference, getCurrentLanguage } from '../i18n';
import Icon from './ui/Icon';

interface Language {
  code: string;
  label: string;
}

const LanguageSwitcher: React.FC = () => {
  const { i18n, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Lista de idiomas disponíveis
  const languages: Language[] = [
    { code: 'pt', label: 'PT' },
    { code: 'en', label: 'EN' },
  ];

  // Na inicialização, verificar e aplicar o idioma preferido
  useEffect(() => {
    const preferredLanguage = getCurrentLanguage();
    if (preferredLanguage && preferredLanguage !== i18n.language) {
      i18n.changeLanguage(preferredLanguage);
    }
  }, [i18n]);

  // Fecha o dropdown quando clica fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    saveLanguagePreference(lng);
    setIsOpen(false);
  };

  // Encontra o label do idioma atual
  const currentLanguage =
    languages.find((lang) => lang.code === i18n.language) || languages[0];

  return (
    <div className='relative' ref={dropdownRef}>
      {/* Botão do idioma atual */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='py-2 px-3 rounded-full bg-intea-teal-darker text-white text-xs font-medium flex items-center gap-1 hover:bg-opacity-90 transition-colors'
        aria-expanded={isOpen}
        aria-label={t('changeLanguage')}
      >
        <span>{currentLanguage.label}</span>
        <Icon
          name='chevron-down'
          size='xs'
          color='white'
          className={`transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {/* Dropdown de idiomas */}
      {isOpen && (
        <div className='absolute top-full mt-1 right-0 bg-intea-teal-darker rounded-lg overflow-hidden z-10 shadow-lg min-w-full'>
          <div className='py-1'>
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                className={`w-full text-left px-4 py-2 text-sm hover:bg-intea-teal-dark/50 transition-colors ${
                  lang.code === i18n.language
                    ? 'bg-intea-teal-dark/30 font-semibold text-intea-teal-light'
                    : 'text-white'
                }`}
              >
                {lang.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
