import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import Home from '../pages/Home';
import About from '../pages/About';

const Drawer = createDrawerNavigator();

const Navigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerPosition="right"
      drawerContent={DrawerContent}
      drawerContentOptions={{
        activeTintColor: 'black',
      }}>
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{drawerLabel: 'Home'}}
      />
      <Drawer.Screen
        name="About"
        component={About}
        options={{drawerLabel: 'About'}}
      />
    </Drawer.Navigator>
  );
};

const DrawerContent = props => (
  <DrawerContentScrollView {...props}>
    <DrawerItemList {...props} />
    <DrawerItem
      label="home"
      labelStyle={{
        textAlign: 'center'
      }}
      style={{
        justifyContent: 'center',
      }}
      onPress={() => props.navigation.navigate('About')}
    />
    <DrawerItem label="home" />
  </DrawerContentScrollView>
);

export default Navigator;
