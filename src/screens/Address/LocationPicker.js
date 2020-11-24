import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
const latitudeDelta = 0.025;
const longitudeDelta = 0.025;
const LocationPicker = () => {
  const [region, setRegion] = useState({
    latitudeDelta,
    longitudeDelta,
    latitude: 12.840575,
    longitude: 77.651787,
  });
  const [address, setaddress] = useState();

  const getCurrentAddress = () => {
    fetch(
      'https://maps.googleapis.com/maps/api/geocode/json?address=' +
        region.latitude +
        ',' +
        region.longitude +
        '&key=' +
        'AIzaSyCf17TBUxZoAdZdPmL_8WtoJCoARQeco7M',
    )
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(
          'ADDRESS GEOCODE is BACK!! => ' + JSON.stringify(responseJson),
        );
        setaddress(
          JSON.stringify(responseJson.results[0].formatted_address).replace(
            /"/g,
            '',
          ),
        );
      });
  };
  useEffect(() => {
    getCurrentAddress();
  }, []);
  return (
    <View>
      <Text>hi</Text>
    </View>
  );
};

export default LocationPicker;
