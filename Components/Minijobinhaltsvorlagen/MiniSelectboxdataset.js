export const Minijobdataset=(p)=>{
  let BoxData
  if(p=="DE"){
  BoxData={
    "TopSelectboxenLabel":["Arbeitsstatus"],
      "SubSelectboxenLabel":[["Schüler(in)","Student(in)","Schulentlassene(r)","Studienbewerber(in)","Wehr-/Zivvildienstleistend","Auszubildende(r)","Beamtin/Beamter","Selbstständige(r)","Arbeitslose(r)","AN in Elternzeit","AN in unbezahltem Urlaub","Arbeitnehmer(in)","Hausfrau/-mann","Altersrentner(in)",],],
  } 
}else{
  BoxData={
    "TopSelectboxenLabel":["Work status"],
    "SubSelectboxenLabel":[["Pupil","student","school leavers","Applicant","Performing military/civil service","Apprentice","civil servant","self-employed person","unemployed","AN on parental leave","AN on unpaid leave","employee","Housewife/husband","old age pensioner",],],
  
  } 
}

return BoxData;
 
}