import { useEffect, useState } from 'react';
import {View,StyleSheet,Text} from 'react-native' ;
import StyledTextInput from './StyledTextInput'; 
import StyledInputLabel from './StyledInputLabel';
/**
 * Texteingabefeld
 * @param {*} listener usestate  
 * @param {*} setter usestate setter
 * @param {*} placeholder text 
 * @param {*} style style
 * @returns 
 */
export const EingabeFeld=(props)=>{
  const [text,settext]=useState('')
  
  const returninfo=()=>{
      switch(props.Labname){
        
        //Name und Anschrift
        case "Vorname"||"Firstname":
          return 'Minimum 2 Zeichen lang (Pflichtfeld)'
          case "Nachname"||"Surname":
            return 'Minimum 1 Zeichen lang (Pflichtfeld)'
        case "Straße und Hausnummer"||"Street name and house number":
          return 'Minimum 2 Zeichen lang (Pflichtfeld). Format (Straße,H-Nr.)'
        case "Postleitzahl"||"Postal Code":
          return 'Exakt 5 Zeichen lang (Pflichtfeld)'
        case "Wohnort"||"Location/City name":
          return 'Minimum 3 Zeichen lang (Pflichtfeld)'


         //Kommunikation
      case "Vorwahl / Rufnummer Festnetz (nur falls verfügbar)"||"Area code / phone number landline (only if available)":
        return 'Festnetznummer'
      case "Vorwahl / Rufnummer Mobiltelefon (nur falls verfügbar)"||"Area code / phone number mobile phone (only if available)":
        return 'Aktuelle Handynummer'
      case "E-Mail-Adresse (nur falls verfügbar)"||"Email address (only if available)":
        return 'Bitte geben Sie eine gültige E-Mail-Adresse an (Pflichtfeld)'


        //Bankverbindung
      case"Name des Kreditinstituts" || "Name of institute of credit" :
        return 'Bitte geben Sie den Namen Ihrer Bank an (Pflichtfeld)'
      case"IBAN" || "IBAN" :
        return 'Ihre IBAN besteht aus GENAU 22 Zeichen, stellen Sie außerdem sicher, dass die angegebene IBAN gültig ist (Pflichtfeld)' 
      case"Kontoinhaber (falls abweichend)" || "Account holder (if different)" :
        return 'Name der Person auf die das Bankkonto läuft'


        //Steuer
      
      
      case "Steuer-ID (Pflichtangabe)"||"Tax ID (mandatory information)":
        return 'Stellen Sie sicher, dass Sie eine gültige Steuer-ID angeben'
      case "Steuerklasse"||"Tax class":
        return 'Steuerklassen gehen nur von 1 bis 6 (Pflichtfeld)'
      case "Anzahl Kinder"||"Number of children":
        return 'Wenn Sie keine Kinder haben geben Sie bitte eine 0 ein (Pflichtfeld)'
      case "Konfession"||"Denomination":
        return 'Bitte geben Sie Ihre Konfession an (Pflichtfeld)'


        //Sozialversicherung 
           
      case "Sozialversicherungsnummer/Rentennummer"||"Social security number/pension number":
        return 'Ihre Rentennummer besteht aus GENAU 12 Zahlen, bitte überprüfen Sie die Gültigkeit der angegebenen Rentennummer (Pflichtfeld)'
      case "Staatsangehörigkeit"||"Nationality":
        return 'Bitte geben Sie Ihre Staatsangehörigkeit an (Pflichtfeld)'
           
      case "Geburtsort (Pflichtangabe)"||"Place of birth (mandatory)":
        return 'Bitte geben Sie Ihren Geburtssort an'
      case "Geburtsland (nur falls nicht Deutschland)"||"Country of birth (only if not Germany)":
        return 'Ihre Angabe muss mindstens 4 Buchstaben enthalten'
      case "Krankenkasse (Bitte kompletter Name, also zB. AOK NordWest, nicht AOK)"||"Health insurance company (please complete name, e.g. AOK NordWest, not AOK)":
        return 'Siehe Feldname'
      


          default:
          return 'text'
      }  
  } 
  useEffect(()=>{
  },[text])
  return(
    <View style={{marginTop:20}}>
         <Text style={styles.info}>{returninfo(props.Labname)}</Text>
        <StyledInputLabel P={props.Labname}>Label</StyledInputLabel>
        <StyledTextInput BGInfo={props.BGInfo} {...props}  SV={props.SV} SF={props.SF} />
    </View>
  )
}
const styles = StyleSheet.create({
  info:{
    color: '#fff',
    marginHorizontal: '5%',

  },
  eingabe:{
    padding: 10,
    paddingHorizontal:15,
    borderWidth:2,
    width:'80%',
    alignSelf:'center',
    borderColor: '#475569',
    borderRadius:6,
    marginVertical:15,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    backgroundColor: '#334155',
    color:'#f8fafc',
    
  },


});
