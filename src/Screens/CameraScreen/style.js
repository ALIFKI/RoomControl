import { StyleSheet } from 'react-native'


const Style = StyleSheet.create({
    overlay : {
        flex : 1,
        position : 'absolute',
        backgroundColor : 'black',
        top: 0,
        bottom : 0,
        left : 0,
        right : 0,
        opacity : 0.3

    },
    buttonCapture : {
        flex : 1,
        width : '100%',
        justifyContent : 'center',
        alignItems : 'center'
    },
    btn : {
        display : 'flex',
        position : 'absolute',
        height : 80,
        width : 80,
        borderRadius : 40,
        backgroundColor : 'white',
        alignSelf : 'center',
        justifyContent : 'center',
        alignItems: "center",
        bottom : 40
    },
    circleInner : {
        height : 70,
        width : 70,
        borderRadius : 35,
        backgroundColor : 'white',
        borderColor : "black",
        borderWidth : 1
    }
})

module.exports = Style