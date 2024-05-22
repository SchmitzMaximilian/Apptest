import React,{ useContext, useEffect, useState } from 'react';
import { StyleSheet, Text} from 'react-native';
import { EingabeFeld } from '../../registrierung/regcomps/Comps'
import SimpelCheck from '../../fragebogencomps/sachbearbeitungsComps/SimpelCheck'
import Justchecking from '../../fragebogencomps/sachbearbeitungsComps/Justchecking'
import { SachbearbeitungTextdataset } from '../../../utils/Sachbearbeitung/SachbearbeitungTextdataset'
import { TransactionContext } from '../../../utils/Context'
import SachbearbeitungDatenObject from '../../../utils/Objects/SachbearbeitungDatenObject';

function Zuschläge() {
  const [sprache,setzesprache]=useContext(TransactionContext)
  const [Beseingabe,setBeseingabe]=useState(false)
  const [SachbearbeitungDatenArr,setSachbearbeitungDatenArr]=useState(SachbearbeitungDatenObject)

  return (
    <>
    <Text style={styles.Titelklein}>{SachbearbeitungTextdataset(sprache?"DE":"EN").Entlohnungtitel.Zuschlag}</Text>
      <Justchecking SV={SachbearbeitungDatenArr} SF={setSachbearbeitungDatenArr} Bezeichnung={SachbearbeitungTextdataset(sprache?"DE":"EN").Feldname.A}/>
      <Justchecking SV={SachbearbeitungDatenArr} SF={setSachbearbeitungDatenArr} Bezeichnung={SachbearbeitungTextdataset(sprache?"DE":"EN").Feldname.uebliche}/>
      <SimpelCheck SV={SachbearbeitungDatenArr} SF={setSachbearbeitungDatenArr} Arbeitstag={setBeseingabe} Bezeichnung={SachbearbeitungTextdataset(sprache?"DE":"EN").Feldname.Besondere}/>
      {
        Beseingabe?
        <EingabeFeld SV={SachbearbeitungDatenArr} SF={setSachbearbeitungDatenArr} Icon={"Sachbearbeitung"} Labname={SachbearbeitungTextdataset(sprache?"DE":"EN").Feldname.Besondere}/>
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