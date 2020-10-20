import React from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import {FlatGrid} from 'react-native-super-grid';
import DATA from './DietCompanyData';
let styleCss = require('../GlobleStyle');

const DietCompanyData = () => {
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 20,
          alignItems: 'center',
          marginTop: 20,
        }}>
        <View>
          <Text style={{fontSize: 20, fontWeight: '700'}}>Diet Companies</Text>
        </View>
        <View>
          <Text style={{fontSize: 13, fontWeight: '700'}}>View All</Text>
        </View>
      </View>
      <FlatGrid
        //itemDimension={130}
        data={DATA}
        style={styles.gridView}
        // staticDimension={300}
        // fixed
        spacing={20}
        renderItem={({item}) => (
          <View style={styleCss.compBox}>
            <View>
              <Image
                source={item.imageUrl}
                style={{width: '100%', height: 120, borderRadius: 10}}
              />
            </View>
          </View>
        )}
      />
    </>
  );
};

const styles = StyleSheet.create({
  gridView: {
    flex: 1,
  },
});

export default DietCompanyData;
