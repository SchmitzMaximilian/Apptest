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
  const [SachbearbeitungDatenArr,setSachbearbeitungDatenArr]=useState(props.D)

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
    if(check){
      try{
        const request ={
          method: 'POST',
          headers: { 'Content-Type' : 'application/json'},
          body: JSON.stringify({
            "query": 5,//ändern
            "SLC" : SachbearbeitungDatenArr.Stundenlohncheck?1:0,
            "SL": SachbearbeitungDatenArr.Stundenlohn.toString().trim(),
            "FLC": SachbearbeitungDatenArr.Festlohncheck?1:0,
            "FL": SachbearbeitungDatenArr.Festlohn.toString().trim(),
            "MAID": props.U
          })
        };
        const d = await fetch('https://itsnando.com/datenbankapi/indexsachbearbeitung.php', request);
        let e = await d.json();
        if(e.ergebnis==true){
          settab1ausgefuellt(true)
          settab1(false)
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

  
  useEffect(()=>{
    if(SachbearbeitungDatenArr.Stundenlohncheck!=0){
      setSL(SachbearbeitungDatenArr.Stundenlohncheck)
    }
    if(SachbearbeitungDatenArr.Festlohncheck!=0){
      setFL(SachbearbeitungDatenArr.Festlohncheck)
    }
  },[props])
  
  const [sprache,setzesprache]=useContext(TransactionContext)
  return (<>

  
<TitleTouch  F={settab1} S={tab1} T={SachbearbeitungTextdataset(sprache?"DE":"EN").Titel.Lohn} />
    {
      tab1?
      <>
      <Text style={styles.Titelklein}>{SachbearbeitungTextdataset(sprache?"DE":"EN").Entlohnungtitel.Lohn}</Text>
      <SimpelCheck SV={SachbearbeitungDatenArr} SF={setSachbearbeitungDatenArr} UG={SachbearbeitungDatenArr.Stundenlohncheck!=0?setSachbearbeitungDatenArr.Stundenlohncheck:0} Arbeitstag={setSL} Bezeichnung={SachbearbeitungTextdataset(sprache?"DE":"EN").Feldname.Sl}/>
      {
        SL?
        <EingabeFeld SV={SachbearbeitungDatenArr.Stundenlohn?SachbearbeitungDatenArr.Stundenlohn:''} SF={stl} Icon={"Sachbearbeitung"} Labname={SachbearbeitungTextdataset(sprache?"DE":"EN").Feldname.Sl}/>
        
        :
        ""
      }
      <SimpelCheck SV={SachbearbeitungDatenArr} SF={setSachbearbeitungDatenArr} UG={SachbearbeitungDatenArr.Festlohncheck!=0?setSachbearbeitungDatenArr.Festlohncheck:0} Arbeitstag={setFL} Bezeichnung={SachbearbeitungTextdataset(sprache?"DE":"EN").Feldname.Fl}/>
      {
        FL?
        <EingabeFeld SV={SachbearbeitungDatenArr.Festlohn?SachbearbeitungDatenArr.Festlohn:''} SF={fl} Icon={"Sachbearbeitung"} Labname={SachbearbeitungTextdataset(sprache?"DE":"EN").Feldname.Fl}/>
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