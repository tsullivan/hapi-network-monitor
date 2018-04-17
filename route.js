function route(server, collector) {
  return new Promise(resolve => {
    server.route({
      method: 'GET',
      path: '/',
      handler(req, reply) {
        reply(collector.getStats());
      }
    });
    resolve({ server, collector });
  });
}

module.exports = {
  route
};
