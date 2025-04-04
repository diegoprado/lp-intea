const Benefits = () => {
  return (
    <section className='bg-intea-gray-light'>
      <div className='container mx-auto px-4 flex flex-col gap-20'>
        <div className='flex gap-20 items-center justify-center'>
          <div className='flex flex-col items-start gap-8 bg-white rounded-4xl p-8 shadow-[0px_24px_48px_-12px_rgba(41,37,36,0.18)] w-6/12'>
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

          <div className='flex justify-center items-center relative after:absolute after:right-[0] after:top-[0] after:bg-[linear-gradient(90deg,_rgba(2,0,36,0)_10%,_rgba(250,250,249,1)_100%,_rgba(250,250,249,1)_100%)] after:w-[50px] after:h-[100%]'>
            <img
              src='/images/benefits-mock.png'
              alt='Tela do aplicativo Intea'
              className='w-full'
            />
          </div>
        </div>
        {/* 
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          <BenefitCard
            icon='user-triple'
            title='Famílias'
            text='Melhora a comunicação com a equipe terapêutica e o acesso aos resultados alcançados pela criança.'
            link='/familias'
            color='teal'
          />

          <BenefitCard
            icon='user-single'
            title='Profissionais'
            text='Facilita o registro de evolução, agenda, elaboração de relatórios e devolutivas para a família.'
            link='/profissionais'
            color='orange'
          />

          <BenefitCard
            icon='hospital'
            title='Clínicas'
            text='Centraliza toda a jornada do atendimento em um único lugar com menor custo de gestão.'
            link='/clinicas'
            color='pink'
          />

          <BenefitCard
            icon='sheet'
            title='Planos de Saúde'
            text='Reduz o custo assistencial ao permitir a gestão clínica do recurso próprio e da rede prestadora.'
            link='/planos'
            color='violet'
          />
        </div> */}
      </div>
    </section>
  );
};

export default Benefits;
