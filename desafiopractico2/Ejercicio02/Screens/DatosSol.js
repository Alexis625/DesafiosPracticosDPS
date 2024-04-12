import React, { useState, useEffect } from 'react';
import { View, Image,Text, TouchableOpacity, FlatList, StyleSheet,Dimensions } from 'react-native';
const DatosSol = ({ navigation }) => {
const [sol, setSol] = useState([]);

useEffect(() => {
fetchSun();
}, []);
const fetchSun = async () => {
try {
const response = await
fetch('https://661783d4ed6b8fa43482d6d9.mockapi.io/elementos/desafio2');
const data = await response.json();
setSol(data);
} catch (error) {
console.error('Error fetching Sun:', error);
}
};
const renderItem = ({ item }) => (
<TouchableOpacity onPress={() => navigation.navigate('info', { sol:item })}>
<View style={styles.Lista}>
<Image source={{ uri: item.imagen }} style={styles.ImagenM} />
<View style={styles.ListaText}>
<Text style={styles.TextNombre}>{item.pregunta}</Text>
<Text style={styles.TextPais}>no lo voy a usar</Text>
</View>
</View>
</TouchableOpacity>
);
return (
<View style={styles.container}>
<FlatList
data={sol}
renderItem={renderItem}
keyExtractor={(item) => item.id}
contentContainerStyle={styles.countryList}
/>
</View>
);
};
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#fff',
},
ImagenM:{
width: 100,
height: 50,
marginRight: 10
},
Lista: {
flexDirection: 'row',
alignItems: 'center',
padding: 10,
borderBlockEndColor:"#000000"
},
ListaText:{
alignItems: 'left',
padding: 10
},
TextNombre:{
fontSize:20,
},
TextPais:{
fontSize:15,
color:'gray'
}
});
export default DatosSol;