import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import TextLarge from './TextLarge';

export default function AddButton() {
  const[addToCart,setAddToCart] = useState(false)

  const handleAddToCart = ()=>{
    setAddToCart(!addToCart)

  }
  return (
    <TouchableOpacity onPress={handleAddToCart} style={[styles.button,{backgroundColor:(!addToCart)?'#B1B2FF':'#EC7272'}]}>
      <TextLarge>{(!addToCart)?'Add':'Remove'}</TextLarge>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width:100,
    backgroundColor: '#E1FFB1',
    paddingVertical: 5,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:5,
  },
});
