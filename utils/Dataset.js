/**
"Sozialversicherung":
    {
      "Eingabefelder":[],
      "EingabefelderIcons":[],
    }, */

export const Dataset=(p)=>{
  let Data
  if(p=="DE"){
  Data={
    
    "PerData":
    {
      "Eingabefelder":["Vorname","Nachname","Straße und Hausnummer","Postleitzahl","Wohnort"],
      "EingabefelderIcons":["User","User","User","User","User"], 
    },
    "KontaktData":
    {
      "Eingabefelder":["Vorwahl / Rufnummer Festnetz (nur falls verfügbar)","Vorwahl / Rufnummer Mobiltelefon (nur falls verfügbar)","E-Mail-Adresse (nur falls verfügbar)"],
      "EingabefelderIcons":["Mail","Mail","Mail"],
      
    },
    "SozialData":
    {
      "Eingabefelder":["Staatsangehörigkeit","Geburtsort (Pflichtangabe)","Geburtsland (nur falls nicht Deutschland)","Krankenkasse (Bitte kompletter Name, also zB. AOK NordWest, nicht AOK)"],
      "EingabefelderIcons":["Krankenversicherung","Krankenversicherung","Krankenversicherung","Krankenversicherung"],
    },
    "BankData":
    {
      "Eingabefelder":["Name des Kreditinstituts","IBAN","Kontoinhaber (falls abweichend)"],
      "EingabefelderIcons":["Bank","Bank","Bank"],
    },
    "SteuerData":
    {
      "Eingabefelder":["Steuerklasse","Anzahl Kinder","Konfession"],
      "EingabefelderIcons":["Steuer","Steuer","Steuer"],
    },
  } 
  }else{
    Data={
      
      "PerData":
      {
        "Eingabefelder":["First name","Last name","Street name and house number","Postal Code","Location / City name"],
        "EingabefelderIcons":["User","User","User","User","User"], 
      },
      "KontaktData":
      {
        "Eingabefelder":["Area code / phone number landline (only if available)","Area code / phone number mobile phone (only if available)","Email address (only if available)"],
        "EingabefelderIcons":["Mail","Mail","Mail"],
      },
      "SozialData":
    {
      "Eingabefelder":["Nationality","Place of birth (mandatory)","Country of birth (only if not Germany)","Health insurance company (please complete name, e.g. AOK NordWest, not AOK)"],
      "EingabefelderIcons":["Krankenversicherung","Krankenversicherung","Krankenversicherung","Krankenversicherung"],
    },
    "BankData":
    {
      "Eingabefelder":["Name of institute of credit","IBAN ","Account holder (if different)"],
      "EingabefelderIcons":["Bank","Bank","Bank",],
    },
    "SteuerData":
    {
      "Eingabefelder":["Tax class","Number of children","Denomination"],
      "EingabefelderIcons":["Steuer","Steuer","Steuer"],
    },
    } 
  }

  return Data;
   
}