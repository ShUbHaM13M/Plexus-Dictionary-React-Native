import React, {useContext, useState} from 'react';

const ModalContext = React.createContext();

export function useModal() {
  return useContext(ModalContext);
}

const ModalProvider = ({children}) => {
  const [showModal, setShowModal] = useState(false);

  const value = {
    showModal,
    setShowModal,
  };

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};

export default ModalProvider;
