import React, { useState, useEffect } from 'react';
import ToggleLanguage from '../ToggleLanguage';
import ButtonLink from '../ui/ButtonLink';
import i18n from '@/i18n';
import Icon from '../ui/Icon';
// import ButtonLink from '../ui/ButtonLink';

interface HeaderProps {
  className?: string;
}

interface NavItem {
  label: string;
  icon: string;
  href: string;
}

/**
 * Componente de cabeçalho principal do site
 * Inclui logo, navegação e seletor de idioma
 *
 * Features:
 * - Posicionado a 48px do topo
 * - Aparece com efeito de fade quando o usuário rola para cima
 * - Esconde quando o usuário rola para baixo
 */
const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  // Estado para controlar a visibilidade do header
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Efeito para controlar a visibilidade baseada no scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      // Determinar se está rolando para cima ou para baixo
      const isScrollingUp = prevScrollPos > currentScrollPos;

      // Só mostra o Header se estiver rolando para cima ou no topo da página
      setIsVisible(isScrollingUp || currentScrollPos < 50);

      // Atualiza a posição anterior
      setPrevScrollPos(currentScrollPos);
    };

    // Adicionar listener de scroll
    window.addEventListener('scroll', handleScroll);

    // Remover listener quando o componente for desmontado
    return () => window.removeEventListener('scroll', handleScroll);
    // }, []);
  }, [prevScrollPos]);

  // Efeito para bloquear rolagem quando menu estiver aberto
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Itens de navegação principal
  const navItemsPT: NavItem[] = [
    { label: 'Início', icon: 'home', href: '/' },
    { label: 'Sobre nós', icon: 'info', href: '/about' },
    // { label: 'Famílias', icon: 'user-triple', href: '/familias' },
    // { label: 'Profissionais', icon: 'user-triple', href: '/profissionais' },
    // { label: 'Clínicas', icon: 'hospital', href: '/clinicas' },
    // { label: 'Blog', icon: 'chat', href: '/blog' },
  ];
  const navItemsEN: NavItem[] = [
    { label: 'Home', icon: 'home', href: '/' },
    { label: 'About us', icon: 'info', href: '/about' },
    // { label: 'Famílias', icon: 'user-triple', href: '/familias' },
    // { label: 'Profissionais', icon: 'user-triple', href: '/profissionais' },
    // { label: 'Clínicas', icon: 'hospital', href: '/clinicas' },
    // { label: 'Blog', icon: 'chat', href: '/blog' },
  ];

  const navItems = i18n.language === 'pt' ? navItemsPT : navItemsEN;

  return (
    <>
      <header
        className={`
          fixed w-full top-4 lg:top-12 left-0 right-0 z-50 
          transition-all duration-300 ease-in-out
          ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 -translate-y-full'
          }
          ${className}
        `}
      >
        <div className='mx-auto px-2 lg:px-11 max-w-[1920px]'>
          <div className='bg-intea-teal-darker rounded-full py-4 px-6 shadow-lg'>
            <div className='flex items-center justify-between md:justify-end gap-10'>
              {/* Logo */}
              <a href='/' className='flex items-center gap-3 max-w-32 mr-auto'>
                <img
                  src='/svgs/intea-logo.svg'
                  alt='Intea'
                  className='w-full'
                />
              </a>

              {/* <a
                href='/'
                className='flex items-center gap-3 max-w-32 mr-auto group'
                onMouseEnter={(e) => {
                  const img = e.currentTarget.querySelector('img');
                  if (img) img.setAttribute('src', '/svgs/intea-logo-color.svg');
                }}
                onMouseLeave={(e) => {
                  const img = e.currentTarget.querySelector('img');
                  if (img) img.setAttribute('src', '/svgs/intea-logo.svg');
                }}
              >
                <img
                  src='/svgs/intea-logo.svg'
                  alt='Intea'
                  className='w-full transition-all duration-300'
                />
              </a> */}

              {/* Navegação */}
              <nav className='hidden md:flex items-center gap-10'>
                {navItems.map((item) => (
                  <ButtonLink
                    key={item.label}
                    href={item.href}
                    variant='primary'
                    leftIcon={item.icon}
                    iconSize='sm'
                    className='py-2 px-4 text-md'
                  >
                    {item.label}
                  </ButtonLink>
                ))}
                <ToggleLanguage />
              </nav>

              {/* Menu mobile e seletor de idioma */}
              {/* <LanguageSwitcher /> */}

              <div className='flex items-center gap-4'>
                <button
                  className='md:hidden p-2 text-white'
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  <Icon
                    name={isMobileMenuOpen ? 'close' : 'menu'}
                    size='lg'
                    color='white'
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Menu Mobile - Camada entre o header e o conteúdo */}
      <div
        className={`
          fixed inset-0 z-40 transition-all duration-300 ease-in-out
          ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
        `}
      >
        {/* Fundo escuro */}
        <div className='absolute inset-0 bg-black bg-opacity-70'></div>

        {/* Conteúdo do menu */}
        <div
          className={`
            flex flex-col justify-between
            absolute right-0 top-0 w-full sm:w-3/4 md:max-w-[360px] h-full
            bg-intea-teal-dark overflow-y-auto pt-40 px-6 pb-8
            transform transition-transform duration-300 ease-in-out
            ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
          `}
        >
          <nav className='flex flex-col gap-8'>
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className='text-white hover:text-intea-teal-light flex items-center gap-4 py-2 border-b border-intea-teal-light border-opacity-30'
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Icon name={item.icon} size='md' color='white' />
                <span className='font-medium text-xl'>{item.label}</span>
              </a>
            ))}
          </nav>

          <div className='mt-16 pt-8 border-t border-intea-teal-light border-opacity-30'>
            <div className='flex justify-center'>
              <ToggleLanguage />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
