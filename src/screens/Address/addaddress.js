import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Keyboard,
} from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup';
import {Picker} from '@react-native-community/picker';
import {ScrollView} from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import Toast from 'react-native-simple-toast';
import {addressListActions} from '../../actions/addresslist';
import {addAddressActions} from '../../actions/addaddress';
let styleCss = require('../../GlobalStyle');
const {height} = Dimensions.get('window');
import {
  ARROW_LEFT,
  CHECKED,
  HEADER_unchecked,
  LOGO,
} from '../../_helpers/ImageProvide';
import {ADD_AND_UPDATE_API} from '../../util/api';
const FieldWrapper = ({children, label, formikProps, formikKey}) => (
  <View style={{marginHorizontal: 20, marginVertical: 1}}>
    <Text style={{marginBottom: 3}}>{label}</Text>
    {children}
    <Text style={{color: 'red'}}>
      {formikProps.touched[formikKey] && formikProps.errors[formikKey]}
    </Text>
  </View>
);

const StyledInputName = ({
  label,
  formikProps,
  formikKey,
  icon,
  value,
  autoFocus,
  ...rest
}) => {
  const inputStyles = {
    borderColor: '#e0e0e0',
    padding: 10,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 50,
    textAlign: 'left',
    height: 50,
    width: 300,
    borderWidth: 1,
    shadowOffset:
      Platform.OS === 'ios' ? {width: 15, height: 15} : {width: 20, height: 20},
    shadowColor: 'black',
    shadowOpacity: Platform.OS === 'ios' ? 0.2 : 5,
    backgroundColor: '#0000', // invisible color
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    marginTop: -15,
    fontStyle: 'italic',
  };

  if (formikProps.touched[formikKey] && formikProps.errors[formikKey]) {
    inputStyles.borderColor = 'red';
  }

  return (
    <FieldWrapper
      label={label}
      formikKey={formikKey}
      formikProps={formikProps}
      icon={icon}>
      <Image
        style={{
          zIndex: 1000,
          marginLeft: 20,
          marginTop: 25,
          position: 'absolute',
        }}
        source={require('../../../assets/image/register/name.png')}
      />
      <TextInput
        style={inputStyles}
        inlineImageLeft="email"
        onChangeText={formikProps.handleChange(formikKey)}
        onBlur={formikProps.handleBlur(formikKey)}
        value={value}
        autoFocus={autoFocus}
        {...rest}
      />
    </FieldWrapper>
  );
};

const validationSchema = yup.object().shape({
  name: yup.string().required('Please enter first name'),
  block: yup.string().required('Please enter block'),
  street: yup.string().required('Please enter street'),
  building: yup.string().required('Please enter building'),
  floor: yup
    .number()
    .typeError('Please enter a valid floor number')
    .required('Please enter floor'),
  apartment_number: yup
    .number()
    .typeError('Please enter a valid apartment number')
    .required('Please enter apartment number'),
  area: yup.string(),
  additional_direction: yup.string(),
});

