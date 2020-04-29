const Application = require('./app/boot/application');

const app = new Application();
app.ready(async (err) => {
  if (err) throw err;
  let api = app.context.service.api
  api.work()
});
