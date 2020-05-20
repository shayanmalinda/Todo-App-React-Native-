import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, Alert, TouchableWithoutFeedback, Keyboard, } from 'react-native';

import Home from './screens/home';

// const getFonts = () => {
//   return Font.loadAsync({
//     'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf')
//   })
// }

export default function () {
  return (
    <Home></Home>
  );
};

const styles = StyleSheet.create({

  custom: {
    fontFamily: 'Nunito.Regular',
    fontSize: 32
  }
});

