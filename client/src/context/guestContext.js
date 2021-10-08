import { useState, useContext, createContext } from 'react';

const GuestContext = createContext();

export const useGuestContext = () => {
  return useContext(GuestContext);
};

export const GuestProvider = ({ children }) => {
  const [guestUserOrder, setGuestUserOrder] = useState({
    firstName: '',
    lastName: '',
    email: '',
    festivalId: '',
    tickets: [
      {
        id: '',
        typeName: '',
        quantity: 0,
      },
    ],
  });
  const value = {
    guestUserOrder,
    setGuestUserOrder,
  };

  return (
    <GuestContext.Provider value={value}>{children}</GuestContext.Provider>
  );
};
