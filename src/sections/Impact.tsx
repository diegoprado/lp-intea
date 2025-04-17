import ButtonLink from '@/components/ui/ButtonLink';

const Impact = () => {
  return (
    <section className='bg-intea-gray-light px-4 lg:px-0'>
      <div className='container mx-auto bg-intea-teal rounded-3xl relative overflow-hidden after:content-[] after:absolute after:w-[70%] after:h-[100%] after:right-[0] after:top-0 after:bg-[url(/images/hero-spheres.png)] bg-contain py-8 lg:py-12 px-8 lg:px-16'>
        <div className='flex flex-col md:flex-row gap-8 items-center justify-center'>
          <div className='w-full lg:min-w-[600px] 2xl:max-w-[700px] text-white'>
            <h2 className='text-4xl lg:text-6xl font-bold mb-6'>
              <span className='text-intea-teal-darkest'>Impacto</span> Esperado
            </h2>

            <div className='flex flex-col gap-6'>
              <p className='text-xl lg:text-2xl'>
                O Intea pode transformar o cuidado de pacientes autistas,
                oferecendo uma solução integrada que beneficia todos os
                envolvidos. Ao centralizar informações e promover intervenções
                personalizadas, o aplicativo melhora a qualidade de vida dos
                pacientes e suas famílias.
              </p>

              <p className='text-xl lg:text-2xl'>
                O Intea é uma solução moderna para enfrentar os desafios do
                autismo, promovendo inclusão, organização e desenvolvimento,
                sendo essencial para famílias e profissionais.
              </p>

              <div className='flex justify-center lg:justify-start'>
                <ButtonLink
                  href='#contact'
                  variant='primary'
                  leftIcon='arrow-down'
                  className='text-lg'
                >
                  Faça Download do App
                </ButtonLink>
              </div>
            </div>
          </div>

          <div className='flex justify-center items-center relative z-10'>
            <img
              src='/images/impact.png'
              alt='Interface do aplicativo Intea com ilustração'
              className='max-w-full'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
