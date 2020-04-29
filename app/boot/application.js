'use strict';

const path = require('path');
const EGG_PATH = Symbol.for('egg#eggPath');
const HELPER = Symbol('Application#Helper');
const LOGGERS = Symbol('Application#loggers');
const TARLOG = Symbol('Application#tarlog');

const TarsLogger = require('@tars/logs')
const createLoggers = require('./logger');
const Singleton = require('./singleton');
const EggApplication = require('egg-core').EggCore;
class Application extends EggApplication {

  constructor(options = {}) {
    super(options);

    const loader = this.loader;

    loader.loadPlugin();
    loader.loadConfig()

    loader.loadApplicationExtend();

    // 此部分未用
    //loader.loadRequestExtend();
    //loader.loadResponseExtend();
    //loader.loadContextExtend();

    loader.loadHelperExtend();
    //loader.loadCustomLoader();
    loader.loadCustomApp();  // app.js 挂载，相应的插件实例化、并连接

    // app > plugin
    loader.loadService();

    //add ctx propertys
    this.setContext()
  }

  setContext () {
    let app = this
    let ctx = app.context;
    ctx.app = app

    ctx.logger = app.logger;
    ctx.acclog = app.acclog
    ctx.helper = new app.Helper(ctx)
  }

  addSingleton (name, create) {
    const options = {};
    options.name = name;
    options.create = create;
    options.app = this;
    const singleton = new Singleton(options);
    const initPromise = singleton.init();
    if (initPromise) {
      this.beforeStart(async () => {
        await initPromise;
      });
    }
  }

  /**
   * reference to {@link Helper}
   * @member {Helper} Application#Helper
   */
  get Helper () {
    if (!this[HELPER]) {
      /**
       * The Helper class which can be used as utility function.
       * Files from `${baseDir}/app/helper` will be loaded to the prototype of Helper,
       * then you can use all method on `ctx.helper` that is a instance of Helper.
       */
      class Helper extends this.BaseContextClass { }
      this[HELPER] = Helper;
    }
    return this[HELPER];
  }

  get [EGG_PATH] () {
    return path.join(__dirname, '../../../');
  }


  get acclog () {
    return this.getLogger('tarLogger');
  }

  get tarLogger () {
    if (!this[TARLOG]) {
      this[TARLOG] = new TarsLogger('TarsDate', 'access');
    }
    return this[TARLOG];
  }

  /**
  *  All loggers contain logger, coreLogger and customLogger
  * @member {Object}
  * @since 1.0.0
  */
  get loggers () {
    if (!this[LOGGERS]) {
      this[LOGGERS] = createLoggers(this);
    }
    return this[LOGGERS];
  }

  /**
   * Get logger by name, it's equal to app.loggers['name'],
   * but you can extend it with your own logical.
   * @param {String} name - logger name
   * @return {Logger} logger
   */
  getLogger (name) {
    if (name === 'tarLogger') {
      return this.tarLogger
    }
    return this.loggers[name] || null;
  }

  /**
   * application logger, log file is `$HOME/logs/{appname}/{appname}-web`
   * @member {Logger}
   * @since 1.0.0
   */
  get logger () {
    return this.getLogger('logger');
  }

  /**
   * core logger for framework and plugins, log file is `$HOME/logs/{appname}/egg-web`
   * @member {Logger}
   * @since 1.0.0
   */
  get coreLogger () {
    return this.getLogger('coreLogger');
  }
}

module.exports = Application;


