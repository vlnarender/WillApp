export const cardListAPI = (data) => {
  var bearer = 'Bearer ' + data.token;
  var language = 'en';
  if (data.language == 'ar') {
    language = 'ar';
  }
  return fetch(`${DEV_CONFIGS.url}/creditcard/list`, {
    method: 'POST',
    headers: {
      'X-Localization': language,
      Authorization: bearer,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  })
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson;
    });
};

export const lableAPI = (data) => {
  var bearer = 'Bearer ' + data.token;
  var language = 'en';
  if (data.language == 'ar') {
    language = 'ar';
  }
  return fetch(`${DEV_CONFIGS.url}/lable-list`, {
    method: 'POST',
    headers: {
      'X-Localization': language,
      Authorization: bearer,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  })
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson;
    });
};
export const profileAPI = (data) => {
  var bearer = 'Bearer ' + data.token;
  var language = 'en';
  if (data.language == 'ar') {
    language = 'ar';
  }
  return fetch(`${DEV_CONFIGS.url}/my-profile`, {
    method: 'POST',
    headers: {
      'X-Localization': language,
      Authorization: bearer,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  })
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson;
    });
};

export const homeAPI = (data) => {
  var bearer = 'Bearer ' + data.token;
  var language = 'en';
  if (data.language == 'ar') {
    language = 'ar';
  }
  return fetch(`${DEV_CONFIGS.url}/home/list`, {
    method: 'POST',
    headers: {
      'X-Localization': language,
      Authorization: bearer,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  })
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson;
    });
};
export const addressListAPI = (data) => {
  var bearer = 'Bearer ' + data.token;
  var language = 'en';
  if (data.language == 'ar') {
    language = 'ar';
  }
  return fetch(`${DEV_CONFIGS.url}/my-addresses`, {
    method: 'POST',
    headers: {
      'X-Localization': language,
      Authorization: bearer,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  })
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson;
    });
};

