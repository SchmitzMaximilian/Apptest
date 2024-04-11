export const Dataset=(p)=>{
  let Data
  if(p=="DE"){
  Data={
    "Texte":{
      "Rechtsbelehrung":"Bitte machen Sie nachfolgend vollständige Angaben um spätere Rückfragen und Verzögerungen bei der Sachbearbeitung der Abrechnungen zu vermeiden. Schäden die durch falsche oder unverständliche Angaben entstehen gehen zu Ihren Lasten."
      },
    "PerData":
    {
      "Eingabefelder":["Vorname","Nachname","Straße und Hausnummer","Postleitzahl","Wohnort"],
      "EingabefelderIcons":["person","person","person","person","person"],
    },
    "KontaktData":
    {
      "Eingabefelder":["Vorwahl / Rufnummer Festnetz (nur falls verfügbar)","Vorwahl / Rufnummer Mobiltelefon (nur falls verfügbar)","E-Mail-Adresse (nur falls verfügbar)"],
      "EingabefelderIcons":["mail","mail","mail"],
      
    },
  } 
  }else{
    Data={
      "Texte":{
        "Rechtsbelehrung":"Please provide complete information below in order to answer any questions you may have later To avoid delays in the processing of invoices. Any damage caused by incorrect or incomprehensible information will be borne by you."
        },
      "PerData":
      {
        "Eingabefelder":["Firstname","Surname","Street name and house number","Postal Code","Location/City name"],
        "EingabefelderIcons":["person","person","person","person","person"],
      },
      "KontaktData":
      {
        "Eingabefelder":["Area code / phone number landline (only if available)","Area code / phone number mobile phone (only if available)","Email address (only if available)"],
        "EingabefelderIcons":["mail","mail","mail"],
      },
    } 
  }

  return Data;
   
}