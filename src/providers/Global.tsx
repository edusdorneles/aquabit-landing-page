import React, { useState, useEffect } from "react";

// Interfaces
interface IGlobalContext {
  openFormModal: any;
  setOpenFormModal: any;

  openStoreModal: any;
  setOpenStoreModal: any;

  cookieAlert: any;
  setCookieAlert: any;

  alreadyCookieAlert: any;
}

// Valores default
const DEFAULT_VALUE = {
  openFormModal: false,
  setOpenFormModal: (openStoreModal: boolean) => {},

  openStoreModal: false,
  setOpenStoreModal: (openStoreModal: boolean) => {},

  cookieAlert: true,
  setCookieAlert: (cookieAlert: boolean) => {},

  alreadyCookieAlert: () => {},
};

export const GlobalContext = React.createContext<IGlobalContext>(DEFAULT_VALUE);

export const GlobalProvider: React.FC = ({ children }) => {
  const [openFormModal, setOpenFormModal] = useState(false);
  const [openStoreModal, setOpenStoreModal] = useState(false);
  const [cookieAlert, setCookieAlert] = useState(true);

  // Localstorage para cookies
  const checkCookies = () => {
    if (localStorage.getItem("cookieAlert")) {
      setCookieAlert(false);
    }
  };

  const alreadyCookieAlert = (option: string) => {
    localStorage.setItem("cookieAlert", option);
  };

  useEffect(() => {
    checkCookies();
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        openFormModal,
        setOpenFormModal,
        openStoreModal,
        setOpenStoreModal,
        cookieAlert,
        setCookieAlert,
        alreadyCookieAlert,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobal = () => React.useContext(GlobalContext);
