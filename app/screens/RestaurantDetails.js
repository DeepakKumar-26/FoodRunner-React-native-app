import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import TextLarge from '../components/TextLarge';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import RestaurantMenuItem from '../components/RestaurantMenuItem';
import AppButton from '../components/AppButton';

export default function RestaurantDetails({navigation}) {
  const [fav, setFav] = useState(false);

  const addToFav = () => {
    setFav(!fav);
  };
  return (
    <View style={styles.container}>
      <View style={styles.containerHeading}>
        <TextLarge>Choose from menu listed below</TextLarge>
        <Icon
          onPress={addToFav}
          name={fav ? 'heart' : 'heart-outline'}
          size={25}
          color="crimson"
        />
      </View>
      <View style={{flex:1,}}>
        <RestaurantMenuItem />
        <RestaurantMenuItem />
        <RestaurantMenuItem />
      </View>

      <View style={{padding: 10,}}>
        <AppButton title="Proceed to Cart" onPress={()=>navigation.navigate("My Cart")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#E3FCBF'
  },
  containerHeading: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopWidth: 2,
    borderBottomWidth:.5,
borderTopColor:'white',
// borderBottomColor:'white',
  },
});
