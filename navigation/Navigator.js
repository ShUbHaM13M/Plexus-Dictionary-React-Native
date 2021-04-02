import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../pages/Home';
import About from '../pages/About';
import Settings from '../pages/Settings';
import {useTheme} from '../contexts/ThemeContext';

const Drawer = createDrawerNavigator();

const Navigator = props => {
  const {currentTheme} = useTheme();
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerPosition="right"
      drawerContentOptions={{
        activeTintColor: 'black',
      }}
      screenProps={{setModalVisible: props.setModalVisible}}>
      <Drawer.Screen
        name="Home"
        component={Home}
        initialParams={{theme: currentTheme}}
        options={{drawerLabel: 'Home'}}
      />
      <Drawer.Screen
        name="About"
        component={About}
        options={{drawerLabel: 'About'}}
      />
      <Drawer.Screen
        name="Settings"
        component={Settings}
        options={{drawerLabel: 'Settings'}}
      />
    </Drawer.Navigator>
  );
};

export default Navigator;
