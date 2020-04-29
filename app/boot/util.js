
const Service = require('../service/base')
function getExtImpl (fun) {
  if(typeof fun !== 'function'){
    throw("fun is not function!")
  }
  let ProtoConsturctor = fun.prototype.constructor
  class ServiceImp extends Service {
      constructor(ctx) {
          super(ctx)
          ProtoConsturctor.call(this);
      }
  }
  ServiceImp.prototype.__proto__ = fun.prototype
  return ServiceImp
}

module.exports = {
  getExtImpl
};