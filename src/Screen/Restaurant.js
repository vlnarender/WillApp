import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, TextInput, FlatList} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {FlatGrid} from 'react-native-super-grid';
let styleCss = require('../GlobleStyle');

const DATA = [
  {
    id: '1',
    imageUrl: require('../../assets/img29.png'),
    title: 'Healthy Food',
    delivery: '1kd',
    within: '30mins',
    quality: 'Very good',
  },
  {
    id: '2',
    imageUrl: require('../../assets/img28.png'),
    title: 'Healthy Food',
    delivery: '1kd',
    within: '30mins',
    quality: 'Very good',
  },

  {
    id: '3',
    imageUrl: require('../../assets/img30.png'),
    title: 'Healthy Food',
    delivery: '1kd',
    within: '30mins',
    quality: 'Very good',
  },

  {
    id: '4',
    imageUrl: require('../../assets/img31.png'),
    title: 'Breakfast, Healthy food',
    delivery: '1kd',
    within: '30mins',
    quality: 'Very good',
  },
  {
    id: '5',
    imageUrl: require('../../assets/img32.png'),
    title: 'Healthy Food',
    delivery: '1kd',
    within: '30mins',
    quality: 'Very good',
  },

  {
    id: '6',
    imageUrl: require('../../assets/img33.png'),
    title: 'Healthy Food',
    delivery: '1kd',
    within: '30mins',
    quality: 'Very good',
  },

  {
    id: '6',
    imageUrl: require('../../assets/img34.png'),
    title: 'Healthy Food',
    delivery: '1kd',
    within: '30mins',
    quality: 'Very good',
  },
];


const DATA2 = [
  {
    id: '1',
    title: 'Diet Plans',
    imageUrl: require('../../assets/planDiet.png'),
    description:'All monthly deals'
  },
  {
    id: '2',
    title: 'Resturants',
    imageUrl:require('../../assets/restaurant.png'),
    description:'Grab a quick meals'
  },
  
]

const Restaurant = () => {
  const [value, onChangeText] = useState();
  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      

      <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={DATA2}
      renderItem={({item}) => {
        return(
          <View style={styleCss.serviceBox}>
          
          <Image
                  source={item.imageUrl}
                  style={{width: 60, height: 60}}
                />
          <View style={styleCss.textContainer}>
            <Text style={styleCss.h2}>{item.title}</Text>
            <Text style={styleCss.ptext}>{item.description}</Text>
          </View>
        </View>
        )
      }}
      keyExtractor={item => item.id}
    />



      <View style={styleCss.mainContainer}>

      
      <View style={{marginTop: 30}}>
        <View style={styleCss.inputArea}>
        
        <View style={{flex:1}}>
        <Image
          style={{width:20, height: 20}}
          source={require('../../assets/filterIcon.png')}
        />
        </View>
         
        <View style={{flex:9}}>
          <TextInput
            style={styleCss.textInput}
            placeholder=" Search of Specfic Plan or Diet Company"
            onChangeText={text => onChangeText(text)}
            value={value}
          />
          </View>
          <View style={{flex:1}}>
        <Image
          style={{width:20, height: 20, alignSelf:'flex-end'}}
          source={require('../../assets/search.png')}
        />
        </View>
         
        </View>
      </View>





        <View
          style={{
            marginTop: 30,
            justifyContent: 'space-between',
            flexDirection: 'row',
            
          }}>
          <View style={{flex: 1}}>
            <Text style={{fontSize: 22, fontWeight: '700'}}>Restaurant:</Text>
          </View>
          <View style={{flex: 1, alignItems: 'flex-end'}}>
            <View
              style={{
                borderWidth: 1,
                borderColor: '#aaaaaa',
                flexDirection: 'row',
                borderRadius: 5,
                padding: 5,
              }}>
              <View>
                <Text>Choose Cusisine</Text>
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

      <View style={{marginTop: 10}}>
        <FlatGrid
          itemDimension={150}
          data={DATA}
          style={styles.gridView}
          
          //staticDimension={300}
          fixed
          spacing={20}
          renderItem={({item}) => (
            <View style={{paddingTop:10}}>
          <View style={[styleCss.choosePlan]}>

              {/* <View style={styles.discount}>
                <Text style={styles.disSize}>20%</Text>
              </View> */}

              <View style={styles.busy}>
                <Text style={styles.busyText}>Busy</Text>
              </View>

              {/* <View style={styles.discount}>
                <Text style={styles.deelSize}>Rendom Deal</Text>
              </View> */}

                <View >
            <View style={{alignItems: 'center'}}>
                <Image
                  source={item.imageUrl}
                  style={{width: '100%', height: 110, borderRadius: 10}}
                />
                <Text style={{fontSize: 12}}>{item.title}</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 10,
                }}>
                <View>
                  <Text style={styles.texStyle}>Delivery: {item.delivery}</Text>
                </View>
                <View>
                  <Text style={styles.texStyle}>Within: {item.within}</Text>
                </View>
              </View>
              <View style={{alignItems: 'center', marginTop: 10}}>
                <Text style={styles.texStyle}>{item.quality}</Text>
              </View>
              </View>
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
  texStyle: {
    fontSize: 10,
  },

  disSize:{
    fontSize:12,
    textAlign:'center',
  },

  deelSize:{
    fontSize:8,
    textAlign:'center'
  },
  busyText:{
    fontSize:12,
    textAlign:'center',
    color:'red'
  },

  discount:{
    position:'absolute',
    borderTopLeftRadius:10,
    borderBottomRightRadius:10,
    borderWidth:1,
    borderColor:'#e9bca4',
    zIndex:10,
    marginLeft:-15,
    transform: [{ rotate: '-30deg' }],
    backgroundColor:'white',
    width:55,
    height:20,
    paddingTop:1
  },

  busy:{
    position:'absolute',
    borderTopLeftRadius:10,
    borderBottomRightRadius:10,
    borderWidth:1,
    borderColor:'red',
    zIndex:10,
    marginLeft:-15,
    transform: [{ rotate: '-30deg' }],
    backgroundColor:'white',
    width:55,
    height:20,
    paddingTop:1
  },

  bsuyOpacity:{
    opacity: .2,
  },

  closeOpacity:{
    opacity: .1,
  }

});

export default Restaurant;
