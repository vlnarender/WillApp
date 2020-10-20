import React from 'react'
import {View, Text, Image, ScrollView, StyleSheet} from 'react-native'
import Toggle from '../Component/Toggle'


let styleCss = require('../GlobleStyle');
const Setting = () =>{
  return(
    <ScrollView style={{backgroundColor:'white'}}>

      <View style={styleCss.mainContainer}>
      <View style={{alignItems:'center', marginTop:20}}>
          <Image
              style={{width:48, height: 40}}
              source={require('../../assets/logo.png')}
            />
      </View>
      <View style={{alignItems:'flex-end', marginTop:10}}>
      <Image
              style={{width:16, height: 16}}
              source={require('../../assets/cross.png')}
            />
      </View>

      <View>
        <Text style={{fontSize:22, fontWeight:'700', marginVertical:20}}>Settting</Text>
      </View>

    <View>
      <View style={styles.settingRow}>
        <View>
          <Text style={styles.setTextLight}>Language</Text>
          <Text style={styles.setTextDark}>English</Text>
       </View>
        <View>
          <Toggle
            booleanValue={true}
          />
        </View>
        </View>

        <View style={styles.settingRow}>
        <View>
          <Text style={styles.setTextLight}>Email</Text>
          <Text style={styles.setTextDark}>user@gmail.com</Text>
       </View>
        <View>
          <Text style={styles.setGreenText}>Change</Text>
        </View>
        </View>

        <View style={styles.settingRow}>
        <View>
          <Text style={styles.setTextLight}>Password</Text>
          <Text style={styles.setTextDark}>*********</Text>
       </View>
        <View>
          <Text style={styles.setGreenText}>Change</Text>
        </View>
        </View>


        <View style={styles.settingRow}>
        <View>
          <Text style={styles.setTextLight}>Location</Text>
          <Text style={styles.setTextDark}>Ardyia, Kuwait</Text>
       </View>
        <View> 
          <Text style={styles.setGreenText}>Edit</Text>
        </View>
        </View>


        <View style={styles.settingRow}>
        <View>
          <Text style={styles.setTextLight}>Receive notfication</Text>
          <Text style={styles.setTextDark}>Enabled</Text>
       </View>
        <View>
          <Toggle
            booleanValue={true}
          />
        </View>
        </View>

        <View style={styles.settingRow}>
        <View>
          <Text style={styles.setTextLight}>Allow Location</Text>
          <Text style={styles.setTextDark}>Disabled</Text>
       </View>
        <View>
        <Toggle
            booleanValue={false}
          />
        </View>
        </View>

        <View style={styles.settingRow}>
        <View>
          <Text style={styles.setTextLight}>Receive special offers</Text>
          <Text style={styles.setTextDark}>Enabled</Text>
       </View>
        <View>
        <Toggle
            booleanValue={false}
          />
        </View>
        </View>

        
      </View>


      </View>
    </ScrollView>
  )
};

const styles = StyleSheet.create({
  settingRow:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginBottom:20
  },
  setTextLight:{
    color:'#b8b7ba',
    fontSize:15
  },
  setTextDark:{
    color:'#000',
    fontSize:15,
    marginTop:5
  },

  setGreenText:{
    color:'#65c986',
    fontWeight:'700',
    fontSize:14
  }
});

export default Setting;