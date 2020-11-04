import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../screens/login';
import OtpScreen from '../screens/otp';
import ForgotOtpScreen from '../screens/forgototp';
import ForgotScreen from '../screens/forgot';
import RegisterScreen from '../screens/register';
import HomeScreen from '../screens/home';
import EmailScreen from '../screens/email';
import Profile from '../screens/Profile';
import Favourite from '../screens/Favourite';
import Offers from '../screens/Offers';
import Subscription from '../screens/Subscription';
import ProfileEdit from '../screens/ProfileEdit';
import Setting from '../screens/Setting';
import Changepassword from '../screens/changepassword';
import Changeotp from '../screens/changeotp';
import Changeemail from '../screens/changeemail';
import Spalsh from '../screens/anim-screen/index';
import MyPaymentMethod from '../screens/myPaymentMethod';
import Dietcompanies from '../screens/dietcompanies';
import Addresslist from '../screens/addresslist';
import Addaddress from '../screens/addaddress';
import Editaddress from '../screens/editaddress';
import OneDayPlan from '../screens/oneplan';

import TermCondition from '../screens/termCondition';
import PrivacyPolicy from '../screens/privacyPolicy';
import FaqSupport from '../screens/faqSupport';
import CommonCalendar from '../components/CommonCalendar';
import CartComponent from './CartComponent';
import ProgramsComponent from '../screens/programs/Programs';
import PlanListProgram from '../screens/programs/PlanListProgram';
const Stack = createStackNavigator();
const screenOptionStyle = {
  cardStyle: {backgroundColor: '#fff', color: '#f2ae88'},
  headerShown: false,
};
const MainStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={'Splash'}
      screenOptions={screenOptionStyle}>
      <Stack.Screen name="Splash" component={Spalsh} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Otp" component={OtpScreen} />
      <Stack.Screen name="Forgot" component={ForgotScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Email" component={EmailScreen} />
      <Stack.Screen name="ForgotOtp" component={ForgotOtpScreen} />
    </Stack.Navigator>
  );
};
const CustomStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={'Login'}
      screenOptions={screenOptionStyle}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Otp" component={OtpScreen} />
      <Stack.Screen name="Forgot" component={ForgotScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Email" component={EmailScreen} />
      <Stack.Screen name="ForgotOtp" component={ForgotOtpScreen} />
    </Stack.Navigator>
  );
};
const ContactStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={'Home'}
      screenOptions={screenOptionStyle}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Diet" component={Dietcompanies} />
      <Stack.Screen name="OneDayPlan" component={OneDayPlan} />
    </Stack.Navigator>
  );
};

const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="ProfileEdit" component={ProfileEdit} />
    </Stack.Navigator>
  );
};

const FavouriteStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Favourite" component={Favourite} />
    </Stack.Navigator>
  );
};

const OffersStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Offers" component={Offers} />
    </Stack.Navigator>
  );
};
const SubscriptionStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Subscription" component={Subscription} />
    </Stack.Navigator>
  );
};
const SettingStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={'Setting'}
      screenOptions={screenOptionStyle}>
      <Stack.Screen name="Setting" component={Setting} />
      <Stack.Screen name="Changepassword" component={Changepassword} />
      <Stack.Screen name="Changeotp" component={Changeotp} />
      <Stack.Screen name="Changeemail" component={Changeemail} />
    </Stack.Navigator>
  );
};
const CardStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={'Cardlisting'}
      screenOptions={screenOptionStyle}>
      <Stack.Screen name="Cardlisting" component={MyPaymentMethod} />
    </Stack.Navigator>
  );
};
const AddressStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={'Addresslist'}
      screenOptions={screenOptionStyle}>
      <Stack.Screen name="Addresslist" component={Addresslist} />
      <Stack.Screen name="Addaddress" component={Addaddress} />
      <Stack.Screen name="Editaddress" component={Editaddress} />
    </Stack.Navigator>
  );
};
const FaqSupportStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={'FaqSupport'}
      screenOptions={screenOptionStyle}>
      <Stack.Screen name="FaqSupport" component={FaqSupport} />
    </Stack.Navigator>
  );
};
const PrivacyPolicyStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={'PrivacyPolicy'}
      screenOptions={screenOptionStyle}>
      <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
    </Stack.Navigator>
  );
};

const TermConditionStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={'TermCondition'}
      screenOptions={screenOptionStyle}>
      <Stack.Screen name="TermCondition" component={TermCondition} />
    </Stack.Navigator>
  );
};

const CartStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={'Cart'}
      screenOptions={screenOptionStyle}>
      <Stack.Screen name="Cart" component={CartComponent} />
    </Stack.Navigator>
  );
};
const ProgramsStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={screenOptionStyle}
      initialRouteName={'Programs'}>
      <Stack.Screen name="Programs" component={ProgramsComponent} />
    </Stack.Navigator>
  );
};

const CommonCalendarStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="CommonCalendar" component={CommonCalendar} />
    </Stack.Navigator>
  );
};

export {
  MainStackNavigator,
  ProgramsStackNavigator,
  CustomStackNavigator,
  ContactStackNavigator,
  ProfileStackNavigator,
  FavouriteStackNavigator,
  OffersStackNavigator,
  SubscriptionStackNavigator,
  SettingStackNavigator,
  CardStackNavigator,
  AddressStackNavigator,
  FaqSupportStackNavigator,
  TermConditionStackNavigator,
  PrivacyPolicyStackNavigator,
  CartStackNavigator,
  CommonCalendarStackNavigator,
};
