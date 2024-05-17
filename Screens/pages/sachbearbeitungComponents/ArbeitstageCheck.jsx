import React,{ useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput,Button, SafeAreaView, TouchableOpacity ,ImageBackground} from 'react-native';
import { SachbearbeitungTextdataset } from '../../../utils/Sachbearbeitung/SachbearbeitungTextdataset'
import SimpelCheck from '../../fragebogencomps/sachbearbeitungsComps/SimpelCheck'

import { TransactionContext } from '../../../utils/Context';
import { EingabeFeld } from '../../registrierung/regcomps/Comps';
import SachbearbeitungDatenObject from '../../../utils/Objects/SachbearbeitungDatenObject';
import SpeicherSAButton from '../sachbearbeitungtextfeldcomp/speicherSAButton';

function ArbeitstageCheck() {
  const [sprache,setzesprache]=useContext(TransactionContext)
  const [ArbeitMoCheck,setArbeitMoCheck]=useState(false)
  const [ArbeitDiCheck,setArbeitDiCheck]=useState(false)
  const [ArbeitMiCheck,setArbeitMiCheck]=useState(false)
  const [ArbeitDoCheck,setArbeitDoCheck]=useState(false)
  const [ArbeitFrCheck,setArbeitFrCheck]=useState(false)
  const [ArbeitSaCheck,setArbeitSaCheck]=useState(false)
  const [ArbeitSoCheck,setArbeitSoCheck]=useState(false)
  const [SachbearbeitungDatenArr,setSachbearbeitungDatenArr]=useState(SachbearbeitungDatenObject)

  const submitZeitendaten=async()=>{
    let check=true

    //prüfungen???
    if(check){
      try{
        const request ={
          method: 'POST',
          headers: { 'Content-Type' : 'application/json'},
          body: JSON.stringify({
            "query": 6,//ändern
            "Elstam": SachbearbeitungDatenArr.ELStAMCheck.toString().trim(),//erweitern/ändern
          })
        };
        const d = await fetch('http://192.168.2.44/datenbankapi/indexsachbearbeitung.php', request);
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

  return (<>
      <EingabeFeld SV={SachbearbeitungDatenArr} SF={setSachbearbeitungDatenArr} Icon={"Sachbearbeitung"} Labname={SachbearbeitungTextdataset(sprache?"DE":"EN").Feldname.Eintrittsdatum}/>
      <EingabeFeld SV={SachbearbeitungDatenArr} SF={setSachbearbeitungDatenArr} Icon={"Sachbearbeitung"} Labname={SachbearbeitungTextdataset(sprache?"DE":"EN").Feldname.Enddatum}/>
      
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