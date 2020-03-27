
// initial dummy data for articles and user

var mongoose = require('mongoose');
var Article = require('./models/Article.js');
var User = require('./models/User.js');

var user = {
    email: 'abc',
    password: '123',
    firstName: 'TD',
    lastName: 'BD',
    username: 'TD-BD',
    provider: 'local'
};
user = new User(user);
user.save();

var initial = [{
    title: "article 1",
    content: "content for article 1 ",
    user:user
  },

  {
    title: "article 2",
    content: "content for article 2 ",
    user:user

  },

  {
    title: "article 3",
    content: "content for article 3 ",
    user:user

  }
]

initial.forEach(function(article) {
    var articles = new Article(article);
    articles.save(function(err,data){
      if(err){
        throw err;
      }
      else{
      }
    });
});