export const getRegAPI = (data) => {
  let formBody = [];
  for (let property in data) {
    let encodedKey = encodeURIComponent(property);
    let encodedValue = encodeURIComponent(data[property]);
    formBody.push(encodedKey + '=' + encodedValue);
  }
  formBody = formBody.join('&');

  return fetch(`${DEV_CONFIGS.url}/register`, {
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

export const getLoginAPI = (data) => {
  let formBody = [];
  for (let property in data) {
    let encodedKey = encodeURIComponent(property);
    let encodedValue = encodeURIComponent(data[property]);
    formBody.push(encodedKey + '=' + encodedValue);
  }
  formBody = formBody.join('&');
  return fetch(`${DEV_CONFIGS.url}/login`, {
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

export const validateOtpAPI = (data) => {
  let formBody = [];
  for (let property in data) {
    let encodedKey = encodeURIComponent(property);
    let encodedValue = encodeURIComponent(data[property]);
    formBody.push(encodedKey + '=' + encodedValue);
  }
  formBody = formBody.join('&');

  return fetch(`${DEV_CONFIGS.url}/user/otp-verification`, {
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

export const forgotOtpAPI = (data) => {
  let formBody = [];
  for (let property in data) {
    let encodedKey = encodeURIComponent(property);
    let encodedValue = encodeURIComponent(data[property]);
    formBody.push(encodedKey + '=' + encodedValue);
  }
  formBody = formBody.join('&');

  return fetch(`${DEV_CONFIGS.url}/user/otp-verification`, {
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

export const forgotAPI = (data) => {
  let formBody = [];
  for (let property in data) {
    let encodedKey = encodeURIComponent(property);
    let encodedValue = encodeURIComponent(data[property]);
    formBody.push(encodedKey + '=' + encodedValue);
  }
  formBody = formBody.join('&');

  return fetch(`${DEV_CONFIGS.url}/user/set-new-password`, {
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

export const addressSetAPI = (add, data) => {
  let formBody = [];
  for (let property in data) {
    let encodedKey = encodeURIComponent(property);
    let encodedValue = encodeURIComponent(data[property]);
    formBody.push(encodedKey + '=' + encodedValue);
  }
  formBody = formBody.join('&');

  var bearer = 'Bearer ' + add.token;
  var language = 'en';
  if (add.language == 'ar') {
    language = 'ar';
  }
  return fetch(`${DEV_CONFIGS.url}/update-address`, {
    method: 'POST',
    headers: {
      'X-Localization': language,
      Authorization: bearer,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: formBody,
  })
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson;
    });
};

export const addAddressAPI = (add, data) => {
  let formBody = [];
  for (let property in data) {
    let encodedKey = encodeURIComponent(property);
    let encodedValue = encodeURIComponent(data[property]);
    formBody.push(encodedKey + '=' + encodedValue);
  }
  formBody = formBody.join('&');

  var bearer = 'Bearer ' + add.token;
  var language = 'en';
  if (add.language == 'ar') {
    language = 'ar';
  }
  return fetch(`${DEV_CONFIGS.url}/add-address`, {
    method: 'POST',
    headers: {
      'X-Localization': language,
      Authorization: bearer,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: formBody,
  })
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson;
    });
};

export const editAddressAPI = (add, data) => {
  let formBody = [];
  for (let property in data) {
    let encodedKey = encodeURIComponent(property);
    let encodedValue = encodeURIComponent(data[property]);
    formBody.push(encodedKey + '=' + encodedValue);
  }
  formBody = formBody.join('&');

  var bearer = 'Bearer ' + add.token;
  var language = 'en';
  if (add.language == 'ar') {
    language = 'ar';
  }
  return fetch(`${DEV_CONFIGS.url}/update-address`, {
    method: 'POST',
    headers: {
      'X-Localization': language,
      Authorization: bearer,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: formBody,
  })
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson;
    });
};
export const calendarAPI = (add, data) => {
  let formBody = [];
  for (let property in data) {
    let encodedKey = encodeURIComponent(property);
    let encodedValue = encodeURIComponent(data[property]);
    formBody.push(encodedKey + '=' + encodedValue);
  }
  formBody = formBody.join('&');

  var bearer = 'Bearer ' + add.token;
  var language = 'en';
  if (add.language == 'ar') {
    language = 'ar';
  }
  return fetch(`${DEV_CONFIGS.url}/restaurant/calendar`, {
    method: 'POST',
    headers: {
      'X-Localization': language,
      Authorization: bearer,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: formBody,
  })
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson;
    });
};

export const onedayplanAPI = (add, data) => {
  let formBody = [];
  for (let property in data) {
    let encodedKey = encodeURIComponent(property);
    let encodedValue = encodeURIComponent(data[property]);
    formBody.push(encodedKey + '=' + encodedValue);
  }
  formBody = formBody.join('&');

  var bearer = 'Bearer ' + add.token;
  var language = 'en';
  if (add.language == 'ar') {
    language = 'ar';
  }
  return fetch(`${DEV_CONFIGS.url}/get/restaurant-list/byfeature`, {
    method: 'POST',
    headers: {
      'X-Localization': language,
      Authorization: bearer,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: formBody,
  })
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson;
    });
};

export const validateEmailAPI = (data) => {
  let formBody = [];
  for (let property in data) {
    let encodedKey = encodeURIComponent(property);
    let encodedValue = encodeURIComponent(data[property]);
    formBody.push(encodedKey + '=' + encodedValue);
  }
  formBody = formBody.join('&');

  return fetch(`${DEV_CONFIGS.url}/user/forget-password`, {
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

export const drawer_API = ({language, bearer, formBody}) => {
  return fetch(`${DEV_CONFIGS.url}/logout`, {
    method: 'POST',
    headers: {
      'X-Localization': language,
      Authorization: bearer,
      'Content-Type': 'application/x-www-form-urlencoded',
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

export const change_Email_API = ({add, bearer, formBody}) => {
  return fetch(`${DEV_CONFIGS.url}/update-email`, {
    method: 'POST',
    headers: {
      'X-Localization': add.language,
      Authorization: bearer,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: formBody,
  })
    .then((response) => {
      return response.json();
    })
    .then(async (responseJson) => {
      return responseJson;
    })
    .catch((e) => console.error(e));
};

export const change_OTP_api = ({add, bearer, formBody}) => {
  return fetch(`${DEV_CONFIGS.url}/verify-email`, {
    method: 'POST',
    headers: {
      'X-Localization': add.language,
      Authorization: bearer,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: formBody,
  })
    .then((response) => {
      return response.json();
    })
    .then((responseJson) => {
      return responseJson;
    })
    .catch((e) => console.error(e));
};

export const change_Password = ({add, bearer, formBody}) => {
  return fetch(`${DEV_CONFIGS.url}/update-password`, {
    method: 'POST',
    headers: {
      'X-Localization': add.language,
      Authorization: bearer,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: formBody,
  })
    .then((response) => {
      return response.json();
    })
    .then((responseJson) => {
      return responseJson;
    })
    .catch((e) => console.error(e));
};

export const my_payment_method = ({add, bearer, formBody}) => {
  return fetch(`${DEV_CONFIGS.url}/creditcard/delete`, {
    method: 'POST',
    headers: {
      'X-Localization': add.language,
      Authorization: bearer,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: formBody,
  })
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson;
    })
    .catch((e) => console.error(e));
};
export const setting_API = ({add, bearer, formBody}) => {
  return fetch(`${DEV_CONFIGS.url}/change-language`, {
    method: 'POST',
    headers: {
      'X-Localization': add.language,
      Authorization: bearer,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: formBody,
  })
    .then((response) => response.json())
    .then((responseJson) => {
      if (responseJson.success) {
        return responseJson;
      }
    })
    .catch((e) => console.error(e));
};

export const profile_IMAGE_API = ({add, bearer, formData}) => {
  return fetch(`${DEV_CONFIGS.url}/upload/profile/image`, {
    method: 'POST',
    headers: {
      'X-Localization': add.language,
      Authorization: bearer,
      'Content-Type': 'multipart/form-data',
    },
    body: formData,
  })
    .then((response) => {
      return response.json();
    })
    .then((responseJson) => {
      return responseJson;
    });
};

export const profile_Edit_API = async (formData) => {
  const asyncData = await getAsyncStorage();
  return fetch(`${DEV_CONFIGS.url}/edit/profile`, {
    method: 'POST',
    headers: {
      'X-Localization': asyncData.language,
      Authorization: asyncData.bearer,
      'Content-Type': 'multipart/form-data',
    },
    body: formData,
  })
    .then((response) => {
      return response.json();
    })
    .then((responseJson) => {
      return responseJson;
    })
    .catch((e) => console.error(e));
};
