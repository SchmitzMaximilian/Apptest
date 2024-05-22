import React,{ useContext, useEffect, useState } from 'react';
import { StyleSheet, Text} from 'react-native';
import SimpelCheck from '../../fragebogencomps/sachbearbeitungsComps/SimpelCheck'
import { EingabeFeld } from '../../registrierung/regcomps/Comps'
import { SachbearbeitungTextdataset } from '../../../utils/Sachbearbeitung/SachbearbeitungTextdataset';
import { TransactionContext } from '../../../utils/Context';
import SachbearbeitungDatenObject from '../../../utils/Objects/SachbearbeitungDatenObject';

function Grundentlohnung() {
  const [SL,setSL]=useState(false)
  const [FL,setFL]=useState(false)
  const [FG,setFG]=useState(false)
  const [sprache,setzesprache]=useContext(TransactionContext)
  const [SachbearbeitungDatenArr,setSachbearbeitungDatenArr]=useState(SachbearbeitungDatenObject)
  return (<>
    <Text style={styles.Titelklein}>{SachbearbeitungTextdataset(sprache?"DE":"EN").Entlohnungtitel.Lohn}</Text>
      <SimpelCheck SV={SachbearbeitungDatenArr} SF={setSachbearbeitungDatenArr} Arbeitstag={setSL} Bezeichnung={SachbearbeitungTextdataset(sprache?"DE":"EN").Feldname.Sl}/>
      {
        SL?
        <EingabeFeld SV={SachbearbeitungDatenArr} SF={setSachbearbeitungDatenArr} Icon={"Sachbearbeitung"} Labname={SachbearbeitungTextdataset(sprache?"DE":"EN").Feldname.Sl}/>        
        :
        ""
      }
      
      <SimpelCheck SV={SachbearbeitungDatenArr} SF={setSachbearbeitungDatenArr} Arbeitstag={setFL} Bezeichnung={SachbearbeitungTextdataset(sprache?"DE":"EN").Feldname.Fl}/>
      {
        FL?
        <EingabeFeld SV={SachbearbeitungDatenArr} SF={setSachbearbeitungDatenArr} Icon={"Sachbearbeitung"} Labname={SachbearbeitungTextdataset(sprache?"DE":"EN").Feldname.Fl}/>
        :
        ""
      }

      <SimpelCheck SV={SachbearbeitungDatenArr} SF={setSachbearbeitungDatenArr} Arbeitstag={setFG} Bezeichnung={SachbearbeitungTextdataset(sprache?"DE":"EN").Feldname.Fg}/>
      {
        FG?
        <EingabeFeld SV={SachbearbeitungDatenArr} SF={setSachbearbeitungDatenArr} Icon={"Sachbearbeitung"} Labname={SachbearbeitungTextdataset(sprache?"DE":"EN").Feldname.Fg}/>
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