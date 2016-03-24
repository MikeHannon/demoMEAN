console.log('mainFactory');
/*
  Eventually have our main factory.
  make calls to our DB and store info.
*/
/* $http service
hypertexttransferprotocol
AJAX asychronous javascript and xml
asynchronous - out of the normal time path

normal http - go to a web page and get stuff back from a server.

$http  go to a web page and get stuff back from a server, except waits for us to tell it what to do with the data when it comes back.
*/
app.factory('mainFactory', ['$http', function($http) {
  var mainFactoryObject = {};
  mainFactoryObject.index = function(callbackFromController){
    callbackFromController('before http request');
    $http.get('/something').then(function(dataFromDB){
      // console.log(dataFromDB);
      callbackFromController(dataFromDB.data);
    });
    callbackFromController('after http request starts');
  }
  return mainFactoryObject;
}]);
