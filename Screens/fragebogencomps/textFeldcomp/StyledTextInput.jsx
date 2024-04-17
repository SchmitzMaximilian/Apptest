import React, { useEffect, useState } from "react";
import {  StyleSheet,TextInput, View } from "react-native"; 
import LeftIcon from './LeftIcon';
function StyledTextInput(props) { 

  const[txtvalue,settxtvalue]=useState();  
  function textChangeHandler(t){ 
    
    settxtvalue(t)
    props.SF(t)
     text = t;
    }
  function setData(){
    console.log(txt)
    

  } 
  return ( <View>
    <LeftIcon P={props.Icon}/>
    <TextInput  style={styles.StyledInputLabel} onChangeText={text=>textChangeHandler(text)} value={txtvalue}  placeholder={props.Labname} placeholderTextColor={'#f1f5f9'}> 
    </TextInput> 
    </View>
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


});/*settxt(e.target.value)
    const Arr=props.DD
    const ex=Arr.filter((e)=>e.name==props.Labname).length
    let oldArr=Arr;
    let nArr=[];
    let label=props.Labname
    console.log(e)
    if(ex>0){
    for(let i=0;i<oldArr.length;i++){
      if(Arr[i].name==props.Labname){
        nArr.push({label:e.target.value})
      }else{
        nArr.push(Arr[i])
      }
    }
    console.log(nArr)
    props.SS(nArr)
  }else{
    oldArr.push({label:e.target.value})
    console.log(oldArr)
    props.SS(oldArr)
  }*/