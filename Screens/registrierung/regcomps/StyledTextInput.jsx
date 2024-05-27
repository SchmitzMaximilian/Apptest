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
    console.log(t)
    settxtvalue(t)
    props?.SF(t)
     text = t;
    }
  useEffect(()=>{
    props.P?setshowHide(true):setshowHide(false)
    if(props.SV){
      settxtvalue(props.SV)
    }
     
  },[props])
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