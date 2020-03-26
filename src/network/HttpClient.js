import axios from 'axios';

const defaultConfig = {
  baseURL: process.env.VUE_APP_API_BASE_URL,
  timeout: 30000,
  headers: {
    // 'Content-Type': 'application/x-www-form-urlencoded',
  },
  showLoader: true
};
const instance = axios.create(defaultConfig);
instance.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);
instance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error);
  }
);

const request = config => {
  return instance
    .request(config)
    .then(response => {
      const {
        data: {status}
      } = response;
      if (status === 'true') {
        return Promise.resolve(response.data);
      } else {
        return Promise.reject(response.data);
      }
    })
    .catch(error => {
      return Promise.reject(error);
    });
};

const get = (url, query, config = {}) => {
  return request({
    url,
    method: 'get',
    params: query,
    ...config
  });
};

const post = (url, body = {}, config = {}) => {
  const form = new FormData();
  Object.keys(body)
    .sort()
    .forEach(key => {
      form.append(key, body[key]);
    });
  return request({
    url,
    method: 'post',
    data: form,
    ...config
  });
};

const HttpClient = {
  get,
  post
};

export default HttpClient;
