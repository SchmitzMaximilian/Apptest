import React, { useContext, useEffect, useState } from 'react';
import Zuschläge from '../sachbearbeitungComponents/Zuschläge';
import SachbearbeitungDatenObject from '../../../utils/Objects/SachbearbeitungDatenObject';
import SpeicherSAButton from '../sachbearbeitungtextfeldcomp/speicherSAButton';
import Grundentlohnung from './Grundentlohnung';
import TitleTouch from '../../fragebogencomps/touchTitle/TitleTouch';
import { SachbearbeitungTextdataset } from '../../../utils/Sachbearbeitung/SachbearbeitungTextdataset';
import { TransactionContext } from '../../../utils/Context';

function AngabenEntlohnung(props) {
  const [sprache,setzesprache]=useContext(TransactionContext)
  const [tab1,settab1]=useState(false)
  const [tab1ausgefuellt,settab1ausgefuellt]=useState(false)
  const [SachbearbeitungDatenArr,setSachbearbeitungDatenArr]=useState() 

  const submitLohndaten=async()=>{
    let check=true 
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
 
    console.log(SachbearbeitungDatenArr)
    //prüfungen???
    if(check){
      try{
        const request ={
          method: 'POST',
          headers: { 'Content-Type' : 'application/json'},
          body: JSON.stringify({
            "query": 2,//ändern
            "SLC" : SachbearbeitungDatenArr.Stundenlohncheck?1:0,
            "SL": SachbearbeitungDatenArr.Stundenlohn?.toString().trim(),
            "FLC": SachbearbeitungDatenArr.Festlohncheck?1:0,
            "FL": SachbearbeitungDatenArr.Festlohn?.toString().trim(),
            "FGC": SachbearbeitungDatenArr.Festgehaltcheck?1:0,
            "FG": SachbearbeitungDatenArr.Festgehalt?.toString().trim(),
            "AlleZuschlaege": SachbearbeitungDatenArr.AlleCheck?1:0,
            "BetriebsZuschlaege": SachbearbeitungDatenArr.Betriebsueblichecheck?1:0,
            "BZC": SachbearbeitungDatenArr.BesondereCheck?1:0,
            "BZL": SachbearbeitungDatenArr.Besondereliste?.toString().trim(),
            "MAID": props.U
          })
        };
        const d = await fetch('https://itsnando.com/datenbankapi/indexsachbearbeitung.php', request);
        let e = await d.json();
         
        if(e.ergebnis==true){
          settab1ausgefuellt(true)
          settab1(false)
          let NO=SachbearbeitungDatenArr
          NO.MitarbeiterID=props.U
          props.S(NO)
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
  const stl=(t)=>{
    let NO=SachbearbeitungDatenArr
    NO.Stundenlohn=t
    setSachbearbeitungDatenArr(NO)
  }
  const fl=(t)=>{
    let NO=SachbearbeitungDatenArr
    NO.Festlohn=t
    setSachbearbeitungDatenArr(NO)
  }
  const fg=(t)=>{
    let NO=SachbearbeitungDatenArr
    NO.Festgehalt=t
    setSachbearbeitungDatenArr(NO)
  }
  const liste=(t)=>{
    let NO=SachbearbeitungDatenArr
    NO.Besondereliste=t
    setSachbearbeitungDatenArr(NO)
  }
  useEffect(()=>{
    setSachbearbeitungDatenArr(props.D)
  },[props])
  return (
    <> 
    <TitleTouch AGB={tab1ausgefuellt}  F={settab1} S={tab1} T={SachbearbeitungTextdataset(sprache?"DE":"EN").Titel.Zeiten} />
    {
      tab1?
      <>       
        <Grundentlohnung SV={SachbearbeitungDatenArr} SF={setSachbearbeitungDatenArr} Stl={stl} Fl={fl} Fg={fg}/>
      <Zuschläge  SV={SachbearbeitungDatenArr} SF={setSachbearbeitungDatenArr} L={liste}/>
      < SpeicherSAButton SDF={submitLohndaten}/>
      </>
      :
      ""
    }  
    
    </>
  )
}

export default AngabenEntlohnung