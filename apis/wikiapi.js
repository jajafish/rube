var bot = require('nodemw');

var client = new bot({
    server: "en.wikipedia.org",
    path: "/w",
    debug: false
});

client.getArticle('John Lennon', function(data){
    console.log(data);
});