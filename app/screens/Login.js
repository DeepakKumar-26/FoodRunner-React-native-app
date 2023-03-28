import React, {useState} from 'react';
import {Image, StyleSheet, Text, Touchable, View} from 'react-native';
import AppButton from '../components/AppButton';
import Input from '../components/Input';
import Screen from '../components/Screen';
import TextMedium from '../components/TextMedium';
import Axios from '../utils/axios'

export default function Login({navigation}) {
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await Axios.post('login/fetch_result/', {
        mobile_number: mobile,
        password: password,
      });

      console.log(response);
    } catch (error) {
      console.log('Error ', error);
    }
  };

  return (
    <Screen>
      <View style={styles.container}>
        <Image source={require('../assets/food.png')} style={styles.image} />
        <View style={styles.form}>
          <Input
            icon="cellphone"
            placeholder="Mobile Number"
            onChangeText={input => setMobile(input)}
          />
          <Input
            icon="lock"
            placeholder="Password"
            password={true}
            onChangeText={input => setPassword(input)}
          />

          {mobile.length == 10 && password.length >= 4 && (
            <AppButton
              title="Login"
              onPress={handleLogin}
              // onPress={() => navigation.navigate('Home')}
            />
          )}
        </View>

        <TextMedium
          color="white"
          onPress={() => navigation.navigate('ForgotPassword1')}>
          Forgot Password ?
        </TextMedium>

        <TextMedium
          color="white"
          onPress={() => navigation.navigate('Register')}>
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
