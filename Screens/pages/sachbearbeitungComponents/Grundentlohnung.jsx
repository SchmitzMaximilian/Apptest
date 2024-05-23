import React,{ useContext, useEffect, useState } from 'react';
import { StyleSheet, Text} from 'react-native';
import SimpelCheck from '../../fragebogencomps/sachbearbeitungsComps/SimpelCheck'
import { EingabeFeld } from '../../registrierung/regcomps/Comps'
import { SachbearbeitungTextdataset } from '../../../utils/Sachbearbeitung/SachbearbeitungTextdataset';
import { TransactionContext } from '../../../utils/Context';
import SachbearbeitungDatenObject from '../../../utils/Objects/SachbearbeitungDatenObject';

function Grundentlohnung(props) {
  const [SL,setSL]=useState(false)
  const [FL,setFL]=useState(false)
  const [FG,setFG]=useState(false)
  const [sprache,setzesprache]=useContext(TransactionContext) 
  useEffect(()=>{
    if(props.SV.Stundenlohncheck!=0){
      setSL(props.SV.Stundenlohncheck)
    }
    if(props.SV.Festlohncheck!=0){
      setFL(props.SV.Festlohncheck)
    }
    if(props.SV.Festgehaltcheck!=0){
      setFG(props.SV.Festgehaltcheck)
    }
  },[])
  return (<>
    <Text style={styles.Titelklein}>{SachbearbeitungTextdataset(sprache?"DE":"EN").Entlohnungtitel.Lohn}</Text>
      <SimpelCheck SV={props.SV} SF={props.SF} UG={props.SV.Stundenlohncheck!=0?props.SV.Stundenlohncheck:0} Arbeitstag={setSL} Bezeichnung={SachbearbeitungTextdataset(sprache?"DE":"EN").Feldname.Sl}/>
      {
        SL?
        <EingabeFeld SV={props.SV.Stundenlohn?props.SV.Stundenlohn:''} SF={props.Stl} Icon={"Sachbearbeitung"} Labname={SachbearbeitungTextdataset(sprache?"DE":"EN").Feldname.Sl}/>        
        :
        ""
      }
      
      <SimpelCheck SV={props.SV} SF={props.SF} UG={props.SV.Festlohncheck!=0?props.SV.Festlohncheck:0} Arbeitstag={setFL} Bezeichnung={SachbearbeitungTextdataset(sprache?"DE":"EN").Feldname.Fl}/>
      {
        FL?
        <EingabeFeld SV={props.SV.Festlohn?props.SV.Festlohn:''} SF={props.Fl} Icon={"Sachbearbeitung"} Labname={SachbearbeitungTextdataset(sprache?"DE":"EN").Feldname.Fl}/>
        :
        ""
      }

      <SimpelCheck SV={props.SV} SF={props.SF} UG={props.SV.Festgehaltcheck!=0?props.SV.Festgehaltcheck:0} Arbeitstag={setFG} Bezeichnung={SachbearbeitungTextdataset(sprache?"DE":"EN").Feldname.Fg}/>
      {
        FG?
        <EingabeFeld SV={props.SV.Festgehalt?props.SV.Festgehalt:''} SF={props.Fg} Icon={"Sachbearbeitung"} Labname={SachbearbeitungTextdataset(sprache?"DE":"EN").Feldname.Fg}/>
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