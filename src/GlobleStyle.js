'use strict';
var React = require('react-native');
var {StyleSheet} = React;

module.exports = StyleSheet.create({
  serviceBox: {
    width: 200,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#ddd',
    borderBottomWidth: 1,

    shadowColor: '#ddd',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.75,
    shadowRadius: 2,
    elevation: 5,
    padding: 10,
    marginTop: 10,
    marginLeft: 7,
    marginRight: 7,
    height: 80,
    borderWidth: 1,
    borderColor: '#f2ae88',
  },
  textContainer: {
    marginLeft: 10,
  },
  h2: {
    fontSize: 18,
    color: '#f2ae88',
    fontWeight: '700',
  },
  ptext: {
    fontSize: 11,
    color: 'black',
    marginTop: 12,
  },

  navHome: {
    position: 'absolute',
    bottom: 0, // space from bottombar
    height: 68,
    width: 68,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },

  mainContainer: {
    marginHorizontal: 20,
  },

  inputStyle: {
    borderColor: '#e0e0e0',
    padding: 10,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    textAlign: 'left',
    height: 50,
    width: '100%',
    borderWidth: 1,
    shadowOffset: {width: 20, height: 20},
    shadowColor: 'black',
    shadowOpacity: 8,
    elevation: 20,
    backgroundColor: '#0000', // invisible color
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    marginTop: -15,
    fontStyle: 'italic',
  },


//search bar css start

  inputArea: {
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    borderColor: '#e0e0e0',
    paddingTop: 10,
    paddingRight: 20,
    paddingBottom: 10,
    paddingLeft: 20,
    textAlign: 'left',
    height: 50,
    width: '100%',
    borderWidth: 1,
    shadowOffset: {width: 20, height: 20},
    shadowColor: 'black',
    shadowOpacity: 8,
    elevation: 20,
    backgroundColor: '#0000', // invisible color
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    
  },
  textInput: {
    height: 40,
    backgroundColor: 'white',
    fontStyle: 'italic',
  },

  //search bar css end

companies:{
  marginTop:10,
  flex:1,
  
},

compBox:{
  shadowOffset: {width: 20, height: 20},
    shadowColor: 'black',
    shadowOpacity: 8,
    elevation: 6,
    backgroundColor: '#0000', // invisible color
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    // width:155,
    // height:170,
    padding:8,
    flex:1
    


   
},


  itemBox:{
    flexDirection:'row',
    marginTop:30
  },


  bmiInput:{
    height: 27,
    width:90, 
    borderColor: '#CFCFCF',
    borderWidth: 1, 
    borderRadius:8 
  },

  bmiLable:{
    color:'#989797',
    marginTop:2,
    fontSize:13
  },

  textWidth:{
    width:42,
    alignItems:'flex-end'
  },

  inputunChecked:{
    height: 12,
    width: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#989797',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:2
  },

  inputChecked:{
    height: 12,
    width: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#989797',
    backgroundColor:'#f2ae88',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:2
  },

  cALable:{
    color:'#000',
    marginTop:2,
    fontSize:13
  },

  cAInput:{
    height: 24,
    width:70, 
    borderColor: '#c1c1c1',
    borderWidth: 1, 
    borderRadius:8 
  },

  roundShape:{
    backgroundColor:'rgba(0, 0, 0, 0.8)',
    height:50, 
    width:50, 
    borderRadius:50, 
    position:'absolute',
    right:-20,
    top:35,
    alignItems:'center',
    justifyContent:'center'

  },


// feature css start

featureBox:{
  width:165, 
  height:175, 
  shadowOffset: {width: 20, height: 20},
  shadowColor: 'black',
  shadowOpacity: 8,
  elevation: 6,
  backgroundColor: '#0000', // invisible color
  borderRadius: 20,
  backgroundColor: '#FFFFFF',
  marginHorizontal:12,
  marginVertical:15,
  flexDirection:'row',
  alignItems:'center',
  justifyContent:'center',
  paddingHorizontal:10

},

//feature css end


// program css start
programBox:{
  width:165, 
  height:175, 
  shadowOffset: {width: 20, height: 20},
  shadowColor: 'black',
  shadowOpacity: 8,
  elevation: 6,
  backgroundColor: '#0000', // invisible color
  borderRadius: 20,
  backgroundColor: '#FFFFFF',
  marginHorizontal:12,
  marginVertical:15,
  padding:10
  

},

//program css end



//button start

buttonAllow:{
  width:320,
  padding:10,
  backgroundColor:'#f2ae88',
  borderRadius:8
},
//button end



//choose plan
choosePlan:{
  shadowOffset: {width: 20, height: 20},
    shadowColor: 'black',
    shadowOpacity: 8,
    elevation: 6,
    backgroundColor: '#0000', // invisible color
    borderRadius: 10,
    backgroundColor: '#fff',
    flex:1,
    padding:10,
    marginTop:2,
},

greenButton:{
  position:'absolute',
  zIndex:999,
  right:10,
  top:10
},


inputStyles:{
        borderColor: '#e0e0e0',
        textAlign: 'left',
        height: 50,
        borderWidth: 1,
        shadowOffset: { width: 20, height: 20 },
        shadowColor: 'black',
        shadowOpacity: 8,
        elevation: 20,
        backgroundColor: "#0000",// invisible color
        borderRadius: 20,
        backgroundColor: "#FFFFFF",
        fontStyle: 'italic',
        marginTop:30,
       flexDirection:'row',
       paddingRight:15
},


btnButton:{
  borderColor: '#f2ae88',
  height: 50,
  borderWidth: 1,
  shadowOffset: { width: 0, height: 4 },
  shadowColor: '#f2ae88',
  shadowOpacity: 0.6,
  elevation: 8,
  borderRadius: 16,
  backgroundColor: "#f2ae88",
  marginTop:30,
  alignItems:'center',
  justifyContent:'center',
  fontSize:16
},


//one day plan details

onedayplandetails:{
  shadowOffset: {width: 20, height: 20},
    shadowColor: 'black',
    shadowOpacity: 8,
    elevation: 6,
    backgroundColor: '#0000', // invisible color
    borderRadius: 10,
    backgroundColor: '#fff',
    padding:10,
    marginTop:2,
    width:150,
    height:200,
  
    
},

//Header

header:{
  width:'100%',
  height:45,
  backgroundColor:'white',
  shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.9,
    shadowRadius: 1,
    elevation: 6,
    flexDirection:'row'
},

//header end



});
