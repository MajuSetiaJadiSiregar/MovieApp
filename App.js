import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Movie from './src/view/Movie';
import Tv from './src/view/Tv';

const Tab = createMaterialTopTabNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="movie" component={Movie} />
        <Tab.Screen name="tv" component={Tv} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;