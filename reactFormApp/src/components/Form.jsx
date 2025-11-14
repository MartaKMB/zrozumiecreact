import { useForm } from 'react-hook-form';

import './Form.css';

export function Form({ onAddPerson }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isSubmitSuccessful },
    watch,
    reset,
  } = useForm({ mode: 'onBlur' });

  const isInvoiceRequired = watch('isInvoiceRequired');

  function onSubmit(data) {
    const { isInvoiceRequired, ...formData } = data;

    if (!isInvoiceRequired) {
      delete formData.nip;
    }

    console.log(formData);
    onAddPerson(formData);
  }

  if (isSubmitSuccessful) {
    return (
      <>
        <span className='title'>Dodano pomyślnie!</span>
        <button onClick={() => reset()}>Dodaj kolejny formularz</button>
      </>
    );
  }

  return (
    <form autoComplete='off' onSubmit={handleSubmit(onSubmit)} noValidate>
      <label htmlFor='name'>Imię</label>
      <input
        id='name'
        {...register('name', {
          required: 'Podaj imię',
        })}
      />
      {errors.name && <span className='error'>{errors.name.message}</span>}

      <label htmlFor='age'>Wiek</label>
      <input
        id='age'
        type='number'
        {...register('age', {
          valueAsNumber: true,
          required: 'Podaj wiek',
          min: { value: 1, message: 'Podaj wiek większy od 0' },
          max: { value: 120, message: 'Podaj wiek mniejszy od 120' },
        })}
      />
      {errors.age && <span className='error'>{errors.age.message}</span>}

      <label htmlFor='tel'>Telefon</label>
      <input
        id='tel'
        type='tel'
        {...register('contact.tel', {
          required: 'Podaj numer telefonu',
          pattern: {
            value: /^\+?[0-9]{9,15}$/,
            message: 'Podaj poprawny numer telefonu',
          },
        })}
      />
      {errors.contact?.tel && (
        <span className='error'>{errors.contact.tel.message}</span>
      )}

      <label htmlFor='email'>E-mail</label>
      <input
        id='email'
        type='email'
        {...register('contact.email', {
          required: 'Podaj email',
          validate: (value) => value.includes('@') || 'Podaj poprawny email',
        })}
      />
      {errors.contact?.email && (
        <span className='error'>{errors.contact.email.message}</span>
      )}

      <label htmlFor='isInvoiceRequired'>
        <input
          id='isInvoiceRequired'
          type='checkbox'
          placeholder='Podaj NIP'
          {...register('isInvoiceRequired')}
        />
        Faktura VAT
      </label>
      <input
        id='nip'
        type='number'
        {...register('nip', {
          required: {
            value: isInvoiceRequired,
            message: 'Podaj NIP',
          },
          pattern: {
            value: /^[0-9]{10}$/,
            message: 'Podaj poprawny NIP',
          },
          disabled: !isInvoiceRequired,
        })}
      />
      {errors.nip && <span className='error'>{errors.nip.message}</span>}

      <div className='footer'>
        <button disabled={!isDirty}>Dodaj</button>
      </div>
    </form>
  );
}
