import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { NavigationContainer, useNavigation } from '@react-navigation/native';


const Drawer = createDrawerNavigator();

const DrawerContent = () => {
  const navigation = useNavigation();

  const CerrarSesion = () => {
    navigation.closeDrawer(); 
  }

  return (
    <DrawerContentScrollView>
      <DrawerItem label="Cerrar Sesión" onPress={CerrarSesion} />
    </DrawerContentScrollView>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" drawerContent={props => <DrawerContent {...props} />} />
    </NavigationContainer>
  );
}

export default App;
