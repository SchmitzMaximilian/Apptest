import React, {createContext,  useState} from "react"

export const FNContext = createContext();

export function FehlernummerProvider(props) {
  const [Fehlernummer,setFehlernummer]=useState(false)
  return (
    <FNContext.Provider value={[Fehlernummer,setFehlernummer]}    >
    {props.children}
    </FNContext.Provider>
  );
}