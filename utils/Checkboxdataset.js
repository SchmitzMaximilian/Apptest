
export const Checkboxdataset=(p)=>{
  let BoxData
  if(p=="DE"){
    BoxData={
   "TopSelectboxenLabel":["Geschlecht","Art der Krankenversicherung (Pflichtangabe, zutreffendes makieren)","Höchster allgemeinbildender Schulabschluss [TS-6] (Pflichtangabe, Zutreffendes bitte makieren)","Höchster beruflicher Ausbildungsabschluss [TS 7] (Pflichtangabe, Zutreffendes bitte makieren)","in","Standort"],
     "SubSelectboxenLabel":[["(1) weiblich","(2) männlich","(3) divers","(4) unbestimmt"],
     ["(1) Gesetzlich","(2) Freiwillig","(3) Privat","(4) Ich übe neben dieser noch weitere Beschäftigungen aus(Bitte fügen Sie eine vollständige Liste aller weiteren Arbeitgeber bei)"],
     ["Ohne Schulabschluss (1) ","Haupt-/Volksschulabschluss (2) ","Mittlere Reife oder gleichwertiger Abschluss (3) ","Abitur/ Fachabitur (4) "],
     ["Ohne beruflichen Ausbildungsabschluss (1) ","Abschluss einer anerkannten Berufsausbildung (2) ","Meister-/Techniker- oder gleichwertige Fachschulabschluss (3) ","Bachlor (4) ","Diplom/Magister/Master/Staatsexamen (5)","Promotion (6)"],
   ["(1) Vollzeit","(2) Teilzeit","(3) Student (über 520€)"],
  ["(1) Ballermann 6","(2) El Lazo GmbH","(3) Louisiana G+F GmbH","(4) SUB/La Bamba","(5) Hausbar/Disco Power","(6) Schweine Janes"]],
   
 }
 }else{
   BoxData={
     "TopSelectboxenLabel":["Gender","Type of health insurance (mandatory information, mark as applicable)","Highest general school leaving certificate [TS-6](Mandatory information, please mark as applicable)","Highest professional training qualification [TS 7](Mandatory information, please mark as applicable)","","Location"],
       "SubSelectboxenLabel":[["(1) female","(2) male","(3) non-binary","(4) gender neutral"],
       ["(1) Legally","(2) Voluntarily","(3) Private","(4) I have other jobs besides this one (please include a complete list of all other employers)"],
       ["Without school leaving certificate (1) ","Secondary/primary school certificate (2) ","Secondary school leaving certificate or equivalent qualification (3) ","High school diploma/technical high school diploma (4) "],
       ["Without professional training qualification (1) ","Completion of recognized vocational training (2) ","Master craftsman/technician or equivalent technical school qualification (3) ","Bachelor (4) ","Diploma/Magister/Master/State Examination (5)","Promotion (6)"],
     ["(1) Full time","(2) Part time","(3) Student (over €520)"],
    ["(1) Ballermann 6","(2) El Lazo GmbH","(3) Louisiana G+F GmbH","(4) SUB/La Bamba","(5) Hausbar/Disco Power","(6) Schweine Janes"]],
     
   } 
 }

return BoxData;
 
}