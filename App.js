import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import CarsList from './components/CarsList';

export default function App() {
	return (
		<View style={styles.container}>
			<Header />
			<CarsList />
			<StatusBar style='auto' content />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
