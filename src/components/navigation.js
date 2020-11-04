import React from 'react';
import {View, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  ContactStackNavigator,
  ProfileStackNavigator,
  FavouriteStackNavigator,
  OffersStackNavigator,
  SubscriptionStackNavigator,
} from './stackNavigator';
import {connect} from 'react-redux';
const Tab = createBottomTabNavigator();
const BottomTabNavigator = (props) => {
  const customTabBarStyle = {
    activeTintColor: '#f2ae88',
    labelStyle: {fontSize: 12},
    inactiveTintColor: '#8e8e8e',
    style: {backgroundColor: 'white'},
  };
  function getTabBarVisible(route) {
    const routeName = route.state
      ? route.state.routes[route.state.index].name
      : '';
    if (routeName === 'Subscription') {
      return false;
    }
    return true;
  }
  if (props.labelStatus) {
    return (
      <Tab.Navigator
        activeColor="#f2ae88"
        inactiveColor="#8e8e8e"
        initialRouteName="Home"
        tabBarOptions={customTabBarStyle}
        shifting="false"
        initialRouteName="Home">
        <Tab.Screen
          name="Profile"
          component={ProfileStackNavigator}
          options={{
            tabBarLabel: props.labelData.profile,
            tabBarIcon: ({color}) => (
              <View>
                {color === '#f2ae88' ? (
                  <Image
                    source={require('../../assets/login/profileActive.png')}
                  />
                ) : (
                  <Image source={require('../../assets/login/profile.png')} />
                )}
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Favourite"
          component={FavouriteStackNavigator}
          options={{
            tabBarLabel: props.labelData.favourites,
            tabBarIcon: ({color}) => (
              <View>
                {color === '#f2ae88' ? (
                  <Image
                    source={require('../../assets/login/favoriteActive.png')}
                  />
                ) : (
                  <Image source={require('../../assets/login/favorite.png')} />
                )}
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Home"
          component={ContactStackNavigator}
          options={{
            tabBarLabel: props.labelData.home,
            unmountOnBlur: 'true',
            tabBarIcon: ({color}) => (
              <View
                style={{
                  position: 'absolute',
                  bottom: -5, // space from bottombar
                  height: 68,
                  width: 68,
                  borderRadius: 100,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: 'white',
                  shadowColor: '#000',

                  shadowOffset: {
                    width: 0,
                    height: -3,
                  },
                  shadowOpacity: 0.8,
                  shadowRadius: 1,
                  elevation: 0,
                }}>
                {color === '#f2ae88' ? (
                  <Image
                    source={require('../../assets/login/homeActive.png')}
                  />
                ) : (
                  <Image source={require('../../assets/login/home.png')} />
                )}
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Offers"
          component={OffersStackNavigator}
          options={{
            tabBarLabel: 'Offers',
            tabBarIcon: ({color}) => (
              <View>
                {color === '#f2ae88' ? (
                  <Image
                    source={require('../../assets/login/offerActive.png')}
                  />
                ) : (
                  <Image source={require('../../assets/login/offer.png')} />
                )}
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Subscription"
          component={SubscriptionStackNavigator}
          options={{
            tabBarLabel: props.labelData.subscription,
            tabBarVisible: false,
            tabBarIcon: ({color}) => (
              <View>
                {color === '#f2ae88' ? (
                  <Image
                    source={require('../../assets/login/subscriptionActive.png')}
                  />
                ) : (
                  <Image
                    source={require('../../assets/login/subscription.png')}
                  />
                )}
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    );
  } else return null;
};

const mapStateToProps = (state) => {
  return {
    labelData: state.labelReducer.labelData,
    labelStatus: state.labelReducer.labelStatus,
  };
};
export default connect(mapStateToProps, null)(BottomTabNavigator);
