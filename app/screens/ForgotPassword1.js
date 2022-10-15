import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import AppButton from '../components/AppButton';
import Input from '../components/Input';
import Screen from '../components/Screen';
import TextMedium from '../components/TextMedium';

export default function ForgotPassword1() {
  return (
    <Screen>
      <View style={styles.container}>
        <Image source={require('../assets/food.png')} style={styles.image} />
        <TextMedium color="crimson">
          Please provide details below registered with us...
        </TextMedium>
        <View style={styles.form}>
          <Input icon="cellphone" placeholder="Mobile Number" />
          <Input icon="email" placeholder="Email" />

          <AppButton title="Next" onPress={() => console.log('Next Page')} />
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  form: {
    margin: 20,
  },
  image: {
    width: 200,
    height: 200,
  },
});
