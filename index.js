var express = require('express');
var app = express();

app.get('/blocks', function(req,res){
    res.redirect('/parts');
})


app.get('/',function(req,res){
    //res.send('Hello, running on port');
    var blocks = ['aaaaa','bbbbb','ccccc'];
    var blocks2 = '<H2>Hello there</H2>';
    res.send(blocks2);
    //res.write
    //res.json(blocks);
});

app.listen(7000,function(){
    console.log('Listening on port 7000');
});
