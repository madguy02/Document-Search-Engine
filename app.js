const express = require( 'express' );
const app     = express();
const bodyParser = require('body-parser')
const path    = require( 'path' );
const config = require("./config.js")
const elasticsearch = require('elasticsearch');

const client = new elasticsearch.Client({
   hosts: config.ELASTIC_URL
});




client.ping({
     requestTimeout: 30000,
 }, function(error) {
 
     if (error) {
         console.error('elasticsearch cluster is down!');
     } else {
         console.log('Elastic cluster in up');
     }
 });

 
app.use(bodyParser.json())
app.set( 'port', process.env.PORT || config.SERVER_PORT );
//app.use( express.static( path.join( __dirname, 'public' )));


app.get('/', function(req, res){
    res.sendFile('index.html', {
       root: path.join( __dirname, 'views' )
     });
  })
 
app.get('/search', function (req, res){

let body = {
    query: {
        bool: {
            should: [ 
                {
                multi_match: {
                fields: ["content"],
                query: req.query['q'],
                fuzziness: "AUTO"
                }
            }
            ]
        }
    }
}
  
  client.search({
    index: config.INDEX_NAME,
    body: body,
    
}).then(function(resp) {
    for (const data of resp.hits.hits) {
        console.log(data);
        
    }
    res.send(resp) //(data._source.content);
}, (err) =>{
    console.log(err);
})

})
// listen on the specified port
app .listen( app.get( 'port' ), function(){
  console.log( 'Express server listening on port ' + app.get( 'port' ));
} );