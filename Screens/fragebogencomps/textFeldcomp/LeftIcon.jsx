import React from "react";
import { View,StyleSheet } from "react-native";
import {Octicons,Ionicons} from '@expo/vector-icons';


const LeftIcon = (props) => { 
  let Icon;
  switch(props.P.toString()){
    case "User":
      Icon='person'
      break;
    case "Pass":
      Icon='lock'
      break;
    case "Company":
      Icon='organization'
      break;
    case "Address":
      Icon='location'
      break;
    case "Mail":
      Icon='mail'
      break;
    case "Bank":
      Icon='credit-card'
      break;
    case "Dropdown":
      Icon='multi-select'
      break;
    case "Krankenversicherung":
      Icon='organization'
      break;
    case "Steuer":
      Icon='checklist'
      break;
      case "Sachbearbeitung":
        Icon='file'
        break;
    default:
      Icon='lock'
      break;
  }
  return (
    <View style={styles.LeftIcon}>
      <Octicons  name={Icon} size={25} color={'#7a7c7f'} />
    </View>
  )
}
const styles = StyleSheet.create({
  LeftIcon : {
    left: 90,
    top: 28,    
    position:'absolute',    
    zindex:0,
  },


});
export default LeftIcon
