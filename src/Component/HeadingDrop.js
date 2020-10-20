import React from 'react'
import {View, Text, Image, StyleSheet} from 'react-native'

const HeadingDrop = (props) =>{
  return(
    <View style={styles.heading}>
      <View><Text style={styles.text}>{props.heading}</Text></View>
      <View>
      <Image source={require('../../assets/threeDotRight.png')}/>
                
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  heading:{
    backgroundColor:'white',
    width:200,
    shadowOffset: {width: 0, height: 0},
    shadowColor: 'black',
    shadowOpacity: 8,
    elevation: 4,
    backgroundColor: '#0000', // invisible color
    borderRadius: 5,
    flexDirection:'row',
    justifyContent:'space-between',
    paddingHorizontal:10,
    paddingBottom:8,
    paddingTop:8
    
  },
  text:{
    fontSize:14,
    fontWeight:'700'
  }
});

export default HeadingDrop;