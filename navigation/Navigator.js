import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import Home from '../pages/Home';
import About from '../pages/About';
import {useModal} from '../contexts/SettingModalContext';

const Drawer = createDrawerNavigator();

const Navigator = props => {
  const {setShowModal} = useModal();
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerPosition="right"
      drawerContent={items => {
        const pros = {setShowModal, ...items};
        return <DrawerContent {...pros} />;
      }}
      drawerContentOptions={{
        activeTintColor: 'black',
      }}
      screenProps={{setModalVisible: props.setModalVisible}}>
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

const DrawerContent = props => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Settings"
        labelStyle={{
          textAlign: 'center',
        }}
        style={{
          justifyContent: 'center',
        }}
        onPress={() => props.setShowModal(true)}
      />
    </DrawerContentScrollView>
  );
};

export default Navigator;
