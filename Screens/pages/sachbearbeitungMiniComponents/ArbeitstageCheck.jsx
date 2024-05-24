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
  const [datum,setdatum]=useState('AA')
  const [tab3,settab3]=useState(false)
  const [tab3ausgefuellt,settab3ausgefuellt]=useState(false)



  
  
  const wa=(t)=>{
    let NO=props.D
    NO.WoechentlicheStunden=t
    props.S(NO)
  }
  const mo=(t)=>{
    let NO=props.D
    NO.MOStunden=t
    props.S(NO)
  }
  const di=(t)=>{
    let NO=props.D
    NO.DIStunden=t
    props.S(NO)
  }
  const mi=(t)=>{
    let NO=props.D
    NO.MIStunden=t
    props.S(NO)
  }
  const don=(t)=>{
    let NO=props.D
    NO.DOStunden=t
    props.S(NO)
  }
  const fr=(t)=>{
    let NO=props.D
    NO.FRStunden=t
    props.S(NO)
  }
  const sa=(t)=>{
    let NO=props.D
    NO.SAStunden=t
    props.S(NO)
  }
  const so=(t)=>{
    let NO=props.D
    NO.SOStunden=t
    props.S(NO)
  }
  const updatefullstate=(t,num)=>{
    let v=props.E
    t?v=Number(num)+1:v=Number(num)-1;
    props.ES(v)
  }
  const submitZeitdaten=async()=>{
    let check=true

    if(props.D.Eintrittsdatum.toString().trim().length==0){
      check=false
    }
    if(props.D.Enddatum.toString().trim().length==0){
      check=false
    }
    
    if(props.D.WoechentlicheStunden.toString().trim().length==0 || props.D.WoechentlicheStunden.length>50){
      check=false
    }

    if(props.D.MontagCheck==1){
      if(Number(props.D.MOStunden)==0){
        check=false
      }
    }

    if(props.D.DiensttagCheck==1){
      if(Number(props.D.DIStunden)==0){
        check=false
      }
    }
    if(props.D.MittwochCheck==1){
      if(Number(props.D.MIStunden)==0){
        check=false
      }
    }
    if(props.D.DonnerstagCheck==1){
      if(Number(props.D.DOStunden)==0){
        check=false
      }
    }
    if(props.D.FreitagCheck==1){
      if(Number(props.D.FRStunden)==0){
        check=false
      }
    }
    if(props.D.SamstagCheck==1){
      if(Number(props.D.SAStunden)==0){
        check=false
      }
    }
    if(props.D.SonntagCheck==1){
      if(Number(props.D.SOStunden)==0){
        check=false
      }
    }

    console.log(props.D)
    if(check){
      try{
        const request ={
          method: 'POST',
          headers: { 'Content-Type' : 'application/json'},
          body: JSON.stringify({
            "query": 4,//ändern
            "DatumAnfang": props.D.Eintrittsdatum.toString().trim(),
            "DatumEnd": props.D.Enddatum.toString().trim(),            
            "Stundenwoche": props.D.WoechentlicheStunden.toString().trim(),
            "MOC": props.D.MontagCheck?1:0,
            "MOS": props.D.MOStunden.toString().trim(),
            "DIC": props.D.DiensttagCheck?1:0,
            "DIS": props.D.DIStunden.toString().trim(),
            "MIC": props.D.MittwochCheck?1:0,
            "MIS": props.D.MIStunden.toString().trim(),
            "DOC": props.D.DonnerstagCheck?1:0,
            "DOS": props.D.DOStunden.toString().trim(),
            "FRC": props.D.FreitagCheck?1:0,
            "FRS": props.D.FRStunden.toString().trim(),
            "SAC": props.D.SamstagCheck?1:0,
            "SAS": props.D.SAStunden.toString().trim(),
            "SOC": props.D.SonntagCheck?1:0,
            "SOS": props.D.SOStunden.toString().trim(),
            "MAID": props.U
          })
        };
        const d = await fetch('https://itsnando.com/datenbankapi/indexsachbearbeitung.php', request);
        let e = await d.json();
        if(e.ergebnis==true){
          settab3ausgefuellt(true)
          updatefullstate(true,0)
          settab3(false)
          let NO=props.D
          NO.MitarbeiterID=props.U
          props.S(NO)
        }
        else if(e.ergebnis=='DBerror'){
          updatefullstate(false,0)
          console.log('no Update')
        }else{
          updatefullstate(false,0)
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
    if(props.D.MontagCheck!=0){
      setArbeitMoCheck(props.D.MontagCheck)
    }
    if(props.D.DiensttagCheck!=0){
      setArbeitDiCheck(props.D.DiensttagCheck)
    }
    if(props.D.MittwochCheck!=0){
      setArbeitMiCheck(props.D.MittwochCheck)
    }
    if(props.D.DonnerstagCheck!=0){
      setArbeitDoCheck(props.D.DonnerstagCheck)
    }
    if(props.D.FreitagCheck!=0){
      setArbeitFrCheck(props.D.FreitagCheck)
    }
    if(props.D.SamstagCheck!=0){
      setArbeitSaCheck(props.D.SamstagCheck)
    }
    if(props.D.SonntagCheck!=0){
      setArbeitSoCheck(props.D.SonntagCheck)
    }
  },[props]) 
  
  return (<>

<TitleTouch AGB={tab3ausgefuellt} F={settab3} S={tab3} T={SachbearbeitungTextdataset(sprache?"DE":"EN").Titel.Zeiten} />
    {
      tab3?
      <>       
        <EintrittsdatumSelect SV={props.D} SF={props.S} UD={props.D.Eintrittsdatum?props.D.Eintrittsdatum:Intl.DateTimeFormat('De-de',{dateStyle:'short'}).format(new Date())}/>
  <EnddatumSelect SV={props.D} SF={props.S} UD={props.D.Enddatum?props.D.Enddatum:Intl.DateTimeFormat('De-de',{dateStyle:'short'}).format(new Date())}/>
      
      
      
      <EingabeFeld SV={props.D.WoechentlicheStunden?props.D.WoechentlicheStunden:''} SF={wa} Icon={"Sachbearbeitung"} Labname={SachbearbeitungTextdataset(sprache?"DE":"EN").Feldname.ZeitGesamt}/>
      <Text style={styles.Textelemente}>{SachbearbeitungTextdataset(sprache?"DE":"EN").Feldname.ZeitTag}</Text>

      <SimpelCheck SV={props.D} SF={props.S} UG={props.D.MontagCheck!=0?props.D.MontagCheck:0} Arbeitstag={setArbeitMoCheck} Bezeichnung={SachbearbeitungTextdataset(sprache?"DE":"EN").Feldname.Mo}/>
      {
        ArbeitMoCheck?

        <EingabeFeld Icon={"Sachbearbeitung"} SV={props.D.MOStunden?props.D.MOStunden:''} SF={mo} Labname={SachbearbeitungTextdataset(sprache?"DE":"EN").Feldname.Mo}/>
        :
        ""
      }
      
      
      <SimpelCheck SV={props.D} SF={props.S} UG={props.D.DiensttagCheck!=0?props.D.DiensttagCheck:0} Arbeitstag={setArbeitDiCheck} Bezeichnung={SachbearbeitungTextdataset(sprache?"DE":"EN").Feldname.Di}/>
      
      {
        ArbeitDiCheck?
        <EingabeFeld Icon={"Sachbearbeitung"} SV={props.D.DIStunden?props.D.DIStunden:''} SF={di} Labname={SachbearbeitungTextdataset(sprache?"DE":"EN").Feldname.Di}/>
        :
        ""
      }
      <SimpelCheck SV={props.D} SF={props.S} UG={props.D.MittwochCheck!=0?props.D.MittwochCheck:0} Arbeitstag={setArbeitMiCheck} Bezeichnung={SachbearbeitungTextdataset(sprache?"DE":"EN").Feldname.Mi}/>
      
      {
        ArbeitMiCheck?
        <EingabeFeld Icon={"Sachbearbeitung"} SV={props.D.MIStunden?props.D.MIStunden:''} SF={mi} Labname={SachbearbeitungTextdataset(sprache?"DE":"EN").Feldname.Mi}/>
        :
        ""
      }
      <SimpelCheck SV={props.D} SF={props.S} UG={props.D.DonnerstagCheck!=0?props.D.DonnerstagCheck:0} Arbeitstag={setArbeitDoCheck} Bezeichnung={SachbearbeitungTextdataset(sprache?"DE":"EN").Feldname.Do}/>
      
      {
        ArbeitDoCheck?
        <EingabeFeld Icon={"Sachbearbeitung"} SV={props.D.DOStunden?props.D.DOStunden:''} SF={don} Labname={SachbearbeitungTextdataset(sprache?"DE":"EN").Feldname.Do}/>
        :
        ""
      }
      <SimpelCheck SV={props.D} SF={props.S} UG={props.D.FreitagCheck!=0?props.D.FreitagCheck:0} Arbeitstag={setArbeitFrCheck} Bezeichnung={SachbearbeitungTextdataset(sprache?"DE":"EN").Feldname.Fr}/>
      
      {
        ArbeitFrCheck?
        <EingabeFeld Icon={"Sachbearbeitung"} SV={props.D.FRStunden?props.D.FRStunden:''} SF={fr} Labname={SachbearbeitungTextdataset(sprache?"DE":"EN").Feldname.Fr}/>
        :
        ""
      }
      <SimpelCheck SV={props.D} SF={props.S} UG={props.D.SamstagCheck!=0?props.D.SamstagCheck:0} Arbeitstag={setArbeitSaCheck} Bezeichnung={SachbearbeitungTextdataset(sprache?"DE":"EN").Feldname.Sa}/>
      
      {
        ArbeitSaCheck?
        <EingabeFeld Icon={"Sachbearbeitung"} SV={props.D.SAStunden?props.D.SAStunden:''} SF={sa} Labname={SachbearbeitungTextdataset(sprache?"DE":"EN").Feldname.Sa}/>
        :
        ""
      }
      <SimpelCheck SV={props.D} SF={props.S} UG={props.D.SonntagCheck!=0?props.D.SonntagCheck:0} Arbeitstag={setArbeitSoCheck} Bezeichnung={SachbearbeitungTextdataset(sprache?"DE":"EN").Feldname.So}/>
      
      {
        ArbeitSoCheck?
        <EingabeFeld Icon={"Sachbearbeitung"} SV={props.D.SOStunden?props.D.SOStunden:''} SF={so} Labname={SachbearbeitungTextdataset(sprache?"DE":"EN").Feldname.So}/>
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