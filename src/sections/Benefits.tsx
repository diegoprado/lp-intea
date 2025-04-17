const Benefits = () => {
  return (
    <section
      className='bg-intea-gray-light pt-10 pb-10 lg:pt-36 lg:pb-30 2xl:py-36'
      id='about-intea'
    >
      <div className='flex flex-col gap-20'>
        <div className='relative w-full'>
          <div className='container mx-auto px-4 flex flex-col lg:flex-row gap-8 items-center justify-start'>
            <div className='flex flex-col items-start gap-8 bg-white rounded-4xl py-16 px-10 shadow-[0px_24px_48px_-12px_rgba(41,37,36,0.18)] w-full lg:max-w-[575px] 2xl:max-w-[750px] 3xl:max-w-[1200px]'>
              <div className='flex flex-col gap-10'>
                <h2 className='text-4xl lg:text-5xl 2xl:text-7xl font-bold text-intea-teal-dark'>
                  Nossos{' '}
                  <span className='text-intea-teal-darker'>Benefícios</span>.
                </h2>

                <p className='text-intea-teal-dark text-xl 2xl:text-2xl font-medium'>
                  O <span className='text-intea-teal-darker'>Intea</span> é uma
                  plataforma digital inovadora que facilita o registro de
                  evolução e a comunicação entre profissionais e famílias no
                  atendimento a crianças com TEA. Integrando informações de
                  saúde e intervenções terapêuticas, o{' '}
                  <span className='text-intea-teal-darker'>Intea</span> promove
                  um acompanhamento contínuo e personalizado, garantindo
                  colaboração entre todos os envolvidos no desenvolvimento do
                  paciente.
                </p>
              </div>
            </div>

            {/* <div className='hidden 2xl:flex justify-center items-center relative after:absolute after:right-[0] after:top-[0] after:bg-[linear-gradient(90deg,_rgba(2,0,36,0)_10%,_rgba(250,250,249,1)_100%,_rgba(250,250,249,1)_100%)] after:w-[50px] after:h-[100%] w-7/12'>
            <img
              src='/images/benefits-mock.png'
              alt='Tela do aplicativo Intea'
              className='w-full'
            />
          </div> */}

            {/* <div className='2xl:hidden flex justify-center items-center relative w-7/12'>

          </div> */}

            <img
              src='/images/benefits-mock.png'
              alt='Tela do aplicativo Intea'
              className='hidden md:flex w-full lg:max-w-[750px] 2xl:max-w-[1025px] absolute top-1/2 -translate-y-1/2 right-0 z-10'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
