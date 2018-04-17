function monitor(server, collector) {
  return new Promise(resolve => {
    const { ['even-better']: evenBetter } = server.plugins;
    if (evenBetter) {
      evenBetter.monitor.on('ops', opsData => {
        collector.collect(opsData);
      });
    }
    resolve({ server, collector });
  });
}

module.exports = {
  monitor
};
