const { Collector } = require('./metrics');

function register(server) {
  const collector = new Collector();
  collector.start();

  return new Promise((resolve, reject) => {
    server.register(
      {
        register: require('even-better'),
        options: {
          opsInterval: 1000
          // reporters: [ { reporter: require('good-console'), events: { ops: '*', log: '*', response: '*' } } ]
        }
      },
      err => {
        if (err) {
          return reject(err);
        }

        server.start(() => {
          console.info('Server started at ' + server.info.uri); // eslint-disable-line no-console
          resolve({ server, collector });
        });
      }
    );
  });
}

module.exports = {
  register
};
