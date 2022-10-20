import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import SampleList from './Home';
const Stack = createStackNavigator();         
const screenBarOptions = {
    headerShown: false
};
const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
         screenOptions={screenBarOptions}>
        <Stack.Screen
          name="SampleList"
          headerShown={false}
          component={SampleList}

/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default RootNavigator;