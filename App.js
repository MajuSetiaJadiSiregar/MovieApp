import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import { Text, View } from 'react-native';
import {readMovie} from './src/features/movieSlice';

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(readMovie());
  },[dispatch])
  return (
    <View>
      <Text>maju</Text>
    </View>
  );
};

export default App;