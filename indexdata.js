var tika = require('tika');
var elasticsearch = require('elasticsearch');
var insert = require("./insertdata.js")
var create = require("./createIndex.js")
var config = require("./config.js")
const db = require('dropbox-stream');
var fs = require('fs');


var client = new elasticsearch.Client({
  host: config.ELASTIC_URL,
  log: 'trace'
});

const dfs = require('dropbox-fs') ({
    apiKey: config.DROPBOX_API_KEY
});

var options = {
    contentType: 'application/pdf'
};

indexName = config.INDEX_NAME
// type = config.TYPE
// fileName = config.FILE_NAME


dfs.readdir('/test', (err, result) => {
    console.log(result);

for (file in result) {
tika.text(result[file], options, (err, text) => {
    if (err) {
        console.log(err);
        }
        
        create.createIndex(indexName);
        insert.insertData(indexName,text);

    });
}
})



    

