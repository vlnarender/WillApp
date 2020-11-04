import Axios from 'axios';
import {DEV_CONFIGS, PROD_CONFIGS} from './constant';
import qs from 'qs';
import AsyncStorage from '@react-native-community/async-storage';
const axios = Axios.create({
  baseURL: PROD_CONFIGS.url,
  timeout: 80000,
  headers: {
    'Content-Type': 'application/json',
  },
  validateStatus: function (status) {
    return status == 200;
  },
});

axios.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    console.error('API ERR:', error.message);
    return Promise.reject(error);
  },
);

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API ERR:', error);
    return Promise.reject(error);
  },
);
export const userHome = async (data) => {
  let headers = {'Content-Type': 'multipart/form-data'};
  return await axios.get('user/home', {headers: headers});
};

export const registration = async (data) => {
  let formBody = [];
  for (let property in data) {
    let encodedKey = encodeURIComponent(property);
    let encodedValue = encodeURIComponent(data[property]);
    formBody.push(encodedKey + '=' + encodedValue);
  }
  formBody = formBody.join('&');
  let config = {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
    'X-Localization': 'en',
  };
  return await axios.post('register', formBody, {headers: config});
};

const getAsyncStorage = async () => {
  return {
    device_token: await AsyncStorage.getItem('device_token'),
    device_type: await AsyncStorage.getItem('device_type'),
    language: (await AsyncStorage.getItem('language')) === 'ar' ? 'ar' : 'en',
    token: await AsyncStorage.getItem('token'),
    bearer: 'Bearer ' + (await AsyncStorage.getItem('token')),
  };
};
/***** common api which need language, bearer and form data *****/
export const COOMMON_API = async (formBody, API_NAME) => {
  const data = await getAsyncStorage();
  const contentType =
    API_NAME === ('edit/profile' || 'upload/profile/image')
      ? 'multipart/form-data'
      : 'application/x-www-form-urlencoded';

  return fetch(`${DEV_CONFIGS.url}/${API_NAME}`, {
    method: 'POST',
    headers: {
      'X-Localization': data.language,
      Authorization: data.bearer,
      'Content-Type': contentType,
    },
    body: formBody,
  })
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson;
    })
    .catch((e) => {
      console.error(e);
    });
};

/***** common GET api which need language, bearer for response *****/

export const GET_API = async (API_NAME) => {
  const data = await getAsyncStorage();

  return fetch(`${DEV_CONFIGS.url}/${API_NAME}`, {
    method: 'POST',
    headers: {
      'X-Localization': data.language,
      Authorization: data.bearer,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  })
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson;
    })
    .catch((e) => console.error(e));
};

/***** common USER api which need only form data for response *****/

export const USER_API = (data, API_NAME) => {
  let formBody = [];
  for (let property in data) {
    let encodedKey = encodeURIComponent(property);
    let encodedValue = encodeURIComponent(data[property]);
    formBody.push(encodedKey + '=' + encodedValue);
  }
  formBody = formBody.join('&');
  return fetch(`${DEV_CONFIGS.url}/${API_NAME}`, {
    method: 'POST',
    headers: {
      'X-Localization': 'en',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: formBody,
  })
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson;
    });
};

/***** common add and update api which need language,bearer form data for response *****/

export const ADD_AND_UPDATE_API = async (data, API_NAME) => {
  let localstorage = await getAsyncStorage();
  // console.log('formBody', data);

  let formBody = [];
  for (let property in data) {
    let encodedKey = encodeURIComponent(property);
    let encodedValue = encodeURIComponent(data[property]);
    formBody.push(encodedKey + '=' + encodedValue);
  }

  formBody = formBody.join('&');
  console.log('formBody', formBody);

  console.log(data, API_NAME, 'api');
  return fetch(`${DEV_CONFIGS.url}/${API_NAME}`, {
    method: 'POST',
    headers: {
      'X-Localization': localstorage.language,
      Authorization: localstorage.bearer,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: formBody,
  })
    .then((response) => response.json())
    .then((responseJson) => {
      // console.log('inside ADD_AND_UPDATE_API', responseJson);
      return responseJson;
    })
    .catch((error) => {
      console.error(error);
    });
};