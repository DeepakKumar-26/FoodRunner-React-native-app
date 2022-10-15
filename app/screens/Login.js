import React from 'react';
import {Image, StyleSheet, Text, Touchable, View} from 'react-native';
import AppButton from '../components/AppButton';
import Input from '../components/Input';
import Screen from '../components/Screen';
import TextMedium from '../components/TextMedium';

export default function Login({navigation}) {
  return (
    <Screen>
      <View style={styles.container}>
        <Image source={require('../assets/food.png')} style={styles.image} />
        <View style={styles.form}>
          <Input icon="cellphone" placeholder="Mobile Number" />
          <Input icon="lock" placeholder="Password" password={true} />
          <AppButton
            title="Login"
            onPress={() => navigation.navigate('Home')}
          />
        </View>
       
    
          <TextMedium
            color="white"
            onPress={() => navigation.navigate("ForgotPassword1")}>
            Forgot Password ?
          </TextMedium>
       
        <TextMedium color="white" onPress={() => navigation.navigate("Register")}>
          Don't have an account? Signup now
        </TextMedium>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  image: {
    height: 200,
    width: 200,
  },
  form: {
    margin: 20,
    // width:'100%',
  },
});
