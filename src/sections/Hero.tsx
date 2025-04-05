import CurveShape from '../components/ui/CurveShape';
import ButtonLink from '@/components/ui/ButtonLink';

const Hero = () => {
  return (
    <section className='relative min-h-[1200px] w-full overflow-hidden'>
      <div className='absolute inset-0 bg-intea-teal z-0'>
        <div
          className='absolute top-0 right-0 w-full h-full pointer-events-none'
          style={{
            backgroundImage: 'url("/images/hero-spheres.png")',
            backgroundPosition: 'top right',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'auto',
          }}
        />

        <CurveShape
          type='up'
          fill='white'
          height='80'
          className='md:h-64 lg:h-80'
          hasIconDown
        />
      </div>

      <div className='container mx-auto relative z-10 pt-36 px-4'>
        <div className='flex flex-col lg:flex-row items-start lg:items-center justify-between'>
          <div className='mt-10 lg:mt-0 lg:w-7/12 text-white'>
            <h1 className='text-4xl lg:text-7xl font-bold mb-6'>
              Prontuário{' '}
              <span className='text-intea-teal-darker'>
                digital integrativo
              </span>{' '}
              para o desenvolvimento do{' '}
              <span className='text-intea-teal-darker'>autista</span>.
            </h1>

            <p className='text-lg lg:text-2xl mb-8'>
              Orienta a família e organiza as informações no enfrentamento dos
              desafios apresentados pelo autismo. <br /> INTEA armazena
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

          <div className='lg:w-1/2 mt-12 lg:mt-0'>
            <img
              src='/images/hero-mock.png'
              alt='App Intea'
              className='max-w-full h-auto ml-auto transform translate-y-12'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
