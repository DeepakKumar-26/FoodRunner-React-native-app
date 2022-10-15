import React from 'react'
import { View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default NavHeader = () => {
    return (
        <View style={{flex:1,elevation:3,shadowColor:'white'}}>
      <LinearGradient colors={['#E1FFB1', '#9EB23B']}
      start={{x:0,y:0}}
      end={{x:1,y:0}}
      style={{flex:1,}}
      />
      </View>
    );
  };