import React, {createContext,  useState} from "react"

export const MAidContext = createContext();

export function MitarbeiteridProvider(props){
  const [mitarbeiterID,setmitarbeiterID]=useState(0)
  return (
    <MAidContext.Provider value={[mitarbeiterID,setmitarbeiterID]}  >
    {props.children}
    </MAidContext.Provider>
  );
}
