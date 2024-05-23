import React,{ useContext, useEffect, useState } from 'react';
import { StyleSheet, Text} from 'react-native';
import { SachbearbeitungTextdataset } from '../../../utils/Sachbearbeitung/SachbearbeitungTextdataset'
import SimpelCheck from '../../fragebogencomps/sachbearbeitungsComps/SimpelCheck'
import { TransactionContext } from '../../../utils/Context';
import SachbearbeitungDatenObject from '../../../utils/Objects/SachbearbeitungDatenObject';
import SpeicherSAButton from '../sachbearbeitungtextfeldcomp/speicherSAButton';
import { EingabeFeld } from '../../registrierung/regcomps/Comps';
import EintrittsdatumSelect from './Eintrittsdatum';
import EnddatumSelect from './Enddatum';
import TitleTouch from '../../fragebogencomps/touchTitle/TitleTouch';

function ArbeitstageCheck(props) {
  const [sprache,setzesprache]=useContext(TransactionContext)
  const [ArbeitMoCheck,setArbeitMoCheck]=useState(false)
  const [ArbeitDiCheck,setArbeitDiCheck]=useState(false)
  const [ArbeitMiCheck,setArbeitMiCheck]=useState(false)
  const [ArbeitDoCheck,setArbeitDoCheck]=useState(false)
  const [ArbeitFrCheck,setArbeitFrCheck]=useState(false)
  const [ArbeitSaCheck,setArbeitSaCheck]=useState(false)
  const [ArbeitSoCheck,setArbeitSoCheck]=useState(false)
  const [tab3,settab3]=useState(false)
  const [tab3ausgefuellt,settab3ausgefuellt]=useState(false)
  const [SachbearbeitungDatenArr,setSachbearbeitungDatenArr]=useState(props.D)


  
  
  const wa=(t)=>{
    let NO=SachbearbeitungDatenArr
    NO.WoechentlicheStunden=t
    setSachbearbeitungDatenArr(NO)
  }
  const mo=(t)=>{
    let NO=SachbearbeitungDatenArr
    NO.MOStunden=t
    setSachbearbeitungDatenArr(NO)
  }
  const di=(t)=>{
    let NO=SachbearbeitungDatenArr
    NO.DIStunden=t
    setSachbearbeitungDatenArr(NO)
  }
  const mi=(t)=>{
    let NO=SachbearbeitungDatenArr
    NO.MIStunden=t
    setSachbearbeitungDatenArr(NO)
  }
  const don=(t)=>{
    let NO=SachbearbeitungDatenArr
    NO.DOStunden=t
    setSachbearbeitungDatenArr(NO)
  }
  const fr=(t)=>{
    let NO=SachbearbeitungDatenArr
    NO.FRStunden=t
    setSachbearbeitungDatenArr(NO)
  }
  const sa=(t)=>{
    let NO=SachbearbeitungDatenArr
    NO.SAStunden=t
    setSachbearbeitungDatenArr(NO)
  }
  const so=(t)=>{
    let NO=SachbearbeitungDatenArr
    NO.SOStunden=t
    setSachbearbeitungDatenArr(NO)
  }
  const submitZeitdaten=async()=>{
    let check=true

    if(SachbearbeitungDatenArr.Eintrittsdatum.toString().trim().length==0){
      check=false
    }
    if(SachbearbeitungDatenArr.Enddatum.toString().trim().length==0){
      check=false
    }
    
    if(SachbearbeitungDatenArr.WoechentlicheStunden.toString().trim().length==0 || SachbearbeitungDatenArr.WoechentlicheStunden.length>50){
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

    
    if(check){
      try{
        const request ={
          method: 'POST',
          headers: { 'Content-Type' : 'application/json'},
          body: JSON.stringify({
            "query": 4,//ändern
            "DatumAnfang": SachbearbeitungDatenArr.Eintrittsdatum.toString().trim(),
            "DatumEnd": SachbearbeitungDatenArr.Enddatum.toString().trim(),            
            "Stundenwoche": SachbearbeitungDatenArr.WoechentlicheStunden.toString().trim(),
            "MOC": SachbearbeitungDatenArr.MontagCheck?1:0,
            "MOS": SachbearbeitungDatenArr.MOStunden.toString().trim(),
            "DIC": SachbearbeitungDatenArr.DiensttagCheck?1:0,
            "DIS": SachbearbeitungDatenArr.DIStunden.toString().trim(),
            "MIC": SachbearbeitungDatenArr.MittwochCheck?1:0,
            "MIS": SachbearbeitungDatenArr.MIStunden.toString().trim(),
            "DOC": SachbearbeitungDatenArr.DonnerstagCheck?1:0,
            "DOS": SachbearbeitungDatenArr.DOStunden.toString().trim(),
            "FRC": SachbearbeitungDatenArr.FreitagCheck?1:0,
            "FRS": SachbearbeitungDatenArr.FRStunden.toString().trim(),
            "SAC": SachbearbeitungDatenArr.SamstagCheck?1:0,
            "SAS": SachbearbeitungDatenArr.SAStunden.toString().trim(),
            "SOC": SachbearbeitungDatenArr.SonntagCheck?1:0,
            "SOS": SachbearbeitungDatenArr.SOStunden.toString().trim(),
            "MAID": props.U
          })
        };
        const d = await fetch('https://itsnando.com/datenbankapi/indexsachbearbeitung.php', request);
        let e = await d.json();
        if(e.ergebnis==true){
          settab3ausgefuellt(true)
          settab3(false)
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

<TitleTouch AGB={tab3ausgefuellt} F={settab3} S={tab3} T={SachbearbeitungTextdataset(sprache?"DE":"EN").Titel.Zeiten} />
    {
      tab3?
      <>       
        <EintrittsdatumSelect SV={SachbearbeitungDatenArr} SF={setSachbearbeitungDatenArr} UD={SachbearbeitungDatenArr.Eintrittsdatum?SachbearbeitungDatenArr.Eintrittsdatum:Intl.DateTimeFormat('De-de',{dateStyle:'short'}).format(new Date())}/>
  <EnddatumSelect SV={SachbearbeitungDatenArr} SF={setSachbearbeitungDatenArr} UD={SachbearbeitungDatenArr.Enddatum?SachbearbeitungDatenArr.Enddatum:Intl.DateTimeFormat('De-de',{dateStyle:'short'}).format(new Date())}/>
      
      
      
      <EingabeFeld SV={SachbearbeitungDatenArr.WoechentlicheStunden?SachbearbeitungDatenArr.WoechentlicheStunden:''} SF={wa} Icon={"Sachbearbeitung"} Labname={SachbearbeitungTextdataset(sprache?"DE":"EN").Feldname.ZeitGesamt}/>
      <Text style={styles.Textelemente}>{SachbearbeitungTextdataset(sprache?"DE":"EN").Feldname.ZeitTag}</Text>

      <SimpelCheck SV={SachbearbeitungDatenArr} SF={setSachbearbeitungDatenArr} UG={SachbearbeitungDatenArr.MontagCheck!=0?SachbearbeitungDatenArr.MontagCheck:0} Arbeitstag={setArbeitMoCheck} Bezeichnung={SachbearbeitungTextdataset(sprache?"DE":"EN").Feldname.Mo}/>
      {
        ArbeitMoCheck?

        <EingabeFeld Icon={"Sachbearbeitung"} SV={SachbearbeitungDatenArr.MOStunden?SachbearbeitungDatenArr.MOStunden:''} SF={mo} Labname={SachbearbeitungTextdataset(sprache?"DE":"EN").Feldname.Mo}/>
        :
        ""
      }
      
      
      <SimpelCheck SV={SachbearbeitungDatenArr} SF={setSachbearbeitungDatenArr} UG={SachbearbeitungDatenArr.DiensttagCheck!=0?SachbearbeitungDatenArr.DiensttagCheck:0} Arbeitstag={setArbeitDiCheck} Bezeichnung={SachbearbeitungTextdataset(sprache?"DE":"EN").Feldname.Di}/>
      
      {
        ArbeitDiCheck?
        <EingabeFeld Icon={"Sachbearbeitung"} SV={SachbearbeitungDatenArr.DIStunden?SachbearbeitungDatenArr.DIStunden:''} SF={di} Labname={SachbearbeitungTextdataset(sprache?"DE":"EN").Feldname.Di}/>
        :
        ""
      }
      <SimpelCheck SV={SachbearbeitungDatenArr} SF={setSachbearbeitungDatenArr} UG={SachbearbeitungDatenArr.MittwochCheck!=0?SachbearbeitungDatenArr.MittwochCheck:0} Arbeitstag={setArbeitMiCheck} Bezeichnung={SachbearbeitungTextdataset(sprache?"DE":"EN").Feldname.Mi}/>
      
      {
        ArbeitMiCheck?
        <EingabeFeld Icon={"Sachbearbeitung"} SV={SachbearbeitungDatenArr.MIStunden?SachbearbeitungDatenArr.MIStunden:''} SF={mi} Labname={SachbearbeitungTextdataset(sprache?"DE":"EN").Feldname.Mi}/>
        :
        ""
      }
      <SimpelCheck SV={SachbearbeitungDatenArr} SF={setSachbearbeitungDatenArr} UG={SachbearbeitungDatenArr.DonnerstagCheck!=0?SachbearbeitungDatenArr.DonnerstagCheck:0} Arbeitstag={setArbeitDoCheck} Bezeichnung={SachbearbeitungTextdataset(sprache?"DE":"EN").Feldname.Do}/>
      
      {
        ArbeitDoCheck?
        <EingabeFeld Icon={"Sachbearbeitung"} SV={SachbearbeitungDatenArr.DOStunden?SachbearbeitungDatenArr.DOStunden:''} SF={don} Labname={SachbearbeitungTextdataset(sprache?"DE":"EN").Feldname.Do}/>
        :
        ""
      }
      <SimpelCheck SV={SachbearbeitungDatenArr} SF={setSachbearbeitungDatenArr} UG={SachbearbeitungDatenArr.FreitagCheck!=0?SachbearbeitungDatenArr.FreitagCheck:0} Arbeitstag={setArbeitFrCheck} Bezeichnung={SachbearbeitungTextdataset(sprache?"DE":"EN").Feldname.Fr}/>
      
      {
        ArbeitFrCheck?
        <EingabeFeld Icon={"Sachbearbeitung"} SV={SachbearbeitungDatenArr.FRStunden?SachbearbeitungDatenArr.FRStunden:''} SF={fr} Labname={SachbearbeitungTextdataset(sprache?"DE":"EN").Feldname.Fr}/>
        :
        ""
      }
      <SimpelCheck SV={SachbearbeitungDatenArr} SF={setSachbearbeitungDatenArr} UG={SachbearbeitungDatenArr.SamstagCheck!=0?SachbearbeitungDatenArr.SamstagCheck:0} Arbeitstag={setArbeitSaCheck} Bezeichnung={SachbearbeitungTextdataset(sprache?"DE":"EN").Feldname.Sa}/>
      
      {
        ArbeitSaCheck?
        <EingabeFeld Icon={"Sachbearbeitung"} SV={SachbearbeitungDatenArr.SAStunden?SachbearbeitungDatenArr.SAStunden:''} SF={sa} Labname={SachbearbeitungTextdataset(sprache?"DE":"EN").Feldname.Sa}/>
        :
        ""
      }
      <SimpelCheck SV={SachbearbeitungDatenArr} SF={setSachbearbeitungDatenArr} UG={SachbearbeitungDatenArr.SonntagCheck!=0?SachbearbeitungDatenArr.SonntagCheck:0} Arbeitstag={setArbeitSoCheck} Bezeichnung={SachbearbeitungTextdataset(sprache?"DE":"EN").Feldname.So}/>
      
      {
        ArbeitSoCheck?
        <EingabeFeld Icon={"Sachbearbeitung"} SV={SachbearbeitungDatenArr.SOStunden?SachbearbeitungDatenArr.SOStunden:''} SF={so} Labname={SachbearbeitungTextdataset(sprache?"DE":"EN").Feldname.So}/>
        :
        ""
      }
      

      < SpeicherSAButton SDF={submitZeitdaten}/>
      </>
      :
      ""
    } 
  
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