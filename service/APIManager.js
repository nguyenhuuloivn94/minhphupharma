import axios from "axios";

export const instance = axios?.create({});

instance.defaults.timeout = 15000;
instance.defaults.headers.common.platform = "web";

instance?.interceptors?.request?.use(
  function (config) {
    // @ts-ignore
    // https://stackoverflow?.com/a/51279029/5558052
    config.metadata = { startTime: new Date() };
    return config;
  },
  function (error) {
    return Promise?.reject(error);
  }
);

instance?.interceptors?.response?.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise?.reject(error);
  }
);

function APIManager(type, params) {
  const setUrlParameters = (url) => {
    let urlResult = url;
    for (let paramName in params) {
      // TODO: Xử ly lỗi khi gặp các parameter có sự tương đồng về 1 phần kí tự
      // VD: id=12 và idProduct=476 trong URL có /customer/product/:idProduct
      // thì khi thực hiện lệnh replace bên dưới khi chạy sẽ sinh ra
      // URL = /customer/product/12Product thay vì /customer/product/476
      // Hướng giải quyết tạm tính:
      // - sử dụng regex.
      // - chia thêm 1 trường hợp để xử lý cho vấn đề trên.
      // - sort parameter name theo length và replace từ parameter dài nhất tới ngắn nhất.
      const replace = `/:${paramName}`;
      const regexParamName = new RegExp(replace, "g");
      const replaceValue = `/${params[paramName]}`;
      urlResult = urlResult?.replace(regexParamName, replaceValue);
    }
    return urlResult;
  };

  const getPrefix = () => {
    switch (type) {
      default:
        return setUrlParameters(EndPoint[type].prefix());
    }
  };
  const getBaseURL = () => {
    switch (type) {
      default:
        return API?.BASE_URL;
    }
  };

  const getURL = () => {
    switch (type) {
      default:
        return getBaseURL() + getPrefix();
    }
  };

  const getHeader = () => {
    switch (type) {
      default:
        return {
          "Content-Type": "application/json;charset=UTF-8",
          Accept: "application/json",
        };
    }
  };

  return {
    getPrefix,
    getBaseURL,
    getHeader,
    getURL,
    params,
  };
}

export const setDefaultToken = (token) => {
  if (token) {
    instance.defaults.headers.common.Authorization = token;
  } else {
    delete instance.defaults.headers.common.Authorization;
  }
};

const ignoreAPI = [];

const call = ([type, param, delayTime]) => {
  // const delay = arg[2] ? arg[2] : 0;
  // if (delay !== null || delay !== 0) {
  //   sleep(delay);
  // }
  const type = arg[0];
  const param = arg[1] ? arg[1] : undefined;
  const { getHeader, getURL } = APIManager(type, param);
  switch (EndPoint[type].method) {
    case "PUT": {
      const config = {
        headers: getHeader(),
        timeout: 15000,
      };
      return instance?.put(getURL(), param, config);
    }
    case "POST": {
      const config = {
        headers: getHeader(),
        timeout: 15000,
      };
      return instance?.post(getURL(), param, config);
    }
    case "DELETE": {
      const config = {
        headers: getHeader(),
        timeout: 15000,
      };
      return instance?.delete(getURL(), config);
    }
    case "GET":
    default: {
      let config = {
        headers: getHeader(),
        timeout: 15000,
      };
      if (!ignoreAPI?.includes(type)) {
        config = {
          ...config,
          params: param,
        };
      }
      return instance?.get(getURL(), config);
    }
  }
};

// const handleResponse = ({ res, success, error }) => {
//   if (res?.data?.status?.code === 200) {
//     success(res);
//   } else {
//     error(res);
//   }
// };

export {
  call,
  // handleResponse
};
