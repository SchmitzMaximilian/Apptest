const submitdataKOM=async()=>{
  setFehlercheck(false)
  setFehlerText(false)
  setErfolgscheck(false) 
   
  let check=true
  
   console.log(mitarbeiterID)
  if(check){
    
    try{
      const request ={
        method: 'POST',
        headers: { 'Content-Type' : 'application/json'},
        body: JSON.stringify({
          "query":3,
          "festnetz":PrivateDatenArr.Festnetz.toString().trim(),
          "mobil":PrivateDatenArr.Mobil.toString().trim(),
          "emailbw":PrivateDatenArr.Email.toString().trim(),
          "mitarbeiterID":mitarbeiterID //für test ID Festlegen
          
        })
      }; 
      const d = await fetch('http://192.168.2.44/datenbankapi/index.php', request);
      let e = await d.json();
      
      if(e.ergebnis==true){

        setErfolgscheck(true) 
        setTimeout(()=>{
          setErfolgscheck(false)
        },6000)
        settab2(false)
        settab2ausgefuellt(true)
      }
      else if(e.ergebnis=='DBerror'){//zeigt Datenbankfehler an keine speicherung
        console.log('no Update')
        setFehlercheck(true)
        setFehlerText(true)
        setTimeout(()=>{
          setFehlercheck(false)
        },6000)
      }else{//Fehler bei der Eingabe füllen
        setFehlercheck(true)
        setFehlerText(false)
        setTimeout(()=>{
          setFehlercheck(false)
        },6000)
        console.log('Fehler')
      }
    }
    catch(err){
      console.error(err)
    }
  }else{
    //
    
    setFehlercheck(true)
    setFehlerText(false)
    setTimeout(()=>{
      setFehlercheck(false)
    },6000)
    setErfolgscheck(false)
  }
}
export default submitdataKOM