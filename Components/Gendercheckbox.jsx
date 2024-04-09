import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import CheckBox from 'expo-checkbox';

export default function GenderCheck() {
  const [checked1, setChecked1] = useState(0);
  
  


  return (<><View style={{flexDirection:"row"}}>
        <CheckBox
          value={checked1==1?true:false}
          onValueChange={() => setChecked1(1)}
          style={styles.checkbox}
          />    
      <Text>weiblich</Text></View>
      <View style={{flexDirection:"row"}}>
        <CheckBox
          value={checked1==2?true:false}
          onValueChange={() => setChecked1(2)}
          style={styles.checkbox}
          />    
      <Text>männlich</Text></View>
      <View style={{flexDirection:"row"}}>
        <CheckBox
          value={checked1==3?true:false}
          onValueChange={() => setChecked1(3)}
          style={styles.checkbox}
          />    
      <Text>divers</Text></View>
      <View style={{flexDirection:"row"}}>
        <CheckBox
          value={checked1==4?true:false}
          onValueChange={() => setChecked1(4)}
          style={styles.checkbox}
          />    
      <Text>unbestimmt</Text></View>
    
   </>
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
    alignItems: 'center',
  },
  checkboxLabel: {
    marginLeft: 8,
    fontWeight: 500,
    fontSize: 18,
  },
});
