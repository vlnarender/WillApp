import React from 'react'
import {View, Text, FlatList, Image} from 'react-native'
let styleCss = require('../GlobleStyle');
const DATA = [
  {
    id: '1',
    title: 'One Day Plan',
  },
  {
    id: '2',
    title: 'Multi Subs',
  },
  {
    id: '3',
    title: 'One Day Plan',
  },
  {
    id: '4',
    title: 'One Day Plan',
  }

]

const Features = () =>{
  return(
    <View>
      <Text style={{fontSize:20, fontWeight:'700', marginTop:20}}>Features</Text>

      <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={DATA}
          renderItem={({item}) => {
            return(
              <View style={styleCss.featureBox}>
                <View style={{flexDirection:'row', justifyContent:'space-between', }}>
                  <View style={{flex:1}}>
                  <Image
                    style={{width:9, height: 19}}
                    source={require('../../assets/threeDotLeft.png')}
                  />
                  </View>
                  <View style={{flex:4}}>
                      <Text style={{textAlign:'center', color:'#ef8361', fontSize:16}}>{item.title}</Text>
                  </View>
                  <View style={{flex:1}}>
                  <Image
                    style={{width:9, height: 19, flexDirection:'row', alignSelf:'flex-end'}}
                    source={require('../../assets/threeDotRight.png')}
                  />
                  </View>
                </View>
              </View>
            )
          }}
          keyExtractor={item => item.id}
    />
    </View>
  )
}

export default Features;