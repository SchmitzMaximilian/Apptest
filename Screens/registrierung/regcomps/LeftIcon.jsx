import React from "react";
import { View,StyleSheet } from "react-native";
import {Octicons, Ionicons,FontAwesome5} from '@expo/vector-icons';


const LeftIcon = (props) => {
  console.log(props.P)
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
    left: 90, top: 55,
    position:'absolute',
    zindex:0},


});
export default LeftIcon
