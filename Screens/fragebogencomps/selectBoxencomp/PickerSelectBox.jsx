import {Picker} from '@react-native-picker/picker';
import React, { Fragment, useContext, useState } from 'react';
import {StyleSheet, Text, View } from 'react-native';
import { TransactionContext } from '../../../utils/Context';
import LangOb from '../../../lang/lang';


export default function SelectPicker () {
const [selectedLanguage, setSelectedLanguage] = useState();
const [sprache,setzesprache]=useContext(TransactionContext);

return(<Fragment>
  <Picker dropdownIconColor={"white"}
  selectedValue={selectedLanguage}
  onValueChange={(itemValue, itemIndex) =>
    setSelectedLanguage(itemValue)
  }>
  <Picker.Item color="grey" label="Java" value="java" />
  <Picker.Item color="grey" label="JavaScript" value="js" />
</Picker>
</Fragment>


)};
//** Einbindung der Übersetzungsdatenbanken fehlt noch */


{/**
const pickerRef = useRef();

function open() {
  pickerRef.current.focus();
}

function close() {
  pickerRef.current.blur();
}

return <Picker
  ref={pickerRef}
  selectedValue={selectedLanguage}
  onValueChange={(itemValue, itemIndex) =>
    setSelectedLanguage(itemValue)
  }>
  <Picker.Item label="Java" value="java" />
  <Picker.Item label="JavaScript" value="js" />
</Picker>
*/}