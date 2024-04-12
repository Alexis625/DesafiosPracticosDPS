import React, { useState, useEffect } from 'react';
import { View, Image,Text, TouchableOpacity, FlatList, StyleSheet,
Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const DatosSistemaSolar = ({ navigation }) => {
  const [sistema, setSistema] = useState([]);
useEffect(() => {
    fetchSistema();
  }, []);

const fetchSistema = async () => {try {
const response = await
fetch('https://66173115ed6b8fa43482235e.mockapi.io/system');
const data = await response.json();
setSistema(data);
} catch (error) {
console.error('Error fetching solar system:', error);
}
};
const renderItem = ({ item }) => (
<TouchableOpacity style={styles.countryCard} onPress={() =>
navigation.navigate('info', { sistema: item })}>
<View style={styles.countryInfo}>
<Image source={{ uri: item.imagen }} style={styles.flagImage} />
<Text style={styles.countryName}>{item.nombre}</Text>
</View>
</TouchableOpacity>
);
return (
<View style={styles.container}>
<FlatList
data={sistema}
renderItem={renderItem}
keyExtractor={(item) => item.planeta}
contentContainerStyle={styles.countryList}
numColumns={2} // Muestra dos países por fila
/>
</View>
);
};
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#fff',
},
countryList: {
padding: 10,
},
countryCard: {
width: windowWidth / 2 - 15,
margin: 5,
borderRadius: 8,
borderWidth: 1,
borderColor: '#ddd',
overflow: 'hidden',
},
countryInfo: {
justifyContent: 'center',
alignItems: 'center',
padding: 10,
},
flagImage: {
width: '100%',
aspectRatio: 2,
resizeMode: 'cover', 
},
countryName: {
fontSize: 16,
fontWeight: 'bold',
marginTop: 10,
},
});
export default DatosSistemaSolar;