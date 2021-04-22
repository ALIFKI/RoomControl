import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Alert } from 'react-native'
import Style from './style'
import {RNCamera} from 'react-native-camera';
import { RNHoleView } from 'react-native-hole-view';

export default class CameraScreen extends Component {
    constructor(props){
        super(props)
        this.state = {
            takingPic : ''
        }
    }
    takePicture = async () => {
    if (this.camera && !this.state.takingPic) {

      let options = {
        quality: 1,
        fixOrientation: true,
        forceUpOrientation: true,
      };

      this.setState({takingPic: true});

      try {
         const data = await this.camera.takePictureAsync(options);
         console.log(data)
         Alert.alert('Success', JSON.stringify(data));
      } catch (err) {
        Alert.alert('Error', 'Failed to take picture: ' + (err.message || err));
        return;
      } finally {
        this.setState({takingPic: false});
      }
    }
    }
    render() {
        return (
            <>
                <RNCamera 
                    ref={ref => {
                        this.camera = ref;
                    }}
                    captureAudio={false}
                    style={{flex: 1}}
                    type={RNCamera.Constants.Type.front}
                    androidCameraPermissionOptions={{
                        title: 'Permission to use camera',
                        message: 'We need your permission to use your camera',
                        buttonPositive: 'Ok',
                        buttonNegative: 'Cancel',
                    }} />
                {/* <View style={Style.overlay}>
                </View> */}
                    <RNHoleView
                        style={{ position: 'absolute', width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.4)' }}
                        holes={[{ x: 35, y: 350, width: 290, height: 190, borderRadius: 10 }]}>
                    </RNHoleView>
                    <RNHoleView
                        style={{ position: 'absolute', width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.4)' }}
                        holes={[{ x: 80, y: 90, width: 200, height: 200, borderRadius: 100 }]}>
                    </RNHoleView>
                    {/* <View style={Style.buttonCapture}> */}
                        <TouchableOpacity style={Style.btn} onPress={(e)=>this.takePicture()}>
                            <View style={Style.circleInner}>

                            </View>
                        </TouchableOpacity>
                    {/* </View> */}
            </>

        )
    }
}
