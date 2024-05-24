/**
"Sozialversicherung":
    {
      "Eingabefelder":[],
      "EingabefelderIcons":[],
    }, */

export const Dataset=(p)=>{
  let Data
  if(p=="DE"){
  Data={//(Pflichtangabe)
    
    "PerData":
    {
      "Eingabefelder":["Vorname (Pflichtangabe)","Nachname (Pflichtangabe)","Straße und Hausnummer (Pflichtangabe)","Postleitzahl (Pflichtangabe)","Wohnort (Pflichtangabe)"],
      "EingabefelderIcons":["User","User","User","User","User"], 
    },
    "KontaktData":
    {
      "Eingabefelder":["Vorwahl / Rufnummer Festnetz (nur falls verfügbar)","Vorwahl / Rufnummer Mobiltelefon (nur falls verfügbar)","E-Mail-Adresse (Pflichtangabe)"],
      "EingabefelderIcons":["Mail","Mail","Mail"],
      
    },
    "SozialData":
    {
      "Eingabefelder":["Staatsangehörigkeit (Pflichtangabe)","Geburtsort (Pflichtangabe)","Geburtsland (Pflichtangabe nur falls nicht Deutschland)","Krankenkasse (Pflichtangabe bitte kompletter Name, also zB. AOK NordWest, nicht AOK)"],
      "EingabefelderIcons":["Krankenversicherung","Krankenversicherung","Krankenversicherung","Krankenversicherung"],
    },
    "BankData":
    {
      "Eingabefelder":["Name des Kreditinstituts (Pflichtangabe)","IBAN (Pflichtangabe)","Kontoinhaber (falls abweichend)"],
      "EingabefelderIcons":["Bank","Bank","Bank"],
    },
    "SteuerData":
    {
      "Eingabefelder":["Steuerklasse","Anzahl Kinder (Pflichtangabe)","Konfession (Pflichtangabe)"],
      "EingabefelderIcons":["Steuer","Steuer","Steuer"],
    },
  } 
  }else{
    Data={//(mandatory)
      
      "PerData":
      {
        "Eingabefelder":["First name (mandatory)","Last name (mandatory)","Street name and house number (mandatory)","Postal Code (mandatory)","Location / City name (mandatory)"],
        "EingabefelderIcons":["User","User","User","User","User"], 
      },
      "KontaktData":
      {
        "Eingabefelder":["Area code / phone number landline (only if available)","Area code / phone number mobile phone (only if available)","Email address (mandatory)"],
        "EingabefelderIcons":["Mail","Mail","Mail"],
      },
      "SozialData":
    {
      "Eingabefelder":["Nationality (mandatory)","Place of birth (mandatory)","Country of birth (mandatory only if not Germany)","Health insurance company (mandatory please complete name, e.g. AOK NordWest, not AOK)"],
      "EingabefelderIcons":["Krankenversicherung","Krankenversicherung","Krankenversicherung","Krankenversicherung"],
    },
    "BankData":
    {
      "Eingabefelder":["Name of institute of credit (mandatory)","IBAN (mandatory)","Account holder (if different)"],
      "EingabefelderIcons":["Bank","Bank","Bank",],
    },
    "SteuerData":
    {
      "Eingabefelder":["Tax class","Number of children (mandatory)","Denomination (mandatory)"],
      "EingabefelderIcons":["Steuer","Steuer","Steuer"],
    },
    } 
  }

  return Data;
   
}