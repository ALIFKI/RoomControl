import React, { Component } from 'react';
import { Text, View, ScrollView, Switch, } from 'react-native';
import Style from './style';
import LinearGradient from 'react-native-linear-gradient';
import IonIcon from 'react-native-vector-icons/Ionicons';
import CardControl from '../../Components/CardComponent';
import { TouchableOpacity } from 'react-native-gesture-handler';
export class HomeScreen extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
    isEnable : true
    }
  }

  onChange = ()=>{
    if(this.state.isEnable == true){
      this.setState({
        isEnable : false
      })
    }
    else{
      this.setState({
        isEnable: true
      })
    }
  }
  onClick = ()=>{
    this.props.navigation.navigate('Device')
  }  

  render() {    
    return (
    <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['rgba(194, 179, 212,0)', '#C4B4D3']} style={{ flex:1,flexDirection : 'row'}}>
      <ScrollView style={Style.content}>
          <View style={Style.header}>
            <Text style={Style.username}> Hello, User </Text>
          </View>
          <View style={Style.cardControl}>
            <View style={Style.titleHeader}>
              <View>
              <Text style={Style.countDevice}>A total of 4 Device</Text>
              <Text style={Style.room}>Living Room</Text>
              </View>
              <View>
              <IonIcon name='ellipsis-horizontal-outline' size={30} color={'#838383'}></IonIcon>
              </View>
            </View>
              <View style={Style.mainCard}>
                <CardControl
                icon='hardware-chip-outline'
                text='Smart Air Conditioner'
                routeTo='Device'
                color='#5A06DB'  
                />
                <CardControl
                icon='tv-outline'
                text='Smart LED Vision'
                routeTo='Camera'
                color='#D31521'  
                />
                <CardControl
                icon='game-controller-outline'
                text='Smart Game Console'
                routeTo='Device'
                color='#3C3B3F'  
                />
                <CardControl
                icon='headset-outline'
                routeTo='Device'
                text='Smart Music Player'
                color='#f5af19'  
                />
              </View>
          </View>
      </ScrollView>
    </LinearGradient>
    );
  }
}

export default HomeScreen;
