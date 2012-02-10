var fs = require('fs');
var optimist = require('optimist');

var tests = fs.readdirSync(__dirname + '/tests')
  .filter(function(f) {return f.match(/\.js$/)})
  .map(function(f) {return f.replace(/\.js$/, '')});

var argv = optimist
  .usage('Run DOM benchmarks.', {
    impl: {
      description: 'which DOM implementation to use [jsdom|domino|domjs]',
      alias: 'i'
    },
    num: {
      description: 'how often to run each test',
      default: 1500,
      alias: 'n'
    },
    grep: {
      description: 'only run tests matching this pattern',
      alias: 'g'
    },
    debug: {
      description: 'output the result of the first test run',
      boolean: true
    },
    help: {
      description: 'display this help message',
      alias: '?'
    }
  })
  .demand('impl')
  .argv;

var impl = require('./adapters/' + argv.impl);
console.log('Node %s: Running each test %s time(s) backed by %s.', process.version, argv.num, argv.impl);
console.time('total');
tests.forEach(function(test) {
  if (!argv.grep || test.match(argv.grep)) {
    var t = require('./tests/' + test);
    console.time(test);
    for (var i=0; i < argv.num; i++) {
      var res = t(impl);
      if (!i && argv.debug) console.log('%s: %s', test, res || '[no output]');
    }
    console.timeEnd(test);
  }
});
console.log('--------------');
console.timeEnd('total');
