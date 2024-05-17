import React, { useContext, useEffect, useState } from 'react';
import Justchecking from '../../fragebogencomps/sachbearbeitungsComps/Justchecking'
import { SachbearbeitungTextdataset } from '../../../utils/Sachbearbeitung/SachbearbeitungTextdataset'
import { TransactionContext } from '../../../utils/Context'
import SachbearbeitungDatenObject from '../../../utils/Objects/SachbearbeitungDatenObject';
import SpeicherSAButton from '../sachbearbeitungtextfeldcomp/speicherSAButton';

function Unterlagencheckliste() {
  const [sprache,setzesprache]=useContext(TransactionContext)
  const [SachbearbeitungDatenArr,setSachbearbeitungDatenArr]=useState(SachbearbeitungDatenObject)

  const submitCheckdaten=async()=>{
    let check=true
    if(check){
      try{
        const request ={
          method: 'POST',
          headers: { 'Content-Type' : 'application/json'},
          body: JSON.stringify({
            "query": 6,
            "Elstam": SachbearbeitungDatenArr.ELStAMCheck.toString().trim(),
          })
        };
        const d = await fetch('http://192.168.2.44/datenbankapi/indexsachbearbeitung.php', request);
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
  return (<>
      <Justchecking SV={SachbearbeitungDatenArr} SF={setSachbearbeitungDatenArr} Bezeichnung={SachbearbeitungTextdataset(sprache?"DE":"EN").NachweisCheckliste.ELStAM}/>
      <Justchecking SV={SachbearbeitungDatenArr} SF={setSachbearbeitungDatenArr} Bezeichnung={SachbearbeitungTextdataset(sprache?"DE":"EN").NachweisCheckliste.CheckArbeitsvertrag}/>
      <Justchecking SV={SachbearbeitungDatenArr} SF={setSachbearbeitungDatenArr} Bezeichnung={SachbearbeitungTextdataset(sprache?"DE":"EN").NachweisCheckliste.Erlaubnis}/>
      <Justchecking SV={SachbearbeitungDatenArr} SF={setSachbearbeitungDatenArr} Bezeichnung={SachbearbeitungTextdataset(sprache?"DE":"EN").NachweisCheckliste.GesundCheck}/>
      <Justchecking SV={SachbearbeitungDatenArr} SF={setSachbearbeitungDatenArr} Bezeichnung={SachbearbeitungTextdataset(sprache?"DE":"EN").NachweisCheckliste.RVP}/>
      <Justchecking SV={SachbearbeitungDatenArr} SF={setSachbearbeitungDatenArr} Bezeichnung={SachbearbeitungTextdataset(sprache?"DE":"EN").NachweisCheckliste.Hauptjob}/>
      <Justchecking SV={SachbearbeitungDatenArr} SF={setSachbearbeitungDatenArr} Bezeichnung={SachbearbeitungTextdataset(sprache?"DE":"EN").NachweisCheckliste.KopieBank}/>
      <Justchecking SV={SachbearbeitungDatenArr} SF={setSachbearbeitungDatenArr} Bezeichnung={SachbearbeitungTextdataset(sprache?"DE":"EN").NachweisCheckliste.KopieKrankenkasse}/>
      <Justchecking SV={SachbearbeitungDatenArr} SF={setSachbearbeitungDatenArr} Bezeichnung={SachbearbeitungTextdataset(sprache?"DE":"EN").NachweisCheckliste.KopiePerso}/>

      < SpeicherSAButton SDF={submitCheckdaten}/>
      </>
  )
}

export default Unterlagencheckliste