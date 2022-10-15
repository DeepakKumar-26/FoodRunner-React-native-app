import React from 'react'
import { Image,StyleSheet, Text, View } from 'react-native'
import Screen from '../components/Screen'
import TextLarge from '../components/TextLarge'


export default function MyProfile() {
  return (
  <Screen>
<View style={styles.container}>
   
<Image source={require('../assets/user.png')} style={{height:200,width:200,marginVertical:40}}/>
<TextLarge>Deepak Kumar</TextLarge>
<TextLarge>+919131884866</TextLarge>
<TextLarge>painkra2@gmail.com</TextLarge>
<TextLarge>Raipur Chhattisgarh India</TextLarge>
</View>
  </Screen>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    }
})