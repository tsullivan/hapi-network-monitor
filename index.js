const Hapi = require('hapi');
const { register, monitor } = require('./lib');
const { route } = require('./route');

const server = new Hapi.Server();
server.connection({ port: 3000, host: 'localhost' });

Promise.resolve()
  .then(() => register(server))
  .then(({ collector }) => monitor(server, collector))
  .then(({ collector }) => route(server, collector));
