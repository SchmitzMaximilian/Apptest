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
  const [SachbearbeitungDatenArr,setSachbearbeitungDatenArr]=useState(props.D)

  const submitCheckdaten=async()=>{
    let check=true
    if(check){
      try{
        const request ={
          method: 'POST',
          headers: { 'Content-Type' : 'application/json'},
          body: JSON.stringify({
            "query": 6,
            "Elstam": SachbearbeitungDatenArr.ELStAMCheck?1:0,
            "AVC": SachbearbeitungDatenArr.ArbeitsvertragCheck?1:0,
            "EC": SachbearbeitungDatenArr.ErlaubnisCheck?1:0,
            "GC": SachbearbeitungDatenArr.GesundheitsCheck?1:0,
            "RVPBAC": SachbearbeitungDatenArr.RVPBefreiungsantragCheck?1:0,
            "AHJC": SachbearbeitungDatenArr.AndererHauptjobCheck?1:0,
            "BKKC": SachbearbeitungDatenArr.BankkarteKopieCheck?1:0,
            "PVNC": SachbearbeitungDatenArr.PrivatversichertNachweisCheck?1:0,
            "PKC": SachbearbeitungDatenArr.PersoKopieCheck?1:0,
            "MAID": props.U
          })
        };
        const d = await fetch('https://itsnando.com/datenbankapi/indexsachbearbeitung.php', request);
        let e = await d.json();
        if(e.ergebnis==true){
          settab2ausgefuellt(true)
          settab2(false)
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
  return (<>

<TitleTouch AGB={tab2ausgefuellt} F={settab2} S={tab2} T={SachbearbeitungTextdataset(sprache?"DE":"EN").Titel.Checkliste} />
    {
      tab2?
      <>
      <Justchecking SV={SachbearbeitungDatenArr} SF={setSachbearbeitungDatenArr} UG={SachbearbeitungDatenArr.ELStAMCheck!=0?SachbearbeitungDatenArr.ELStAMCheck:0} Bezeichnung={SachbearbeitungTextdataset(sprache?"DE":"EN").NachweisCheckliste.ELStAM}/>
      <Justchecking SV={SachbearbeitungDatenArr} SF={setSachbearbeitungDatenArr} UG={SachbearbeitungDatenArr.ArbeitsvertragCheck!=0?SachbearbeitungDatenArr.ArbeitsvertragCheck:0} Bezeichnung={SachbearbeitungTextdataset(sprache?"DE":"EN").NachweisCheckliste.CheckArbeitsvertrag}/>
      <Justchecking SV={SachbearbeitungDatenArr} SF={setSachbearbeitungDatenArr} UG={SachbearbeitungDatenArr.ErlaubnisCheck!=0?SachbearbeitungDatenArr.ErlaubnisCheck:0} Bezeichnung={SachbearbeitungTextdataset(sprache?"DE":"EN").NachweisCheckliste.Erlaubnis}/>
      <Justchecking SV={SachbearbeitungDatenArr} SF={setSachbearbeitungDatenArr} UG={SachbearbeitungDatenArr.GesundheitsCheck!=0?SachbearbeitungDatenArr.GesundheitsCheck:0} Bezeichnung={SachbearbeitungTextdataset(sprache?"DE":"EN").NachweisCheckliste.GesundCheck}/>
      <Justchecking SV={SachbearbeitungDatenArr} SF={setSachbearbeitungDatenArr} UG={SachbearbeitungDatenArr.RVPBefreiungsantragCheck!=0?SachbearbeitungDatenArr.RVPBefreiungsantragCheck:0} Bezeichnung={SachbearbeitungTextdataset(sprache?"DE":"EN").NachweisCheckliste.RVP}/>
      <Justchecking SV={SachbearbeitungDatenArr} SF={setSachbearbeitungDatenArr} UG={SachbearbeitungDatenArr.AndererHauptjobCheck!=0?SachbearbeitungDatenArr.AndererHauptjobCheck:0} Bezeichnung={SachbearbeitungTextdataset(sprache?"DE":"EN").NachweisCheckliste.Hauptjob}/>
      <Justchecking SV={SachbearbeitungDatenArr} SF={setSachbearbeitungDatenArr} UG={SachbearbeitungDatenArr.BankkarteKopieCheck!=0?SachbearbeitungDatenArr.BankkarteKopieCheck:0} Bezeichnung={SachbearbeitungTextdataset(sprache?"DE":"EN").NachweisCheckliste.KopieBank}/>
      <Justchecking SV={SachbearbeitungDatenArr} SF={setSachbearbeitungDatenArr} UG={SachbearbeitungDatenArr.PrivatversichertNachweisCheck!=0?SachbearbeitungDatenArr.PrivatversichertNachweisCheck:0} Bezeichnung={SachbearbeitungTextdataset(sprache?"DE":"EN").NachweisCheckliste.KopieKrankenkasse}/>
      <Justchecking SV={SachbearbeitungDatenArr} SF={setSachbearbeitungDatenArr} UG={SachbearbeitungDatenArr.PersoKopieCheck!=0?SachbearbeitungDatenArr.PersoKopieCheck:0} Bezeichnung={SachbearbeitungTextdataset(sprache?"DE":"EN").NachweisCheckliste.KopiePerso}/>

      < SpeicherSAButton SDF={submitCheckdaten}/> 
      </>
      :
      ""
    }  

      </>
  )
}

export default Unterlagencheckliste