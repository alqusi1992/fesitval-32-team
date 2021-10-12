import React from 'react';
import { useForm } from 'react-hook-form';
import {
  FormWrapper,
  ButtonWrapper,
  InputWrapper,
  PWrapper,
} from './GuestFormStyles';
import { useGuestContext } from '../../../context/guestContext';

const GuestForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const { guestUserOrder, setGuestUserOrder } = useGuestContext();

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <InputWrapper
        type='text'
        placeholder='First name...'
        {...register('firstName', {
          required: 'Please enter your first name!',
        })}
        onChange={(e) =>
          setGuestUserOrder({ ...guestUserOrder, firstName: e.target.value })
        }
      />
      {errors.firstName && <PWrapper>{errors.firstName.message}</PWrapper>}

      <InputWrapper
        type='text'
        placeholder='Last name...'
        {...register('lastName', {
          required: 'Please enter your last name!',
        })}
        onChange={(e) =>
          setGuestUserOrder({ ...guestUserOrder, lastName: e.target.value })
        }
      />
      {errors.lastName && <PWrapper>{errors.lastName.message}</PWrapper>}

      <InputWrapper
        type='text'
        placeholder='E-mail address...'
        {...register('email', {
          required: 'please enter your e-mail address!',
        })}
        onChange={(e) =>
          setGuestUserOrder({ ...guestUserOrder, email: e.target.value })
        }
      />
      {errors.email && <PWrapper>{errors.email.message}</PWrapper>}

      <ButtonWrapper type='submit'>➝ CHECK OUT</ButtonWrapper>
    </FormWrapper>
  );
};

export default GuestForm;
