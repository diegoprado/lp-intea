import CurveShape from '../components/ui/CurveShape';
import Button from '../components/ui/Button';

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
              Gestão terapêuptica baseada em{' '}
              <span className='text-intea-teal-darker'>ABA</span> para crianças
              com <span className='text-intea-teal-darker'>autismo</span>.
            </h1>

            <p className='text-lg lg:text-2xl mb-8'>
              Plataforma web especializada no registro de evolução, organização
              da jornada do atendimento e comunicação da equipe terapêutica com
              a família, a ecola e as operadoras de saúde.
            </p>

            <div className='flex flex-col lg:flex-row lg:flex-wrap gap-4'>
              <Button variant='secondary' leftIcon='plus' iconSize='sm'>
                Conheça mais sobre o Intea
              </Button>

              <Button variant='primary' leftIcon='arrow-down' iconSize='sm'>
                Faça Download do App
              </Button>
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
