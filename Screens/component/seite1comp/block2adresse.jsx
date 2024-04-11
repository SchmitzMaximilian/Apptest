import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import React,{useContext} from 'react';
import Eingabefeld from '../../../Components/Texteingabebp';
import LANG from '../../../lang/lang';
import { TransactionContext } from '../../../utils/Context';

export default function Block2adresse(){
  const [sprache,setzesprache]=useContext(TransactionContext) 
  return(<>

  <Eingabefeld/>
  <Text style={styles.Datenanfrage}>{sprache?LANG.Adresse.Haus.De:LANG.Adresse.Haus.EN}</Text>

  <View style={styles.GeteilteReihe}>
  <TextInput
        style={{ height: 40,width :'30%', borderColor: '#fff', borderBottomWidth: 1 ,}}
        
      /><TextInput
      style={{ height: 40,width :'58%', borderColor: '#fff', borderBottomWidth: 1 ,marginHorizontal: 10}}
      
    />
  </View>


  <View style={styles.GeteilteReihe2}>
  <Text style={styles.Datenanfrage}>{sprache?LANG.Adresse.PLZ.De:LANG.Adresse.PLZ.EN}</Text><Text style={styles.Datenanfrage2 }>{sprache?LANG.Adresse.Ort.De:LANG.Adresse.Ort.EN}</Text> 
   </View>
  </>
  )
};


const styles = StyleSheet.create({

  Überschrift: {
    width: '90%',
        backgroundColor: '#d3d3d3',
    borderWidth: 1,
    textAlign: 'center',
    
  },
  Datenanfrage: {fontSize: 10,paddingLeft: '1%',color:'#fff',
        
  },
  Datenanfrage2: {fontSize: 10,paddingLeft: '23%',color:'#fff',
        
  },
  GeteilteReihe:{flexDirection:"row",
  width: '100%'
    
 },
 GeteilteReihe2:{flexDirection:"row",
 width:'100%'
  
 },


});