import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { View, ScrollView, StyleSheet } from 'react-native';
import { movieSelectors, readMovie, detailMovie } from '../features/movieSlice';
import CardComponent from '../component/CardComponent';

const Movie = ({navigation}) => {
    const dispatch = useDispatch();
    const movies = useSelector(movieSelectors.selectAll);
    
    useEffect(() => {
      dispatch(readMovie())
    }, [dispatch]);

    const moveDetail = (id) => {
      navigation.navigate('detail', {id : id});
    }

    return (
      <ScrollView>
        <View style={styles.container}>
          {
            movies.map((movie) => {
              return <CardComponent 
                  key={movie.id}
                  id = {movie.id} 
                  title={movie.title} 
                  overview={movie.overview} 
                  image={movie.poster_path}
                  onClick = {() => moveDetail(movie.id)}
                />
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

export default Movie;