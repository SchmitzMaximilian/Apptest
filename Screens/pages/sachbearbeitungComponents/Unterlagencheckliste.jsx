import React, { useContext, useEffect, useState } from 'react';
import Justchecking from '../../fragebogencomps/sachbearbeitungsComps/Justchecking'
import { SachbearbeitungTextdataset } from '../../../utils/Sachbearbeitung/SachbearbeitungTextdataset'
import { TransactionContext } from '../../../utils/Context'
import SachbearbeitungDatenObject from '../../../utils/Objects/SachbearbeitungDatenObject';
import SpeicherSAButton from '../sachbearbeitungtextfeldcomp/speicherSAButton';

function Unterlagencheckliste(props) {
  const [sprache,setzesprache]=useContext(TransactionContext)
  const [SachbearbeitungDatenArr,setSachbearbeitungDatenArr]=useState(props.D)

  const submitChecklistdaten=async()=>{
    let check=true

    
    if(check){
      try{
        const request ={
          method: 'POST',
          headers: { 'Content-Type' : 'application/json'},
          body: JSON.stringify({
            "query": 3,
            "SIDC": SachbearbeitungDatenArr.SteuerIDCheck.toString().trim(),
            "AVC": SachbearbeitungDatenArr.ArbeitsvertragCheck.toString().trim(),
            "EC": SachbearbeitungDatenArr.ErlaubnisCheck.toString().trim(),
            "GC": SachbearbeitungDatenArr.GesundheitsCheck.toString().trim(),
            "BKKC": SachbearbeitungDatenArr.BankkarteKopieCheck.toString().trim(),
            "PVNC": SachbearbeitungDatenArr.PrivatversichertNachweisCheck.toString().trim(),
            "PKC": SachbearbeitungDatenArr.PersoKopieCheck.toString().trim(),
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
      
    }}

    useEffect(()=>{

    },[props])
  return (<>
      <Justchecking SV={SachbearbeitungDatenArr} SF={setSachbearbeitungDatenArr} Bezeichnung={SachbearbeitungTextdataset(sprache?"DE":"EN").NachweisCheckliste.CheckSteuerid}/>
      <Justchecking SV={SachbearbeitungDatenArr} SF={setSachbearbeitungDatenArr} Bezeichnung={SachbearbeitungTextdataset(sprache?"DE":"EN").NachweisCheckliste.CheckArbeitsvertrag}/>
      <Justchecking SV={SachbearbeitungDatenArr} SF={setSachbearbeitungDatenArr} Bezeichnung={SachbearbeitungTextdataset(sprache?"DE":"EN").NachweisCheckliste.Erlaubnis}/>
      <Justchecking SV={SachbearbeitungDatenArr} SF={setSachbearbeitungDatenArr} Bezeichnung={SachbearbeitungTextdataset(sprache?"DE":"EN").NachweisCheckliste.GesundCheck}/>
      <Justchecking SV={SachbearbeitungDatenArr} SF={setSachbearbeitungDatenArr} Bezeichnung={SachbearbeitungTextdataset(sprache?"DE":"EN").NachweisCheckliste.KopieBank}/>
      <Justchecking SV={SachbearbeitungDatenArr} SF={setSachbearbeitungDatenArr} Bezeichnung={SachbearbeitungTextdataset(sprache?"DE":"EN").NachweisCheckliste.KopieKrankenkasse}/>
      <Justchecking SV={SachbearbeitungDatenArr} SF={setSachbearbeitungDatenArr} Bezeichnung={SachbearbeitungTextdataset(sprache?"DE":"EN").NachweisCheckliste.KopiePerso}/>
      
      < SpeicherSAButton SDF={submitChecklistdaten}/>
      </>
  )
}

export default Unterlagencheckliste