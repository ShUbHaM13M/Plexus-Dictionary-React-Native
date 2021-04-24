import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import Home from '../pages/Home';
import About from '../pages/About';
import Settings from '../pages/Settings';
import {useTheme} from '../contexts/ThemeContext';
import {useFont} from '../contexts/FontContext';

const Drawer = createDrawerNavigator();

const Navigator = () => {
  const {currentTheme} = useTheme();
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      backBehavior="firstRoute"
      drawerPosition="right"
      keyboardDismissMode="on-drag"
      drawerStyle={{
        width: '80%',
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}
      drawerContentOptions={{
        contentContainerStyle: {
          flex: 1,
          backgroundColor: currentTheme?.value.backgroundColor,
        },
      }}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="About" component={About} />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
};

function CustomDrawerContent(props) {
  const {navigation, state} = props;
  const {currentTheme} = useTheme();
  const {currentFont} = useFont();

  const currentRouteIndex = state.index;

  const container = {
    backgroundColor: currentTheme?.value?.backgroundColor,
    flex: 1,
    paddingTop: 60,
  };

  const textStyles = {
    fontFamily: currentFont?.value.font,
    textAlign: 'center',
    fontSize: 18,
    color: currentTheme?.value.text,
  };

  const itemStyles = {
    minHeight: 70,
    marginHorizontal: 20,
    justifyContent: 'center',
    marginVertical: 10,
    borderRadius: 0,
    borderWidth: 1,
    borderColor: currentTheme?.value?.borderColor,
  };

  const selectedRoute = {
    backgroundColor: currentTheme?.value?.accent,
  };

  return (
    <DrawerContentScrollView {...props}>
      <View style={container}>
        {state.routeNames.map((route, index) => (
          <TouchableOpacity
            key={index}
            style={[
              itemStyles,
              currentRouteIndex === index ? selectedRoute : '',
            ]}
            onPress={() => navigation.navigate(route)}>
            <Text style={textStyles}>{route}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </DrawerContentScrollView>
  );
}

export default Navigator;
