import React, { useState } from 'react';
import { createContext } from 'react';

const UpdateContext = createContext({ update: false });

export const UpdateProvider = ({ children }) => {
  const [update, setUpdate] = useState(false);

  function updateState() {
    setUpdate(!update);
  }

  return (
    <UpdateContext.Provider value={{ update, updateState }}>
      {children}
    </UpdateContext.Provider>
  );
};
export default UpdateContext;
