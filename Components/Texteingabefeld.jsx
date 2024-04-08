import React, {useState} from "react";
import {Text, TextInput, View} from 'react-native';


class Texteingabe extends Component {
  state = { } 
  render() { 
    return (<View style={{padding: 10}}> 
    <TextInput 
    style = {{height: 40}}
    placeholder= "Ich bin ein Texteingabefeld"
    onChangeText={newText => setText(newText)}
    defaultValue={Text}
    />
    <Text style= {{padding: 10, fontSize: 42}}>

    </Text>
    </View>);
  }
}
 
export default Texteingabe;