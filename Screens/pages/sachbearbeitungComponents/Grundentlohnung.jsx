import React,{ useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput,Button, SafeAreaView, TouchableOpacity ,ImageBackground} from 'react-native';
import SimpelCheck from '../../fragebogencomps/sachbearbeitungsComps/SimpelCheck'
import { EingabeFeld } from '../../registrierung/regcomps/Comps'
import { SachbearbeitungTextdataset } from '../../../utils/Sachbearbeitung/SachbearbeitungTextdataset';
import { TransactionContext } from '../../../utils/Context';

function Grundentlohnung() {
  const [SL,setSL]=useState(false)
  const [FL,setFL]=useState(false)
  const [FG,setFG]=useState(false)
  const [sprache,setzesprache]=useContext(TransactionContext)
  return (<>
    <Text style={styles.Titelklein}>{SachbearbeitungTextdataset(sprache?"DE":"EN").Entlohnungtitel.Lohn}</Text>
      <SimpelCheck Arbeitstag={setSL} Bezeichnung={SachbearbeitungTextdataset(sprache?"DE":"EN").Feldname.Sl}/>
      {
        SL?
        <EingabeFeld Icon={"Sachbearbeitung"} Labname={SachbearbeitungTextdataset(sprache?"DE":"EN").Feldname.Sl}/>        
        :
        ""
      }
      
      <SimpelCheck Arbeitstag={setFL} Bezeichnung={SachbearbeitungTextdataset(sprache?"DE":"EN").Feldname.Fl}/>
      {
        FL?
        <EingabeFeld Icon={"Sachbearbeitung"} Labname={SachbearbeitungTextdataset(sprache?"DE":"EN").Feldname.Fl}/>
        :
        ""
      }

      <SimpelCheck Arbeitstag={setFG} Bezeichnung={SachbearbeitungTextdataset(sprache?"DE":"EN").Feldname.Fg}/>
      {
        FG?
        <EingabeFeld Icon={"Sachbearbeitung"} Labname={SachbearbeitungTextdataset(sprache?"DE":"EN").Feldname.Fg}/>
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