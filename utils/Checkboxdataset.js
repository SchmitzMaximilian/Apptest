
export const Checkboxdataset=(p)=>{
  let BoxData
  if(p=="DE"){
    BoxData={
   "TopSelectboxenLabel":["Geschlecht","Art der Krankenversicherung (Pflichtangabe, zutreffendes makieren)","Höchster allgemeinbildender Schulabschluss [TS-6](Pflichtangabe, Zutreffendes bitte makieren)","Höchster beruflicher Ausbildungsabschluss [TS 7](Pflichtangabe, Zutreffendes bitte makieren)","in"],
     "SubSelectboxenLabel":[["weiblich","männlich","divers","unbestimmt"],
     ["Gesetzlich","Freiwillig","Privat","Ich habe oder hatte eine Elterneigensschaft (Nachweis z.B. Geburtsurkunde)","Ich bin nicht Rentenversicherungspflichtig (z.B. Beamter oder Selbständiger, Nachweis)","Ich übe neben dieser noch weitere Beschäftigungen aus(Bitte fügen Sie eine vollständige Liste aller weiteren Arbeitgeber bei)","Dies ist nicht meine Hauptbeschäftigung"],
     ["Ohne Schulabschluss (1)","Haupt-/Volksschulabschluss (2)","Mittlere Reife oder gleichwertiger Abschluss (3)","Abitur/ Fachabitur (4)"],
     ["Ohne beruflichen Ausbildungsabschluss (1)","Abschluss einer anerkannten Berufsausbildung (2)","Meister-/Techniker- oder gleichwertige Fachschulabschluss (3)","Bachlor (4)","Diplom/Magister/Master/Staatsexamen (5)","Promotion (6)"],
   ["Vollzeit","Teilzeit","Student (über 520€)"]],
   
 }
 }else{
   BoxData={
     "TopSelectboxenLabel":["Gender","Type of health insurance (mandatory information, mark as applicable)","Highest general school leaving certificate [TS-6](Mandatory information, please mark as applicable)","Highest professional training qualification [TS 7](Mandatory information, please mark as applicable)",""],
       "SubSelectboxenLabel":[["female","male","non-binary","gender neutral"],
       ["Legally","Voluntarily","Private","I have or had parental status (proof e.g. birth certificate)","I am not subject to pension insurance (e.g. civil servant or self-employed, include proof)","I have other jobs besides this one (please include a complete list of all other employers)","This is not my main job"],
       ["Without school leaving certificate (1)","Secondary/primary school certificate (2)","Secondary school leaving certificate or equivalent qualification (3)","High school diploma/technical high school diploma (4)"],
       ["Without professional training qualification (1)","Completion of recognized vocational training (2)","Master craftsman/technician or equivalent technical school qualification (3)","Bachelor (4)","Diploma/Magister/Master/State Examination (5)","Promotion (6)"],
     ["Full time","Part time","Student (over €520)"]],
     
   } 
 }

return BoxData;
 
}