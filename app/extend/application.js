const lodash = require('lodash')
//const Queue = Symbol('Application#queue');


module.exports = {
  isEmpty (param) {
    return lodash.isEmpty(param)
  }
};


