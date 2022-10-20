import {StyleSheet,Dimensions} from 'react-native'
const { height, width } = Dimensions.get('window');

export default StyleSheet.create({

maincontainer:{
    flex: 1,
     margin: 20, 
},
container: {
    padding: 20,
       flex: 1
},
headertext:{
    backgroundColor:"orange",
    borderWidth:1,
    width:width*0.8,
    borderRadius:height*0.02
},
header:{
    fontSize: height*0.04,
    textAlign:'center',
    color:"red"
},
title_text: {
    fontSize: 15, 
    color:"white",
    textAlign:'center',
    fontWeight:'bold',
    padding: height*0.02,

},
body_text: {
    fontSize: 13,
    padding: height*0.005,
    textAlign:'justify',

},
holder:{
    flexDirection:'row'
},
textinput: {
    backgroundColor:"#E8E8E8",
    height: 40,
    margin: 12,
    padding: 10,
  },
  nolist: {
    height: 40,
    alignSelf:'center',
    margin: 12,
    padding: 10,
  },
});