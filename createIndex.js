var elasticsearch = require('elasticsearch');
var config = require("./config.js")

var client = new elasticsearch.Client({
    host: config.ELASTIC_URL,
    log: 'trace'
  });

module.exports = {
createIndex: function(indexName,type) {
    client.indices.create ({
        index: indexName,
        type: type
    }).then((resp) => {
        console.log(resp);
    }, (err) => {
        throw Error
    })
}

}

