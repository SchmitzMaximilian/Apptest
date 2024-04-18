import React, { useEffect, useState } from "react";
import {  StyleSheet,TextInput, View } from "react-native"; 
import LeftIcon from './LeftIcon';
function StyledTextInput(props) { 
const[txtvalue,settxtvalue]=useState();
  
  function textChangeHandler(t){  
    let O=props?.SV
    switch(props.Labname){
      
      //Name und Anschrift
      case "Vorname"||"Firstname":
        O.Vname=t
        break;
        case "Nachname"||"Surname":
          O.Nname=t
          break;
      case "Straße und Hausnummer"||"Street name and house number":
        O.Adresse=t
        break;
      case "Postleitzahl"||"Postal Code":
        O.PCode=t
        break;
      case "Wohnort"||"Location/City name":
        O.City=t
        break;
        

      //Kommunikation
      case "Vorwahl / Rufnummer Festnetz (nur falls verfügbar)"||"Area code / phone number landline (only if available)":
        O.Vname=t
        break;
      case "Vorwahl / Rufnummer Mobiltelefon (nur falls verfügbar)"||"Area code / phone number mobile phone (only if available)":
        O.Nname=t
        break;
      case "E-Mail-Adresse (nur falls verfügbar)"||"Email address (only if available)":
        O.Adresse=t
        break;


      //Steuer
      
      case "Steuerklasse"||"Tax class":
        O.PCode=t
        break;
      case "Anzahl Kinder"||"Number of children":
        O.City=t
        break;
      case "Konfession"||"Denomination":
        O.City=t
        break; 
      case "Konfession Partner (falls abweichend)"||"Denomination partner (if different)":
        O.City=t
        break;

      //Sozialversicherung      
      case "Staatsangehärigkeit"||"Nationality":
        O.Vname=t
        break;
      case "Geburtsdatum"||"Birth date":
        O.Nname=t
        break;
      case "Geburtsname (Pflichtangabe, bei abweichendem Nachnamen)"||"Birth name (mandatory, if last name is different)":
        O.Adresse=t
        break;
      case "Geburtsort (Pflichtangabe)"||"Place of birth (mandatory)":
        O.PCode=t
        break;
      case "Geburtsland(nur falls nicht Deutschland)"||"Country of birth (only if not Germany)":
        O.City=t
        break;
      case "Krankenkasse (Bitte kompletter Name, also zB. AOK NordWest, nicht AOK)"||"Health insurance company (please complete name, e.g. AOK NordWest, not AOK)":
        O.Vname=t
        break;
      
      
    }
 
    props.SF(O) 
    settxtvalue(t) 
    text = t;
    console.log(O)
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