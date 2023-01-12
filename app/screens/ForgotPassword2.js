import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import AppButton from '../components/AppButton';
import Input from '../components/Input';
import Screen from '../components/Screen';
import TextMedium from '../components/TextMedium';

export default function ForgotPassword2() {
  return (
    <Screen>
      <View style={styles.container}>
        <Image source={require('../assets/food.png')} style={styles.image} />

        <TextMedium color="white">Enter the received OTP below</TextMedium>
        <View style={styles.form}>
            <Input icon="key" placeholder="OTP"/>
            <Input icon="lock" placeholder="New Password" password={true}/>
            <Input icon="lock" placeholder="Confirm Password" password={true}/>
          <AppButton title="Submit" onPress={()=>console.log("Submit")}/>
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },form:{
margin:20,
  },
  image: {
    height: 200,
    width: 200,
  },
});
