import React, { Component } from 'react'
import { Text, View, Switch, Animated } from 'react-native'
import Style from './style'
import IonIcon from 'react-native-vector-icons/Ionicons'
import ToggleSwitch from 'toggle-switch-react-native'
// import Animated, { set,Easing } from 'react-native-reanimated'
import {TapGestureHandler,State} from 'react-native-gesture-handler'

// const {Value,event,block,eq,cond,startClock,stopClock,debug,timing,clockRunning,Clock} = Animated;
const MyAnimatedIcon = Animated.createAnimatedComponent(IonIcon)

export default class CardControl extends Component {
    constructor(props){
        super(props)

        this.state = {
            isEnable : false
        }
    }
    toggleView = () => {
        Animated.timing(this.animated, {
            toValue: this.state.isEnable ? 0 : 1,
            duration: 300,
            useNativeDriver: false,
        }).start();
    };
    animated = new Animated.Value(1)
    bgColor =  this.animated.interpolate({
        inputRange: [0, 1],
        outputRange:[this.props.color, 'rgb(255, 255, 255)']
      })
    textColor = this.animated.interpolate({
        inputRange : [0,1],
        outputRange : ['#FFF','#131313']
    })
    render() {
        return (
            <Animated.View style={[Style.card,{backgroundColor : this.bgColor}]}>
                <View style={Style.iconView}>
                    <MyAnimatedIcon name={this.props.icon} size={40} style={{color:this.textColor}}/>
                </View>
                <View>
                    <Animated.Text style={[Style.deviceTxt],{color: this.textColor}}>
                        {this.props.text}
                    </Animated.Text>
                </View>

                <ToggleSwitch
                    isOn={this.state.isEnable}
                    onColor="rgba(255, 255, 255,0.5)"
                    offColor="#131313"
                    size="medium"
                    onToggle={(e)=>{this.setState({isEnable : e},this.toggleView)}}
                    />
            </Animated.View>
        )
    }
}
