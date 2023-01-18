import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FaqsScreen() {
  return (
    <View>
      <FaqCard
        q="What is this app about ?"
        a="This is a sample food ordering app with minimal functionality for ordering foood online."
      />
      <FaqCard
        q="Is this app available on playstore ?"
        a="This app is not available on playstore as this app is not yet published there."
      />
      <FaqCard
        q="Can I use this app to order food from stores online ?"
        a="This is a dummy app so this can be used only to see how this app works."
      />
    </View>
  );
}

const FaqCard = ({q, a}) => {
  return (
    <View
      style={{
        backgroundColor: '#B9BBDF',
        elevation: 3,
        padding: 10,
        borderRadius: 5,
        margin: 5,
      }}>
      <Text style={{color: 'crimson'}}>Q. {q}</Text>
      <Text style={{color: '#DFF4F3'}}>A. {a}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
