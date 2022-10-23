import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import TopTabBarNavigation from './src/navigation/topTabBarNavigation';

const App = () => {
  return (
    <NavigationContainer>
      <TopTabBarNavigation />
    </NavigationContainer>
  );
};

export default App;