const Benefits = () => {
  return (
    <section className='bg-intea-gray-light py-10 lg:py-0' id='about-intea'>
      <div className='container mx-auto px-4 flex flex-col gap-20'>
        <div className='flex flex-col lg:flex-row gap-20 items-center justify-center'>
          <div className='flex flex-col items-start gap-8 bg-white rounded-4xl p-8 shadow-[0px_24px_48px_-12px_rgba(41,37,36,0.18)] w-full lg:w-6/12'>
            <div className='flex flex-col gap-4'>
              <h2 className='text-4xl md:text-5xl font-bold text-intea-teal-dark'>
                Nossos{' '}
                <span className='text-intea-teal-darker'>Benefícios</span>.
              </h2>

              <p className='text-intea-teal-dark text-lg'>
                O{' '}
                <span className='text-intea-teal-darker font-bold'>Intea</span>{' '}
                é uma plataforma digital inovadora que facilita o registro de
                evolução e a comunicação entre profissionais e famílias no
                atendimento a crianças com TEA. Integrando informações de saúde
                e intervenções terapêuticas, o{' '}
                <span className='text-intea-teal-darker font-bold'>Intea</span>{' '}
                promove um acompanhamento contínuo e personalizado, garantindo
                colaboração entre todos os envolvidos no desenvolvimento do
                paciente.
              </p>
            </div>
          </div>

          <div className='hidden lg:flex justify-center items-center relative after:absolute after:right-[0] after:top-[0] after:bg-[linear-gradient(90deg,_rgba(2,0,36,0)_10%,_rgba(250,250,249,1)_100%,_rgba(250,250,249,1)_100%)] after:w-[50px] after:h-[100%]'>
            <img
              src='/images/benefits-mock.png'
              alt='Tela do aplicativo Intea'
              className='w-full'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
