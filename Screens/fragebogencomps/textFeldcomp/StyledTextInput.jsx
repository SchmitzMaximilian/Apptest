import React, { Fragment, useEffect, useState } from "react";
import {  Pressable, StyleSheet,TextInput, View } from "react-native"; 
import LeftIcon from './LeftIcon';
import { DateTimePicker } from "react-native-ui-lib";
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
        O.Festnetz=t
        break;
      case "Vorwahl / Rufnummer Mobiltelefon (nur falls verfügbar)"||"Area code / phone number mobile phone (only if available)":
        O.Mobil=t
        break;
      case "E-Mail-Adresse (nur falls verfügbar)"||"Email address (only if available)":
        O.Email=t
        break;


      //Bankverbindung
      case"Name des Kreditinstituts" || "Name of institute of credit" :
      O.Bankname=t
      break;
      case"IBAN" || "IBAN" :
      O.iban=t
      break; 
      case"Kontoinhaber (falls abweichend)" || "Account holder (if different)" :
      O.Inhaber=t
      break;





      //Steuer
      
      
      case "Steuer-ID (Pflichtangabe)"||"Tax ID (mandatory information)":
        O.SteuerID=t
        break;
      case "Steuerklasse"||"Tax class":
        O.Steuerklasse=t
        break;
      case "Anzahl Kinder"||"Number of children":
        O.Kinder=t
        break;
      case "Konfession"||"Denomination":
        O.Konfession=t
        break; 
      
      //Sozialversicherung      
      case "Sozialversicherungsnummer/Rentennummer"||"Social security number/pension number":
        O.SVNummerfeld=t
        break;
      case "Staatsangehärigkeit"||"Nationality":
        O.Staatsbuergerschaft=t
        break;
      case "Geburtsdatum"||"Birth date":
        O.GBDatum=t
        break;
      
      case "Geburtsort (Pflichtangabe)"||"Place of birth (mandatory)":
        O.GBOrt=t
        break;
      case "Geburtsland(nur falls nicht Deutschland)"||"Country of birth (only if not Germany)":
        O.GBLand=t
        break;
      case "Krankenkasse (Bitte kompletter Name, also zB. AOK NordWest, nicht AOK)"||"Health insurance company (please complete name, e.g. AOK NordWest, not AOK)":
        O.Kassename=t
        break;
      case "Name Ihrer anderen Arbeitgeber"||"Name of your other employers":
        O.AndereArbeitgeber=t
        break;
      case "Geburtsname (Pflichtangabe, bei abweichendem Nachnamen)"||"Birth name (mandatory, if last name is different)":
        O.GBName=t
        break;
      case "Krankenkasse (Bitte kompletter Name)"||"Health insurance company (full name please)":
        O.Kassename=t
        break;
    }
 
    props.SF(O) 
    settxtvalue(t) 
    text = t; 
    }
    const lastEingabe=()=>{
      let O=props?.SV
      switch(props.Labname){
      
        //Name und Anschrift
        case "Vorname"||"Firstname":
          O.Vname.trim().toString().length>2?settxtvalue(O.Vname.toString()):''
          break;
          case "Nachname"||"Surname":
            O.Nname.trim().toString().length>2?settxtvalue(O.Nname.toString()):''
            break;
        case "Straße und Hausnummer"||"Street name and house number":
          O.Adresse.trim().toString().length>2?settxtvalue(O.Adresse.toString()):''
          break;
        case "Postleitzahl"||"Postal Code":
          O.PCode==5?settxtvalue(O.PCode):''
          break;
        case "Wohnort"||"Location/City name":
          O.City.trim().toString().length>2?settxtvalue(O.City.toString()):''
          break;
          
  
        //Kommunikation
        case "Vorwahl / Rufnummer Festnetz (nur falls verfügbar)"||"Area code / phone number landline (only if available)":
          O.Festnetz.trim().toString().length>2?settxtvalue(O.Festnetz.toString()):''
          break;
        case "Vorwahl / Rufnummer Mobiltelefon (nur falls verfügbar)"||"Area code / phone number mobile phone (only if available)":
          O.Mobil.trim().toString().length>2?settxtvalue(O.Mobil.toString()):''
          break;
        case "E-Mail-Adresse (nur falls verfügbar)"||"Email address (only if available)":
          O.Email.trim().toString().length>2?settxtvalue(O.Email.toString()):''
          break;
  
  
        //Bankverbindung
        case"Name des Kreditinstituts" || "Name of institute of credit" :
        O.Bankname.trim().toString().length>2?settxtvalue(O.Bankname.toString()):''
        break;
        case"IBAN" || "IBAN" :
        O.iban.trim().toString().length>2?settxtvalue(O.iban.toString()):''
        break; 
        case"Kontoinhaber (falls abweichend)" || "Account holder (if different)" :
        O.Inhaber.toString().length>1?settxtvalue(O.Inhaber.toString()):''
        break;
  
  
  
  
  
        //Steuer
        
        
        case "Steuer-ID (Pflichtangabe)"||"Tax ID (mandatory information)":
          O.SteuerID>0?settxtvalue(O.SteuerID):''
          break;
        case "Steuerklasse"||"Tax class":
          O.Steuerklasse>0?settxtvalue(O.Steuerklasse):''
          break;
        case "Anzahl Kinder"||"Number of children":
          O.Kinder>0?settxtvalue(O.Kinder):''
          break;
        case "Konfession"||"Denomination":
          O.Konfession.trim().toString().length>2?settxtvalue(O.Konfession.toString()):''
          break; 
        
        //Sozialversicherung      
        case "Sozialversicherungsnummer/Rentennummer"||"Social security number/pension number":
          O.SVNummerfeld>2?settxtvalue(O.SVNummerfeld):''
          break;
        case "Staatsangehärigkeit"||"Nationality":
          O.Staatsbuergerschaft.trim().toString().length>0?settxtvalue(O.Staatsbuergerschaft.toString()):''
          break;
        case "Geburtsdatum"||"Birth date":
          O.GBDatum.trim().toString().length>0?settxtvalue(O.GBDatum.toString()):''
          break;
        
        case "Geburtsort (Pflichtangabe)"||"Place of birth (mandatory)":
          O.GBOrt.trim().toString().length>0?settxtvalue(O.GBOrt.toString()):''
          break;
        case "Geburtsland(nur falls nicht Deutschland)"||"Country of birth (only if not Germany)":
          O.GBLand>0?settxtvalue(O.GBLand):''
          break;
        case "Krankenkasse (Bitte kompletter Name, also zB. AOK NordWest, nicht AOK)"||"Health insurance company (please complete name, e.g. AOK NordWest, not AOK)":
          O.Kassename.trim().toString().length>0?settxtvalue(O.Kassename.toString()):''
          break;
        case "Name Ihrer anderen Arbeitgeber"||"Name of your other employers":
          O.AndereArbeitgeber.trim().toString().length>4?settxtvalue(O.AndereArbeitgeber.toString()):''
          break;
          case "Geburtsname (Pflichtangabe, bei abweichendem Nachnamen)"||"Birth name (mandatory, if last name is different)":
            O.GBName.trim().toString().length>2?settxtvalue(O.GBName.toString()):''
            break;
          case "Krankenkasse (Bitte kompletter Name)"||"Health insurance company (full name please)":
            O.Kassename.trim().toString().length>2?settxtvalue(O.Kassename.toString()):''
            break;
        
      }

    }
   useEffect(()=>{
    lastEingabe()
   },[])
  return ( 
  <View>  
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
    backgroundColor:'#6b728090'
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