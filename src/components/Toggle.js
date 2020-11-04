import React, { useState } from "react";
import { View, Switch, StyleSheet } from "react-native";
import ToggleSwitch from 'toggle-switch-react-native'

const Toggle = ({booleanValue}) => {
const [bool,setBool]=useState(booleanValue)
  return (
    <ToggleSwitch
      isOn={bool}
      onColor="#f2ae88"
      offColor="#d0d0d2" 
      size="small"
      onToggle={isOn => setBool(isOn)}
    />
  );
}

//https://www.npmjs.com/package/toggle-switch-react-native


export default Toggle;