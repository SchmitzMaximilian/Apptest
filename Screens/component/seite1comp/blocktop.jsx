import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import React, { useContext } from 'react';
import LANG from '../../../lang/lang';
import { TransactionContext } from '../../../utils/Context'; 
import {Octicons,Ionicons} from '@expo/vector-icons';
export default function Blocktop() {
  const [sprache,setzesprache]=useContext(TransactionContext) 
  
   
  return( 
    <View style={styles.Row}>
    <Octicons style={{}} name={'id-badge'} size={50} color={'#FFF'} />
  <Text style={styles.Titel}  >{
  sprache?LANG.Blocktop.Ueberschrift.De:LANG.Blocktop.Ueberschrift.EN}
  </Text>  
  </View>
  
)
};

const styles = StyleSheet.create({
  Row:{
    flex:1,
    flexDirection:'row',
    marginHorizontal:'10%',
    backgroundColor:'rgba(0,0,0,0.6)',
    borderRadius:8,
    padding:15
  },
  Titel:{
    fontSize:32,
    textTransform:'uppercase',
    textShadowColor:'#000',
    textShadowRadius:1, 
    marginLeft: 25,
    textShadowOffset:{width:1,height:1},
    color:'#FFF',
  }
});