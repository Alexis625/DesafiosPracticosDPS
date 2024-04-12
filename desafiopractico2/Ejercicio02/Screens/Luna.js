import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Datos from './DatosLuna';
import Info from './infoLuna';
const Stack = createStackNavigator();
const Luna = () => {
return (
<Stack.Navigator initialRouteName="Dato">
<Stack.Screen name="Dato" component={Datos} options={{
headerShown: false }} />
<Stack.Screen name="info" component={Info} options={{
headerShown: false }} />
</Stack.Navigator>
);
};
export default Luna;
