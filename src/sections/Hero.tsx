// import CurveShape from '../components/ui/CurveShape';
import ButtonLink from '@/components/ui/ButtonLink';
import Icon from '@/components/ui/Icon';

const Hero = () => {
  return (
    <section
      className='relative w-full pb-[240px] lg:pb-[350px] bg-intea-teal relative'
      // style={{
      //   backgroundImage: 'url("/svgs/hero-bg.svg")',
      //   backgroundPosition: '0 0',
      //   backgroundRepeat: 'no-repeat',
      //   backgroundSize: 'cover',
      // }}
    >
      <img
        src='/images/hero-spheres.png'
        alt='Hero Background'
        className='absolute -top-[100px] right-0 pointer-events-none lg:max-w-[70%] 2xl:max-w-[60%]'
      />

      {/* <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 1000 100'
        preserveAspectRatio='none'
        className='absolute bottom-[-1px] left-0 w-full'
      >
        <path
          className='curve-shape-fill fill-intea-gray-light'
          d='M500,97C126.7,96.3,0.8,19.8,0,0v100l1000,0V1C1000,19.4,873.3,97.8,500,97z'
        ></path>
      </svg> */}

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
        <div className='flex flex-col lg:flex-row items-start lg:items-start justify-between relative top-32'>
          <div className='lg:pt-28 lg:w-8/12 2xl:w-3/4 text-white'>
            <h1 className='text-4xl lg:text-6xl 2xl:text-8xl font-bold mb-6'>
              Prontuário{' '}
              <span className='text-intea-teal-darkest'>
                digital <br /> integrativo
              </span>{' '}
              para o desenvolvimento do{' '}
              <span className='text-intea-teal-darkest'>autista</span>.
            </h1>

            <p className='text-lg lg:text-xl 2xl:text-2xl mb-8'>
              Orienta a família e organiza as informações no enfrentamento dos
              desafios apresentados pelo autismo. <br /> Intea armazena
              informações de saúde de um paciente
            </p>

            <div className='flex flex-col lg:flex-row lg:flex-wrap gap-4'>
              <ButtonLink
                href='#about-intea'
                variant='secondary'
                leftIcon='plus'
                iconSize='sm'
              >
                Conheça mais sobre o Intea
              </ButtonLink>

              <ButtonLink
                href='#contact'
                variant='primary'
                leftIcon='arrow-down'
                iconSize='sm'
              >
                Faça Download do App
              </ButtonLink>
            </div>
          </div>

          <div className='hidden lg:block lg:w-4/12 2xl:w-1/4 mt-12 lg:mt-0 relative'>
            <img
              src='/images/hero-mock.png'
              alt='App Intea'
              // className='max-w-full h-auto ml-auto transform translate-y-12'
              className='absolute max-w-[initial] w-[600px] top-12 left-[-100px]'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
