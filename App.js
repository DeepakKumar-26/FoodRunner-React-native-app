import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

import Welcome from './app/screens/Welcome';
import Login from './app/screens/Login';
import Registration from './app/screens/Registration';
import ForgotPassword1 from './app/screens/ForgotPassword1';
import ForgotPassword2 from './app/screens/ForgotPassword2';
import Cart from './app/screens/Cart';
import AllRestaurants from './app/screens/AllRestaurants';
import RestaurantDetails from './app/screens/RestaurantDetails';
import CardRestaurants from './app/components/CardRestaurants';
import SuccessScreen from './app/screens/SuccessScreen';
import MyProfile from './app/screens/MyProfile';
import FavoriteRestaurants from './app/screens/FavoriteRestaurants';
import OrderHistory from './app/screens/OrderHistory';
import Logout from './app/screens/LogoutScreen';

import AuthNavigator from './app/navigators/AuthNavigator';
import DrawerNavigator from './app/navigators/DrawerNavigator';
import AppNavigator from './app/navigators/AppNavigator';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();


export default function App() {
  const [logout, setLogout] = useState(false);

  return (

     (logout)?<AuthNavigator/>:<AppNavigator/>
  );
}


