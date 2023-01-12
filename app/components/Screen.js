import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function Welcome({children,...props}) {
  return (
    <LinearGradient
     style={[styles.container,{...props}]} 
     colors={['#E1FFB1', '#9EB23B']}
     start={{x:0,y:0}}
     end={{x:1,y:0}}
     >
      {children}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
 
});
