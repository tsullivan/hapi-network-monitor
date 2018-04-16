/* eslint-disable no-console */

function monitor(server) {
  return new Promise(resolve => {
    const { ['even-better']: evenBetter } = server.plugins;
    if (evenBetter) {
      evenBetter.monitor.on('ops', event => {
        console.log(JSON.stringify(event));
      });
    }

    /*
    const Oppsy = require('oppsy');
    const oppsy = new Oppsy(server);
    oppsy.on('ops', data => {
      console.log('opsData', JSON.stringify(data)); // eslint-disable-line no-console
      oppsy._networkMonitor.requests((context, requests) => {
        console.log(JSON.stringify({ requests })); // eslint-disable-line no-console
      });
    });

    oppsy.start(1000);
    */
    resolve();
  });
}

module.exports = {
  monitor
};
