/* eslint-disable no-console */

function monitor(server) {
  return new Promise(resolve => {
    const { ['even-better']: evenBetter } = server.plugins;
    if (evenBetter) {
      evenBetter.monitor.on('ops', () => {
        console.log(JSON.stringify(evenBetter.collector.getStats(), null, ' '));
      });
    }
    resolve();
  });
}

module.exports = {
  monitor
};
