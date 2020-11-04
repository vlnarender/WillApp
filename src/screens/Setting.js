import React, {useState, useEffect} from 'react';
import {View, Text, Image, ScrollView, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import ToggleSwitch from 'toggle-switch-react-native';
import Toggle from '../components/Toggle';
import AsyncStorage from '@react-native-community/async-storage';
let styleCss = require('../GlobalStyle');
import {profileActions} from '../actions/profile';
import {labelActions} from '../actions/label';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Headers from '../components/Header';
const Setting = (props) => {
  const [LocalLanguage, setLocalLanguage] = useState('');
  useEffect(() => {
    getValue();
  }, []);
  const getValue = async () => {
    try {
      setLocalLanguage(await AsyncStorage.getItem('language'));
    } catch (e) {
      console.error(e);
    }
  };
  const languageChange = (isOn) => {
    AsyncStorage.setItem('language', isOn ? 'en' : 'ar');
    props.labelAction();
    setLocalLanguage(isOn ? 'en' : 'ar');
  };
  if (props.settingStatus && props.labelStatus) {
    const length = props.settingData.email.indexOf('@');
    const email_1 = props.settingData.email.slice(0, length - 2);
    const email_2 = props.settingData.email.slice(length + 3);
    const email = email_1 + '**@**' + email_2;
    const langChange = props.labelData;
    return (
      <>
        <Headers />
        <View style={styleCss.mainContainer}>
          <View>
            <Text style={{fontSize: 22, fontWeight: '700', marginVertical: 20}}>
              {langChange.setting}
            </Text>
          </View>
          <View>
            <View style={styles.settingRow}>
              <View>
                <Text style={styles.setTextLight}>{langChange.lang}</Text>
                <Text style={styles.setTextDark}>
                  {LocalLanguage == 'en' ? 'English' : 'عربى'}
                </Text>
              </View>
              <View>
                <ToggleSwitch
                  isOn={LocalLanguage == 'en' ? true : false}
                  onColor="#f2ae88"
                  offColor="#d0d0d2"
                  size="small"
                  onToggle={(isOn) => languageChange(isOn)}
                />
              </View>
            </View>
          </View>
          <View style={styles.settingRow}>
            <View>
              <Text style={styles.setTextLight}>{langChange.email}</Text>
              <Text style={styles.setTextDark}>{email}</Text>
            </View>
            <View>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('Changeemail')}>
                <Text style={styles.setGreenText}>Change</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.settingRow}>
            <View>
              <Text style={styles.setTextLight}>{langChange.pass}</Text>
              <Text style={styles.setTextDark}>
                {props.settingData.password}
              </Text>
            </View>
          </View>

          <View style={styles.settingRow}>
            <View>
              <Text style={styles.setTextLight}>Location</Text>
              <Text style={styles.setTextDark}>Ardyia, Kuwait</Text>
            </View>
            <View>
              <Text style={styles.setGreenText}>Edit</Text>
            </View>
          </View>

          <View style={styles.settingRow}>
            <View>
              <Text style={styles.setTextLight}>Receive notfication</Text>
              <Text style={styles.setTextDark}>Enabled</Text>
            </View>
            <View>
              <Toggle booleanValue={true} />
            </View>
          </View>
          <View style={styles.settingRow}>
            <View>
              <Text style={styles.setTextLight}>
                {langChange.alow_location}
              </Text>
              <Text style={styles.setTextDark}>Disabled</Text>
            </View>
            <View>
              <Toggle booleanValue={false} />
            </View>
          </View>

          <View style={styles.settingRow}>
            <View>
              <Text style={styles.setTextLight}>
                {langChange.receive_specail_offers}
              </Text>
              <Text style={styles.setTextDark}>Enabled</Text>
            </View>
            <View>
              <Toggle booleanValue={false} />
            </View>
          </View>
        </View>
      </>
    );
  } else {
    return (
      <View>
        <Image source={require('../../assets/infinity.gif')} />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  settingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  setTextLight: {
    color: '#b8b7ba',
    fontSize: 15,
  },
  setTextDark: {
    color: '#000',
    fontSize: 15,
    marginTop: 5,
  },

  setGreenText: {
    color: '#65c986',
    fontWeight: '700',
    fontSize: 14,
  },
});
const mapStateToProps = (state) => {
  return {
    settingError: state.profileReducer.profileError,
    settingMessage: state.profileReducer.profileMessage,
    settingData: state.profileReducer.profileData,
    settingStatus: state.profileReducer.profileStatus,
    labelData: state.labelReducer.labelData,
    labelStatus: state.labelReducer.labelStatus,
  };
};
const actionCreators = {
  profileAction: profileActions.profileUserAction,
  labelAction: labelActions.labelAction,
};
export default connect(mapStateToProps, actionCreators)(Setting);
