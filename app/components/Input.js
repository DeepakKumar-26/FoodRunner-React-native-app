import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Input({icon, password, ...props}) {
  const [secureTextEntry, setSecureTextEntry] = useState(password);
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
    setSecureTextEntry(!secureTextEntry);
  };

  return (
    <View style={styles.container}>
      <Icon name={icon} size={30} color={'#B6E388'} style={styles.icon} />
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholderTextColor="#B6E388"
        {...props}
        style={styles.input}
      />
      {password && (
        <Icon
          onPress={handleShowPassword}
          name={showPassword ? 'eye-off' : 'eye'}
          size={20}
          color={'#B6E388'}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    borderRadius: 99,
    paddingHorizontal: 10,
    overflow: 'hidden',
    elevation:10,
    shadowColor:'#FCFFB2',
    marginVertical:5,
    width:'100%',
  },
  icon: {
    marginRight: 5,
  },
  input: {
    // backgroundColor:'red',
    flex: 1,
    color: '#B6E388',
  },
});
