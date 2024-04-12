import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { CommonActions } from '@react-navigation/native'; 
import COLORS from '../constants/colors';
import ActividadScreen from './ActividadScreen';

const Home = ({ navigation }) => {
    return (
        <LinearGradient
            style={{
                flex: 1
            }}
            colors={[COLORS.secondary, COLORS.primary]}
        >
            <View style={{ flex: 1 }}>
                <View>
                    <Image
                        source={require("../assets/Natural.png")}
                        style={{
                            height: 200,
                            width: 200,
                            borderRadius: 20,
                            position: "absolute",
                            top: 110,
                            left: 80,
                        }}
                    />
                </View>
                
                <View style={{
                    paddingHorizontal: 22,
                    position: "absolute",
                    top: 325,
                    width: "100%"
                }}>
                    <Text style={{
                        fontSize: 50,
                        fontWeight: '800',
                        textAlign: 'center',
                        color: COLORS.white
                    }}>Bienvenido/a</Text>
                    <Text style={{
                        fontSize: 46,
                        fontWeight: '800',
                        textAlign: 'center',
                        color: COLORS.white
                    }}>Recorda Task</Text>
                    <Text style={{
                        top: 50,
                        fontSize: 46,
                        fontWeight: '800',
                        textAlign: 'center',
                        color: COLORS.secondary
                    }}>¿Qué deseas hacer?</Text>

                </View>

                <TouchableOpacity onPress={() => navigation.openDrawer()} style={{
                    position: 'absolute',
                    top: 20,
                    left: 20
                }}>
                </TouchableOpacity>
                
            </View>
        </LinearGradient>
    );
}

const CerrarSesion = (props) => {
  props.navigation.dispatch(CommonActions.reset({
    index: 0,
    routes: [{ name: 'Login' }] 
  }));
}

const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem label="Agregar Actividad" onPress={() => props.navigation.navigate('Actividad')}/>
      <DrawerItem label="Cerrar Sesión" onPress={() => CerrarSesion(props)} />
    </DrawerContentScrollView>
  );
}

const HomeWithDrawerNavigation = () => {
  return (
    <Drawer.Navigator initialRouteName="Home" drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Actividad" component={ActividadScreen} />
    </Drawer.Navigator>
  );
}

export default HomeWithDrawerNavigation;
