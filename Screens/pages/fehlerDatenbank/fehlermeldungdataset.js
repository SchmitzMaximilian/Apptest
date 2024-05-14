export const Fehlerdataset=(p)=>{
  let Fehlerdata
  if(p=="DE"){
    Fehlerdata={
      "NameAnschrift":{
        "Vorname":"Dieses Feld muss mindestens 2 Zeichen enthalten",
        "Nachname":"Dieses Feld muss mindestens 1 Zeichen enthalten",
        "StraßeHaus":"Dieses Feld muss mindestens 2 Zeichen enthalten. Format (Straße,H-Nr.)",
        "PLZ":"Dieses Feld muss mindestens 4 Zeichen enthalten",
        "Wohnort":"Dieses Feld muss mindestens 3 Zeichen enthalten",

      },
      "Kommunikation":{
        "Festnetz":"",
        "Mobil":"",
        "Email":"",
       },
       "Bankverbindung":{
        "Bankname":"Bitte geben Sie den Namen Ihrer Bank an (Pflichtfeld)",
        "IBAN":"Bitte stellen Sie sicher, dass die von Ihnen angegebene IBAN gültig ist",
        "Inhaber":"",
       },
       "Steuer":{
        "SteuerID":"Bitte stellen Sie sicher, dass die von Ihnen angegebene Steuer-ID gültig ist",
        "Steuerklasse":"In diesem Feld darf nur 1 Ziffer stehen",
        "Kinder":"Sollten Sie keine Kinder haben tragen Sie bitte eine 0 ein",
        "Konfession":"Bitte füllen Sie dieses Feld aus",
       },
       "Sozialversicherung":{
        "SVNummer":"Ihre Rentennummer besteht aus GENAU 12 Zeichen, bitte überprüfen Sie die Gültigkeit der angegebenen Rentennummer (Pflichtfeld)",
        "Staatsangehörigkeit":"Bitte geben Sie Ihre Staatsangehörigkeit an",
        "GBOrt":"Bitte geben Sie Ihren Geburtssort an",
        "GBLand":"Ihre Angabe muss mindstens 4 Buchstaben enthalten",
        "Kassename":"Bitte füllen Sie dieses Feld aus",
        "Arbeitgeber":"Bitte geben sie ALLE ihre anderen Arbeitgeber an im Format (Name1, Name2, etc.)",
       },

    }
  }else{
    Fehlerdata={
      "NameAnschrift":{
        "Vorname":"This field must contain at least 2 characters",
        "Nachname":"This field must contain at least 1 character",
        "StraßeHaus":"This field must contain at least 2 characters. Format (Street, H-No.)",
        "PLZ":"This field must contain at least 4 characters",
        "Wohnort":"This field must contain at least 3 characters",

      },
      "Kommunikation":{
        "Festnetz":"",
        "Mobil":"",
        "Email":"",
       },
       "Bankverbindung":{
        "Bankname":"Please enter the name of your bank (required)",
        "IBAN":"Please make sure that the IBAN you provided is valid",
        "Inhaber":"",
       },
       "Steuer":{
        "SteuerID":"Please make sure the tax ID you provided is valid",
        "Steuerklasse":"This field can only contain 1 digit",
        "Kinder":"If you do not have children, please enter 0",
        "Konfession":"Please fill out this field",
       },
       "Sozialversicherung":{
        "SVNummer":"Your pension number consists of EXACTLY 12 characters, please check the validity of the pension number provided (required)",
        "Staatsangehörigkeit":"Please indicate your nationality",
        "GBOrt":"Please indicate your place of birth",
        "GBLand":"Your entry must contain at least 4 letters",
        "Kassename":"Please fill out this field",
        "Arbeitgeber":"Please list ALL your other employers in the format (Name1, Name2, etc.)",
       },

    }
  }
return Fehlerdata
}

/**
 "":{
  "":"",
  "":"",
  "":"",
 },
 */

//"":"",