const submitdataSteuer=async()=>{
  setFehlercheck(false)
  setFehlerText(false)
  setErfolgscheck(false) 
  let Arr=[]
  let check=true
  
  if(!PrivateDatenArr.SteueridCheck>0){
    if(!isSteuerIdValid(PrivateDatenArr.SteuerID.trim())){
    check=false
    
  Arr.push(1)
  }else{
    Arr.push(0)
  }
  }
  

 
  if(PrivateDatenArr.Steuerklasse==0 || (Number(PrivateDatenArr.Steuerklasse)>6)){
    check=false
    Arr.push(1)
  }else{
    Arr.push(0)
  }
  if(!(Number(PrivateDatenArr.Kinder>0))){
    check=false
    Arr.push(1)
  }else{
    Arr.push(0)
  }
  if(!(PrivateDatenArr.Konfession.trim().toString().length>4) || PrivateDatenArr.Konfession.trim().toString().length==0){
    check=false
    Arr.push(1)
  }else{
    Arr.push(0)
  } 
  if(check){
    setsteuerBG(Arr)
    try{
      const request ={
        method: 'POST',
        headers: { 'Content-Type' : 'application/json'},
        body: JSON.stringify({
          "query":5,
          "steuerCheck":PrivateDatenArr.SteueridCheck.toString().trim(),
          "steuerid":PrivateDatenArr.SteuerID.toString().trim(),
          "steuerklasse":PrivateDatenArr.Steuerklasse.toString().trim(),
          "kinder":PrivateDatenArr.Kinder.toString().trim(),
          "konfession":PrivateDatenArr.Konfession.toString().trim(),
          "mitarbeiterID":mitarbeiterID
          //
        })
      };
      const d = await fetch('http://192.168.2.44/datenbankapi/index.php', request);
      let e = await d.json(); 
      
      if(e.ergebnis==true){

        setErfolgscheck(true)
        setTimeout(()=>{
          setErfolgscheck(false)
        },6000)
        settab5(false)
        settab5ausgefuellt(true)
        console.log('speichertestyeah')
      }
      else if(e.ergebnis=='DBerror'){//zeigt Datenbankfehler an keine speicherung 
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
    setsteuerBG(Arr)
    setFehlercheck(true) 
    setFehlerText(false)
    setTimeout(()=>{
      setFehlercheck(false)
    },6000)
    setErfolgscheck(false)
  }
}

export default submitdataSteuer