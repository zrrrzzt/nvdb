#!/usr/bin/env node
'use strict';

var nvdb = require('./index')
  , pkg = require('./package.json')
  , query = process.argv[2]
  , argv = require('minimist')((process.argv.slice(2)))
  , opts = {}
  ;

function printHelp() {
  console.log(pkg.description);
  console.log('');
  console.log('Usage:');
  console.log('  $ nvdb');
  console.log('');
}

if (process.argv.indexOf('-h') !== -1 || process.argv.indexOf('--help') !== -1) {
  printHelp();
  return;
}

if (process.argv.indexOf('-v') !== -1 || process.argv.indexOf('--version') !== -1) {
  console.log(pkg.version);
  return;
}

if(argv.format){
  opts.format = argv.format;
}

if(argv.path){
  opts.path = argv.path;
}

nvdb(opts, function(err, data){
  if(err){
    console.error(err);
  } else {
    console.log(data);
  }
});