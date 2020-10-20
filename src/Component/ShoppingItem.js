import React from 'react';
import {View, Text, Image, SafeAreaView} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { ScrollView } from 'react-native-gesture-handler';
let styleCss = require('../GlobleStyle');

const ShoppingItem = () => {
  return (
    <View>
      <View style={styleCss.itemBox}>
      <View
        style={{
          
          backgroundColor: 'black',
          borderRadius: 15,
          height: 70,
          width:75,
          overflow: 'hidden',
        }}>
        <Image
          style={{width: '100%', height: 100}}
          source={require('../../assets/photo.jpeg')}
        />
      </View>
      <View style={{flex: 3, marginLeft: 10}}>
        <Text style={{fontSize: 16, fontWeight: '700'}}>Burger Delicious</Text>
        <Text style={{color: '#A8A8A8', fontSize: 13, marginTop:10}}>
          Tomato sauce, mozzarella, parmigiano, romano, olive, oil and fresh
          basil (300g)
        </Text>

        <View style={{flexDirection:'row',justifyContent:'space-between', marginTop:20}}>
         <View style={{flexDirection:'row',justifyContent:'space-between'}}>
         <View style={{backgroundColor:'#B4B4B4', borderRadius:50, height:40, width:40, justifyContent:'center', alignItems:'center'}}>
         <FontAwesome5
            size={18}
            name={'minus'}
            solid
            style={{color: 'white'}}
          />
         </View>
         <View style={{backgroundColor:'#B4B4B4', borderRadius:50, height:40, width:40, marginHorizontal:8, justifyContent:'center', alignItems:'center'}}><Text>2</Text></View>
         <View style={{backgroundColor:'#EEA618', borderRadius:50, height:40, width:40, justifyContent:'center', alignItems:'center'}}>
         <FontAwesome5
            size={18}
            name={'plus'}
            solid
            style={{color: 'white'}}
          />
         </View>
         
        </View>
         <View style={{marginTop:5}}>
         <Text style={{fontSize:20}}> X</Text>
         </View>
         <View>
           <Text style={{fontSize:15, fontWeight:'700', color:'orange'}}>KD 17.00</Text>
           <Text style={{fontSize:13, textAlign:'right',textDecorationLine:'line-through'}}>KD 19.50</Text>
          </View>
        </View>
      </View>
    </View>



    <View style={styleCss.itemBox}>
      <View
        style={{
          
          backgroundColor: 'black',
          borderRadius: 15,
          height: 70,
          width:75,
          overflow: 'hidden',
        }}>
        <Image
          style={{width: '100%', height: 100}}
          source={require('../../assets/photo.jpeg')}
        />
      </View>
      <View style={{flex: 3, marginLeft: 10}}>
        <Text style={{fontSize: 16, fontWeight: '700'}}>Burger Delicious</Text>
        <Text style={{color: '#A8A8A8', fontSize: 13, marginTop:10}}>
          Tomato sauce, mozzarella, parmigiano, romano, olive, oil and fresh
          basil (300g)
        </Text>

        <View style={{flexDirection:'row',justifyContent:'space-between', marginTop:20}}>
         <View style={{flexDirection:'row',justifyContent:'space-between'}}>
         <View style={{backgroundColor:'#B4B4B4', borderRadius:50, height:40, width:40, justifyContent:'center', alignItems:'center'}}>
         <FontAwesome5
            size={18}
            name={'minus'}
            solid
            style={{color: 'white'}}
          />
         </View>
         <View style={{backgroundColor:'#B4B4B4', borderRadius:50, height:40, width:40, marginHorizontal:8, justifyContent:'center', alignItems:'center'}}><Text>2</Text></View>
         <View style={{backgroundColor:'#EEA618', borderRadius:50, height:40, width:40, justifyContent:'center', alignItems:'center'}}>
         <FontAwesome5
            size={18}
            name={'plus'}
            solid
            style={{color: 'white'}}
          />
         </View>
         
        </View>
         <View style={{marginTop:5}}>
         <Text style={{fontSize:20}}> X</Text>
         </View>
         <View>
           <Text style={{fontSize:15, fontWeight:'700', color:'orange'}}>KD 17.00</Text>
           <Text style={{fontSize:13, textAlign:'right',textDecorationLine:'line-through'}}>KD 19.50</Text>
          </View>
        </View>
      </View>
    </View>

    <View style={{ flexDirection:'row', marginTop:20}}>
        <View style={{flex: 3, marginLeft: 85}}>
          <View style={{justifyContent:'space-between', flexDirection:'row'}}>
              <View><Text style={{fontSize:14, color:'#A8A8A8'}}>Total </Text></View>
              <View><Text style={{fontSize:15, color:'#A8A8A8'}}>KD 33.00</Text></View>
          </View>
          <View style={{justifyContent:'space-between', flexDirection:'row', marginVertical:10}}>
              <View><Text style={{fontSize:14, color:'#A8A8A8'}}>Delivery</Text></View>
              <View><Text style={{fontSize:15, color:'#A8A8A8'}}>KD 0.00</Text></View>
          </View>
          <View style={{justifyContent:'space-between', flexDirection:'row'}}>
              <View><Text style={{fontSize:16, color:'orange', fontWeight:'700'}}>Total</Text></View>
              <View><Text style={{fontSize:16, color:'orange', fontWeight:'700'}}>KD 33.00</Text></View>
          </View>
        
        </View>
      
    </View>

    </View>
  
  );
};

export default ShoppingItem;
