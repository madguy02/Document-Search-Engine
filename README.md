### Document Search Engine

##### (Day 1) Date 24/05/2019 : This is the very first iteration of the search engine written in JS. This will develop gradually in the coming days until deadline.

##### (Day 2) Added DropBox api for file downloads and integrated with indexing and searching

##### Steps to Execute current code

```
1) Start Elastic search cluster
2)npm install
3) Go to config.js file and change params accordingly
4) run `sh run.sh` (shell script) - to pull in data from dropbox and index data
5) Start `node app.js` express server
6) Navigate to `127.0.0.1:3001/search?q="<insert search text here>" (can use postman for testing)
7) for UI and searches from UI visit `127.0.0.1:3001/`

```

#### Screen Shots

![searchengine_result](https://github.com/madguy02/Document-Search-Engine/blob/master/searchengine-1.png)

![searchengine] (https://github.com/madguy02/Document-Search-Engine/blob/master/searchengine-2.png)