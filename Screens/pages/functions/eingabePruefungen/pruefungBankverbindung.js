import {isValid} from 'iban'

const submitdataBank=async()=>{
  setFehlercheck(false)
  setFehlerText(false)
  setErfolgscheck(false) 
  let Arr=[]
  let check=true 
  
  if(!(PrivateDatenArr.Bankname.trim().toString().length>2)){ 
    check=false
    Arr.push(1)
  }else{
    Arr.push(0)
  }
  if((isValid(PrivateDatenArr.iban.trim().toString())==false)){ 
    check=false
    Arr.push(1)
  }else{
    Arr.push(0)
  }
   
  if(PrivateDatenArr.Inhaber==0){ 
    PrivateDatenArr.Inhaber=PrivateDatenArr.Vname.toString()+' '+PrivateDatenArr.Nname.toString()
  } 
  Arr.push(0)
  if(check){
    setbankBG(Arr)
    try{
      const request ={
        method: 'POST',
        headers: { 'Content-Type' : 'application/json'},
        body: JSON.stringify({
          "query":4,
          "bankname":PrivateDatenArr.Bankname.toString().trim(),
          "iban":PrivateDatenArr.iban.toString().trim(), 
          "inhaber":PrivateDatenArr.Inhaber.toString().trim(),
          "mitarbeiterID":mitarbeiterID 
        })
      };
      const d = await fetch('http://192.168.2.44/datenbankapi/index.php', request);
      let e = await d.json(); 
      if(e.ergebnis==true){

        setErfolgscheck(true)
        setTimeout(()=>{
          setErfolgscheck(false)
        },6000)
        settab4(false)
        settab4ausgefuellt(true)
        console.log('speichertestyeah')
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
    setbankBG(Arr)
    setFehlercheck(true)
    setFehlerText(false)
    setTimeout(()=>{
      setFehlercheck(false)
    },6000)
    setErfolgscheck(false)
    
  }
}

export default submitdataBank