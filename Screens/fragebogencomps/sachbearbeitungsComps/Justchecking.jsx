import React, { Fragment, useContext, useState } from 'react';
import {StyleSheet, Text, View } from 'react-native';
import CheckBox from 'expo-checkbox';
import { Minijobtextdataset } from '../../../Components/Minijobinhaltsvorlagen/Minijobtextdataset';
import { TransactionContext } from '../../../utils/Context';

export default function Justchecking(props) {
  const [checked1, setChecked1] = useState(0)//value abfrage hier
  const [sprache,setzesprache]=useContext(TransactionContext)
  const speicherSteuerdata=(itemValue)=>{
    
    checked1?setChecked1(0):setChecked1(1)
    let O=props?.SV
    switch(props.Bezeichnung){

      case "Alle":
        O.AlleCheck=itemValue
        break;
      case "Betriebsübliche":
        O.Betriebsueblichecheck=itemValue
        break;        
      case "Steuer-ID":
        O.SteuerIDCheck=itemValue
        break;        
      case "Arbeitsvertrag(es besteht grundsätzliche Vertragspflicht seit 2006)":
        O.ArbeitsvertragCheck=itemValue
        break;
      case "Aufenthalts- oder Arbeitserlaubnis bei Nicht-EU/EWR-Personen":
        O.ErlaubnisCheck=itemValue
        break;
      case "Gesundheitszeugnis(bei Mitarbeitern in Lebensmittelverarbeitung und Gesundheitswesen)":
        O.GesundheitsCheck=itemValue
        break;
      case "Kopie der Bankkarte":
        O.BankkarteKopieCheck=itemValue
        break;
      case "Kopie des Personalausweis":
        O.PersoKopieCheck=itemValue
        break;
      case "Krankenversicherung Nachweis von Privatversicherung":
        O.PrivatversichertNachweisCheck=itemValue
        break;
      case "Antrag auf Befreiung von der RV-Pflicht":
        O.RVPBefreiungsantragCheck=itemValue
        break;
      case "Erklärung über weitere Arbeitsverhältnisse(falls nach Seite 1 notwendig)":
        O.AndererHauptjobCheck=itemValue
        break;          
      case "ELStaM-Anmeldung, wenn Steuerklasse 1-4":
        O.ELStAMCheck=itemValue
        break;
       
    }    props.SF(O)
   
   
  }
  
  return( 
        <View style={styles.checkboxContainer}>
        <CheckBox
          value={checked1?true:false}
          onValueChange={(itemValue) => speicherSteuerdata(itemValue)}
          style={styles.checkbox}
          /><Text style={styles.beschreibung}>{props.Bezeichnung}</Text>
          </View >         
            
            
 );   
   

 
}
const styles = StyleSheet.create({
  checkboxBase: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderWidth: 2,
    borderColor: 'grey',
    backgroundColor: 'transparent',
  },
  checkboxChecked: {
    backgroundColor: 'royalblue',
  },
  appContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  appTitle: {
    marginVertical: 16,
    fontWeight: 'bold',
    fontSize: 24,
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginHorizontal: '10%',
    padding:'3%'
  },
  checkboxLabel: {
    marginLeft: 8,
    fontWeight: 500,
    fontSize: 18,
  },
  beschreibung: {
    marginLeft: '3%',
    fontSize: 13,
    color:'#fff'
  },
})