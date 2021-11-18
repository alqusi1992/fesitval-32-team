import React, { useEffect, useState, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { useGuestContext } from '../../../context/guestContext';
import useScrollToTop from '../../../utils/useScrollToTop';
import GuestItem from './GuestItem';

const GuestForm = ({
  setIsFormSubmitted,
  isTriggerSubmit,
  handleNext,
  setIsTriggerSubmit,
  isFormSubmitted,
}) => {
  useScrollToTop();
  const {
    handleSubmit,
    register,
    formState: { errors },
    getValues,
  } = useForm();
  const {
    guestUserOrder: { userInfo },
    guestUserOrder,
    setGuestUserOrder,
  } = useGuestContext();

  const [checked, setChecked] = useState(false);
  const [values, setValues] = useState({
    showPassword: false,
    userInfo: {
      firstName: userInfo.firstName,
      lastName: userInfo.lastName,
      email: userInfo.email,
      password: userInfo.password,
    },
  });

  const handleCheckBox = (event) => {
    setChecked(event.target.checked);
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const onSubmitCallback = useCallback(() => {
    const onSubmit = (data) => {
      setGuestUserOrder((prev) => ({
        ...prev,
        userInfo: {
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          password: data.password || null,
        },
      }));
      setIsFormSubmitted(true);
    };
    handleSubmit(onSubmit)();
  }, [handleSubmit, setIsFormSubmitted, setGuestUserOrder]);

  useEffect(() => {
    if (isTriggerSubmit) {
      onSubmitCallback();
      setIsTriggerSubmit(false);
    }
    if (isFormSubmitted) {
      handleNext(guestUserOrder);
      setIsFormSubmitted(false);
    }
  }, [
    onSubmitCallback,
    setIsTriggerSubmit,
    isTriggerSubmit,
    guestUserOrder,
    handleNext,
    isFormSubmitted,
    setIsFormSubmitted,
  ]);

  return (
    <>
      <GuestItem
        handleCheckBox={handleCheckBox}
        handleClickShowPassword={handleClickShowPassword}
        checked={checked}
        values={values}
        register={register}
        errors={errors}
        getValues={getValues}
      />
    </>
  );
};

export default GuestForm;
