var tika = require('tika');
var elasticsearch = require('elasticsearch');
var insert = require("./insertdata.js")
var create = require("./createIndex.js")
var config = require("./config.js")


var client = new elasticsearch.Client({
  host: config.ELASTIC_URL,
  log: 'trace'
});

var options = {
    contentType: 'application/pdf'
};

indexName = config.INDEX_NAME
type = config.TYPE
fileName = config.FILE_NAME

tika.text(fileName, options, (err, text) => {
    if (err) {
        throw Error;
    }
    create.createIndex(indexName, type);
    insert.insertData(indexName, type,text);

})