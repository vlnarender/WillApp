import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import DATA from './ChooseData';
import {FlatGrid} from 'react-native-super-grid';
let styleCss = require('../GlobleStyle');


const ChoosePlan = () => {
  return (
    <View style={{marginTop:10}}>
    <FlatGrid
        itemDimension={150}
        data={DATA}
        style={styles.gridView}
         //staticDimension={300}
        fixed
        spacing={20}
        renderItem={({item}) => (
          <View style={styleCss.choosePlan}>
            <View style={styleCss.greenButton}>
            <Image style={{width:22, height:22}}source={require('../../assets/checkGreen.png')}/>
            </View>
            <View style={{alignItems:'center'}}>
              <Image
                source={item.imageUrl}
                style={{width: '100%', height: 110, borderRadius: 10}}
              />
                <Text style={{fontSize:12}}>{item.title}</Text>
            </View>
            <View style={{flexDirection:'row', justifyContent:'space-between',marginTop:10}}>
              <View>
                <Text style={styles.texStyle}>Delivery: {item.delivery}</Text>
              </View>
              <View>
              <Text style={styles.texStyle}>Within: {item.within}</Text>
              </View>
            </View>
            <View style={{alignItems:'center',marginTop:10}}>
                <Text style={styles.texStyle}>{item.quality}</Text>
            </View>
          </View>
        )}
      />
</View>
  );
};

const styles = StyleSheet.create({
  gridView: {
    flex: 1,
  },
  texStyle:{
    fontSize:10
  }
});

export default ChoosePlan;
