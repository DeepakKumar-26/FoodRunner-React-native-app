import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ForgotPassword1 from '../screens/ForgotPassword1';
import ForgotPassword2 from '../screens/ForgotPassword2';
import Login from '../screens/Login';
import Registration from '../screens/Registration';

const Stack = createNativeStackNavigator();


export default AuthNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Registration} />
        <Stack.Screen name="ForgotPassword1" component={ForgotPassword1} />
        <Stack.Screen name="ForgotPassword2" component={ForgotPassword2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
