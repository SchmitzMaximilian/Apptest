export const Minijobdataset=(p)=>{
  let BoxData
  if(p=="DE"){
  BoxData={
    "TopSelectboxenLabel":["Arbeitsstatus","Standort"],
      "SubSelectboxenLabel":[["(1)Schüler(in)","(2)Student(in)","(3)Beamtin/Beamter","(4)Sonstiger"],
      ["(1)Ballermann 6","(2)El Lazo GmbH","(3)Louisiana G+F GmbH","(4)SUB/La Bamba","(5)Hausbar/Disco Power","(6)Schweine Janes"]],
  } 
}else{
  BoxData={
    "TopSelectboxenLabel":["Work status","Location"],
    "SubSelectboxenLabel":[["(1)Pupil","(2)student","(3)civil servant","(4)Other"],
    ["(1)Ballermann 6","(2)El Lazo GmbH","(3)Louisiana G+F GmbH","(4)SUB/La Bamba","(5)Hausbar/Disco Power","(6)Schweine Janes"]],
  
  } 
}

return BoxData;
 
}