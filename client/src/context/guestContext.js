import { useState, useContext, createContext } from "react";

const GuestContext = createContext();

export const useGuestContext = () => {
  return useContext(GuestContext);
};

const GuestProvider = (children) => {
  const [guestUser, setGuestUser] = useState({});
  const value = {
    guestUser,
    setGuestUser,
  };
  return (
    <GuestContext.Provider value={value}>{children}</GuestContext.Provider>
  );
};
