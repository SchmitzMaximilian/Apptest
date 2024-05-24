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
      case "Vorname (Pflichtangabe)":
      case "First name (mandatory)":
        
        O.Vname=t
        break;
        case "Nachname (Pflichtangabe)":
        case"Last name (mandatory)":
          O.Nname=t
          break;
      case "Straße und Hausnummer (Pflichtangabe)":
      case"Street name and house number (mandatory)":
        O.Adresse=t
        break;
      case "Postleitzahl (Pflichtangabe)":
      case"Postal Code (mandatory)":
        O.PCode=t
        break;
      case "Wohnort (Pflichtangabe)":
      case"Location / City name (mandatory)":
        O.City=t
        break;
        

      //Kommunikation
      case "Vorwahl / Rufnummer Festnetz (nur falls verfügbar)":
      case"Area code / phone number landline (only if available)":
        O.Festnetz=t
        break;
      case "Vorwahl / Rufnummer Mobiltelefon (nur falls verfügbar)":
      case"Area code / phone number mobile phone (only if available)":
        O.Mobil=t
        break;
      case "E-Mail-Adresse (Pflichtangabe)":
      case"Email address (mandatory)":
        O.Email=t
        break;


      //Bankverbindung
      case"Name des Kreditinstituts (Pflichtangabe)" :
      case "Name of institute of credit (mandatory)" :
      O.Bankname=t
      break;
      case"IBAN (Pflichtangabe)" :
      case "IBAN (mandatory)" :
      O.iban=t
      break; 
      case"Kontoinhaber (falls abweichend)" :
      case "Account holder (if different)" :
      O.Inhaber=t
      break;





      //Steuer
      
      
      case "Steuer-ID (Pflichtangabe)":
      case"Tax ID (mandatory information)":
        O.SteuerID=t
        break;
      case "Steuerklasse":
      case"Tax class":
        O.Steuerklasse=t
        break;
      case "Anzahl Kinder (Pflichtangabe)":
      case"Number of children (mandatory)":
        O.Kinder=t
        break;
      case "Konfession (Pflichtangabe)":
      case"Denomination (mandatory)":
        O.Konfession=t
        break; 
      
      //Sozialversicherung 
      case "Sozialversicherungsnummer":
      case"Social security number":
        O.SVNummerfeld=t
        break;     
      case "Sozialversicherungsnummer/Rentennummer":
      case"Social security number/pension number":
        O.SVNummerfeld=t
        break;
      case "Staatsangehörigkeit (Pflichtangabe)":
      case"Nationality (mandatory)":
        O.Staatsbuergerschaft=t
        break;
      case "Geburtsdatum":
      case"Birth date":
        O.GBDatum=t
        break;
      
      case "Geburtsort (Pflichtangabe)":
      case"Place of birth (mandatory)":
        O.GBOrt=t
        break;
      case "Geburtsland (Pflichtangabenur falls nicht Deutschland)":
      case"Country of birth (mandatoryonly if not Germany)":
        O.GBLand=t
        break;
      case "Krankenkasse (Pflichtangabe bitte kompletter Name, also zB. AOK NordWest, nicht AOK)":
      case"Health insurance company (mandatory please complete name, e.g. AOK NordWest, not AOK)":
        O.Kassename=t
        break;
      case "  Name Ihrer anderen Arbeitgeber":
      case"  Name of your other employers":
        O.AndereArbeitgeber=t
        break;
      case "Geburtsname (Pflichtangabe, bei abweichendem Nachnamen)":
      case"Birth name (mandatory, if last name is different)":
        O.GBName=t
        break;
      case "Krankenkasse (Bitte kompletter Name)":
      case"Health insurance company (full name please)":
        O.Kassename=t
        break;


        //Minijob Arbeitsstatus

        case "  Bitte hier eintragen":
        case "  Please enter here":
          O.Eintragsonstige=t
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
        case "Vorname (Pflichtangabe)":
        case"First name (mandatory)":
          O.Vname.trim().toString().length>2?settxtvalue(O.Vname.toString()):''
          break;
          case "Nachname (Pflichtangabe)":
          case"Last name (mandatory)":
            O.Nname.trim().toString().length>2?settxtvalue(O.Nname.toString()):''
            break;
        case "Straße und Hausnummer (Pflichtangabe)":
        case"Street name and house number (mandatory)":
          O.Adresse.trim().toString().length>2?settxtvalue(O.Adresse.toString()):''
          break;
        case "Postleitzahl (Pflichtangabe)":
        case"Postal Code (mandatory)":
          O.PCode.length>0?settxtvalue(O.PCode):''
          break;
        case "Wohnort (Pflichtangabe)":
        case"Location / City name (mandatory)":
          O.City.trim().toString().length>2?settxtvalue(O.City.toString()):''
          break;
          
  
        //Kommunikation
        case "Vorwahl / Rufnummer Festnetz (nur falls verfügbar)":
        case"Area code / phone number landline (only if available)":
          O.Festnetz.trim().toString().length>0?settxtvalue(O.Festnetz.toString()):''
          break;
        case "Vorwahl / Rufnummer Mobiltelefon (nur falls verfügbar)":
        case"Area code / phone number mobile phone (only if available)":
          O.Mobil.trim().toString().length>0?settxtvalue(O.Mobil.toString()):''
          break;
        case "E-Mail-Adresse (Pflichtangabe)":
        case"Email address (mandatory)":
          O.Email.trim().toString().length>0?settxtvalue(O.Email.toString()):''
          break;
  
  
        //Bankverbindung
        case"Name des Kreditinstituts (Pflichtangabe)" :
        case "Name of institute of credit (mandatory)" :
        O.Bankname.trim().toString().length>2?settxtvalue(O.Bankname.toString()):''
        break;
        case"IBAN (Pflichtangabe)" :
        case "IBAN (mandatory)" :
        O.iban.trim().toString().length>0?settxtvalue(O.iban.toString()):''
        break; 
        case"Kontoinhaber (falls abweichend)" :
        case "Account holder (if different)" :
        O.Inhaber.toString().length>1?settxtvalue(O.Inhaber.toString()):''
        break;
  
  
  
  
  
        //Steuer
        
        
        case "Steuer-ID (Pflichtangabe)":
        case"Tax ID (mandatory information)":
          O.SteuerID>0?settxtvalue(O.SteuerID):''
          break;
        case "Steuerklasse":
        case"Tax class":
          O.Steuerklasse>0?settxtvalue(O.Steuerklasse):''
          break;
        case "Anzahl Kinder (Pflichtangabe)":
        case"Number of children (mandatory)":
          O.Kinder>0?settxtvalue(O.Kinder):''
          break;
        case "Konfession (Pflichtangabe)":
        case"Denomination (mandatory)":
          O.Konfession.trim().toString().length>0?settxtvalue(O.Konfession.toString()):''
          break; 
        
        //Sozialversicherung 
        case "Sozialversicherungsnummer":
        case"Social security number":
          O.SVNummerfeld>11?settxtvalue(O.SVNummerfeld):''
          break;     
        case "Sozialversicherungsnummer/Rentennummer":
        case"Social security number/pension number":
          O.SVNummerfeld>11?settxtvalue(O.SVNummerfeld):''
          break;
        case "Staatsangehörigkeit (Pflichtangabe)":
        case"Nationality (mandatory)":
          O.Staatsbuergerschaft.trim().toString().length>0?settxtvalue(O.Staatsbuergerschaft.toString()):''
          break;
        case "Geburtsdatum":
        case"Birth date":
          O.GBDatum.trim().toString().length>0?settxtvalue(O.GBDatum.toString()):''
          break;
        
        case "Geburtsort (Pflichtangabe)":
        case"Place of birth (mandatory)":
          O.GBOrt.length>0?settxtvalue(O.GBOrt.toString()):''
          break;
        case "Geburtsland (Pflichtangabe nur falls nicht Deutschland)":
        case"Country of birth (mandatory only if not Germany)":
          O.GBLand.length>0?settxtvalue(O.GBLand):''
          break;
        case "Krankenkasse (Pflichtangabe bitte kompletter Name, also zB. AOK NordWest, nicht AOK)":
        case"Health insurance company (mandatory please complete name, e.g. AOK NordWest, not AOK)":
          O.Kassename.trim().toString().length>0?settxtvalue(O.Kassename.toString()):''
          break;
        case "  Name Ihrer anderen Arbeitgeber":
        case"  Name of your other employers":
          O.AndereArbeitgeber.trim().toString().length>4?settxtvalue(O.AndereArbeitgeber.toString()):''
          break;
          case "Geburtsname (Pflichtangabe, bei abweichendem Nachnamen)":
          case"Birth name (mandatory, if last name is different)":
            O.GBName.trim().toString().length>2?settxtvalue(O.GBName.toString()):''
            break;
          case "Krankenkasse (Bitte kompletter Name)":
          case"Health insurance company (full name please)":
            O.Kassename.trim().toString().length>2?settxtvalue(O.Kassename.toString()):''
            break;
        
            //Minijob Arbeitsstatus

        case "  Bitte hier eintragen":
        case "  Please enter here":
          O.Eintragsonstige.trim().toString().length>0?settxtvalue(O.Eintragsonstige.toString()):''
          break;
      }

    }
   useEffect(()=>{
    lastEingabe()
    console.log(props.BGInfo)
   },[props.BGInfo])
  return ( 
  <View>  
      <LeftIcon P={props.Icon} BGInfo={props.BGInfo}/>
      <TextInput  style={styles(props.BGInfo).StyledInputLabel} onChangeText={text=>textChangeHandler(text)} value={txtvalue}  placeholder={props.Labname} placeholderTextColor={'#f1f5f9'}> 
      </TextInput>  
    </View>
  )
}

export default StyledTextInput

const styles = (t)=>StyleSheet.create({
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
    zIndex:10,
    backgroundColor: t==0?'#6b728090':'#FF000060'
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