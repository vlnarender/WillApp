import React from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import DATA from './ProgramData';
import PickerDrop from './Picker'
let styleCss = require('../GlobleStyle');
const Program = () => {
  return (

    <>

    <View style={{flexDirection:'row', justifyContent:'space-between', marginTop:20}}>
        <View><Text style={{fontSize:20, fontWeight:'700'}}>Programs</Text></View>
        <View><PickerDrop/></View>
    </View>
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={DATA}
      renderItem={({item}) => {
        let img = item.imageUrl;
        return (
          <View style={styleCss.programBox}>
            <View>
              <Image source={img} style={{width: '100%', height: 120}} />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 10,
              }}>
              <View style={{flex: 1}}>
                <Image
                  style={{width: 9, height: 19}}
                  source={require('../../assets/threeDotLeft.png')}
                />
              </View>
              <View style={{flex: 4}}>
                <Text
                  style={{textAlign: 'center', color: '#ef8361', fontSize: 16}}>
                  {item.title}
                </Text>
              </View>
              <View style={{flex: 1}}>
                <Image
                  style={{
                    width: 9,
                    height: 19,
                    flexDirection: 'row',
                    alignSelf: 'flex-end',
                  }}
                  source={require('../../assets/threeDotRight.png')}
                />
              </View>
            </View>
          </View>
        );
      }}
      keyExtractor={item => item.id}
    />

</>
  );
};

export default Program;
