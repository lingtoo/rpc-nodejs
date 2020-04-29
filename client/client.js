const Tars = require("@tars/rpc").client;
const Api = require("./ApiProxy").Api;


var proxy = Tars.stringToProxy(Api.ServiceProxy, "InduApp.IwsServer.DeviceObj@tcp -h 127.0.0.1 -p 12345 -t 60000");


proxy.getName(1).then((data) => {
  console.log("String 接口返回值：", data.response.return)
  console.log("调用耗时", data.response.costtime)
}).catch((e) => {
  console.log(e)
  console.log("框架错误码：", e.response.error.code)
  console.log("框架错误信息：", e.response.error.message)
  console.log("调用耗时", e.response.costtime)
})


let search = Api.Search.new()
search.userName = 'tom'

proxy.findUsers(search).then((data) => {
  let list = data.response.return.value;
  console.log("List 接口返回值：", list[0])
  console.log("调用耗时", data.response.costtime)
}).catch((e) => {
  console.log(e)
  console.log("框架错误码：", e.response.error.code)
  console.log("框架错误信息：", e.response.error.message)
  console.log("调用耗时", e.response.costtime)
})


proxy.findMapOfUser("joy").then((data) => {
  let map = data.response.return.value;
  console.log("Map 接口返回值：", map)
  console.log("调用耗时", data.response.costtime)
}).catch((e) => {
  console.log(e)
  console.log("框架错误码：", e.response.error.code)
  console.log("框架错误信息：", e.response.error.message)
  console.log("调用耗时", e.response.costtime)
})

proxy.getUserById(2).then((data) => {
  let user = data.response.return;
  console.log("实体对象 接口返回值：", user)
  console.log("调用耗时", data.response.costtime)
}).catch((e) => {
  console.log(e)
  console.log("框架错误码：", e.response.error.code)
  console.log("框架错误信息：", e.response.error.message)
  console.log("调用耗时", e.response.costtime)
})


