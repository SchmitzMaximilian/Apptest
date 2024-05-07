import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Fragebogen from '../Screens/pages/Festfragebogen'
import Seite1 from '../Screens/Seite1';
import Seite2 from '../Screens/Seite2';
import Seite3 from '../Screens/Seite3';
import Seite4 from '../Screens/Seite4';
import Seite5 from '../Screens/Seite5';
import SeiteTest from '../Screens/SeiteTest';
import LoginScreen from '../Screens/LoginScreen';
import { TransactionProvider } from '../utils/Context';
import { ErfolgscheckProvider } from '../Screens/pages/functions/contextErfolgscheck';
import { FehlercheckProvider } from '../Screens/pages/functions/contextFehlercheck';
import { FehlerTextProvider } from '../Screens/pages/functions/contextFehlertext';
import { MitarbeiteridProvider } from '../Screens/pages/functions/contextMitarbeiterid';
 
const Navbar=(Prop)=> { 
    const Stack = createStackNavigator();
 
 
 
 
 
  return (
    <TransactionProvider>
    <MitarbeiteridProvider>
    <ErfolgscheckProvider>
    <FehlercheckProvider>
    <FehlerTextProvider>
    <NavigationContainer>
 
    <Stack.Navigator initialRouteName="Seite1" screenOptions={{headerShown:false, headerMode:'screen', headerTintColor:'white', headerStyle: {backgroundColor:'rgba(0,15,40,0.95)'}}}>
    <Stack.Screen name = "Seite1" component = {Seite1} Prop={Prop} />
    <Stack.Screen name = "LoginScreen" component = {LoginScreen} options={{headerShown:false}} />
    <Stack.Screen name = "Seite2" component = {Seite2} options={{headerShown:false}}/>
    <Stack.Screen name = "Seite3" component = {Seite3} options={{headerShown:false}} />
    <Stack.Screen name = "Seite4" component = {Seite4} options={{headerShown:false}} />
    <Stack.Screen name = "Seite5" component = {Seite5} options={{headerShown:false}} />
    <Stack.Screen name = "SeiteTest" component = {SeiteTest} options={{headerShown:false}} />


  </Stack.Navigator>
  </NavigationContainer>
  </FehlerTextProvider>
  </FehlercheckProvider>
  </ErfolgscheckProvider>
  </MitarbeiteridProvider>
  </TransactionProvider> 
  );
}
export default Navbar;