import React, { useState, useEffect } from 'react';
// import LanguageSwitcher from '../LanguageSwitcher';
// import Icon from '../ui/Icon';

interface HeaderProps {
  className?: string;
}

// interface NavItem {
//   label: string;
//   icon: string;
//   href: string;
// }

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
  }, []);
  // }, [prevScrollPos]);

  // Itens de navegação principal
  // const navItems: NavItem[] = [
  //   { label: 'Home', icon: 'home', href: '/' },
  //   { label: 'Famílias', icon: 'family', href: '/familias' },
  //   { label: 'Profissionais', icon: 'professionals', href: '/profissionais' },
  //   { label: 'Clínicas', icon: 'clinics', href: '/clinicas' },
  //   { label: 'Blog', icon: 'blog', href: '/blog' },
  // ];

  return (
    <header
      className={`
        fixed w-full top-12 left-0 right-0 z-50 
        transition-all duration-300 ease-in-out
        ${
          isVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-full'
        }
        ${className}
      `}
    >
      <div className='container mx-auto px-4'>
        <div className='bg-intea-teal-dark rounded-full py-4 px-6 shadow-lg'>
          <div className='flex items-center justify-between md:justify-end gap-10'>
            {/* Logo */}
            <a href='/' className='flex items-center gap-3 max-w-32 mr-auto'>
              <img src='/svgs/intea-logo.svg' alt='Intea' className='w-full' />
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
            {/* <nav className='hidden md:flex items-center gap-10'>
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
            </nav> */}

            {/* Menu mobile e seletor de idioma */}
            {/* <LanguageSwitcher /> */}

            {/* <div className='flex items-center gap-4'>
              <button className='md:hidden p-2 text-white'>
                <Icon name='menu' size='lg' color='white' />
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
