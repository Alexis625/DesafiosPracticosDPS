import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';

const infoSistemaSolar = ({ route, navigation }) => {
  const { sistema } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Detalles del Sistema Solar</Text>
      <View style={styles.detailsContainer}>
        <Image source={{ uri: sistema.imagen }} style={styles.flagImage} />
        <Text>
          <Text style={styles.label}>Planeta: </Text>
          {sistema.nombre}
        </Text>
        <Text>
          <Text style={styles.label}>Tipo: </Text>
          {sistema.tipo}
        </Text>
        <Text>
          <Text style={styles.label}>Masa: </Text>
          {sistema.masa}
        </Text>
        <Text>
          <Text style={styles.label}>Radio:</Text>
          {sistema.radio}
        </Text>
        <Text>
          <Text style={styles.label}>Distancia del Sol:</Text>
          {sistema.distanciasol}
        </Text>
        <Text>
          <Text style={styles.label}>Orbita:</Text>
          {sistema.orbita}
        </Text>
        <Text>
          <Text style={styles.label}>Rotacion: </Text>
          {sistema.rotacion}
        </Text>
        <Text>
          <Text style={styles.label}>Lunas: </Text>
          {sistema.luna}
        </Text>
        <Text>
          <Text style={styles.label}>Descripcion: </Text>
          {sistema.descripcion} 
        </Text>
      </View>
      <Button
        title="Volver"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  detailsContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 20,
    width: '80%',
  },
  label: {
    fontWeight: 'bold',
  },
  flagImage: {
    width: '100%',
    aspectRatio: 2,
    resizeMode: 'cover',
    borderColor: '#000000',
  },
});

export default infoSistemaSolar;
