import React,{ useContext, useEffect, useState } from 'react';
import { StyleSheet, Text} from 'react-native';
import SimpelCheck from '../../fragebogencomps/sachbearbeitungsComps/SimpelCheck'
import { SachbearbeitungTextdataset } from '../../../utils/Sachbearbeitung/SachbearbeitungTextdataset';
import { TransactionContext } from '../../../utils/Context';
import SpeicherSAButton from '../sachbearbeitungtextfeldcomp/speicherSAButton';
import { EingabeFeld } from '../../registrierung/regcomps/Comps';

function Grundentlohnung(props) {
  const [SL,setSL]=useState(false)
  const [FL,setFL]=useState(false)
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
            "SLC" : SachbearbeitungDatenArr.Stundenlohncheck.toString().trim(),
            "SL": SachbearbeitungDatenArr.Stundenlohn.toString().trim(),
            "FLC": SachbearbeitungDatenArr.Festlohncheck.toString().trim(),
            "FL": SachbearbeitungDatenArr.Festlohn.toString().trim(),
            "MAID": SachbearbeitungDatenArr.MitarbeiterID
          })
        };
        const d = await fetch('https://itsnando.com/datenbankapi/indexsachbearbeitung.php', request);
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

  
  useEffect(()=>{

  },[props])
  
  const [sprache,setzesprache]=useContext(TransactionContext)
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
      
      < SpeicherSAButton SDF={submitLohndaten}/>
      
      

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