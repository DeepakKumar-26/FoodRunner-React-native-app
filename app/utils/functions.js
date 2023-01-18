import AsyncStorage from '@react-native-async-storage/async-storage';

export const addToFav = async item => {
  let jsonValue = [];
  const response = await AsyncStorage.getItem('FavouriteRestorants');
  if (response !== null) {
    jsonValue = JSON.parse(response);
    const isItemIncluded = jsonValue.some(i => i.id === item.id);

    if (isItemIncluded) {
      console.log('Item is included');
      const updatedFavList = jsonValue.filter(i => i.id !== item.id);
      await AsyncStorage.setItem(
        'FavouriteRestorants',
        JSON.stringify([...updatedFavList]),
      );
    } else {
      console.log('Item is not included');
      await AsyncStorage.setItem(
        'FavouriteRestorants',
        JSON.stringify([...jsonValue, item]),
      );
    }
  } else {
    await AsyncStorage.setItem('FavouriteRestorants', JSON.stringify([item]));
  }
};

export const removeFromFav = async item => {
  let jsonValue = [];
  const response = await AsyncStorage.getItem('FavouriteRestorants');
  if (response !== null) {
    jsonValue = JSON.parse(response);

    const newFavList = jsonValue.filter(i => i.id !== item.id);
    await AsyncStorage.setItem(
      'FavouriteRestorants',
      JSON.stringify([...newFavList]),
    );
  }
};
