import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Datos from './DatosSol';
import Info from './infoSol';
const Stack = createStackNavigator();
const Sol = () => {
return (
<Stack.Navigator initialRouteName="Datos">
<Stack.Screen name="Datos" component={Datos} options={{
headerShown: false }} />
<Stack.Screen name="info" component={Info} options={{
headerShown: false }} />
</Stack.Navigator>
);
};
export default Sol;
