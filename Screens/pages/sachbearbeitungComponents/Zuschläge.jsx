import React,{ useContext, useEffect, useState } from 'react';
import { StyleSheet, Text} from 'react-native';
import { EingabeFeld } from '../../registrierung/regcomps/Comps'
import SimpelCheck from '../../fragebogencomps/sachbearbeitungsComps/SimpelCheck'
import Justchecking from '../../fragebogencomps/sachbearbeitungsComps/Justchecking'
import { SachbearbeitungTextdataset } from '../../../utils/Sachbearbeitung/SachbearbeitungTextdataset'
import { TransactionContext } from '../../../utils/Context'
import SachbearbeitungDatenObject from '../../../utils/Objects/SachbearbeitungDatenObject';

function Zuschläge(props) {
  const [sprache,setzesprache]=useContext(TransactionContext)
  const [Beseingabe,setBeseingabe]=useState(false)
  const [SachbearbeitungDatenArr,setSachbearbeitungDatenArr]=useState(SachbearbeitungDatenObject)
  useEffect(()=>{
    if(props.SV.BesondereCheck!=0){
      setBeseingabe(props.SV.BesondereCheck)
    }
  },[])
  return (
    <>
    <Text style={styles.Titelklein}>{SachbearbeitungTextdataset(sprache?"DE":"EN").Entlohnungtitel.Zuschlag}</Text>
      <Justchecking SV={SachbearbeitungDatenArr} SF={setSachbearbeitungDatenArr} UG={props.SV.AlleCheck!=0?props.SV.AlleCheck:0} Bezeichnung={SachbearbeitungTextdataset(sprache?"DE":"EN").Feldname.A}/>
      <Justchecking SV={SachbearbeitungDatenArr} SF={setSachbearbeitungDatenArr} UG={props.SV.Betriebsueblichecheck!=0?props.SV.Betriebsueblichecheck:0} Bezeichnung={SachbearbeitungTextdataset(sprache?"DE":"EN").Feldname.uebliche}/>
      <SimpelCheck SV={SachbearbeitungDatenArr} SF={setSachbearbeitungDatenArr} UG={props.SV.BesondereCheck!=0?props.SV.BesondereCheck:0} Arbeitstag={setBeseingabe} Bezeichnung={SachbearbeitungTextdataset(sprache?"DE":"EN").Feldname.Besondere}/>
      {
        Beseingabe?
        <EingabeFeld SV={props.SV.Besondereliste?props.SV.Besondereliste:''} SF={props.L} Icon={"Sachbearbeitung"} Labname={SachbearbeitungTextdataset(sprache?"DE":"EN").Feldname.Besondere}/>
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
export default Zuschläge