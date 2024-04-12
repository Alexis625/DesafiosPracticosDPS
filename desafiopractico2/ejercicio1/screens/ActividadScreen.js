import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Modal, Button, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const ActividadScreen = () => {
  const [actividades, setActividades] = useState([]); 
  const [modalVisible, setModalVisible] = useState(false); 
  const [nuevaActividad, setNuevaActividad] = useState({
    nombre: '',
    lugar: '',
    descripcion: '',
    fechaEntrega: new Date(),
  }); 
  const [editingIndex, setEditingIndex] = useState(-1);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleDateConfirm = (date) => {
    hideDatePicker();
    setNuevaActividad({...nuevaActividad, fechaEntrega: date});
  };

  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const handleTimeConfirm = (time) => {
    hideTimePicker();
    const newDate = new Date(nuevaActividad.fechaEntrega);
    newDate.setHours(time.getHours());
    newDate.setMinutes(time.getMinutes());
    setNuevaActividad({...nuevaActividad, fechaEntrega: newDate});
  };

  const agregarActividad = () => {
    if (nuevaActividad.nombre && nuevaActividad.lugar && nuevaActividad.descripcion && nuevaActividad.fechaEntrega) {
      if (editingIndex === -1) {
        setActividades([...actividades, nuevaActividad]);
      } else {
        const updatedActividades = [...actividades];
        updatedActividades[editingIndex] = nuevaActividad;
        setActividades(updatedActividades);
        setEditingIndex(-1);
      }
      setModalVisible(false);
      setNuevaActividad({
        nombre: '',
        lugar: '',
        descripcion: '',
        fechaEntrega: new Date(),
      });
    } else {
      alert('Por favor completa todos los campos');
    }
  }

  const editarActividad = (index) => {
    setModalVisible(true);
    setEditingIndex(index);
    setNuevaActividad(actividades[index]);
  }

  const eliminarActividad = (index) => {
    const nuevasActividades = [...actividades];
    nuevasActividades.splice(index, 1);
    setActividades(nuevasActividades);
  }

  const clasificarActividades = (actividad) => {
    const hoy = new Date();
    const fechaEntrega = new Date(actividad.fechaEntrega);

    if (fechaEntrega.toDateString() === hoy.toDateString()) {
      return 'green';
    } else if (fechaEntrega < hoy) {
      return 'red';
    } else {
      return 'blue';
    }
  }

  const renderItem = ({ item, index }) => (
    <View style={[styles.actividadItem, { borderColor: clasificarActividades(item) }]}>
      <TouchableOpacity onPress={() => editarActividad(index)}>
        <Text style={styles.actividadNombre}>{item.nombre}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => editarActividad(index)}>
        <AntDesign name="edit" size={24} color="blue" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => eliminarActividad(index)}>
        <AntDesign name="delete" size={24} color="red" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleDateConfirm}
        onCancel={hideDatePicker}
      />
      <DateTimePickerModal
        isVisible={isTimePickerVisible}
        mode="time"
        onConfirm={handleTimeConfirm}
        onCancel={hideTimePicker}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
          setEditingIndex(-1);
          setNuevaActividad({
            nombre: '',
            lugar: '',
            descripcion: '',
            fechaEntrega: new Date(),
          });
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TextInput
              placeholder="Nombre de la actividad"
              style={styles.input}
              value={nuevaActividad.nombre}
              onChangeText={(text) => setNuevaActividad({...nuevaActividad, nombre: text})}
            />
            <TextInput
              placeholder="Lugar  de  la   actividad"
              style={styles.input}
              value={nuevaActividad.lugar}
              onChangeText={(text) => setNuevaActividad({...nuevaActividad, lugar: text})}
            />
            <TextInput
              placeholder="Descripción de actividad"
              style={styles.input}
              value={nuevaActividad.descripcion}
              onChangeText={(text) => setNuevaActividad({...nuevaActividad, descripcion: text})}
            />
            <TouchableOpacity onPress={showDatePicker}>
              <Text style={styles.input}>{nuevaActividad.fechaEntrega.toDateString()}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={showTimePicker}>
              <Text style={styles.input}>{nuevaActividad.fechaEntrega.toLocaleTimeString()}</Text>
            </TouchableOpacity>
            <View style={styles.modalButtons}>
              <Button title="Cancelar" onPress={() => {setModalVisible(false); setEditingIndex(-1); setNuevaActividad({
                nombre: '',
                lugar: '',
                descripcion: '',
                fechaEntrega: new Date(),
              })}} />
              <Button title="Agregar" onPress={agregarActividad} />
            </View>
          </View>
        </View>
      </Modal>
      {actividades.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text>No hay registros de actividades.</Text>
        </View>
      ) : (
        <FlatList
          data={actividades}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
      <TouchableOpacity style={styles.floatingButton} onPress={() => {setEditingIndex(-1); setModalVisible(true);}}>
        <AntDesign name="plus" size={32} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actividadItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
  },
  actividadNombre: {
    fontSize: 18,
  },
  floatingButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: 'blue',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 60,
  },
  modalContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
  backgroundColor: 'white',
  paddingVertical: 50, 
  paddingHorizontal: 50, 
  borderRadius: 10,
  elevation: 5,
},
input: {
  borderWidth: 2,
  borderColor: '#ddd',
  borderRadius: 5,
  padding: 20, 
  marginBottom: 20, 
  width: '100%',
},
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
    marginTop: 10,
  },
});

export default ActividadScreen;