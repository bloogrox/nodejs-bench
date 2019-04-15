const fastify = require('fastify')({logger: true});
const {promisify} = require('util');
var redis = require("redis"),
    client = redis.createClient("redis://redis");
const aIncr = promisify(client.incr).bind(client);


client.on("error", function (err) {
  console.log("Error " + err);
});



fastify.get('/', async (request, reply) => {
  reply.type('application/json').code(200)
  // TODO call redis incr command
  var count = await aIncr('counter');
  return count
})


fastify.listen(3000, '0.0.0.0', (err, address) => {
  if (err) throw err
  fastify.log.info(`server listening on ${address}`)
})
