import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';  
import Registrierung from './Registrierung'; 
import { TransactionProvider } from './../../utils/Context';
import { Button } from 'react-native';
const RegisterStack=(Prop)=> { 
    const Stack = createStackNavigator();
 
 
 
 //headerShow von true auf false gewechselt
 
  return (
    <TransactionProvider>
    <NavigationContainer >
      
    <Stack.Navigator initialRouteName="Seite1"  screenOptions={{headerShown:false, headerMode:'screen', headerTintColor:'white', headerStyle: {backgroundColor:'rgba(0,15,40,0.95)'}}}>
    <Stack.Screen name = "Seite1" component = {Registrierung} options={{headerBackTitle: 'Custom Back',
      headerBackTitleStyle: { fontSize: 30 }}}  />
   
  </Stack.Navigator>
  </NavigationContainer>
  </TransactionProvider> 
  );
}
export default RegisterStack;