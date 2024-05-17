import React, { useEffect, useState } from "react";
import { View,StyleSheet,TextInput } from "react-native";
import {Octicons, Ionicons} from '@expo/vector-icons'; 
import RightIcon from "./RightIcon";
import {MdDelete} from 'react-icons';


function StyledTextInput(props) {
  console.log(props)
  const[txtvalue,settxtvalue]=useState();
  const [showHide,setshowHide]=useState(false);
  function textChangeHandler(t){ 
    let O=props?.SV
    switch(props.Labname){
      case "Eintrittsdatum:":
              
        O.Eintrittsdatum=t
        break;
        case "Befristet bis:":
          O.Enddatum=t
          break;
      case "als (Tätigkeit):":
        O.Taetigkeit=t
        break;
      case "wöchentliche Arbeitszeit (Stunden):":
        O.WoechentlicheStunden=t
        break;
      
        

      //Arbeitstage
      case "Montag":
        O.MOStunden=t
        break;
      case "Dienstag":
        O.DIStunden=t
        break;
      case "Mittwoch":
        O.MIStunden=t
        break;      
      case"Donnerstag":
      O.DOStunden=t
      break;
      case"Freitag":
      O.FRStunden=t
      break; 
      case"Samstag":
      O.SAStunden=t
      break;      
      case "Sonntag":
        O.SOStunden=t
        break;
      case "Jahresurlaub (Tage):":
        O.JahresUrlaub=t
        break;

        //Lohn
      case "Stundenlohn":
        O.Stundenlohn=t
        break;
      case "Festlohn":
        O.Festlohn=t
        break;
      case"Festgehalt":
        O.Festgehalt=t
        break;     

      case "Besondere":
        O.Besondereliste=t
        break;

    }
    props.SF(O)
    console.log(t)
    settxtvalue(t)
    props.SF(t)
     text = t;
    }
  useEffect(()=>{
    props.P?setshowHide(true):setshowHide(false)
  },[])
  return (
    <>
    {
    showHide?
    <>
    <TextInput style={styles.StyledInputLabel} onChangeText={text=>textChangeHandler(text)} value={txtvalue} secureTextEntry={true} placeholder={props.Labname} placeholderTextColor={'#f1f5f9'}> 
    </TextInput>
    {
      props.Icon=="Pass"?
      <RightIcon S={showHide} F={setshowHide} P={props.Icon} />
      :
      props.Icon=="x-circle-fill"?
      <RightIcon customOnPress={()=>props.customRightPress()} S={showHide} F={setshowHide} P={"x-circle-fill"} />
      :
      ''
    }
    </>
    :
    <>
    <TextInput style={styles.StyledInputLabel} onChangeText={text=>textChangeHandler(text)} value={txtvalue} secureTextEntry={false} placeholder={props.Labname} placeholderTextColor={'#f1f5f9'}> 
    </TextInput>
    {
      props.Icon=="Pass"?
      <RightIcon S={showHide} F={setshowHide} P={props.Icon} />
      :
      props.Icon=="x-circle-fill"?
      <RightIcon customOnPress={()=>props.customRightPress()} S={showHide} F={setshowHide} P={"x-circle-fill"} />
      :
      ''
    } 
    </>
  }
    </>
  )
}

export default StyledTextInput

const styles = StyleSheet.create({
  StyledInputLabel : {
    color: '#FFF',
    fontSize:16,
    marginBottom:4,
    textAlign:'left',
    padding: 10,
    paddingLeft:60,
    paddingHorizontal:15,
    borderWidth:2,
    width:'80%',
    alignSelf:'center',
    borderColor: '#475569',
    borderRadius:6,
    marginVertical:15,
    color:'#f8fafc',
    backgroundColor:'#6b728090'
  },


});