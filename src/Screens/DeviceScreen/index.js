import React, { Component } from 'react'
import { Text, View, ScrollView } from 'react-native'
import style from './style'
import IonIcon from 'react-native-vector-icons/Ionicons'
import LinearGradient from 'react-native-linear-gradient'

export default class DeviceScreen extends Component {
    render() {
        return (
            <LinearGradient start={{x: 0, y: 0}} end={{x: 0, y: 1}} colors={['rgba(192, 172, 220,0.2)', 'rgba(92, 5, 216,0.5)']} style={{ flex:1,flexDirection : 'row'}}>
            <ScrollView style={style.content}>
                <View style={style.header}>
                    <IonIcon name="arrow-back-outline" size={30} style={style.headerIcon}/>
                    <View style={style.headerTitle}>
                        <Text style={style.headerTxt} > Device </Text>
                    </View>
                </View>
                <View style={style.contentControll}>
                </View>

            </ScrollView>
            </LinearGradient>
        )
    }
}

