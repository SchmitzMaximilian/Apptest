import React, { useContext, useEffect, useState } from 'react';
import Justchecking from '../../fragebogencomps/sachbearbeitungsComps/Justchecking'
import { SachbearbeitungTextdataset } from '../../../utils/Sachbearbeitung/SachbearbeitungTextdataset'
import { TransactionContext } from '../../../utils/Context'
import SachbearbeitungDatenObject from '../../../utils/Objects/SachbearbeitungDatenObject';
import SpeicherSAButton from '../sachbearbeitungtextfeldcomp/speicherSAButton';
import TitleTouch from '../../fragebogencomps/touchTitle/TitleTouch';

function Unterlagencheckliste(props) {
  const [sprache,setzesprache]=useContext(TransactionContext)
  const [tab2,settab2]=useState(false)
  const [tab2ausgefuellt,settab2ausgefuellt]=useState(false) 
  const updatefullstate=(t,num)=>{
    let v=props.E
    t?v=Number(num)+1:v=Number(num)-1;
    props.ES(v)
  }
  const submitCheckdaten=async()=>{
    let check=true
    if(check){
      try{
        const request ={
          method: 'POST',
          headers: { 'Content-Type' : 'application/json'},
          body: JSON.stringify({
            "query": 6,
            "Elstam": props.D.ELStAMCheck?1:0,
            "AVC": props.D.ArbeitsvertragCheck?1:0,
            "EC": props.D.ErlaubnisCheck?1:0,
            "GC": props.D.GesundheitsCheck?1:0,
            "RVPBAC": props.D.RVPBefreiungsantragCheck?1:0,
            "AHJC": props.D.AndererHauptjobCheck?1:0,
            "BKKC": props.D.BankkarteKopieCheck?1:0,
            "PVNC": props.D.PrivatversichertNachweisCheck?1:0,
            "PKC": props.D.PersoKopieCheck?1:0,
            "MAID": props.U
          })
        };
        const d = await fetch('https://itsnando.com/datenbankapi/indexsachbearbeitung.php', request);
                 
        let e = await d.json(); 
        if(e.ergebnis==true){
          settab2ausgefuellt(true)
          updatefullstate(true,2)
          settab2(false)
          let NO=props.D
          NO.MitarbeiterID=props.U
          props.S(NO)
        }
        else if(e.ergebnis=='DBerror'){
          updatefullstate(false,2)
          console.log('no Update')
        }else{
          updatefullstate(false,2)
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
  return (<>

<TitleTouch AGB={tab2ausgefuellt} F={settab2} S={tab2} T={SachbearbeitungTextdataset(sprache?"DE":"EN").Titel.Checkliste} />
    {
      tab2?
      <>
      <Justchecking SV={props.D} SF={props.S} UG={props.D.ELStAMCheck!=0?props.D.ELStAMCheck:0} Bezeichnung={SachbearbeitungTextdataset(sprache?"DE":"EN").NachweisCheckliste.ELStAM}/>
      <Justchecking SV={props.D} SF={props.S} UG={props.D.ArbeitsvertragCheck!=0?props.D.ArbeitsvertragCheck:0} Bezeichnung={SachbearbeitungTextdataset(sprache?"DE":"EN").NachweisCheckliste.CheckArbeitsvertrag}/>
      <Justchecking SV={props.D} SF={props.S} UG={props.D.ErlaubnisCheck!=0?props.D.ErlaubnisCheck:0} Bezeichnung={SachbearbeitungTextdataset(sprache?"DE":"EN").NachweisCheckliste.Erlaubnis}/>
      <Justchecking SV={props.D} SF={props.S} UG={props.D.GesundheitsCheck!=0?props.D.GesundheitsCheck:0} Bezeichnung={SachbearbeitungTextdataset(sprache?"DE":"EN").NachweisCheckliste.GesundCheck}/>
      <Justchecking SV={props.D} SF={props.S} UG={props.D.RVPBefreiungsantragCheck!=0?props.D.RVPBefreiungsantragCheck:0} Bezeichnung={SachbearbeitungTextdataset(sprache?"DE":"EN").NachweisCheckliste.RVP}/>
      <Justchecking SV={props.D} SF={props.S} UG={props.D.AndererHauptjobCheck!=0?props.D.AndererHauptjobCheck:0} Bezeichnung={SachbearbeitungTextdataset(sprache?"DE":"EN").NachweisCheckliste.Hauptjob}/>
      <Justchecking SV={props.D} SF={props.S} UG={props.D.BankkarteKopieCheck!=0?props.D.BankkarteKopieCheck:0} Bezeichnung={SachbearbeitungTextdataset(sprache?"DE":"EN").NachweisCheckliste.KopieBank}/>
      <Justchecking SV={props.D} SF={props.S} UG={props.D.PrivatversichertNachweisCheck!=0?props.D.PrivatversichertNachweisCheck:0} Bezeichnung={SachbearbeitungTextdataset(sprache?"DE":"EN").NachweisCheckliste.KopieKrankenkasse}/>
      <Justchecking SV={props.D} SF={props.S} UG={props.D.PersoKopieCheck!=0?props.D.PersoKopieCheck:0} Bezeichnung={SachbearbeitungTextdataset(sprache?"DE":"EN").NachweisCheckliste.KopiePerso}/>

      < SpeicherSAButton SDF={submitCheckdaten}/> 
      </>
      :
      ""
    }  

      </>
  )
}

export default Unterlagencheckliste