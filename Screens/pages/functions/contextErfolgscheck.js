import React, {createContext,  useState} from "react"

export const ECContext = createContext();

export function ErfolgscheckProvider(props){
  const [Erfolgscheck,setErfolgscheck]=useState(false)
  return (
    <ECContext.Provider value={[Erfolgscheck,setErfolgscheck]}    >
    {props.children}
    </ECContext.Provider>
  );
}
