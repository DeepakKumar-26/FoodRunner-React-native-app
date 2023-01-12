import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function TextMedium({children,...props}) {
  return <Text {...props} style={[styles.text,{...props}]}>{children}</Text>;
}

const styles = StyleSheet.create({
    text:{
        fontSize:14,
    }
});
