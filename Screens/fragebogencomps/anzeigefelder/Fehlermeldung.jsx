import { StyleSheet, Text, View } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import { Textdataset } from '../../../utils/Textdataset';
import { TransactionContext } from '../../../utils/Context';

export default function Fehlermeldung(props){
  const [sprache,setzesprache]=useContext(TransactionContext) 
  

    switch(props.FN){
      case 1:
        return(<>

          <View style={styles.fehlermeldung}>
            <Text style={{color:'#fff'}}>{Textdataset(sprache?"DE":"EN").Fehler.Vorname}</Text></View>
            
            
            </>);
      case 2:
        return(<>
          <View style={styles.fehlermeldung}>
          <Text style={{color:'#fff'}}>{Textdataset(sprache?"DE":"EN").Fehler.Nachname}</Text>
          </View>  

          </>);
      case 3:
       return(<>
            <View style={styles.fehlermeldung}>
            <Text style={{color:'#fff'}}>{Textdataset(sprache?"DE":"EN").Fehler.Straße}</Text>
            </View>  
  
            </>);
      case 4:
      return(<>
           <View style={styles.fehlermeldung}>
           <Text style={{color:'#fff'}}>{Textdataset(sprache?"DE":"EN").Fehler.PLZ}</Text>
           </View>       
         
           </>);
      case 5:
        return(<>
             <View style={styles.fehlermeldung}>
             <Text style={{color:'#fff'}}>{Textdataset(sprache?"DE":"EN").Fehler.Wohnort}</Text>
             </View>       
   
             </>);

    }
  }


  



const styles = StyleSheet.create({
  fehlermeldung:{padding: 10,
    paddingHorizontal:15,
    borderWidth:1,
    width:'80%',
    alignSelf:'center',
    borderColor: '#9d174d',
    borderRadius:6,
    marginTop: 20,
    marginVertical:15,
    flexDirection: 'column',
    alignItems: 'flex-start',
    backgroundColor: '#db2777',
  },


})