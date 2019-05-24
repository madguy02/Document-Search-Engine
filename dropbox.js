var config = require("./config.js")
var fs = require('fs');
const db = require('dropbox-stream');
 
const dfs = require('dropbox-fs')({
    apiKey: config.DROPBOX_API_KEY
});
 
dfs.readdir('/test', (err, result) => {
    console.log(result);

for (file in result) {
const TOKEN = config.DROPBOX_API_KEY;
var FILETODOWNLOAD = '/test/'.concat(result[file]);
console.log(FILETODOWNLOAD);
var FILETODOWNLOADTO = './'.concat(result[file]);
console.log(FILETODOWNLOADTO);
 
db.createDropboxDownloadStream({
    token: TOKEN,
    path: FILETODOWNLOAD
  })
  .on('error', err => console.log(err))
  .on('metadata', metadata => console.log('Metadata', metadata))
  .on('progress', res => console.log(res))
  .pipe(fs.createWriteStream(FILETODOWNLOADTO))
  .on('finish', () => console.log('Done!'));

}

});