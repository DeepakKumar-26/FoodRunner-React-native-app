import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AppButton from '../components/AppButton';
import Screen from'../components/Screen'
import TextLarge from '../components/TextLarge';


export default function OrderHistory() {
  return (
   <Screen>
<View style={styles.container}>
      <View style={styles.containerHeading}>
        <TextLarge>Your previous orders are listed below</TextLarge>
      </View>
      <View style={{flex:1,flexDirection: 'row',paddingVertical:5,paddingHorizontal:10,justifyContent:'space-between'}}>
        <TextLarge>Baco Indian</TextLarge>
        <TextLarge>Rs. 200</TextLarge>
      </View>
    </View>
   </Screen>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      // backgroundColor:'crimson'
    },
    containerHeading: {
      padding: 10,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderTopWidth:2,
      borderBottomWidth: .5,
      borderColor:'white',

    },
  });
  