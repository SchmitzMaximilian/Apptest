import React, {createContext,  useState} from "react"

export const FTContext = createContext();

export function FehlerTextProvider(props) {
  const [FehlerText,setFehlerText]=useState(false)
  return (
    <FTContext.Provider value={[FehlerText,setFehlerText]}    >
    {props.children}
    </FTContext.Provider>
  );
}