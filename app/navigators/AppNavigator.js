import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DrawerNavigator from './DrawerNavigator';
import RestaurantDetails from '../screens/RestaurantDetails';
import SuccessScreen from '../screens/SuccessScreen';
import Cart from '../screens/Cart';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const options = {
  headerBackground: NavHeader,
  headerShadowVisible: true,
  // headerTintColor: '#B980F0',
};

export default AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={DrawerNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Restaurant Details"
          component={RestaurantDetails}
          options={options}
        />
        <Stack.Screen name="My Cart" component={Cart} options={options} />
        <Stack.Screen
          name="Success"
          component={SuccessScreen}
          options={options}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
