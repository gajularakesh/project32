import React, { createContext, useState } from "react";

export const HotelbookContext = createContext();

const HotelbookContextProvider = (props) => {
  const [list, setlist] = useState(null)

  return (
    <HotelbookContext.Provider value={{ list, setlist }}>
      {props.children}
    </HotelbookContext.Provider>
  );
};

export default HotelbookContextProvider;

