const MiniPersoenlicheDatenObject={
  MitarbeiterID:0,
  BewerberStandort:0,
  //------PersonenDaten-----
  Geschlecht:0,
  Vname:"",
  Nname:"",
  Adresse:"",
  PCode:0,
  City:"",
  

  //------KontaktDaten-----
  Festnetz:"",
  Mobil:"",
  Email:"",

  //------BankDaten-----
  Bankname:"",
  iban:"", 
  Barzahlung:0,

  //------SteuerDaten-----
  SteueridCheck:0,//Einwilligung
  SteuerID:"",
  
    
  //------SozialDaten-----
  
  SVNummerfeld:0,
  Staatsbuergerschaft:"",
  GBDatum:"", 
  GBName:"",
  GBOrt:"",
  GBLand:"",    
  
  //--------JobBeginnDaten------
  StatusCheck:0,
  Eintragsonstige:"",


  //--------JobStatusDaten (JaNeinCheckboxen)--------
  HauptjobCheck:0,
  WeitereJobCheck:0,
  GeldGrenzeCheck:0,

  //--------KrankenDaten------
  Kassename:"",
  KVArt:0,

  
}

export default MiniPersoenlicheDatenObject