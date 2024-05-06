const submitdataSozial=async()=>{
  setFehlercheck(false)
  setFehlerText(false)
  setErfolgscheck(false)
  let Arr=[]
  let check=true 
  
  if(!(PrivateDatenArr.RentenCheck>0)){
    if(PrivateDatenArr.SVNummerfeld==0){
    check=false
    setrentennummerBG([1])
    }else{
      setrentennummerBG([0])
    }
  }  
  
  if(!(PrivateDatenArr.Staatsbuergerschaft.trim().toString().length>0)){
    check=false
    Arr.push(1)
  }else{
    Arr.push(0)
  }
  if(!(PrivateDatenArr.GBDatum.trim().toString().length>0)){
    check=false
  }
  if(!(PrivateDatenArr.GBOrt.trim().toString().length>0)){
    check=false
    Arr.push(1)
  }else{
    Arr.push(0)
  }
  if(PrivateDatenArr.GBLand==0){
    PrivateDatenArr.GBLand='Deutschland'
    
  }else if(!(PrivateDatenArr.GBLand>3)){
    check=false
    Arr.push(1)
  }else{
    Arr.push(0)
  }
  if(!(PrivateDatenArr.Kassename.trim().toString().length>0)){
    check=false
    Arr.push(1)
  }else{
    Arr.push(0)
  } 
  if(!(PrivateDatenArr.KVArt>0)){
    check=false
  }

  if(PrivateDatenArr.KVArt==4){
    if(!(PrivateDatenArr.AndereArbeitgeber.trim().toString().length>4)){
    check=false
    setsonderfall([1])
  }else{
    setsonderfall([0])
  } 
  }
   
console.log(PrivateDatenArr)
setsoziBG(Arr)
  if(check){
    try{
      const request ={
        method: 'POST',
        headers: { 'Content-Type' : 'application/json'},
        body: JSON.stringify({
          "query":6,
          "sozialCheck":PrivateDatenArr.RentenCheck.toString().trim(),
          "sozinummer":PrivateDatenArr.SVNummerfeld.toString().trim(),
          "herkunft":PrivateDatenArr.Staatsbuergerschaft.toString().trim(),
          "gbdatum":PrivateDatenArr.GBDatum.toString().trim(),
          "gbort":PrivateDatenArr.GBOrt.toString().trim(),
          "gbland":PrivateDatenArr.GBLand.toString().trim(),
          "krankenkassename":PrivateDatenArr.Kassename.toString().trim(),
          "soziSelect":PrivateDatenArr.KVArt.toString().trim(),
          "arbeitgeberListe":PrivateDatenArr.AndereArbeitgeber.toString().trim(),
          "mitarbeiterID":mitarbeiterID
        })
      };
      console.log(request.body)
      const d = await fetch('http://192.168.2.44/datenbankapi/index.php', request);
      let e = await d.json();
      console.log(e)
      if(e.ergebnis==true){
        setErfolgscheck(true)  
        setTimeout(()=>{
          setErfolgscheck(false)
        },6000)
        settab3ausgefuellt(true)
        settab3(false)
        console.log('speichertestyeah')
      }
      else if(e.ergebnis=='DBerror'){//zeigt Datenbankfehler an keine speicherung
        setFehlercheck(true)
        setFehlerText(true)
        setTimeout(()=>{
          setFehlercheck(false)
        },6000)
        console.log('no Update')
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
    setsoziBG(Arr)
    setFehlercheck(true)
    setFehlerText(false)
    setTimeout(()=>{
      setFehlercheck(false)
    },6000)
    setErfolgscheck(false)
  }
}

export default submitdataSozial