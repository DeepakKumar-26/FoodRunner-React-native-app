import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Screen from '../components/Screen';

export default function AppButton({title,color, onPress}) {
  return (
      <TouchableOpacity onPress={onPress} >
        <LinearGradient colors={['yellow','yellow']} style={styles.container}>
      <Text style={[styles.text,{color:color}]}>{title}</Text>
    </LinearGradient>
    </TouchableOpacity>
    // '#4D77FF','#9900F0',
  );
}

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white',
        height:50,
        borderRadius:50,
        // marginTop:20
    },
    text:{
        color:'white',
        fontSize:20,
        fontWeight:'700',
    }
});
