import { View, StyleSheet,Text, Button, Image, ScrollView } from
'react-native';
import React from 'react';
const infoSol = ({ route, navigation }) => {
const { sol } = route.params;
console.log(sol);
return (
<ScrollView>
<View style={styles.container}>
<Text style={styles.heading}>{sol.nombre}</Text>
<Image source={{ uri: sol.imagen }} style={styles.imagen} />
<Text style={styles.tipTitle}>{sol.pregunta}</Text>
<Text>{sol.info}</Text>
<Button
title="Volver"
onPress={() => navigation.goBack()}
/>
</View>
</ScrollView>
);
};
const styles = StyleSheet.create({
container: {
flex: 1,
padding: 20,
backgroundColor: '#fff',
},
heading: {
fontSize: 24,
fontWeight: 'bold',
marginBottom: 20,
textAlign: 'center',
},
tipContainer: {
marginBottom: 20,
},
tipTitle: {
fontSize: 18,
fontWeight: 'bold',
marginBottom: 10,
},
tip: {
fontSize: 16,
marginBottom: 5,
},
imagen: {
width: '100%',
aspectRatio: 2,
resizeMode: 'cover', 
borderColor:'#000000'
},
});
export default infoSol;


