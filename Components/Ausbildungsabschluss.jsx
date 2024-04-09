import React, {useState} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import CheckBox from 'expo-checkbox';

const AusbildungsCheck = () => {
  const [Checkbox1, setCheckbox1] = useState(0);
   

  

  return (
    <View style={styles.container}>
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={Checkbox1==1?true:false}
          onValueChange={() => setCheckbox1(1)}
          style={styles.checkbox}
          />
        <Text style={styles.label}>Ohne berufliche Ausbildungsabschluss</Text>
      </View><View style={styles.checkboxContainer}>
        <CheckBox
          value={Checkbox1==2?true:false}
          onValueChange={() => setCheckbox1(2)}
          style={styles.checkbox}
          />
        <Text style={styles.label}>Abschluss einer anerkannten Berufsausbildung</Text>
      </View>
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={Checkbox1==3?true:false}
          onValueChange={() => setCheckbox1(3)}
          style={styles.checkbox}
          />
        <Text style={styles.label}>Meister-/Techniker- oder gleichwertige Fachschulabschluss</Text>
      </View>
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={Checkbox1==4?true:false}
          onValueChange={() => setCheckbox1(4)}
          style={styles.checkbox}
          />
        <Text style={styles.label}>Bachlor</Text>
      </View>
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={Checkbox1==5?true:false}
          onValueChange={() => setCheckbox1(5)}
          style={styles.checkbox}
          />
        <Text style={styles.label}>Diplom/Magister/Master/Staatsexamen</Text>
      </View>
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={Checkbox1==6?true:false}
          onValueChange={() => setCheckbox1(6)}
          style={styles.checkbox}
          />
        <Text style={styles.label}>Promotion</Text>
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

export default AusbildungsCheck;