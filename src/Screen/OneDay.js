import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {FlatGrid} from 'react-native-super-grid';
let styleCss = require('../GlobleStyle');
const DATA = [
  {
    id: '1',
    imageUrl: require('../../assets/img29.png'),
    title:'Healthy Food',
    delivery: '1kd',
    within: '30mins',
    quality: 'Very good'
  },
  {
    id: '2',
    imageUrl: require('../../assets/img28.png'),
    title:'Healthy Food',
    delivery: '1kd',
    within: '30mins',
    quality: 'Very good'
  },

  {
    id: '3',
    imageUrl: require('../../assets/img30.png'),
    title:'Healthy Food',
    delivery: '1kd',
    within: '30mins',
    quality: 'Very good'
  },

  {
    id: '4',
    imageUrl: require('../../assets/img31.png'),
    title:'Breakfast, Healthy food',
    delivery: '1kd',
    within: '30mins',
    quality: 'Very good'
  },
  {
    id: '5',
    imageUrl: require('../../assets/img32.png'),
    title:'Healthy Food',
    delivery: '1kd',
    within: '30mins',
    quality: 'Very good'
  },

  {
    id: '6',
    imageUrl: require('../../assets/img33.png'),
    title:'Healthy Food',
    delivery: '1kd',
    within: '30mins',
    quality: 'Very good'
  },

  {
    id: '6',
    imageUrl: require('../../assets/img34.png'),
    title:'Healthy Food',
    delivery: '1kd',
    within: '30mins',
    quality: 'Very good'
  },
 
];
const OneDay = () => {
  return (
    <ScrollView style={{backgroundColor:'white'}}>
    <View style={styleCss.mainContainer}>
      <View style={{alignItems: 'center', marginTop: 20}}>
        <View style={{position: 'absolute', left: 10, top: '44%'}}>
          <Image
            style={{width: 30, height: 19}}
            source={require('../../assets/arrowLeft.png')}
          />
        </View>
        <View style={styleCss.featureBox}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{flex: 1}}>
              <Image
                style={{width: 9, height: 19}}
                source={require('../../assets/threeDotLeft.png')}
              />
            </View>
            <View style={{flex: 4}}>
              <Text
                style={{textAlign: 'center', color: '#ef8361', fontSize: 16}}>
                One Day Plan
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
      </View>

      <View style={{marginTop:15, justifyContent:'space-between', flexDirection:'row'}}>
        <View style={{flex:2}}><Text style={{fontSize:18, fontWeight: '700'}}>Choose Plan for one day:</Text></View>
        <View style={{flex:1, alignItems:'flex-end', }}>
        <View
              style={{
                borderWidth: 1,
                borderColor: '#aaaaaa',
                flexDirection: 'row',
                borderRadius: 5,
                padding: 5,
              }}>
              <View>
                <Text>Day 1</Text>
              </View>
              <View style={{justifyContent: 'center', paddingLeft: 5}}>
                <Image
                  style={{width: 12, height: 16}}
                  source={require('../../assets/ar.png')}
                />
              </View>
            </View>
        </View>
      </View>

          
      
    </View>
      
{/* choose plan */}

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



    </ScrollView>
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
export default OneDay;
