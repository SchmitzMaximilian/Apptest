

const [Fehlercheck,setFehlercheck]=useState(false)
const [FehlerText,setFehlerText]=useState(false)
const [Erfolgscheck,setErfolgscheck]=useState(false)

const submitdataNA=async()=>{  
  setFehlercheck(false)
  setFehlerText(false)
  setErfolgscheck(false)
  let Arr=[]
  console.log(PrivateDatenArr)
  let check=true
  if(!(PrivateDatenArr.BewerberStandort>0)){
          check=false
         
          
  } 
  if(!(PrivateDatenArr.ArbeitsGrundlage>0)){
    check=false 
    
  }
  if(!(PrivateDatenArr.Geschlecht>0)){
    check=false
    
  } 
  if(!(PrivateDatenArr.Vname.trim().toString().length>1)){
    check=false;
    Arr.push(1)
    
    
  }else{
    Arr.push(0)
  }
  if(!(PrivateDatenArr.Nname.trim().toString().length>0)){
    check=false
    
    
    Arr.push(1)
  }else{
    Arr.push(0)
  }
  
  if(!(PrivateDatenArr.Adresse.trim().toString().length>2)){
    check=false
    
    
    Arr.push(1)
  }else{
    Arr.push(0)
  }
  console.log(PrivateDatenArr.PCode)
  if((PrivateDatenArr.PCode==0) || (PrivateDatenArr.PCode.trim().toString().length!=5)){
    check=false
    
    
    Arr.push(1)
  }else{
    Arr.push(0)
  }
  if(!(PrivateDatenArr.City.trim().toString().length>1)){
    check=false
    
    
    Arr.push(1)
  }else{
    Arr.push(0)
  }
  console.log(check)
  if(check){
    setnameAnschriftBG(Arr)
    try{
      const request ={
        method: 'POST',
        headers: { 'Content-Type' : 'application/json'},
        body: JSON.stringify({
          "query":2,
          "standortSelect": PrivateDatenArr.BewerberStandort.toString().trim(),
          "geschlechtSelect":PrivateDatenArr.Geschlecht.toString().trim(),
          "vorname":PrivateDatenArr.Vname.toString().trim(),
          "nachname":PrivateDatenArr.Nname.toString().trim(),
          "straßeuzahl":PrivateDatenArr.Adresse.toString().trim(),
          "plz":PrivateDatenArr.PCode.toString().trim(),
          "wohnort":PrivateDatenArr.City.toString().trim(),
          "grundlage":PrivateDatenArr.ArbeitsGrundlage.toString().trim()

          //"username":eingabe1.toString(), teilzeit check box einbinden
        })
      };
      const d = await fetch('http://192.168.2.44/datenbankapi/index.php', request);
      let e = await d.json(); 
      console.log(d)
      if(e.ergebnis>0 &&(!isNaN(e.ergebnis))){
        setErfolgscheck(true)
        setTimeout(()=>{
          setErfolgscheck(false)
        },6000)
        settab1(false)
        settab1ausgefuellt(true)
        setmitarbeiterID(e.ergebnis)
        let NO=PrivateDatenArr
        NO.MitarbeiterID=e.ergebnis
        setPrivateDatenArr(NO)
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
    setnameAnschriftBG(Arr)
    setFehlercheck(true)
    setFehlerText(false)
    setTimeout(()=>{
      setFehlercheck(false)
    },6000)
    setErfolgscheck(false)
  }
}

export default submitdataNA