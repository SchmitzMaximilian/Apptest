import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'; 
import Seite2 from '../Screens/Seite2'; 
import SeiteMinijob from '../Screens/SeiteMinijob';
import FESTPERSONALFB from '../Screens/FESTPERSONALFB';
import LoginScreen from '../Screens/LoginScreen';
import LoginScreenMini from '../Screens/LoginScreenMini';
import SeiteBewerberauswahl from '../Screens/SeiteBewerberauswahl';
import SeiteSachbearbeitungMinijob from '../Screens/SeiteSachbearbeitungMinijob';
import { TransactionProvider } from '../utils/Context';
import { ErfolgscheckProvider } from '../Screens/pages/functions/contextErfolgscheck';
import { FehlercheckProvider } from '../Screens/pages/functions/contextFehlercheck';
import { FehlerTextProvider } from '../Screens/pages/functions/contextFehlertext';
import { MitarbeiteridProvider } from '../Screens/pages/functions/contextMitarbeiterid'; 
import Registrierung from '../Screens/registrierung/Registrierung';
import LoginScreenAdminApp from '../Screens/LoginScreenAdminApp';
import App from '../App';
 
const Navbar=(Prop)=> { 
    const Stack = createStackNavigator();
 
 
 
 
 
  return (
    <TransactionProvider>
    <MitarbeiteridProvider>
    <ErfolgscheckProvider>
    <FehlercheckProvider> 
    <FehlerTextProvider>
    <NavigationContainer>
 
    <Stack.Navigator initialRouteName="FESTPERSONALFB" screenOptions={{headerShown:false, headerMode:'screen', headerTintColor:'white', headerStyle: {backgroundColor:'rgba(0,15,40,0.95)'}}}>
    <Stack.Screen name = "Startadmin"                   component = {Registrierung}  />
    <Stack.Screen name = "LoginScreen"                  component = {LoginScreen} options={{headerShown:false}} />
    <Stack.Screen name = "AdminApp"                     component = {LoginScreenAdminApp} options={{headerShown:false}} />
    <Stack.Screen name = "LoginScreenMini"              component = {LoginScreenMini} options={{headerShown:false}} />
    <Stack.Screen name = "Seite2"                       component = {Seite2} options={{headerShown:false}}/> 
    <Stack.Screen name = "FESTPERSONALFB"                    component = {FESTPERSONALFB} options={{headerShown:false}} />
    <Stack.Screen name = "SeiteMinijob"                 component = {SeiteMinijob} options={{headerShown:false}} />
    <Stack.Screen name = "SeiteBewerberauswahl"         component = {SeiteBewerberauswahl} options={{headerShown:false}} />
    <Stack.Screen name = "SeiteSachbearbeitungMinijob"  component = {SeiteSachbearbeitungMinijob} options={{headerShown:false}} />

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