import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';  
import Registrierung from './Registrierung';
import { TransactionProvider } from './../../utils/Context';
const RegisterStack=(Prop)=> { 
    const Stack = createStackNavigator();
 
 
 
 
 
  return (
    <TransactionProvider>
    <NavigationContainer>
 
    <Stack.Navigator initialRouteName="Seite1" screenOptions={{headerShown:false, headerMode:'screen', headerTintColor:'white', headerStyle: {backgroundColor:'rgba(0,15,40,0.95)'}}}>
    <Stack.Screen name = "Seite1" component = {Registrierung}  />
   
  </Stack.Navigator>
  </NavigationContainer>
  </TransactionProvider> 
  );
}
export default RegisterStack;