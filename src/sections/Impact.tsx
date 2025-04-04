import React from 'react';
import Button from '../components/ui/Button';

const Impact = () => {
  return (
    <section className='bg-intea-gray-light '>
      <div className='container mx-auto bg-intea-teal rounded-3xl relative overflow-hidden after:content-[] after:absolute after:w-[70%] after:h-[100%] after:right-[0] after:top-0 after:bg-[url(/images/hero-spheres.png)] bg-contain'>
        <div className='flex flex-col md:flex-row gap-8 items-center justify-center'>
          {/* Coluna de texto */}
          <div className='md:w-1/2 text-white'>
            <h2 className='text-4xl md:text-5xl font-bold mb-6'>
              <span className='text-intea-teal-darker'>Impacto</span> Esperado
            </h2>

            <div className='flex flex-col gap-6'>
              <p className='text-xl'>
                O INTEA pode transformar o cuidado de pacientes autistas,
                oferecendo uma solução integrada que beneficia todos os
                envolvidos. Ao centralizar informações e promover intervenções
                personalizadas, o aplicativo melhora a qualidade de vida dos
                pacientes e suas famílias.
              </p>

              <p className='text-xl'>
                O INTEA é uma solução moderna para enfrentar os desafios do
                autismo, promovendo inclusão, organização e desenvolvimento,
                sendo essencial para famílias e profissionais.
              </p>

              <div className=''>
                <Button
                  variant='primary'
                  leftIcon='arrow-down'
                  className='text-lg'
                >
                  Faça Download do App
                </Button>
              </div>
            </div>
          </div>

          {/* Coluna da imagem */}
          <div className='flex justify-center items-center relative z-10'>
            <img
              src='/images/impact.png'
              alt='Interface do aplicativo INTEA com ilustração'
              className='max-w-full md:max-w-xl'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
