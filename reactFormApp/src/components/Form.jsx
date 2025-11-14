import { useForm } from 'react-hook-form';

import './Form.css';

export function Form({ onAddPerson }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log(errors);

  function onSubmit(data) {
    console.log(data);
    onAddPerson(data);
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
        {...register('tel', {
          required: 'Podaj numer telefonu',
          pattern: {
            value: /^\+?[0-9]{9,15}$/,
            message: 'Podaj poprawny numer telefonu',
          },
        })}
      />
      {errors.tel && <span className='error'>{errors.tel.message}</span>}

      <label htmlFor='email'>E-mail</label>
      <input
        id='email'
        type='email'
        {...register('email', { required: 'Podaj email', validate: (value) => value.includes('@') || 'Podaj poprawny email' })}
      />
      {errors.email && <span className='error'>{errors.email.message}</span>}

      {/* <label htmlFor='isInvoiceRequired'>
        <input id='isInvoiceRequired' type='checkbox' placeholder='Podaj NIP' />
        Faktura VAT
      </label>
      <input id='nip' /> */}

      <div className='footer'>
        <button>Dodaj</button>
      </div>
    </form>
  );
}
