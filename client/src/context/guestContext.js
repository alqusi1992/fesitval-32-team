import { useState, useContext, createContext } from "react";

const GuestContext = createContext();

export const useGuestContext = () => {
  return useContext(GuestContext);
};

export const GuestProvider = ({ children }) => {
  const [guestUser, setGuestUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    tickets: [
      {
        id: "",
        typeName: "",
        quantity: 0,
      },
    ],
    // price: "",
  });

  const value = {
    guestUser,
    setGuestUser,
  };
  return (
    <GuestContext.Provider value={value}>{children}</GuestContext.Provider>
  );
};