const Addaddress = (props) => {
  const [checked, setChecked] = useState(false);
  const [selectedValue, setSelectedValue] = useState('Home');
  const [formData, setformData] = useState({
    address_type: '',
    area: '',
    block: '',
    street: '',
    building: '',
    floor: '',
    apartment_number: '',
    name: '',
    additional_direction: '',
    is_default_address: '',
  });
  if (props.addaddressMessage) {
    Toast.showWithGravity(props.addaddressMessage, Toast.SHORT, Toast.CENTER);
  }
  useEffect(() => {
    setformData(props.route.params.formData);
  }, []);
  if (props.labelData) {
    return (
      <ScrollView
        style={{paddingHorizontal: 20, height}}
        keyboardShouldPersistTaps="handled"
        keyboardDismissMode="interactive">
        <View style={styleCss.mainContainer}>
          <View style={styleCss.creditHeader}>
            <View style={{flex: 1, alignItems: 'flex-start'}}>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('Addresslist')}>
                <Image style={{width: 36, height: 14}} source={ARROW_LEFT} />
              </TouchableOpacity>
            </View>
            <View style={{flex: 1, alignItems: 'center'}}>
              <Image style={{width: 50, height: 40}} source={LOGO} />
            </View>
            <View style={{flex: 1}}></View>
          </View>
          <View>
            <Text style={styleCss.headingPro}> Address</Text>
          </View>
          <Formik
            initialValues={{
              name: '',
              block: '',
              street: '',
              building: '',
              floor: '',
              apartment_number: '',
              area: '',
              additional_direction: '',
            }}
            onSubmit={(values, actions) => {
              Keyboard.dismiss();

              const data = {
                address_type: selectedValue,
                area: props.route.params.area,
                block: values.block,
                street: values.street,
                building: values.building,
                floor: values.floor,
                apartment_number: values.apartment_number,
                name: values.name,
                additional_direction: values.additional_direction,
                is_default_address: checked ? 1 : 0,
              };
              ADD_AND_UPDATE_API(data, 'add-address').then((data) => {
                actions.setSubmitting(true);
                if (data.success) {
                  Toast.showWithGravity(data.message, Toast.LONG, Toast.CENTER);
                  props.addressListAction().then((data) => {
                    props.navigation.navigate('Addresslist');
                  });
                } else {
                  Toast.showWithGravity(data.message, Toast.LONG, Toast.CENTER);
                }
              });
            }}
            validationSchema={validationSchema}>
            {(formikProps) => (
              <React.Fragment>
                <StyledInputName
                  formikProps={formikProps}
                  formikKey="name"
                  placeholder="Name"
                  value={formData.name ? formData.name : ''}
                />
                <StyledInputName
                  formikProps={formikProps}
                  formikKey="floor"
                  placeholder="Floor"
                  value={formData.floor ? formData.floor : ''}
                />
                <StyledInputName
                  formikProps={formikProps}
                  formikKey="block"
                  placeholder="Block"
                  value={formData.block ? formData.block : ''}
                />
                <StyledInputName
                  formikProps={formikProps}
                  formikKey="apartment_number"
                  placeholder="Apartment Number"
                  value={
                    formData.apartment_number ? formData.apartment_number : ''
                  }
                />
                <StyledInputName
                  formikProps={formikProps}
                  formikKey="street"
                  placeholder="Street"
                  value={formData.street ? formData.street : ''}
                />
                <StyledInputName
                  formikProps={formikProps}
                  formikKey="building"
                  placeholder="Building"
                  value={formData.building ? formData.building : ''}
                />
                <StyledInputName
                  formikProps={formikProps}
                  formikKey="area"
                  placeholder="Area"
                  value={formData.area ? formData.area : ''}
                />
                <View style={[styles.inputStyles]}>
                  <Image
                    style={{
                      zIndex: 1000,
                      marginLeft: 20,
                      marginTop: 15,
                      position: 'absolute',
                    }}
                    source={require('../../../assets/image/register/name.png')}
                  />
                  <Picker
                    selectedValue={selectedValue}
                    onValueChange={(itemValue) => setSelectedValue(itemValue)}>
                    <Picker.Item label="Home" value="Home" />
                    <Picker.Item label="Office" value="Office" />
                    <Picker.Item label="Other" value="Other" />
                  </Picker>
                </View>
                <StyledInputName
                  formikProps={formikProps}
                  formikKey="additional_direction"
                  placeholder="Additional Direction"
                  value={
                    formData.additional_direction
                      ? formData.additional_direction
                      : ''
                  }
                />

                <TouchableOpacity
                  onPress={() => {
                    setChecked(!checked);
                  }}
                  style={styles.radioAlign}>
                  <Image
                    style={styles.imgSize}
                    source={checked ? CHECKED : HEADER_unchecked}
                  />
                  <View>
                    <Text numberOfLines={1} style={styles.radioText}>
                      Make this my default address?
                    </Text>
                  </View>
                </TouchableOpacity>
                <View
                  style={{
                    backgroundColor: 'white',
                    paddingLeft: 15,
                    paddingRight: 15,
                    paddingVertical: 30,
                  }}>
                  <TouchableOpacity
                    onPress={formikProps.handleSubmit}
                    style={[styleCss.btnButton, styleCss.mrTop]}>
                    <Text style={styles.text}>Submit</Text>
                  </TouchableOpacity>
                  <Text style={{color: 'red'}}>
                    {formikProps.errors.general}
                  </Text>
                </View>
              </React.Fragment>
            )}
          </Formik>
        </View>
      </ScrollView>
    );
  } else {
    return null;
  }
};

var styles = StyleSheet.create({
  imgStyle: {
    width: 35,
    alignItems: 'center',
    paddingLeft: 8,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
  },
  radioAlign: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 25,
  },
  radioText: {
    paddingLeft: 10,
  },
  radioTextHeading: {
    paddingLeft: 10,
    color: '#98979d',
  },
  imgSize: {
    width: 20,
    height: 20,
  },
  inputStyles: {
    borderColor: '#e0e0e0',
    paddingLeft: 50,
    textAlign: 'left',
    height: 50,
    width: 300,
    borderWidth: 1,
    shadowOffset:
      Platform.OS === 'ios' ? {width: 15, height: 15} : {width: 20, height: 20},
    shadowColor: 'black',
    shadowOpacity: Platform.OS === 'ios' ? 0.2 : 5,
    backgroundColor: '#0000', // invisible color
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    marginBottom: 10,
    marginLeft: 20,
    fontStyle: 'italic',
  },
});

//export default Addaddress;
const mapStateToProps = (state) => {
  return {
    addressStatus: state.addresslistReducer.addressStatus,
    labelData: state.labelReducer.labelData,
    addaddressMessage: state.addaddressReducer.addaddressMessage,
    regError: state.registrationReducer.regError,
    regResponse: state.registrationReducer.regResponse,
  };
};
const actionCreators = {
  addressListAction: addressListActions.addressListAction,
  addAddressAction: addAddressActions.addAddressAction,
};
export default connect(mapStateToProps, actionCreators)(Addaddress);
