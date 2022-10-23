import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Movie from "../view/Movie";
import DetailMovie from "../view/DetailMovie";
import Tv from "../view/Tv";
import DetailTv from "../view/DetailTv";

const Stack = createNativeStackNavigator();



const MovieStackNavigation = () => {
   return (
      <Stack.Navigator>
         <Stack.Screen  name="movieaf" component={Movie} options={{headerShown : false}}/>
         <Stack.Screen name="detail" component={DetailMovie} options={{headerShown : false}} />
      </Stack.Navigator>
   );
};

const TvStackNavigation = () => {
   return (
      <Stack.Navigator>
         <Stack.Screen name="tv" component={Tv} options={{headerShown : false}}/>
         <Stack.Screen name="detailTv" component={DetailTv} options={{headerShown : false}}/>
      </Stack.Navigator>
   );
};

export {MovieStackNavigation, TvStackNavigation};