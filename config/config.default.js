'use strict';


module.exports = appInfo => {

  const config = exports = {};

  config.keys = appInfo.name + '_rpc';

  config.logger = { //egg logs
    level: 'DEBUG',
    dir: 'log',
    appLogName: 'access',
    coreLogName: 'core',
    agentLogName: 'agent',
    errorLogName: 'error'
  };

  config.redis = {
    client: {
      port: 7000,
      host: '127.0.0.1',
      password: 'campus',
      db: 15,
    }
  };

  config.mysql = {
    client: {
      host: '127.0.0.1',
      password: 'xwabcd',
      database: 'stu_test',
      user: 'root',
      port: '3306'
    }
  };


  config.constant = {
    TARS: {
      APP_NAME: 'InduApp',
      SERVER_NAME: 'IwsServer',
      OBJ_NAME: 'DeviceObj'
    }
  };

  return config;
};