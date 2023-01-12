import React from 'react';
import {Text, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import AllRestaurants from '../screens/AllRestaurants';
import FavoriteRestaurants from '../screens/FavoriteRestaurants';
import MyProfile from '../screens/MyProfile';
import OrderHistory from '../screens/OrderHistory';
import FaqsScreen from '../screens/FaqsScreen';
import Logout from '../screens/LogoutScreen';
import LinearGradient from 'react-native-linear-gradient';
import NavHeader from '../components/NavHeader';

const Drawer = createDrawerNavigator();

const options = {
  headerBackground: NavHeader,
  headerShadowVisible: true,
};

export default DrawerNavigator = () => {
  return (
    <Drawer.Navigator screenOptions={options}>
      <Drawer.Screen name="All Restaurants" component={AllRestaurants} />
      <Drawer.Screen name="Profile" component={MyProfile} />
      <Drawer.Screen
        name="Favorite Restaurants"
        component={FavoriteRestaurants}
      />
      <Drawer.Screen name="Order History" component={OrderHistory} />
      <Drawer.Screen name="FAQs" component={FaqsScreen} />
      <Drawer.Screen name="Logout" component={Logout} />
    </Drawer.Navigator>
  );
};
