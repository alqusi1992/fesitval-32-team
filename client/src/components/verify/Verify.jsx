import React from 'react';
import { useValue } from '../../context/globalContext';
import VerifyButton from './VerifyButton';

const Verify = () => {
  const {
    state: { user },
  } = useValue();

  return (
    <>
      {user?.result?.isVerified === false && (
        <div>
          Your Email is not verified yet, please verify to get full access
          <VerifyButton />
        </div>
      )}
    </>
  );
};

export default Verify;
