import React,{useState} from 'react'
import {View, Text, Picker, StyleSheet} from 'react-native'

const PickerDrop = () =>{
  const [selectedValue, setSelectedValue] = useState("All Programs");

  return(
    <View style={styles.container}>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 30, width: 160 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="All Programs" value="All Programs" />
        <Picker.Item label="Atkins Diet" value="Atkins Diet" />
        <Picker.Item label="The Zone" value="The Zone" />
        <Picker.Item label="Keto Diet" value="Keto Diet" />
        <Picker.Item label="Vegetarian" value="Vegetarian" />
        <Picker.Item label="Vega" value="Vega" />
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
    borderRadius:8

    
  }
});


export default PickerDrop;