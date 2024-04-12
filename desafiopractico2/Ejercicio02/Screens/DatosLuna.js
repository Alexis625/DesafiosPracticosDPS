import React, { useState, useEffect } from 'react';
import { View, Image,Text, TouchableOpacity, FlatList, StyleSheet,Dimensions } from 'react-native';
const DatosLuna = ({ navigation }) => {
const [luna, setLuna] = useState([]);

useEffect(() => {
fetchMoon();
}, []);
const fetchMoon = async () => {
try {
const response = await
fetch('https://6618caff9a41b1b3dfbdf44a.mockapi.io/elementos/Luna');
const data = await response.json();
setLuna(data);
} catch (error) {
console.error('Error fetching maravillas:', error);
}
};
const renderItem = ({ item }) => (
<TouchableOpacity onPress={() => navigation.navigate('info', { luna:item })}>
<View style={styles.Lista}>
<Image source={{ uri: item.imagen }} style={styles.ImagenM} />
<View style={styles.ListaText}>
<Text style={styles.TextNombre}>{item.pregunta}</Text>
</View>
</View>
</TouchableOpacity>
);
return (
<View style={styles.container}>
<FlatList
data={luna}
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
export default DatosLuna;
