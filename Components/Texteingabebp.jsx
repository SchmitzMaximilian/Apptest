import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const Eingabefeld = () => {
  const [text, setText] = useState('');

  const handleInputChange = (input) => {
    setText(input);
  }

  

  return (
    <View>
      <TextInput
        style={{ height: 40,width :'89%', borderColor: 'black', borderBottomWidth: 1 }}
        onChangeText={handleInputChange}
        value={text}
      />
      
    </View>
  );
}

export default Eingabefeld;