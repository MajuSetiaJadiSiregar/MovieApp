import React, {useState, useEffect} from 'react';
import axios from "axios";
import { StyleSheet, View } from 'react-native';
import {Card, Title ,Paragraph, Text } from 'react-native-paper';


const DetailMovie = ({route, navigation}) => {
   const [movie, setMovie] = useState({});
   const {id} = route.params;

   const readDetail = async () => {
      try {
         const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=84648c1d2dece9e696e82e12c46b738e&language=en-US`);
         setMovie(res.data);
         console.log(res.data);
      } catch (error) {
         console.log(error);
      }
   }
   useEffect(() => {
      readDetail()
   },[]);

   const ratingCompleted = (rating) => {
      console.log("Rating is: " + rating)
   }


   return (
      <View>
         <Card>

            <Card.Content>
               <Title>{movie.title}</Title>
            </Card.Content>

            <Card.Cover source={{ uri: `https://image.tmdb.org/t/p/original${movie.poster_path}`}} />

            <Card.Content>
               <Paragraph>Overview : {movie.overview}</Paragraph>
            </Card.Content>

            <Card.Content>
               <Paragraph>Overview : {movie.overview}</Paragraph>
            </Card.Content>
         </Card>

         <Card>
            <Card.Content>
               <Paragraph>Bahasa : {movie.original_language}</Paragraph>
            </Card.Content>

            <Card.Content>
               <Paragraph>#{movie.tagline}</Paragraph>
            </Card.Content>
         </Card>
      </View>
   );
};

const Styles = StyleSheet.create({
   container : {
      marginLeft : 4,
      marginRight : 4
   }
});

export default DetailMovie;