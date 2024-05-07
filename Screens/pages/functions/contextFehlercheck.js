import React, {createContext,  useState} from "react"

export const FCContext = createContext();

export function FehlercheckProvider(props) {
  const [Fehlercheck,setFehlercheck]=useState(false)
  return (
    <FCContext.Provider value={[Fehlercheck,setFehlercheck]}    >
    {props.children}
    </FCContext.Provider>
  );
}



