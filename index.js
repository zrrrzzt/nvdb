var request = require('request')
  , apiURL = 'https://www.vegvesen.no/nvdb/api/'
  , reqOpts = {}
  ;

module.exports = function nvdb(opts, callback){

  if(!opts.format){
    return callback(new Error('Missing required param: format'), null);
  }

  if(opts.path){
    apiURL += opts.path;
  }

  reqOpts.headers = {
    'Accept': 'application/vnd.vegvesen.nvdb-v1+' + opts.format
  }

  request(apiURL, reqOpts, function(err, req, body){
    if(err){
      return callback(err, null);
    }
    return callback(null, body);
  });
};