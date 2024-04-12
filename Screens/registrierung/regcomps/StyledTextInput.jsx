import React, { useEffect, useState } from "react";
import { View,StyleSheet,TextInput } from "react-native";
import {Octicons, Ionicons} from '@expo/vector-icons'; 
import RightIcon from "./RightIcon";

function StyledTextInput(props) {
  const [showHide,setshowHide]=useState(false);

  useEffect(()=>{
    props.P?setshowHide(true):setshowHide(false)
  },[])
  return (
    <>
    {
    showHide?
    <>
    <TextInput style={styles.StyledInputLabel} secureTextEntry={true} placeholder={props.Labname} placeholderTextColor={'#f1f5f9'}> 
    </TextInput>
    {
      props.Icon=="Pass"?
      <RightIcon S={showHide} F={setshowHide} />
      :
      ''
    }
    </>
    :
    <>
    <TextInput style={styles.StyledInputLabel} secureTextEntry={false} placeholder={props.Labname} placeholderTextColor={'#f1f5f9'}> 
    </TextInput>
    {
      props.Icon=="Pass"?
      <RightIcon S={showHide} F={setshowHide} />
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
  },


});