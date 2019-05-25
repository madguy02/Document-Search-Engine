### Document Search Engine

##### (Day 1) Date 24/05/2019 : This is the very first iteration of the search engine written in JS. This will develop gradually in the coming days until deadline.

##### (Day 2) Added DropBox api for file downloads and integrated with indexing and searching

##### Steps to Execute current code

```
1) Start Elastic search cluster
2)npm install
3) Go to config.js file and change params accordingly
4) Execute `node dropbox.js` to get the files from dropbox
4) Execute `node indexdata.js`
5) Once indexing is completed.
6) Run `node app.js` to start search server
7) Navigate to `127.0.0.1:3001/search?q="<insert search text here>"

```