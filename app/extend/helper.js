
exports.rdGet = async function get (key) {
  const redis = this.app.redis;
  const value = await redis.get(key);
  if (value) {
    try {
      return JSON.parse(value)
    } catch (e) { }
  }
  return value

}
exports.rdDel = async function rdDel (key) {
  await this.app.redis.del(key)
}




