export const Minijobdataset=(p)=>{
  let BoxData
  if(p=="DE"){
  BoxData={
    "TopSelectboxenLabel":["Arbeitsstatus"],
      "SubSelectboxenLabel":[["(1)Schüler(in)","(2)Student(in)","(3)Beamtin/Beamter","(4)Sonstiger"],],
  } 
}else{
  BoxData={
    "TopSelectboxenLabel":["Work status"],
    "SubSelectboxenLabel":[["(1)Pupil","(2)student","(3)civil servant","(4)Other"],],
  
  } 
}

return BoxData;
 
}