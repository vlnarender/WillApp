import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  PermissionsAndroid,
} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {CURSOR_ICON, PINMARKER} from '../../_helpers/ImageProvide';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Geocoder from 'react-native-geocoding';
import {GOOGLE_API_KEY} from '../../_helpers/globalVeriable';
const latitudeDelta = 0.025;
const longitudeDelta = 0.025;
const LocationPicker = (props) => {
  const [region, setRegion] = useState({
    latitudeDelta,
    longitudeDelta,
    latitude: 0,
    longitude: 0,
  });
  const [address, setaddress] = useState();
  const [markers, setMarkers] = useState({
    coordinate: {
      latitude: 0,
      longitude: 0,
    },
    title: 'Best Place',
    description: 'Description',
    id: 1,
  });
  const [listViewDisplayed, setlistViewDisplayed] = useState('auto');
  useEffect(() => {
    getGeoLocation();
    // RNAndroidLocationEnabler.promptForEnableLocationIfNeeded({
    //   interval: 10000,
    //   fastInterval: 5000,
    // })
    //   .then((data) => {
    //   })
    //   .catch((err) => {
    //   });
  }, []);
  const GeocoderLocation = async (latitude, longitude) => {
    await Geocoder.init(GOOGLE_API_KEY);
    await Geocoder.from(latitude, longitude)
      .then((json) => {
        setRegion({
          latitude,
          longitude,
          latitudeDelta,
          longitudeDelta,
        });
        var addressComponent = json.results[0].formatted_address;
        setaddress(addressComponent);
        setMarkers({
          coordinate: {
            latitude: json.results[0].geometry.location.lat,
            longitude: json.results[0].geometry.location.lng,
          },
          title: JSON.stringify(
            json.results[0].address_components[0].long_name,
          ).replace(/"/g, ''),
          description: JSON.stringify(
            json.results[0].formatted_address,
          ).replace(/"/g, ''),
        });
      })
      .catch((error) => console.warn(error));
  };
  const getGeoLocation = async () => {
    const result = await PermissionsAndroid.requestMultiple([
      PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
    ]);
    if (result['android.permission.ACCESS_COARSE_LOCATION']) {
      await Geolocation.getCurrentPosition(
        (position) => {
          setRegion({
            latitudeDelta,
            longitudeDelta,
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
          // GeocoderLocation(position.coords.latitude, position.coords.longitude);
          getCurrentAddress(
            position.coords.latitude,
            position.coords.longitude,
          );
        },
        (error) => {
          // See error code charts below.
          console.error(
            'See error code ',
            error.code,
            '\n\n\nSee error message\n\n\n',
            error.message,
          );
        },
        {enableHighAccuracy: false, timeout: 15000},
      );
    }
  };
  const getCurrentAddress = (latitude, longitude) => {
    fetch(
      'https://maps.googleapis.com/maps/api/geocode/json?key=' +
        GOOGLE_API_KEY +
        '&latlng=' +
        latitude +
        ',' +
        longitude,
    )
      .then((response) => response.json())
      .then((responseJson) => {
        setaddress(
          JSON.stringify(responseJson.results[0].formatted_address).replace(
            /"/g,
            '',
          ),
        );
        onRegionChange({
          ...region,
          latitude: responseJson.results[0].geometry.location.lat,
          longitude: responseJson.results[0].geometry.location.lng,
        });
        setMarkers({
          coordinate: {
            latitude: responseJson.results[0].geometry.location.lat,
            longitude: responseJson.results[0].geometry.location.lng,
          },
          title: JSON.stringify(
            responseJson.results[0].address_components[0].long_name,
          ).replace(/"/g, ''),
          description: JSON.stringify(
            responseJson.results[0].formatted_address,
          ).replace(/"/g, ''),
        });
      });
  };

  const goToInitialLocation = (region) => {
    let initialRegion = Object.assign({}, region);
    initialRegion['latitudeDelta'] = 0.005;
    initialRegion['longitudeDelta'] = 0.005;
  };
  const onRegionChange = (region) => {
    GeocoderLocation(region.latitude, region.longitude);
  };

  return (
    <View style={styles.map}>
      <MapView
        provider={PROVIDER_GOOGLE}
        onMapReady={() => goToInitialLocation(region)}
        style={styles.map}
        initialRegion={region}
        region={region}
        onRegionChangeComplete={(ref) => onRegionChange(ref)}
        showsUserLocation={true}>
        <Marker
          coordinate={markers.coordinate}
          title={markers.title}
          description={markers.description}
          draggable
          pinColor="#f2ae88"
        />
      </MapView>
      <View style={styles.panel}>
        <View style={listViewDisplayed ? styles.panelFill : styles.panel}>
          <GooglePlacesAutocomplete
            currentLocation={false}
            enableHighAccuracyLocation={true}
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
              setlistViewDisplayed(null);
              setaddress(data.description);
              setRegion({
                latitudeDelta,
                longitudeDelta,
                latitude: details.geometry.location.lat,
                longitude: details.geometry.location.lng,
              });
              goToInitialLocation(region);
            }}
            textInputProps={{
              onChangeText: (text) => {
                setlistViewDisplayed(null);
              },
            }}
            getDefaultValue={() => {
              return ''; // text input default value
            }}
            query={{
              key: GOOGLE_API_KEY,
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

      {address && (
        <KeyboardAvoidingView style={styles.footer}>
          <View style={{flexDirection: 'column', margin: 20}}>
            <Text style={styles.addressText}>
              Select your location from map
            </Text>
            {address && (
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={CURSOR_ICON}
                  style={{width: 20, height: 20, padding: 10, margin: 10}}
                />
                <Text
                  style={{
                    width: '100%',
                    alignSelf: 'center',
                    flex: 0.9,
                    alignContent: 'flex-start',
                  }}>
                  {address}
                </Text>
              </View>
            )}
          </View>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('Addaddress', {
                formData: {
                  address_type: '',
                  area: address,
                  block: '',
                  street: '',
                  building: '',
                  floor: '',
                  apartment_number: '',
                  name: '',
                  additional_direction: '',
                  is_default_address: '',
                },
                Action: 'add-address',
              });
            }}
            style={{
              width: '90%',
              alignSelf: 'center',
              alignItems: 'center',
              backgroundColor: '#f2ae88',
              borderRadius: 10,
              shadowColor: 'rgba(0,0,0, .4)', // IOS
              shadowOffset: {height: 1, width: 1}, // IOS
              shadowOpacity: 1, // IOS
              shadowRadius: 1, //IOS
              elevation: 2, // Android
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 12,
                fontWeight: 'bold',
                paddingVertical: 15,
              }}>
              Next
            </Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      )}
    </View>
  );
};

export default LocationPicker;
const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
  marker: {
    height: 50,
    width: 50,
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
    fontSize: 35,
    fontWeight: 'bold',
  },
  footer: {
    backgroundColor: 'white',
    bottom: 0,
    position: 'absolute',
    width: '100%',
    height: '32%',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },

  panel: {
    position: 'absolute',
    alignSelf: 'stretch',
    top: 10,
    left: 0,
    right: 0,
    padding: 20,
  },
});
