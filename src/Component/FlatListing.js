import React from 'react';
import { FlatList, TouchableHighlight} from 'react-native';
import {View, ScrollView, SafeAreaView} from 'react-native';
import Card from './Card'
import DATA from './ApiConfig'
import Searchbar from './SearchBar'
import SearchbarFilter from './SearchBarWithFilter'
import DietCompany from './DietCompany'
import Features from './Features'
import Program from './Program'
let styleCss = require('../GlobleStyle');

const FlatListing = () =>{
  return(
    <>
    <SafeAreaView style={{flex:1, backgroundColor:'white'}}>
     <ScrollView>
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={DATA}
      renderItem={({item}) => {
        return(
          <Card
            imageUrl={item.imageUrl}
            title={item.title}
            description={item.description}
          />
        )
      }}
      keyExtractor={item => item.id}
    />
    <View style={styleCss.mainContainer}>
    <SearchbarFilter/>
    {/* <Searchbar/> */}
    <Features/>
    <Program/>
    
    
    </View>
    <DietCompany/>

</ScrollView>
</SafeAreaView>
   </>
  )
}

export default FlatListing;