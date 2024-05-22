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
        case "Vorname":
          return 'Minimum 2 Zeichen lang (Pflichtfeld)'
          case "First name":
            return 'Minimum 2 characters long (required)'
          case "Nachname":
            return 'Minimum 1 Zeichen lang (Pflichtfeld)'
            case "Last name":
            return 'Minimum 1 character long (required)'




        case "Straße und Hausnummer":
          return 'Minimum 2 Zeichen lang (Pflichtfeld). Format (Straße,H-Nr.)'
          case "Street name and house number":
          return 'Minimum 2 characters long (required). Format (Street,H-No.)'

        case "Postleitzahl":
          return 'Exakt 5 Zeichen lang (Pflichtfeld)'
          case "Postal Code":
          return 'Exactly 5 characters long (required)'
        case "Wohnort":
          return 'Minimum 3 Zeichen lang (Pflichtfeld)'
          case "Location / City name":
          return 'Minimum 3 characters long (required)'


         //Kommunikation
      case "Vorwahl / Rufnummer Festnetz (nur falls verfügbar)":
        return 'Festnetznummer'
        case "Area code / phone number landline (only if available)":
        return 'Landline number'

      case "Vorwahl / Rufnummer Mobiltelefon (nur falls verfügbar)":
        return 'Aktuelle Handynummer'
        case "Area code / phone number mobile phone (only if available)":
        return 'Current cell phone number '

      case "E-Mail-Adresse (Pflichtfeld)":
        return 'Bitte geben Sie eine gültige E-Mail-Adresse an (Pflichtfeld)'
        case "Email address (required)":
        return 'Please enter a valid email address (required)'


        //Bankverbindung
      case"Name des Kreditinstituts":
        return 'Bitte geben Sie den Namen Ihrer Bank an (Pflichtfeld)'
        case"Name of institute of credit" :
        return 'Please enter the name of your bank (required)'

      case"IBAN":
        return 'Ihre IBAN besteht aus GENAU 22 Zeichen, stellen Sie außerdem sicher, dass die angegebene IBAN gültig ist (Pflichtfeld)'
        case"IBAN " :
        return 'Your IBAN consists of EXACTLY 22 characters, also make sure that the IBAN provided is valid (required)'

      case"Kontoinhaber (falls abweichend)":
        return 'Name der Person auf die das Bankkonto läuft'
        case"Account holder (if different)" :
        return 'Name of the person in whose name the bank account is held'


        //Steuer
      
      
      case "Steuer-ID (Pflichtangabe)":
        return 'Stellen Sie sicher, dass Sie eine gültige Steuer-ID angeben'
        case"Tax ID (mandatory information)":
        return 'Make sure you provide a valid tax ID'

      case "Steuerklasse":        
        return 'Steuerklassen gehen nur von 1 bis 6 (Pflichtfeld)'
        case "Tax class":        
        return 'Tax classes only range from 1 to 6 (required)'

      case "Anzahl Kinder":
        return 'Wenn Sie keine Kinder haben geben Sie bitte eine 0 ein (Pflichtfeld)'
        case "Number of children":
        return 'If you do not have children please enter 0 (required)'

      case "Konfession":
        return 'Bitte geben Sie Ihre Konfession an (Pflichtfeld)'
        case "Denomination":
        return 'Please enter your denomination (required)'


        //Sozialversicherung 
           
      case "Sozialversicherungsnummer/Rentennummer":
        case "Sozialversicherungsnummer":
        return 'Ihre Rentennummer besteht aus GENAU 12 Zahlen, bitte überprüfen Sie die Gültigkeit der angegebenen Rentennummer (Pflichtfeld)'
        case "Social security number/pension number":
          case "Social security number":
          return 'Your pension number consists of EXACTLY 12 numbers, please check the validity of the pension number provided (required)'
      
        case "Staatsangehörigkeit":
        return 'Bitte geben Sie Ihre Staatsangehörigkeit an (Pflichtfeld)'
        case "Nationality":
        return 'Please enter your nationality (required)'
           
      case "Geburtsort (Pflichtangabe)":
        return 'Bitte geben Sie Ihren Geburtssort an'
        case "Place of birth (mandatory)":
        return 'Please indicate your place of birth'
      case "Geburtsland (nur falls nicht Deutschland)":
        return 'Ihre Angabe muss mindstens 4 Buchstaben enthalten'
        case "Country of birth (only if not Germany)":
        return 'Your entry must contain at least 4 letters'
      case "Krankenkasse (Bitte kompletter Name, also zB. AOK NordWest, nicht AOK)":
        return 'Siehe Feldname'
        case "Health insurance company (please complete name, e.g. AOK NordWest, not AOK)":
        return 'See field name'

        case"Name Ihrer anderen Arbeitgeber":
          return 'Sollten Sie mehr als einen anderen Arbeitgeber haben trennen Sie bitte deren namen mit einem Komma: , '
        case "Name of your other employers":
          return 'If you have more than one other employer, please separate their names with a comma:  , '
      
          case "Krankenkasse (Bitte kompletter Name)":
            return 'Siehe Feldname'

          case"Geburtsname (Pflichtangabe, bei abweichendem Nachnamen)":
          return 'Ändere mich'
          case "Birth name (mandatory, if last name is different)":
            return 'change me'
            case "Health insurance company (full name please)":
        return 'See field name'

            case "Bitte hier eintragen":
              return 'Tragen Sie Ihren Berufsstatus im unteren Feld ein'
        case "Please enter here":
          return 'Enter your professional status in the field below'

          default:
          return 'text'
      }  
  } 
  useEffect(()=>{
  },[text])
  return(
    <View style={{marginTop:20}}>
         
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
