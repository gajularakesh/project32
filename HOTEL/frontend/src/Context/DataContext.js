import React, { createContext, useState } from "react";

export const DataContext = createContext();

const DataContextProvider = (props) => {
  const [msg, setmsg] = useState(true);

  return (
    <DataContext.Provider value={{ msg, setmsg }}>
      {props.children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
