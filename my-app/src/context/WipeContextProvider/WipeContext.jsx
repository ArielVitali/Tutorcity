import { createContext, useContext, useState } from "react";

const WipeContext = createContext();

export const useWipe = () => {
  return useContext(WipeContext);
};

export const WipeProvider = ({ children }) => {
  const [isWiped, setIsWiped] = useState(true);

  const wipe = () => {
    setIsWiped(true);
  };

  const unwipe = () => {
    setIsWiped(false);
  };

  return (
    <WipeContext.Provider value={{ isWiped, wipe, unwipe }}>
      {children}
    </WipeContext.Provider>
  );
};
