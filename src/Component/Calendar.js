import React from 'react'
import {View, Text, Image} from 'react-native'

const Calendar = () =>{
  return(

    <>
      <View style={{}}>
            <View 
            style={{width:150,
             height:150, 
             borderRadius:100, 
             backgroundColor:'red', 
             position:'absolute', 
             top:"50%",
             zIndex:999
             }}>
              
            </View>
      </View>
      <View style={{flex:3,  backgroundColor:"#343739"}}>
          <Text>three</Text>
      </View>
    </>
   
  )
}

export default Calendar;

