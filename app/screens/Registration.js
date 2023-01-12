import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AppButton from '../components/AppButton';
import Input from '../components/Input';
import Screen from '../components/Screen';

export default function Registration({navigation}) {
  return (
    <Screen>
      <View style={styles.form}>
        <Input placeholder="Name" icon='account'  />
        <Input placeholder="Email Address" icon='email'  />
        <Input placeholder="Mobile Number" icon='cellphone'  />
        <Input placeholder="Delivery Address" icon='map-marker' />
        <Input placeholder="Password (min 4 characters)" icon='lock' password={true} />
        <Input placeholder="Confirm Password" icon='lock' password={true} />

        <AppButton title="Register" onPress={()=>navigation.navigate("Home")}/>
      </View>


    </Screen>
  );
}

const styles = StyleSheet.create({
    form:{
        margin:20
    }
});
