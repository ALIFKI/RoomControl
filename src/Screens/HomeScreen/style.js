import { StyleSheet } from 'react-native';

const Style = StyleSheet.create({
  content: {
    padding: 16,
  },
  header : {
    paddingTop : 30,
    flex : 1,
    flexDirection : 'row',
    justifyContent : 'space-between',
    alignItems : 'center'
  },
  username: {
    fontFamily : 'Poppins-Bold',
    fontSize : 28
  },
  cardControl: {
    display : 'flex',
    flexDirection : "column",
    justifyContent : 'center',
    backgroundColor : 'rgba(255, 255, 255,0.6)',
    borderRadius : 30,
    padding : 10
  },
  titleHeader: {
    flex : 1,
    flexDirection : 'row',
    justifyContent : 'space-between',
    alignItems : "center",
    paddingTop : 20,
    padding : 10
  },
  countDevice: {
    fontFamily : 'Poppins-Regular',
    color : '#838383',
    fontSize: 14
  },
  room : {
    fontFamily : 'Poppins-Medium',
    color : '#131313',
    fontSize: 17
  },
  mainCard : {
    paddingTop : 20,
    flex : 1,
    flexWrap : 'wrap',
    flexDirection : 'row',
    justifyContent : 'space-around',
    // alignItems: 'flex-start',
    flexShrink : 1,
  },
  deviceTxt : {
    color: 'white',
    fontFamily : 'Poppins-Regular',
    fontSize : 13
  }
});

module.exports = Style;
