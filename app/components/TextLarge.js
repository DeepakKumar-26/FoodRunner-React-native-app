import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function TextLarge({children,...props}) {
  return <Text style={[styles.text,{...props}]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    fontWeight: '700',
    lineHeight:30,
  },
});
