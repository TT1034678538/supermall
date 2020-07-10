import axios from 'axios'

export function request(config) {
  // 1.创建axios实例
  const instance = new axios.create({
    baseURL:'xxxxxxxxxxx找coderwhy老师要接口',
    timeout:5000
  });

  // 请求拦截器
  instance.interceptors.request.use(config => {
    //拦截后需要将拦截下来的请求数据返回发送
    //1.比如config中的一些信息不符合服务器的要求
    //2.比如每次发送网络请求时，都希望在界面中显示一个请求的图标
    //3.某些网络请求(比如登录(token))，必须携带一些特殊的信息
    return config;
  }, err => {
    // console.log(err);
  })

  // 响应拦截器
  instance.interceptors.response.use(res => {
    // 拦截后需要将拦截下来处理成的结果返回
    return res.data
  }, err => {
    console.log(err)
  })

  // 3.发送真正的网络请求
  return instance(config)
}