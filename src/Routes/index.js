import React, {Component} from 'react';
import {Text, View, Dimensions} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen';
import DeviceScreen from '../Screens/DeviceScreen';
import { navigationRef } from './RootNavigation';
import CameraScreen from '../Screens/CameraScreen';

const Stack = createStackNavigator();
export default class Route extends Component {
  render() {
    return (
      <>
        <NavigationContainer ref={navigationRef}>
          <Stack.Navigator>
            <Stack.Screen
              name={'home'}
              component={HomeScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name={'Device'}
              component={DeviceScreen}
              options={
                {
                  headerShown : false,
                  headerStyle : {
                      elevation: 0,
                      shadowOpacity: 0,
                      borderBottomWidth: 0,
                  },
                  headerTitleAlign : 'center',
                  title : 'Smart AC'
                }
              }/>
              <Stack.Screen
              name={'Camera'}
              component={CameraScreen}
              options={
                {
                  headerShown : false,
                  headerStyle : {
                      elevation: 0,
                      shadowOpacity: 0,
                      borderBottomWidth: 0,
                  },
                  headerTitleAlign : 'center',
                  title : 'Smart AC'
                }
              }/>
          </Stack.Navigator>
        </NavigationContainer>
      </>
    );
  }
}
