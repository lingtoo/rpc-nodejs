const EggCoreBaseContextClass = require('egg-core').BaseContextClass;

var TarsStream = require("@tars/stream");

var Tars = require("@tars/stream");

/**
 * 服务基类
 */
class BaseService extends EggCoreBaseContextClass {
  constructor(ctx) {
    super(ctx)
    this.logger = ctx.acclog
    this.Tars = Tars
  }
}

module.exports = BaseService;