import React, { useState } from 'react';
import { UpdateUser } from '../../../../../actions/profileAction';
import { useValue } from '../../../../../context/globalContext';
import { showAlert } from '../../../../../actions/alertActions';
import UpdateItem from './UpdateItem';

const UpdateAccount = () => {
  const [showPassword, setShowPassword] = useState({
    showCurrentPassword: false,
    showNewPassword: false,
  });
  const {
    dispatch,
    state: { user },
    state: { alert },
  } = useValue();

  const fetchUser = async (data) => {
    try {
      const response = await UpdateUser(user, data);
      if (response.success) {
        showAlert('success', 'The Form Is Updated', dispatch);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleClickCurrentPassword = () => {
    setShowPassword({
      ...showPassword,
      showCurrentPassword: !showPassword.showCurrentPassword,
    });
  };
  const handleClickNewPassword = () => {
    setShowPassword({
      ...showPassword,
      showNewPassword: !showPassword.showNewPassword,
    });
  };

  return (
    <>
      <UpdateItem
        alert={alert}
        fetchUser={fetchUser}
        handleClickCurrentPassword={handleClickCurrentPassword}
        handleClickNewPassword={handleClickNewPassword}
        showPassword={showPassword}
      />
    </>
  );
};

export default UpdateAccount;
