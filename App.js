import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
let styleCss = require('./src/GlobleStyle');
import FlatListing from './src/Component/FlatListing'
import ShoppingBag from './src/Screen/ShoppingBag'
import Myprofile from './src/Screen/Myprofile'
import Location from './src/Screen/Location'
import OneDay from './src/Screen/OneDay'
import ProfileEdit from './src/Screen/ProfileEdit'
import OnedayplanDetails from './src/Screen/OnedayplanDetails'
import Favorite from './src/Screen/Favorite'
import Setting from './src/Screen/Setting'
import Restaurant from './src/Screen/Restaurant'
import Calendar from './src/Component/Calendar'

import AccordionPanel from './src/Screen/Accordion'

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Favorite" component={Favorite} />
        <Tab.Screen name="Profile" component={FlatListing} />
        <Tab.Screen name="One Day" component={OneDay} />
        <Tab.Screen name="Calendar" component={Calendar} />
        {/* <Tab.Screen name="Profile Edit" component={ProfileEdit} /> */}
        <Tab.Screen name="HomeScreen" 
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => (
            <View
            style={styleCss.navHome}
            >
            {/* <Icon name="add-circle-outline" color="grey" size={68}/> */}
            </View>
        )

        }}
        component={ShoppingBag} />
        <Tab.Screen name="Restaurant" component={Restaurant} />
        <Tab.Screen name="Location" component={Location} />
        <Tab.Screen name="oneDay" component={OnedayplanDetails} />
        <Tab.Screen name="Accordion" component={AccordionPanel} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
