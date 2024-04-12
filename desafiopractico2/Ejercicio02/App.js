import { StyleSheet, Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SistemaSolar from './Screens/SistemaSolar';
import Sol from './Screens/Sol';
import Luna from './Screens/Luna'
export default function App() {
  const Tab = createBottomTabNavigator();

  const TabNavigator = () => (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarInactiveTintColor: "#f48b28",
        tabBarActiveTintColor: "#633204",
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Sistema solar') { 
            iconName = Platform.OS === 'ios' ? 'earth-outline' : 'earth';
          } else if (route.name === 'Sol') { 
            iconName = Platform.OS === 'ios' ? 'sunny-outline' : 'sunny';
          } else if (route.name === 'Luna') { 
            iconName = Platform.OS === 'ios' ? 'moon-outline' : 'moon';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Sistema solar" component={SistemaSolar} />
      <Tab.Screen name="Sol" component={Sol} />
      <Tab.Screen name="Luna" component={Luna} />
    </Tab.Navigator>
  );

  return (
    <NavigationContainer>
      <TabNavigator/>
    </NavigationContainer>
  );
}const styles = StyleSheet.create({
container: {
flex: 1,
justifyContent: 'center',
backgroundColor: '#ecf0f1',
padding: 8,
},
paragraph: {
margin: 24,
fontSize: 18,
fontWeight: 'bold',
textAlign: 'center',
},
});
