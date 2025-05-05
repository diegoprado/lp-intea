import { useForm, ValidationError } from '@formspree/react';
import Button from '../components/ui/Button';
import Icon from '../components/ui/Icon';
import { Trans, useTranslation } from 'react-i18next';
import i18n from '@/i18n';
const Contact = () => {
  const [state, handleSubmit] = useForm('xyzenvdz');
  const { t } = useTranslation();
  const isPt = i18n.language === 'pt';

  return (
    <section className='bg-intea-gray-light px-4 lg:px-0 py-16' id='contact'>
      <div className='container mx-auto bg-intea-teal rounded-3xl relative overflow-hidden after:content-[] after:absolute after:w-[70%] after:h-[100%] after:right-[0] after:top-0 after:bg-[url(/images/hero-spheres.png)] bg-contain '>
        <div className='flex flex-col lg:flex-row gap-8 items-start lg:items-center relative z-10'>
          {/* Coluna do formulário */}
          <div className='lg:w-1/2 text-white p-8 lg:p-16'>
            {state.succeeded ? (
              <div className='bg-intea-teal-lighter/20 rounded-2xl p-8 text-center'>
                <Icon name='check-circle' size='2xl' className='mb-4' />
                <h3 className='text-4xl font-bold mb-2'>
                  {t('contact.success.title')}
                </h3>
                <p className='text-2xl'>
                  <Trans
                    i18nKey='contact.success.description'
                    components={{
                      highlight: (
                        <span className='font-bold text-intea-teal-darker' />
                      ),
                    }}
                  />
                </p>
              </div>
            ) : (
              <>
                <h2 className='text-4xl md:text-5xl font-bold mb-3'>
                  <Trans
                    i18nKey='contact.title'
                    components={{
                      highlight: <span className='text-intea-teal-darker' />,
                    }}
                  />
                </h2>

                <p className='text-xl mb-8'>{t('contact.description')}</p>

                <form
                  onSubmit={handleSubmit}
                  className='contact-form flex flex-col gap-4 z-10'
                >
                  {/* Nome */}
                  <div className='flex flex-col gap-2'>
                    <label htmlFor='name'>Seu Nome</label>
                    <div className='relative'>
                      <div className='absolute left-4 top-1/2 -translate-y-1/2 text-gray-400'>
                        <Icon name='user-single' size='sm' color='black' />
                      </div>
                      <input
                        id='name'
                        type='text'
                        name='name'
                        className='w-full rounded-full py-4 px-12 text-black bg-white/90'
                        placeholder={isPt ? 'Nome' : 'Name'}
                        required
                      />
                    </div>
                    <ValidationError
                      prefix={isPt ? 'Nome' : 'Name'}
                      field='name'
                      errors={state.errors}
                      className='text-red-300 text-sm'
                    />
                  </div>

                  {/* Email */}
                  <div className='flex flex-col gap-2'>
                    <label htmlFor='email'>
                      {isPt ? 'Seu Email' : 'Your Email'}
                    </label>
                    <div className='relative'>
                      <div className='absolute left-4 top-1/2 -translate-y-1/2 text-gray-400'>
                        <Icon name='email' size='sm' color='black' />
                      </div>
                      <input
                        id='email'
                        type='email'
                        name='email'
                        className='w-full rounded-full py-4 px-12 text-black bg-white/90'
                        placeholder={isPt ? 'Email' : 'Email'}
                        required
                      />
                    </div>
                    <ValidationError
                      prefix={isPt ? 'Email' : 'Email'}
                      field='email'
                      errors={state.errors}
                      className='text-red-300 text-sm'
                    />
                  </div>

                  {/* Telefone */}
                  <div className='flex flex-col gap-2'>
                    <label htmlFor='phone'>
                      {isPt ? 'Seu Telefone' : 'Your Phone'}
                    </label>
                    <div className='relative'>
                      <div className='absolute left-4 top-1/2 -translate-y-1/2 text-gray-400'>
                        <Icon name='phone' size='sm' color='black' />
                      </div>
                      <input
                        id='phone'
                        type='tel'
                        name='phone'
                        className='w-full rounded-full py-4 px-12 text-black bg-white/90'
                        placeholder={isPt ? 'Telefone' : 'Phone'}
                      />
                    </div>
                    <ValidationError
                      prefix={isPt ? 'Telefone' : 'Phone'}
                      field='phone'
                      errors={state.errors}
                      className='text-red-300 text-sm'
                    />
                  </div>

                  <div className='mt-6'>
                    <Button
                      type='submit'
                      variant='primary'
                      className='submit-button w-full md:w-auto py-4 px-8 text-lg'
                      disabled={state.submitting}
                    >
                      {state.submitting
                        ? isPt
                          ? 'Enviando...'
                          : 'Sending...'
                        : isPt
                        ? 'Quero ser avisado'
                        : 'I want to be notified'}
                    </Button>
                  </div>
                </form>
              </>
            )}
          </div>

          {/* Coluna da imagem - apenas visível em desktop */}
          <div className='hidden lg:flex justify-center items-center relative z-10'>
            <img
              src='/images/form-illustration.png'
              alt='Pessoa usando app Intea'
              // className='max-w-full md:max-w-xl'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
