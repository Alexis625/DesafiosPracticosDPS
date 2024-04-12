import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Datos from './DatosSistemaSolar';
import Info from './infoSistemaSolar';
const Stack = createStackNavigator();
const SistemaSolar = () => {
return (
<Stack.Navigator initialRouteName="Paises">
<Stack.Screen name="Datos" component={Datos} options={{
headerShown: false }} />
<Stack.Screen name="info" component={Info} options={{
headerShown: false }} />
</Stack.Navigator>
);
};
export default SistemaSolar;