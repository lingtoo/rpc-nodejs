const Service = require('./base')


class UserService extends Service {
  constructor(ctx) {
    super(ctx)
    this.age = 44
  }
  async create (user) {
    let { app } = this;
    let result = await app.mysql.insert('user',
      user
    );
    return result;
  }
  async getCacheValueBy (key) {
    let app = this.ctx.app;
    const value = await app.redis.get(key);
    if (value) {
      try {
        return JSON.parse(value)
      } catch (e) { }
    }
    return value
  }

  async getUserById (id = -1) {
    let app = this.ctx.app
    const tableName = 'user'
    const user = await app.mysql.get(tableName, { id });
    //|id=2, roleId=2, userName=admin, userPass=895411210beec62d5e677c741468fe30, corp=net, createDate=Thu Apr 18 2019 10:11:58 GMT+0800 (中国标准时间), parent=null, position={"addr":"浙江省杭州市滨江区建业路511","lng":120.187426,"lat":30.194233}
    this.logger.info(user)
    return user
  }


  async isEmpty (value) {
    return this.app.isEmpty(value)
  }

}

module.exports = UserService;