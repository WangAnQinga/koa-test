const NodeCache = require( "node-cache" );
const myCache = new NodeCache();

const cache = require('memory-cache');

cache.put('houdini', 'disappear', 10000, function(key, value) {
    console.log(key + ' did ' + value);
}); // Time in ms

