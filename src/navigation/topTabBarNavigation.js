import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import { MovieStackNavigation, TvStackNavigation } from './stackNavigation';

const Tab = createMaterialTopTabNavigator();

const TopTabBarNavigation = () => {
   return (
      <Tab.Navigator>
         <Tab.Screen name='movies' component={MovieStackNavigation} />
         <Tab.Screen name='tv popular' component={TvStackNavigation} />
      </Tab.Navigator>
   );
};

export default TopTabBarNavigation;

