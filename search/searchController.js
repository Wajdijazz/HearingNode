var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.json());

var parametre = require('./search');
var elasticsearch=require('elasticsearch');



var sentiment = require('node-sentiment');


var TwitterStreamChannels = require('twitter-stream-channels');
var credentials = require('./my.twitter.credentials.json');

var clientstream = new TwitterStreamChannels(credentials);

var stream 

var client = new elasticsearch.Client( {  

  host: 'localhost:9200'

});



module.exports = client; 

const createIndex = async function(index){
    return await client.indices.create({
        index: index,
    });
}

module.exports = createIndex;




const insertDoc = async function(index,data,type){
    try{
    return await client.index({
        index: index,
        type: type,
        body: data,
    
    })
    }catch (err) {
    
    }
    }
    
    module.exports = insertDoc;
    
  


router.post('/', function (req, res) {

console.log(req.body)
    var index=req.body.mots.toLowerCase()



    var testArray = index .split(',');


var dataset=[]
dataset.push(index)

var channels = {
    "languages" : dataset

};
 

stream = clientstream.streamChannels({track:channels});

stream.on('channels/languages',function(tweet){


   console.log(tweet.user)
   var user=tweet.user
 var lang=tweet.lang
 var tweet_text=tweet.text
 var user=tweet.user 
 console.log('stream',testArray[0]);
 var  positive=(sentiment(tweet.text,'fr').comparative)>0 
 var  negative=(sentiment(tweet.text,'fr').comparative)<0 
 var  neutre=(sentiment(tweet.text,'fr').comparative)==0 


   const data = {

   positive,negative,neutre,lang,tweet_text,user
    }  

    insertDoc(testArray[0],data,'tweet')

    
    


});
parametre.createparametre(req.body,function(err,count){
    if(err)
    {
        res.status(400).json(err);
    }

    else{
        res.json(req.body);
      
       

         
    }
});



 


/*
    console.log(" GET", data);
    let keyWord = data

let URL = `https://www.instagram.com/explore/tags/${keyWord}/`

rp(URL)
    .then((html) => {
   
        let hashtags = scrapeHashtags(html);

        hashtags = removeDuplicates(hashtags);

      
 

        hashtags.forEach(element=>{
          felling=sentiment(element,'en')
         
          insertDoc(data,felling,"instagram");
       

        })
   



    })
    .catch((err) => {

        console.log(err);
    });

const scrapeHashtags = (html) => {  

    var regex = /(?:^|\s)(?:#)([a-zA-Z\d]+)/gm;
    var matches = [];

    var match;
 
    while ((match = regex.exec(html))) {

        matches.push(match[1]);
    }

 
    return matches;

}

 

const removeDuplicates = (arr) => {

    let newArr = [];

 

    arr.map(ele => {

        if (newArr.indexOf(ele) == -1){

            newArr.push(ele)

        }

    })

     

    return newArr;
  }*/
});



router.get('/', function (req, res) {

    stream.stop();//closes the stream connected to Twitter
    console.log('>stream closed ');



})


router.get('/:id', function (req, res) {
    var id= req.params.id;

    parametre.getparametreById(id,function(err,rows){
        if(err) {
            res.status(400).json(err);
        }
        else
        {
            res.json(rows);

        }
    });
});


router.delete('/:id', function (req, res) {
    var id= req.params.id;




 
    parametre.DeleteParametreById(id,function(err){
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



module.exports = router;