import React, { useContext, useEffect, useState } from 'react';
import Zuschläge from '../sachbearbeitungComponents/Zuschläge';
import SachbearbeitungDatenObject from '../../../utils/Objects/SachbearbeitungDatenObject';
import SpeicherSAButton from '../sachbearbeitungtextfeldcomp/speicherSAButton';
import Grundentlohnung from './Grundentlohnung';

function AngabenEntlohnung(props) {
  const [SachbearbeitungDatenArr,setSachbearbeitungDatenArr]=useState(props.D)

  const submitLohndaten=async()=>{
    let check=true
console.log(SachbearbeitungDatenArr )
    if(SachbearbeitungDatenArr.Stundenlohncheck==1){
      if(Number(SachbearbeitungDatenArr.Stundenlohn)==0){
        check=false
      }
    }
    if(SachbearbeitungDatenArr.Festlohncheck==1){
      if(Number(SachbearbeitungDatenArr.Festlohn)==0){
        check=false
      }
    }
    if(SachbearbeitungDatenArr.Festgehaltcheck==1){
      if(Number(SachbearbeitungDatenArr.Festgehalt)==0){
        check=false
      }
    }

    if(SachbearbeitungDatenArr.BesondereCheck==1){
      if(SachbearbeitungDatenArr.Besondereliste==0){
        check=false
      }
    }



    //prüfungen???
    if(check){
      try{
        const request ={
          method: 'POST',
          headers: { 'Content-Type' : 'application/json'},
          body: JSON.stringify({
            "query": 2,//ändern
            "SLC" : SachbearbeitungDatenArr.Stundenlohncheck.toString().trim(),
            "SL": SachbearbeitungDatenArr.Stundenlohn.toString().trim(),
            "FLC": SachbearbeitungDatenArr.Festlohncheck.toString().trim(),
            "FL": SachbearbeitungDatenArr.Festlohn.toString().trim(),
            "FGC": SachbearbeitungDatenArr.Festgehaltcheck.toString().trim(),
            "FG": SachbearbeitungDatenArr.Festgehalt.toString().trim(),
            "AlleZuschlaege": SachbearbeitungDatenArr.AlleCheck.toString().trim(),
            "BetriebsZuschlaege": SachbearbeitungDatenArr.Betriebsueblichecheck.toString().trim(),
            "BZC": SachbearbeitungDatenArr.BesondereCheck.toString().trim(),
            "BZL": SachbearbeitungDatenArr.Besondereliste.toString().trim(),
            "MAID": SachbearbeitungDatenArr.MitarbeiterID
          })
        };
        const d = await fetch('https://itsnando.com/datenbankapi/indexsachbearbeitung.php', request);
        let e = await d.json();
        if(e.ergebnis>0 &&(!isNaN(e.ergebnis))){
          let NO=SachbearbeitungDatenArr
          NO.MitarbeiterID=e.ergebnis
          setSachbearbeitungDatenArr(NO)
        }
        else if(e.ergebnis=='DBerror'){
          console.log('no Update')
        }else{
          console.log('Fehler')
        }
      }
      catch(err){
        console.error(err)
      }
    }else{
      
    }
  }
  
  useEffect(()=>{

  },[props])
  return (
    <>
    <Grundentlohnung/>
      <Zuschläge/>
      < SpeicherSAButton SDF={submitLohndaten}/>
    </>
  )
}

export default AngabenEntlohnung