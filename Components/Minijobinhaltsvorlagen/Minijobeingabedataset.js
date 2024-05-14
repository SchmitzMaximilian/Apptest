export const MiniDataset=(p)=>{
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
      "Eingabefelder":["Vorwahl / Rufnummer Festnetz (nur falls verfügbar)","Vorwahl / Rufnummer Mobiltelefon (nur falls verfügbar)","E-Mail-Adresse (nur falls verfügbar)"],
      "EingabefelderIcons":["Mail","Mail","Mail"],
      
    },
    "SozialData":
    {
      "Eingabefelder":["Sozialversicherungsnummer","Staatsangehörigkeit (Pflichtangabe)","Geburtsname (Pflichtangabe, bei abweichendem Nachnamen)","Geburtsort (Pflichtangabe)","Geburtsland (Pflichtangabe nur falls nicht Deutschland)"],
      "EingabefelderIcons":["User","User","User","User","User"],
    },
    "BankData":
    {
      "Eingabefelder":["Name des Kreditinstituts (Pflichtangabe)","IBAN (Pflichtangabe)"],
      "EingabefelderIcons":["Bank","Bank"],
    },
    "SteuerData":
    {
      "Eingabefelder":["Steuer-ID (Pflichtangabe)"],
      "EingabefelderIcons":["Steuer"],
    },
    "KrankenData":
    {
      "Eingabefelder":["Krankenkasse (Bitte kompletter Name)"],
      "EingabefelderIcons":["Krankenversicherung"],
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
        "Eingabefelder":["Area code / phone number landline (only if available)","Area code / phone number mobile phone (only if available)","Email address (only if available)"],
        "EingabefelderIcons":["Mail","Mail","Mail"],
      },
      "SozialData":
    {
      "Eingabefelder":["Social security number","Nationality (mandatory)","Birth name (mandatory, if last name is different)","Place of birth (mandatory)","Country of birth (mandatory only if not Germany)"],
      "EingabefelderIcons":["User","User","User","User","User"],
    },
    "BankData":
    {
      "Eingabefelder":["Name of institute of credit (mandatory)","IBAN (mandatory)"],
      "EingabefelderIcons":["Bank","Bank"],
    },
    "SteuerData":
    {
      "Eingabefelder":["Tax ID (mandatory information)"],
      "EingabefelderIcons":["Steuer"],
    },
    "KrankenData":
    {
      "Eingabefelder":["Health insurance company (full name please)"],
      "EingabefelderIcons":["Krankenversicherung"],
    },
    } 
  }

  return Data;
   
}