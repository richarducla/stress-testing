module.exports = { createRandomScore };

var items = ["B10", "B20", "BTC", "XRP"]

function createRandomScore(userContext, events, done) {
  var item = items[Math.floor(Math.random()*items.length)];

  const data = {
    event: "suscribe",
    channel: "live",
    id: item
  };

  console.log(data)

  // set the "data" variable for the virtual user to use in the subsequent action
  userContext.vars.data = data;

  return done();
}