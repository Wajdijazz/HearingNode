var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.json());
var Societe = require('./Societe');

var elasticsearch=require('elasticsearch');


const rp = require('request-promise');




var sentiment = require('node-sentiment');


var destroy = require('destroy')

var Twitter = require('twitter');
var felling

var client = new elasticsearch.Client( {  

        host: 'localhost:9200'

  });
  
  module.exports = client; 
 
 
  const createIndex = async function(index){
      return await client.indices.create({
          index: index
      });
  }
  
  module.exports = createIndex;
  
  
  async function testCreat(index){
      try {
          const resp = await createIndex(index);
          console.log(resp);
      } catch (e) {
          console.log(e);
      }
  }




  const insertDoc = async function(index,data,type){
    try{
    return await client.index({
        index: index,
        type: type,
  
        body: data
    })
  }catch (err) {
  
  }
  }

module.exports = insertDoc;




async function search(index){
    var twitter = new Twitter({
        consumer_key: '4bJ5VwRHtinABEpm8gwURdQ0s',
        consumer_secret: 'XOdrRshbXRjPUijjpMDH606niARGkMd41TsY5viDNJ0NFCIaoM',
        access_token_key: '3253616752-OzjnWkRceTofg3hnqpXRVMOPLN3F8f2a5BlMEdg',
        access_token_secret: 'ySx3jJrH7mwajOCA0PVFiafelkzZvTSxxQvCMKSML6ko5'
    });


    twitter.stream('statuses/filter', { 
    
    track: index

},

 function(stream) {
   
  
      
      stream.on('data', function( tweet ) {

    
    // console.log(tweet)
     var tweet_text = tweet.text;
     var lang=tweet.lang
   felling=sentiment(tweet_text,'fr')
   felling1=sentiment(tweet_text,'en')
  var  positive=(sentiment(tweet_text,'fr').comparative)>0 
  var  negative=(sentiment(tweet_text,'fr').comparative)<0 
  var  neutre=(sentiment(tweet_text,'fr').comparative)==0 
 


console.log(tweet)

    const data = {

       lang,positive,negative,neutre,tweet_text
     }  


      
     insertDoc(index,data,"tweet");
     
     
  
   })


   stream.on('error', function ( error ) {
    console.error(error);
});
 

        
});


}





router.get('/', function (req, res) {
    console.log("Societe GET", req.body);
    
    Societe.getsocietes(function(err,rows){
        if(err) {
            res.status(400).json(err);
        }
        else
        {
            res.json(rows);
        }
    });
});

router.get('/:id', function (req, res) {
    var id= req.params.id;
    console.log("Societe GET by Id", req.body);
    Societe.getsocieteById(id,function(err,rows){
        if(err) {
            res.status(400).json(err);
        }
        else
        {
            res.json(rows);

        }
    });
});

router.post('/', function (req, res) {
  /*  console.log("Societe POST", req.body);

    var name=req.body.nom.toLowerCase()

 //  search(name)

 var TwitterStreamChannels = require('twitter-stream-channels');
 var credentials = require('./my.twitter.credentials.json');

 var client = new TwitterStreamChannels(credentials);

var dataset=[]
dataset.push(name)

var channels = {
 "languages" : dataset

};



var stream = client.streamChannels({track:channels});

stream.on('channels/languages',function(tweet){
 console.log('>search for ',dataset);
 setTimeout(function(){
    stream.stop();//closes the stream connected to Twitter
    console.log('>stream closed after 100 seconds');
},10000);

});
*/
    Societe.createsociete(req.body,function(err,count){
        if(err)
        {
            res.status(400).json(err);
        }

        else{
            res.json(req.body);
          
           

             
        }
    });
   
      
});

router.delete('/:id', function (req, res) {
    var id= req.params.id;

    console.log("societe deleteed", req.body);
    Societe.DeleteSocieteById(id,function(err){
        if(err)
        {
            res.status(400).json(err);
        }
        else{
            console.log(req.body)
            res.json(req.body);
           
        }
    });
});


router.put('/:id', function (req, res) {
    var id= req.params.id;

    console.log("societe updated", req.body);
    Societe.UpdatesocieteById(id,req.body,function(err){
        if(err)
        {
            res.status(400).json(err);
        }

        else{
            res.json(req.body);
          
           

             
        }
    });
});
module.exports = router;