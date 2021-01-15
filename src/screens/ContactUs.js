import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Linking,
  Modal,
} from 'react-native';
import {
  COMMON_ARROW_LEFT,
  LOGO,
  CALL,
  EMAIL,
  WHATS_APP,
  LIVE_CHAT,
} from '../_helpers/ImageProvide';
let styleCss = require('../GlobalStyle');
const ContactUs = (props) => {
  const [phoneNumber] = useState('8986677880');
  const [whatsAppNumber] = useState('+918986677880');
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <ScrollView style={{backgroundColor: 'white', flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image style={{width: 50, height: 40}} source={LOGO} />
      </View>

      <View style={styleCss.mainContainer}>
        <Modal animationType="slide" transparent={true} visible={modalVisible}>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              style={{
                backgroundColor: '#fff',
                width: 200,
                height: 107,
                elevation: 10,
                padding: 5,
                borderRadius: 10,
                borderWidth: 1,
                borderColor: '#F2A884',
              }}
              onPress={() => {
                setModalVisible(false);
                Linking.openURL(`tel:${phoneNumber}`);
              }}>
              <View
                style={{
                  borderWidth: 1,
                  borderColor: '#F2A884',
                  borderRadius: 10,
                  padding: 10,
                }}>
                <Text style={[styles.textSize, {textAlign: 'center'}]}>
                  Call Us
                </Text>
                <Text style={[styles.textSize, {textAlign: 'center'}]}>
                  {phoneNumber}
                </Text>
                <View style={{alignItems: 'center', marginTop: 5}}>
                  <Image source={CALL} />
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </Modal>
        <View style={styles.box}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TouchableOpacity
              onPress={() => {
                setModalVisible(true);
              }}>
              <Text style={styles.textSize}>Call Us</Text>
              <View style={{alignItems: 'center', marginTop: 5}}>
                <Image source={CALL} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                Linking.openURL(`https://wa.me/${whatsAppNumber}`)
              }>
              <Text style={styles.textSize}>What's App</Text>
              <View style={{alignItems: 'center', marginTop: 5}}>
                <Image source={WHATS_APP} />
              </View>
            </TouchableOpacity>
            <View>
              <Text style={styles.textSize}>Email</Text>
              <View style={{alignItems: 'center', marginTop: 5}}>
                <Image source={EMAIL} />
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignSelf: 'center',
              marginTop: 20,
            }}>
            <View>
              <Text style={styles.textSize}>Live Chat</Text>
              <View style={{alignItems: 'center', marginTop: 5}}>
                <Image source={LIVE_CHAT} />
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={{borderColor: '#f5c0a3', borderWidth: 1}}></View>
      <View style={styleCss.mainContainer}>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <View style={{flex: 1, alignItems: 'center'}}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Home')}
              style={{position: 'absolute', left: 0, top: 5}}>
              <Image
                style={{width: 30, height: 15}}
                source={COMMON_ARROW_LEFT}
              />
            </TouchableOpacity>
            <Text style={styles.textSizeHeading}>FAQ</Text>
          </View>
        </View>
        <View style={styles.box}>
          <View style={{borderColor: '#f5c0a3', borderWidth: 1, padding: 15}}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.textSize2}>Refund Policy - </Text>
              <Text style={styles.textSize3}>click to know more</Text>
            </View>
            <View style={{marginTop: 15}}>
              <Text style={styles.textSize4}>
                We do offer refund policy contact us at whatsapp
              </Text>
            </View>
          </View>
          <View
            style={{
              borderColor: '#f5c0a3',
              borderWidth: 1,
              padding: 15,
              marginTop: 20,
            }}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.textSize2}>Deliver Time - </Text>
              <Text style={styles.textSize3}>click to know more</Text>
            </View>
            <View style={{marginTop: 15}}>
              <Text style={styles.textSize4}>
                We do offer refund policy contact us at whatsapp
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  box: {
    shadowOffset:
      Platform.OS === 'ios' ? {width: 20, height: 20} : {width: 20, height: 20},
    shadowColor: 'black',
    shadowOpacity: Platform.OS === 'ios' ? 0.2 : 8,
    elevation: 5,
    borderRadius: 5,
    backgroundColor: '#fff',
    marginTop: 15,
    padding: 10,
    fontSize: 16,
    marginBottom: 20,
  },

  textSize: {
    fontSize: 16,
    color: '#000',
  },
  textSize2: {
    fontSize: 16,
    color: '#000',
    fontWeight: '700',
  },
  textSize3: {
    fontSize: 14,
    color: '#666',
  },
  textSize4: {
    fontSize: 16,
    color: '#666',
  },
  textSizeHeading: {
    fontSize: 20,
    color: '#000',
    fontWeight: '700',
  },
});
export default ContactUs;
