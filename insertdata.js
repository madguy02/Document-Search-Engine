
var elasticsearch = require('elasticsearch');
var config = require("./config.js")

var client = new elasticsearch.Client({
    host: config.ELASTIC_URL,
    log: 'trace'
  });

module.exports = {
insertData: function(indexName, text) {
    client.index ({
        index: config.INDEX_NAME,
        // type: config.TYPE,
        body: {
            "content": text
        }
    }).then (function(resp) {
        console.log(resp);
    }, (error) => {
        console.log(error);
    })

}

}
