import React,{useState} from 'react'
import {View, Text, Picker, StyleSheet} from 'react-native'

const PickerDate = () =>{
  const [selectedValue, setSelectedValue] = useState("Day One");

  return(
    <View style={styles.container}>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 20, width: 130 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Day one" value="Day One" />
      </Picker>
    </View>
   
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor:'white',
    borderWidth:1,
    borderColor:'#dddddd',
    borderRadius:8,
    width:130,
    paddingLeft:10,
    paddingTop:10,
    height:20
    

    
  }
});


export default PickerDate;