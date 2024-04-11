import React, { useEffect, useState } from "react";
import {  StyleSheet,TextInput } from "react-native"; 

function StyledTextInput(props) {
   

  
  return ( 
    <TextInput style={styles.StyledInputLabel}  placeholder={props.Labname} placeholderTextColor={'#f1f5f9'}> 
    </TextInput> 
  )
}

export default StyledTextInput

const styles = StyleSheet.create({
  StyledInputLabel : {
    color: '#FFF',
    fontsize:'16px',
    marginbottom:'4px',
    textalign:'left',
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