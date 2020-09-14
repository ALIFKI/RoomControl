import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { API_URL } from '@env';
export class HomeScreen extends Component {
  render() {
    return (
      <View>
        <Text style={{ fontFamily: 'Poppins-Bold' }}> Home </Text>
      </View>
    );
  }
}

export default HomeScreen;
