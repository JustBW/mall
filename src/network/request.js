import axios from 'axios';

export function request(config) {
  const instance = axios.create({
    baseURL:'http://123.207.32.32:8000/api/w1',
    timeout:5000
  })
  instance.interceptors.request.use(config=>{
    return config
  },err=>{
    console.log('Request-err');
  })

  instance.interceptors.response.use(config=>{
    return config
  },err=>{
    console.log('Response-err');
  })
  return instance(config);
}