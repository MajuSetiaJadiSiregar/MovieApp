import React from "react";
import { StyleSheet } from 'react-native';
import {Card, Button , Title ,Paragraph } from 'react-native-paper';
import {dotString} from '../helper';

const CardComponent = (props) => {
	
	return(
	<Card style={Styles.container}>

		<Card.Content>
			<Title>{props.title}</Title>
		</Card.Content>

		<Card.Cover source={{ uri: `https://image.tmdb.org/t/p/original${props.image}`}} />

		<Card.Content>
			<Paragraph>{dotString(props.overview)}</Paragraph>
		</Card.Content>

		<Card.Actions>
			<Button>Detail</Button>
		</Card.Actions>

	</Card>
		
	)
}
export default CardComponent;

const Styles = StyleSheet.create({
	container :{
		width : '90%',
		alignContent:'center',
		marginTop : 12
	}
})
