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

  const submitChecklistdaten=async()=>{
    let check=true

    console.log('Do i have Value') 
    console.log('next')
    console.log(SachbearbeitungDatenObject)
    if(check){
      try{
        console.log('ich komme hier rein')
        const request ={
          
          method: 'POST',
          headers: { 'Content-Type' : 'application/json'},
          body: JSON.stringify({
            "query": 3,
            "SIDC": SachbearbeitungDatenArr.SteuerIDCheck?1:0,
            "AVC": SachbearbeitungDatenArr.ArbeitsvertragCheck?1:0,
            "EC": SachbearbeitungDatenArr.ErlaubnisCheck?1:0,
            "GC": SachbearbeitungDatenArr.GesundheitsCheck?1:0,
            "BKKC": SachbearbeitungDatenArr.BankkarteKopieCheck?1:0,
            "PVNC": SachbearbeitungDatenArr.PrivatversichertNachweisCheck?1:0,
            "PKC": SachbearbeitungDatenArr.PersoKopieCheck?1:0,
            "MAID": props.U
          })
        };
        console.log('log me')
        const d = await fetch('https://itsnando.com/datenbankapi/indexsachbearbeitung.php', request); 
        let e = await d.json();
        console.log(e)
        if(e.ergebnis==true){
          settab2ausgefuellt(true)
          settab2(false)
          console.log('speichertestyeah')
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

<TitleTouch AGB={tab2ausgefuellt} F={settab2} S={tab2} T={SachbearbeitungTextdataset(sprache?"DE":"EN").Titel.Checkliste} />
    {
      tab2?
      <>
      <Justchecking SV={SachbearbeitungDatenArr} SF={setSachbearbeitungDatenArr} UG={SachbearbeitungDatenArr.SteuerIDCheck!=0?SachbearbeitungDatenArr.SteuerIDCheck:0} Bezeichnung={SachbearbeitungTextdataset(sprache?"DE":"EN").NachweisCheckliste.CheckSteuerid}/>
      <Justchecking SV={SachbearbeitungDatenArr} SF={setSachbearbeitungDatenArr} UG={SachbearbeitungDatenArr.ArbeitsvertragCheck!=0?SachbearbeitungDatenArr.ArbeitsvertragCheck:0} Bezeichnung={SachbearbeitungTextdataset(sprache?"DE":"EN").NachweisCheckliste.CheckArbeitsvertrag}/>
      <Justchecking SV={SachbearbeitungDatenArr} SF={setSachbearbeitungDatenArr} UG={SachbearbeitungDatenArr.ErlaubnisCheck!=0?SachbearbeitungDatenArr.ErlaubnisCheck:0} Bezeichnung={SachbearbeitungTextdataset(sprache?"DE":"EN").NachweisCheckliste.Erlaubnis}/>
      <Justchecking SV={SachbearbeitungDatenArr} SF={setSachbearbeitungDatenArr} UG={SachbearbeitungDatenArr.GesundheitsCheck!=0?SachbearbeitungDatenArr.GesundheitsCheck:0} Bezeichnung={SachbearbeitungTextdataset(sprache?"DE":"EN").NachweisCheckliste.GesundCheck}/>
      <Justchecking SV={SachbearbeitungDatenArr} SF={setSachbearbeitungDatenArr} UG={SachbearbeitungDatenArr.BankkarteKopieCheck!=0?SachbearbeitungDatenArr.BankkarteKopieCheck:0} Bezeichnung={SachbearbeitungTextdataset(sprache?"DE":"EN").NachweisCheckliste.KopieBank}/>
      <Justchecking SV={SachbearbeitungDatenArr} SF={setSachbearbeitungDatenArr} UG={SachbearbeitungDatenArr.PrivatversichertNachweisCheck!=0?SachbearbeitungDatenArr.PrivatversichertNachweisCheck:0} Bezeichnung={SachbearbeitungTextdataset(sprache?"DE":"EN").NachweisCheckliste.KopieKrankenkasse}/>
      <Justchecking SV={SachbearbeitungDatenArr} SF={setSachbearbeitungDatenArr} UG={SachbearbeitungDatenArr.PersoKopieCheck!=0?SachbearbeitungDatenArr.PersoKopieCheck:0} Bezeichnung={SachbearbeitungTextdataset(sprache?"DE":"EN").NachweisCheckliste.KopiePerso}/>
      
      < SpeicherSAButton SDF={submitChecklistdaten}/>
      </>
      :
      ""
    }
      
      </>
  )
}

export default Unterlagencheckliste