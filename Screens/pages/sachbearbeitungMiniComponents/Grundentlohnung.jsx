import React,{ useContext, useEffect, useState } from 'react';
import { StyleSheet, Text} from 'react-native';
import SimpelCheck from '../../fragebogencomps/sachbearbeitungsComps/SimpelCheck'
import { SachbearbeitungTextdataset } from '../../../utils/Sachbearbeitung/SachbearbeitungTextdataset';
import { TransactionContext } from '../../../utils/Context';
import SpeicherSAButton from '../sachbearbeitungtextfeldcomp/speicherSAButton';
import { EingabeFeld } from '../../registrierung/regcomps/Comps';
import TitleTouch from '../../fragebogencomps/touchTitle/TitleTouch';

function Grundentlohnung(props) {
  const [SL,setSL]=useState(false)
  const [FL,setFL]=useState(false)
  const [tab1ausgefuellt,settab1ausgefuellt]=useState(false)
  const [tab1,settab1]=useState(false) 
  const updatefullstate=(t,num)=>{
    let v=props.E
    t?v=Number(num)+1:v=Number(num)-1;
    props.ES(v)
  }
  const submitLohndaten=async()=>{
    let check=true

    if(props.D.Stundenlohncheck==1){
      if(Number(props.D.Stundenlohn)==0){
        check=false
      }
    }
    if(props.D.Festlohncheck==1){
      if(Number(props.D.Festlohn)==0){
        check=false
      }
    }
    if(check){
      try{
        const request ={
          method: 'POST',
          headers: { 'Content-Type' : 'application/json'},
          body: JSON.stringify({
            "query": 5,//ändern
            "SLC" : props.D.Stundenlohncheck?1:0,
            "SL": props.D.Stundenlohn.toString().trim(),
            "FLC": props.D.Festlohncheck?1:0,
            "FL": props.D.Festlohn.toString().trim(),
            "MAID": props.U
          })
        };
        const d = await fetch('https://itsnando.com/datenbankapi/indexsachbearbeitung.php', request);
        console.log(props.D)
        let e = await d.json();
        if(e.ergebnis==true){
          settab1ausgefuellt(true)
          updatefullstate(true,1)
          settab1(false)
          let NO=props.D
          NO.MitarbeiterID=props.U
          props.S(NO)
        }
        else if(e.ergebnis=='DBerror'){
          updatefullstate(false,1)
          console.log('no Update')
        }else{
          updatefullstate(false,1)
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
    let NO=props.D
    NO.Stundenlohn=t
    props.S(NO)
  }
  const fl=(t)=>{
    let NO=props.D
    NO.Festlohn=t
    props.S(NO)
  }

  
  useEffect(()=>{
    if(props.D.Stundenlohncheck!=0){
      setSL(props.D.Stundenlohncheck)
    }
    if(props.D.Festlohncheck!=0){
      setFL(props.D.Festlohncheck)
    }
  },[props])
  
  const [sprache,setzesprache]=useContext(TransactionContext)
  return (<>

  
<TitleTouch AGB={tab1ausgefuellt} F={settab1} S={tab1} T={SachbearbeitungTextdataset(sprache?"DE":"EN").Titel.Lohn} />
    {
      tab1?
      <>
      <Text style={styles.Titelklein}>{SachbearbeitungTextdataset(sprache?"DE":"EN").Entlohnungtitel.Lohn}</Text>
      <SimpelCheck SV={props.D} SF={props.S} UG={props.D.Stundenlohncheck!=0?props.D.Stundenlohncheck:0} Arbeitstag={setSL} Bezeichnung={SachbearbeitungTextdataset(sprache?"DE":"EN").Feldname.Sl}/>
      {
        SL?
        <EingabeFeld SV={props.D.Stundenlohn?props.D.Stundenlohn:''} SF={stl} Icon={"Sachbearbeitung"} Labname={SachbearbeitungTextdataset(sprache?"DE":"EN").Feldname.Sl}/>
        
        :
        ""
      }
      <SimpelCheck SV={props.D} SF={props.S} UG={props.D.Festlohncheck!=0?props.D.Festlohncheck:0} Arbeitstag={setFL} Bezeichnung={SachbearbeitungTextdataset(sprache?"DE":"EN").Feldname.Fl}/>
      {
        FL?
        <EingabeFeld SV={props.D.Festlohn?props.D.Festlohn:''} SF={fl} Icon={"Sachbearbeitung"} Labname={SachbearbeitungTextdataset(sprache?"DE":"EN").Feldname.Fl}/>
        :
        ""
      }
      
      < SpeicherSAButton SDF={submitLohndaten}/>
            
      </>
      :
      ""
    }  
    
      </>
  )
}
const styles = StyleSheet.create({
  Titelklein:{
    fontSize:20,
    marginHorizontal: '10%',
    marginTop:20,
    textShadowColor:'#000',
    textShadowRadius:5,
    textShadowOffset:{width:3,height:3},
    color:'#FFF',
  },
  
  })
export default Grundentlohnung