var elasticsearch = require('elasticsearch');
var config = require("./config.js")

var client = new elasticsearch.Client({
  host: config.ELASTIC_URL,
  log: 'trace'
});


client.search({
    index: config.INDEX_NAME,
    type: config.TYPE,
    q: config.SEARCH_CONTENT,
}).then(function(resp) {
    for (const data of resp.hits.hits) {
        console.log(data);
    }
}, (err) =>{
    console.log(err);
}) 