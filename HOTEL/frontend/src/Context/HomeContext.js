import React, { createContext, useState } from "react";

export const HomeContext = createContext();

const HomeContextProvider = (props) => {
  const [list, setlist] = useState(null)

  return (
    <HomeContext.Provider value={{ list, setlist }}>
      {props.children}
    </HomeContext.Provider>
  );
};

export default HomeContextProvider;

