import React, {useEffect, useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import MapView from 'react-native-maps';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {PINMARKER} from '../../_helpers/ImageProvide';
const latitudeDelta = 0.025;
const longitudeDelta = 0.025;
var mapView;
var searchText;

const LocationPicker = () => {
  const [region, setRegion] = useState({
    latitudeDelta,
    longitudeDelta,
    latitude: 12.840575,
    longitude: 77.651787,
  });
  const [listViewDisplayed, setlistViewDisplayed] = useState(true);
  const [address, setaddress] = useState();
  const [currentLat, setcurrentLat] = useState();
  const [currentLng, setcurrentLng] = useState();
  const [forceRefresh, setforceRefresh] = useState();
  const goToInitialLocation = (region) => {
    let initialRegion = Object.assign({}, region);
    initialRegion['latitudeDelta'] = 0.005;
    initialRegion['longitudeDelta'] = 0.005;
    mapView.animateToRegion(initialRegion, 2000);
  };
  const onRegionChange = (region) => {
    setRegion(region);
    setforceRefresh(Math.floor(Math.random() * 100));
    getCurrentAddress(); //callback
  };
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
    <View style={styles.map}>
      <MapView
        ref={(ref) => (mapView = ref)}
        onMapReady={() => goToInitialLocation(region)}
        style={styles.map}
        initialRegion={region}
        onRegionChangeComplete={onRegionChange}
      />
      <View style={styles.panel}>
        <View
          style={[
            styles.panelHeader,
            listViewDisplayed ? styles.panelFill : styles.panel,
          ]}>
          <GooglePlacesAutocomplete
            currentLocation={false}
            enableHighAccuracyLocation={true}
            ref={(c) => (searchText = c)}
            placeholder="Search for a location"
            minLength={2} // minimum length of text to search
            autoFocus={false}
            returnKeyType={'search'}
            listViewDisplayed={listViewDisplayed}
            fetchDetails={true}
            renderDescription={(row) => row.description}
            enablePoweredByContainer={false}
            listUnderlayColor="lightgrey"
            onPress={(data, details) => {
              setlistViewDisplayed(false);
              setaddress(data.description);
              setcurrentLat(details.geometry.location.lat);
              setcurrentLng(details.geometry.location.lng);
              setRegion({
                latitudeDelta,
                longitudeDelta,
                latitude: details.geometry.location.lat,
                longitude: details.geometry.location.lng,
              });
              searchText.setAddressText('');
              goToInitialLocation(region);
            }}
            textInputProps={{
              onChangeText: (text) => {
                console.log(text);
                setlistViewDisplayed(true);
              },
            }}
            getDefaultValue={() => {
              return ''; // text input default value
            }}
            query={{
              key: 'AIzaSyCf17TBUxZoAdZdPmL_8WtoJCoARQeco7M',
              language: 'en', // language of the results
              components: 'country:ind',
            }}
            styles={{
              description: {
                fontFamily: 'Calibri',
                color: 'black',
                fontSize: 12,
              },
              predefinedPlacesDescription: {
                color: 'black',
              },
              listView: {
                position: 'absolute',
                marginTop: 44,
                backgroundColor: 'white',
                borderBottomEndRadius: 15,
                elevation: 2,
              },
            }}
            nearbyPlacesAPI="GooglePlacesSearch"
            GooglePlacesSearchQuery={{
              rankby: 'distance',
              types: 'building',
            }}
            filterReverseGeocodingByTypes={[
              'locality',
              'administrative_area_level_3',
            ]}
            debounce={200}
          />
        </View>
      </View>
      <View style={styles.markerFixed}>
        <Image style={styles.marker} source={PINMARKER} />
      </View>
      <KeyboardAvoidingView style={styles.footer}>
        <View style={{flexDirection: 'row', margin: 10}}>
          <Text style={styles.addressText}>Address</Text>
        </View>
        <TextInput
          multiline={true}
          clearButtonMode="while-editing"
          style={{
            marginBottom: 5,
            width: '90%',
            minHeight: 70,
            alignSelf: 'center',
            borderColor: 'lightgrey',
            borderWidth: 1.5,
            fontSize: 12,
            borderRadius: 5,
            flex: 0.5,
            alignContent: 'flex-start',
            textAlignVertical: 'top',
            fontFamily: 'Calibri',
          }}
          onChangeText={(text) => setaddress(text)}
          value={address}
        />
        <TouchableOpacity
          onPress={() => {}}
          style={{
            width: '30%',
            alignSelf: 'center',
            alignItems: 'center',
            backgroundColor: 'lightgreen',
            borderRadius: 16.5,
            shadowColor: 'rgba(0,0,0, .4)', // IOS
            shadowOffset: {height: 1, width: 1}, // IOS
            shadowOpacity: 1, // IOS
            shadowRadius: 1, //IOS
            elevation: 2, // Android
          }}>
          <Text
            style={{
              color: 'white',
              fontFamily: 'Calibri',
              fontSize: 12,
              paddingVertical: 4,
            }}>
            SAVE
          </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};
const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
  markerFixed: {
    left: '50%',
    marginLeft: -24,
    marginTop: -48,
    position: 'absolute',
    top: '50%',
  },
  addressText: {
    color: 'black',
    margin: 3,
    fontFamily: 'Calibri',
  },
  footer: {
    backgroundColor: 'white',
    bottom: 0,
    position: 'absolute',
    width: '100%',
    height: '30%',
  },
  panelFill: {
    position: 'absolute',
    top: 0,
    alignSelf: 'stretch',
    right: 0,
    left: 0,
  },
  panel: {
    position: 'absolute',
    top: 0,
    alignSelf: 'stretch',
    right: 0,
    left: 0,
    flex: 1,
  },
  panelHeader: {
    //add custom header
  },
});
export default LocationPicker;
