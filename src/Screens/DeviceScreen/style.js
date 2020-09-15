import { StyleSheet } from 'react-native'


const style = StyleSheet.create({
    content : {
        padding : 16
    },
    header: {
        display : 'flex',
        flexDirection : "row",
        justifyContent : "center",
        alignItems : 'center',
    },
    headerTitle : {

    },
    headerTxt : {
        fontFamily : "Poppins-Medium",
        fontSize : 16,
    },
    headerIcon : {
        position :"absolute",
        left : 0
    },
    contentControll: {
        flex : 1,
        flexDirection : 'row',
        justifyContent : "space-between",
        alignItems : "center"
    }
})

module.exports = style