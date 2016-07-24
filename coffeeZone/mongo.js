// Generated by CoffeeScript 1.10.0
(function() {
  var client, collection, connect, database, dbLink, driver, idMaker, makeId, reconnectTime;

  driver = require('mongodb');

  client = driver.MongoClient;

  idMaker = driver.ObjectID;

  dbLink = outerResourcesConfig.mongo.dataBaseLink;

  reconnectTime = 10 * 1000;

  database = null;

  connect = function() {
    return client.connect(dbLink, function(error, db) {
      if (error) {
        console.log('Ошибка соединения с базой, переподключаемся...');
        return setTimeout(connect, reconnectTime);
      } else {
        database = db;
        return console.log('Соединение с базой установлено');
      }
    });
  };

  collection = database.collection.bind(database);

  makeId = function(value) {
    var error1;
    try {
      return idMaker(value);
    } catch (error1) {
      return null;
    }
  };

  exports.collection = collection;

  exports.makeId = makeId;

}).call(this);

//# sourceMappingURL=mongo.js.map
