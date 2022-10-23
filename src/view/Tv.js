import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { View, ScrollView, StyleSheet } from 'react-native';
import { readTv, tvSelectors} from '../features/tvSlice';
import CardComponent from '../component/CardComponent';

const Tv = () => {
  const dispatch = useDispatch();
  const tvS = useSelector(tvSelectors.selectAll);
  
  useEffect(() => {
    dispatch(readTv())
  }, [dispatch]);


   return (
      <ScrollView>
        <View style={styles.container}>
          {
            tvS.map((tv) => {
              return <CardComponent key={tv.id} title={tv.original_name} overview={tv.overview} image={tv.poster_path}/>
            })
          }
        </View>
      </ScrollView>
    );
};

const styles = StyleSheet.create({
  container : {
    backgroundColor : '#121212',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  }
});

export default Tv;