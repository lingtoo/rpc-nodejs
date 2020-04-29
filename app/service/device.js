const Service = require('./base')


class DeviceService extends Service {
  constructor(ctx) {
    super(ctx)
  }

  async getDevice (key) {
    this.logger.info('getDevice key::', key);
    return await this.ctx.helper.rdGet(key)
  }


}
module.exports = DeviceService;