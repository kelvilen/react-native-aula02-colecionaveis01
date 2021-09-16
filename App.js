import 'react-native-gesture-hardler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Inicial from './src/view/Inicial/Inicial';
import colecao from './src/view/colecao/colecao';
import Item from './src/view/Item/Item';

const Stack = createStackNavigator();
export default function app(){
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.screen name='Inicial' component={Inicial} />
      <Stack.screen name='colecao' component={colecao} />
      <Stack.screen name='Item' component={colecao} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
