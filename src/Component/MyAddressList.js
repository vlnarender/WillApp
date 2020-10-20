import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

const MyaddressList = () =>{
  
const [checked, setChecked] = useState(0);
const data = [
    {
    'addressheading':'Home address',
    'address':'Sharq, Apartment 33, dfkj jdjfdlj ljdslfkjds jfdljfldk dfjdfljd'
    },
    {
    'addressheading':'Work address',
    'address':'Aj-andlus Apartment '
    }
]
  return (
    <View style={{marginTop: 30}}>
      {data.map((item, key) => {
        return (
          <View>
            {checked === key ? (
              <TouchableOpacity style={styles.radioAlign}>
                <Image
                  style={styles.imgSize}
                  source={require('../../assets/checked.png')}
                />
                <View>
                <Text style={styles.radioTextHeading}>{item.addressheading}</Text>
                <Text numberOfLines={1} style={styles.radioText}>{item.address}</Text>
                </View>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
              onPress={() => {
                setChecked(key);
              }}
                style={styles.radioAlign}>
                <Image
                  style={styles.imgSize}
                  source={require('../../assets/unchecked.png')}
                />
                <View>
                <Text style={styles.radioTextHeading}>{item.addressheading}</Text>
                <Text numberOfLines={1} style={styles.radioText}>{item.address}</Text>
                </View>
              </TouchableOpacity>
            )}
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  radioAlign: {
    flexDirection: 'row',
    marginBottom: 15,
   alignItems:'center'
  },
  radioText: {
    paddingLeft: 10,
    width:130,
  },
  radioTextHeading: {
    paddingLeft: 10,
    color:'#98979d',
    
  },
  imgSize: {
    width: 25,
    height: 25,
  },
});

export default MyaddressList;
