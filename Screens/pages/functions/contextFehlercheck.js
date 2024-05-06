import React, {createContext, useContext, useState} from 'react'

export const FCContext = createContext(null);

function contextFehlercheckProvider({children}) {
  const [Fehlercheck,setFehlercheck]=useState(false)
  return (
    <FCContext.Provider
    value={{
      Fehlercheck,
      setFehlercheck,
    }}
    >
    {children}
    </FCContext.Provider>
  )
}

export default contextFehlercheckProvider

export function useFCContext(){
  const context = useContext(FCContext);
  if(!context){
    throw new Error(
      "useFCContext must be used within a contextFehlercheckProvider"
    );
  }
  return context;
}