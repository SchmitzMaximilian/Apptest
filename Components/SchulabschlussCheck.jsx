import React, {useState} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import CheckBox from 'expo-checkbox';

const SchulCheck = () => {
  const [Checkbox1, setCheckbox1] = useState(0);
   

  

  return (
    <View style={styles.container}>
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={Checkbox1==1?true:false}
          onValueChange={() => setCheckbox1(1)}
          style={styles.checkbox}
          />
        <Text style={styles.label}>Ohne Schulabschluss</Text>
      </View>
            <View style={styles.checkboxContainer}>
        <CheckBox
          
          value={Checkbox1==2?true:false}
          onValueChange={() => setCheckbox1(2)}
          style={styles.checkbox}
          />
        <Text style={styles.label}>Haupt-/Volksschulabschluss</Text>
      </View>
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={Checkbox1==3?true:false}
          
          onValueChange={() => setCheckbox1(3)}
          style={styles.checkbox}
          />
        <Text style={styles.label}>Mittlere Reife oder gleichwertiger Abschluss</Text>
      </View>
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={Checkbox1==4?true:false}
        
        onValueChange={() => setCheckbox1(4)}
        style={styles.checkbox}
        />
        <Text style={styles.label}>Abitur/Fachabitur</Text>
      </View>
      </View>
  );
};

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

export default SchulCheck;

