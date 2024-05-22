import React,{ useContext, useEffect, useState } from 'react';
import { StyleSheet, Text} from 'react-native';
import { SachbearbeitungTextdataset } from '../../../utils/Sachbearbeitung/SachbearbeitungTextdataset'
import SimpelCheck from '../../fragebogencomps/sachbearbeitungsComps/SimpelCheck'
import { TransactionContext } from '../../../utils/Context';
import { EingabeFeld } from '../../registrierung/regcomps/Comps';
import SpeicherSAButton from '../sachbearbeitungtextfeldcomp/speicherSAButton';
import EintrittsdatumSelect from './Eintrittsdatum';
import EnddatumSelect from './Enddatum';
function ArbeitstageCheck(props) {
  const [sprache,setzesprache]=useContext(TransactionContext)
  const [ArbeitMoCheck,setArbeitMoCheck]=useState(false)
  const [ArbeitDiCheck,setArbeitDiCheck]=useState(false)
  const [ArbeitMiCheck,setArbeitMiCheck]=useState(false)
  const [ArbeitDoCheck,setArbeitDoCheck]=useState(false)
  const [ArbeitFrCheck,setArbeitFrCheck]=useState(false)
  const [ArbeitSaCheck,setArbeitSaCheck]=useState(false)
  const [ArbeitSoCheck,setArbeitSoCheck]=useState(false)
  const [SachbearbeitungDatenArr,setSachbearbeitungDatenArr]=useState(props.D)


  const submitZeitendaten=async()=>{
    let check=true
console.log('Funktionierts '+ SachbearbeitungDatenArr)
    if(SachbearbeitungDatenArr.Eintrittsdatum.toString().trim()==0){
      check=false
    }
    if(SachbearbeitungDatenArr.Enddatum.toString().trim()==0){
      check=false
    }
    if(SachbearbeitungDatenArr.Taetigkeit.toString().trim()==0){
      check=false
    }
    if(SachbearbeitungDatenArr.WoechentlicheStunden.toString().trim()==0 || SachbearbeitungDatenArr.WoechentlicheStunden>50){
      check=false
    }

    if(SachbearbeitungDatenArr.MontagCheck==1){
      if(Number(SachbearbeitungDatenArr.MOStunden)==0){
        check=false
      }
    }

    if(SachbearbeitungDatenArr.DiensttagCheck==1){
      if(Number(SachbearbeitungDatenArr.DIStunden)==0){
        check=false
      }
    }
    if(SachbearbeitungDatenArr.MittwochCheck==1){
      if(Number(SachbearbeitungDatenArr.MIStunden)==0){
        check=false
      }
    }
    if(SachbearbeitungDatenArr.DonnerstagCheck==1){
      if(Number(SachbearbeitungDatenArr.DOStunden)==0){
        check=false
      }
    }
    if(SachbearbeitungDatenArr.FreitagCheck==1){
      if(Number(SachbearbeitungDatenArr.FRStunden)==0){
        check=false
      }
    }
    if(SachbearbeitungDatenArr.SamstagCheck==1){
      if(Number(SachbearbeitungDatenArr.SAStunden)==0){
        check=false
      }
    }
    if(SachbearbeitungDatenArr.SonntagCheck==1){
      if(Number(SachbearbeitungDatenArr.SOStunden)==0){
        check=false
      }
    }

    if(SachbearbeitungDatenArr.JahresUrlaub.toString().trim()==0){
      check=false
    }
    
    if(check){
      try{
        const request ={
          method: 'POST',
          headers: { 'Content-Type' : 'application/json'},
          body: JSON.stringify({
            "query": 1,//ändern
            "DatumAnfang": SachbearbeitungDatenArr.Eintrittsdatum.toString().trim(),
            "DatumEnd": SachbearbeitungDatenArr.Enddatum.toString().trim(),
            "Job": SachbearbeitungDatenArr.Taetigkeit.toString().trim(),
            "Stundenwoche": SachbearbeitungDatenArr.WoechentlicheStunden.toString().trim(),
            "MOC": SachbearbeitungDatenArr.MontagCheck.toString().trim(),
            "MOS": SachbearbeitungDatenArr.MOStunden.toString().trim(),
            "DIC": SachbearbeitungDatenArr.DiensttagCheck.toString().trim(),
            "DIS": SachbearbeitungDatenArr.DIStunden.toString().trim(),
            "MIC": SachbearbeitungDatenArr.MittwochCheck.toString().trim(),
            "MIS": SachbearbeitungDatenArr.MIStunden.toString().trim(),
            "DOC": SachbearbeitungDatenArr.DonnerstagCheck.toString().trim(),
            "DOS": SachbearbeitungDatenArr.DOStunden.toString().trim(),
            "FRC": SachbearbeitungDatenArr.FreitagCheck.toString().trim(),
            "FRS": SachbearbeitungDatenArr.FRStunden.toString().trim(),
            "SAC": SachbearbeitungDatenArr.SamstagCheck.toString().trim(),
            "SAS": SachbearbeitungDatenArr.SAStunden.toString().trim(),
            "SOC": SachbearbeitungDatenArr.SonntagCheck.toString().trim(),
            "SOS": SachbearbeitungDatenArr.SOStunden.toString().trim(),
            "Urlaubjahr": SachbearbeitungDatenArr.JahresUrlaub.toString().trim(),
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
  //<EingabeFeld SV={SachbearbeitungDatenArr} SF={setSachbearbeitungDatenArr} Icon={"Sachbearbeitung"} Labname={SachbearbeitungTextdataset(sprache?"DE":"EN").Feldname.Eintrittsdatum}/>
  //<EingabeFeld SV={SachbearbeitungDatenArr} SF={setSachbearbeitungDatenArr} Icon={"Sachbearbeitung"} Labname={SachbearbeitungTextdataset(sprache?"DE":"EN").Feldname.Enddatum}/>

  return (<>
    <EintrittsdatumSelect/>
    <EnddatumSelect/>
      
      
      <EingabeFeld SV={SachbearbeitungDatenArr} SF={setSachbearbeitungDatenArr} Icon={"Sachbearbeitung"} Labname={SachbearbeitungTextdataset(sprache?"DE":"EN").Feldname.Job}/>
      
      <EingabeFeld SV={SachbearbeitungDatenArr} SF={setSachbearbeitungDatenArr} Icon={"Sachbearbeitung"} Labname={SachbearbeitungTextdataset(sprache?"DE":"EN").Feldname.ZeitGesamt}/>
      <Text style={styles.Textelemente}>{SachbearbeitungTextdataset(sprache?"DE":"EN").Feldname.ZeitTag}</Text>

      <SimpelCheck SV={SachbearbeitungDatenArr} SF={setSachbearbeitungDatenArr}  Arbeitstag={setArbeitMoCheck} Bezeichnung={SachbearbeitungTextdataset(sprache?"DE":"EN").Feldname.Mo}/>
      {
        ArbeitMoCheck?

        <EingabeFeld SV={SachbearbeitungDatenArr} SF={setSachbearbeitungDatenArr} Icon={"Sachbearbeitung"} Labname={SachbearbeitungTextdataset(sprache?"DE":"EN").Feldname.Mo}/>
        :
        ""
      }
      
      
      <SimpelCheck SV={SachbearbeitungDatenArr} SF={setSachbearbeitungDatenArr} Arbeitstag={setArbeitDiCheck} Bezeichnung={SachbearbeitungTextdataset(sprache?"DE":"EN").Feldname.Di}/>
      
      {
        ArbeitDiCheck?
        <EingabeFeld SV={SachbearbeitungDatenArr} SF={setSachbearbeitungDatenArr} Icon={"Sachbearbeitung"} Labname={SachbearbeitungTextdataset(sprache?"DE":"EN").Feldname.Di}/>
        :
        ""
      }
      <SimpelCheck SV={SachbearbeitungDatenArr} SF={setSachbearbeitungDatenArr} Arbeitstag={setArbeitMiCheck} Bezeichnung={SachbearbeitungTextdataset(sprache?"DE":"EN").Feldname.Mi}/>
      
      {
        ArbeitMiCheck?
        <EingabeFeld SV={SachbearbeitungDatenArr} SF={setSachbearbeitungDatenArr} Icon={"Sachbearbeitung"} Labname={SachbearbeitungTextdataset(sprache?"DE":"EN").Feldname.Mi}/>
        :
        ""
      }
      <SimpelCheck SV={SachbearbeitungDatenArr} SF={setSachbearbeitungDatenArr} Arbeitstag={setArbeitDoCheck} Bezeichnung={SachbearbeitungTextdataset(sprache?"DE":"EN").Feldname.Do}/>
      
      {
        ArbeitDoCheck?
        <EingabeFeld SV={SachbearbeitungDatenArr} SF={setSachbearbeitungDatenArr} Icon={"Sachbearbeitung"} Labname={SachbearbeitungTextdataset(sprache?"DE":"EN").Feldname.Do}/>
        :
        ""
      }
      <SimpelCheck SV={SachbearbeitungDatenArr} SF={setSachbearbeitungDatenArr} Arbeitstag={setArbeitFrCheck} Bezeichnung={SachbearbeitungTextdataset(sprache?"DE":"EN").Feldname.Fr}/>
      
      {
        ArbeitFrCheck?
        <EingabeFeld SV={SachbearbeitungDatenArr} SF={setSachbearbeitungDatenArr} Icon={"Sachbearbeitung"} Labname={SachbearbeitungTextdataset(sprache?"DE":"EN").Feldname.Fr}/>
        :
        ""
      }
      <SimpelCheck SV={SachbearbeitungDatenArr} SF={setSachbearbeitungDatenArr} Arbeitstag={setArbeitSaCheck} Bezeichnung={SachbearbeitungTextdataset(sprache?"DE":"EN").Feldname.Sa}/>
      
      {
        ArbeitSaCheck?
        <EingabeFeld SV={SachbearbeitungDatenArr} SF={setSachbearbeitungDatenArr} Icon={"Sachbearbeitung"} Labname={SachbearbeitungTextdataset(sprache?"DE":"EN").Feldname.Sa}/>
        :
        ""
      }
      <SimpelCheck SV={SachbearbeitungDatenArr} SF={setSachbearbeitungDatenArr} Arbeitstag={setArbeitSoCheck} Bezeichnung={SachbearbeitungTextdataset(sprache?"DE":"EN").Feldname.So}/>
      
      {
        ArbeitSoCheck?
        <EingabeFeld SV={SachbearbeitungDatenArr} SF={setSachbearbeitungDatenArr} Icon={"Sachbearbeitung"} Labname={SachbearbeitungTextdataset(sprache?"DE":"EN").Feldname.So}/>
        :
        ""
      }
      <EingabeFeld SV={SachbearbeitungDatenArr} SF={setSachbearbeitungDatenArr} Icon={"Sachbearbeitung"} Labname={SachbearbeitungTextdataset(sprache?"DE":"EN").Feldname.Urlaub}/>

      < SpeicherSAButton SDF={submitZeitendaten}/>
</>
  )
}
const styles = StyleSheet.create({


Textelemente:{
  color:'#fff',
  fontSize: 18,
  paddingHorizontal:10,
  paddingVertical:10,
},
})

export default ArbeitstageCheck