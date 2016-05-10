var request = require('request');
var redditObj = require('./redditObj.js');

var subreddits = [
  "pics",
  "todayilearned",
  "movies",
  "gifs",
  "funny",
  "news"
];

var checkWords = [
  " mormon ",
  " LDS ",
  " Mormon "
]

function getReddit(){
  var redditObjs = [];
  for(var i = 0; i < subreddits.length; i++){
    var url = 'https://www.reddit.com/r/' + subreddits[i] + '/hot.json?sort=hot';
    request(url, function (error, response, body){
      if (!error && response.statusCode == 200) {
        //console.log(body);
        var jsonObj = JSON.parse(body);
        for(var j = 0; j < jsonObj.data.children.length; j++){
          var nextObj = new redditObj();
          var  title = jsonObj.data.children[j].data.title;
          var commentsUrl = 'https://www.reddit.com' + jsonObj.data.children[j].data.permalink;
          var found = false;

          for(var c = 0; c < checkWords.length; c++){
            //check for checkwords in title
            if(title.indexOf(checkWords[c]) > -1){
              found = true;
            }
          }

          //check for checkwords in comment section
          request(commentsUrl, function(error, response, body){
            for(var c = 0; c < checkWords.length; c++){
              if(body.indexOf(checkWords[c]) > -1){
                found = true;
              }
            }
          });

          if(found){
            console.log("found");
            nextObj.title = title;
            nextObj.url = jsonObj.data.children[j].data.url;
            nextObj.commentsUrl = commentsUrl;
            //send email to myself
            sendEmail("Found redditors talking about Mormons", nextObj.commentsUrl);

            //also append to txt file
            writeToFile(nextObj);
          }

        }
      }
    });
  }
}

function writeToFile(nextObj){
  var fso, f, r;
 var ForReading = 1, ForWriting = 2;
 fso = new ActiveXObject("Scripting.FileSystemObject");
 f = fso.OpenTextFile(".\output.txt", ForWriting, true);
 f.Write(nextObj.title);
 f.Close();
}

function sendEmail(subject, text) {
  //push found object to front end
  var nodemailer = require('nodemailer');

  // create reusable transporter object using the default SMTP transport
  var transporter = nodemailer.createTransport('smtps://user%40gmail.com:pass@smtp.gmail.com');

  // NB! No need to recreate the transporter object. You can use
  // the same transporter object for all e-mails

  // setup e-mail data with unicode symbols
  var mailOptions = {
      from: 'Mormon Scraper <sutton1190@gmail.com>', // sender address
      to: 'sutton1190@gmail.com', // list of receivers
      subject: subject, // Subject line
      text: text, // plaintext body
      html: '<b>' + text + '</b>' // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, function(error, info){
      if(error){
          return console.log(error);
      }
      console.log('Message sent: ' + info.response);

  });
}

var minutes = 60;
var the_interval = minutes * 60 * 1000;
console.log("ran");
getReddit();
setInterval(function(){
  console.log("ran");
  getReddit();
}, the_interval)
