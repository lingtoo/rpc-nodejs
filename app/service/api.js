const Service = require('./base')
const Tars = require("@tars/rpc");


class ApiService extends Service {
  constructor(ctx) {
    super(ctx)

  }

  async work () {

    let conf = this._getConfig()
    let { APP_NAME, SERVER_NAME, OBJ_NAME } = conf
    let servantName = `${APP_NAME}.${SERVER_NAME}.${OBJ_NAME}`;
    let TARS_CONFIG = process.env.TARS_CONFIG



    if (!TARS_CONFIG) {
      this.localStart(servantName)
    } else {
      this.remoteStart(servantName, TARS_CONFIG);
    }


  }

  _getConfig () {
    return this.ctx.app.config.constant.TARS
  }

  remoteStart (servantName, TARS_CONFIG) {
    const Api = require("../tar/ApiImp").Api;
    let impMap = { [servantName]: new Api.ServiceImp(this.ctx) };
    Tars.server.getServant(TARS_CONFIG).forEach(config => {
      let svr = Tars.server.createServer(impMap[config.servant]);
      svr.start(config);
      this.logger.info('api start. servantName [%s]', servantName);
    });
  }

  /**
   * 
   * @param {APP_NAME: 'InduApp',
      SERVER_NAME: 'IwsServer',
      OBJ_NAME: 'DeviceObj'} servantName 
   */
  localStart (servantName) {
    const Api = require("../tar/ApiImp").Api;
    const imp = new Api.ServiceImp(this.ctx)
    var svr = Tars.server.createServer(imp);
    svr.start({
      name: `${servantName}Adapetr`,
      servant: servantName,
      endpoint: "tcp -h 127.0.0.1 -p 12345 -t 10000",
      protocol: "tars",
      maxconns: 200000
    });
    this.logger.info('api start. servantName [%s]', servantName);
  }


}
module.exports = ApiService;