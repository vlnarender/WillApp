import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const BreakFast = () => {
  return (
    <>
    <View style={styles.cardBox}>
      <View style={styles.borderBottomBox}>
        <View>
          <Text style={styles.kd}>KD 0.900</Text>
        </View>

        <View style={{flexDirection: 'row'}}>
          <View>
            <View style={styles.topPick}><Text style={styles.toppickText}>Top Pick</Text></View>
            <View
              style={styles.imgBox}>
              <Image
                style={{width: 60, height: 60, borderRadius: 10}}
                source={require('../../assets/food-5.png')}
              />
            </View>
          </View>

          <View style={{flex: 2, paddingHorizontal: 10}}>
          <Text style={styles.headingText}>Original Chicken Slider</Text>
            <Text style={styles.itemContent}>
              With special sauce, seasoned fried chicken, cheddar, chesse,
              pickels and lettuce
            </Text>
          </View>
          <View style={{width: 90}}>
            <View>
              <View style={{alignItems: 'flex-end', marginTop: 10}}>
                <Image
                  style={{width: 22, height: 22}}
                  source={require('../../assets/checkGreen.png')}
                />
              </View>
            </View>
            <View style={styles.powerBox}>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.itemText}>P</Text>
                <Text style={styles.itemText}>27g</Text>
                <Text style={styles.itemText}>Ca</Text>
                <Text style={styles.itemText}>260</Text>
              </View>
              <View style={{flexDirection: 'row', marginTop: 10}}>
                <Text style={styles.itemText}>C</Text>
                <Text style={styles.itemText}>30g</Text>
                <Text style={styles.itemText}>F</Text>
                <Text style={styles.itemText}>5g</Text>
              </View>
            </View>
          </View>
        </View>
      </View>


      <View style={styles.borderBottomBox}>
        <View>
          <Text style={styles.kd}>KD 0.900</Text>
        </View>

        <View style={{flexDirection: 'row'}}>
          <View>
          <View style={styles.topPick}><Text style={styles.toppickText}>Top Pick</Text></View>
            <View
              style={styles.imgBox}>
              <Image
                style={{width: 60, height: 60, borderRadius: 10}}
                source={require('../../assets/food-1.png')}
              />
            </View>
          </View>

          <View style={{flex: 2, paddingHorizontal: 10}}>
            <Text style={styles.headingText}> Chicken Plate</Text>
            <Text style={styles.itemContent}>
              Bonless chicken with sauce of your choise
            </Text>
          </View>
          <View style={{width: 90}}>
            <View>
              <View style={{alignItems: 'flex-end', marginTop: 10}}>
                <Image
                  style={{width: 22, height: 23}}
                  source={require('../../assets/plusOrange.png')}
                />
              </View>
            </View>
            <View style={styles.powerBox}>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.itemText}>P</Text>
                <Text style={styles.itemText}>27g</Text>
                <Text style={styles.itemText}>Ca</Text>
                <Text style={styles.itemText}>260</Text>
              </View>
              <View style={{flexDirection: 'row', marginTop: 10}}>
                <Text style={styles.itemText}>C</Text>
                <Text style={styles.itemText}>30g</Text>
                <Text style={styles.itemText}>F</Text>
                <Text style={styles.itemText}>5g</Text>
              </View>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.borderBottomBox}>
        <View>
          <Text style={styles.kd}>KD 0.900</Text>
        </View>

        <View style={{flexDirection: 'row'}}>
          <View>
            <View
              style={styles.imgBox}>
              <Image
                style={{width: 60, height: 60, borderRadius: 10}}
                source={require('../../assets/food-2.png')}
              />
            </View>
          </View>

          <View style={{flex: 2, paddingHorizontal: 10}}>
          <Text style={styles.headingText}>Baked Chicken Tenders</Text>
            <Text style={styles.itemContent}>
              Chicken fillet, panko bread crumbs, honey mustard
            </Text>
          </View>
          <View style={{width: 90}}>
            <View>
              <View style={{alignItems: 'flex-end', marginTop: 10}}>
                <Image
                  style={{width: 22, height: 23}}
                  source={require('../../assets/plusOrange.png')}
                />
              </View>
            </View>
            <View style={styles.powerBox}>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.itemText}>P</Text>
                <Text style={styles.itemText}>27g</Text>
                <Text style={styles.itemText}>Ca</Text>
                <Text style={styles.itemText}>260</Text>
              </View>
              <View style={{flexDirection: 'row', marginTop: 10}}>
                <Text style={styles.itemText}>C</Text>
                <Text style={styles.itemText}>30g</Text>
                <Text style={styles.itemText}>F</Text>
                <Text style={styles.itemText}>5g</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>


    </>
  );
};
const styles = StyleSheet.create({
  cardBox: {
    backgroundColor: 'red',
    width: '100%',
    shadowOffset: {width: 10, height: 5},
    shadowColor: 'gray',
    shadowOpacity: 8,
    elevation: 3,
    backgroundColor: '#0000', // invisible color
    borderRadius: 20,
    padding: 10,
    marginVertical:15
  },
  kd: {
    fontSize: 10,
    textAlign: 'right',
  },
  itemText: {
    fontSize: 10,
    width: 20,
  },

  itemContent: {
    fontSize: 10,
  },

  powerBox: {
    borderWidth: 1,
    borderColor: '#f2cab3',
    borderTopLeftRadius: 8,
    padding: 5,
    marginTop: 10,
  },

  borderBottomBox: {
    borderBottomWidth: 1,
    borderColor: '#dddddd',
    paddingBottom: 10,
    marginBottom:10
  },

  imgBox:{
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#dddddd',
    padding: 8,
    width: 78,
  },
  headingText:{
    fontSize:10.5,
    fontWeight:'700',
    marginBottom:5
  },
  topPick:{
    borderWidth: 1,
    borderColor: '#f3b490',
    width:50,
    position:'absolute',
    left:-8,
    top:2,
    zIndex:9,
    backgroundColor:'white',
    transform: [{ rotate: '330deg'}]

  },
  toppickText:{
    fontSize:10,
    color:'#f3b490',
    textAlign:'center'
  }
});
export default BreakFast;