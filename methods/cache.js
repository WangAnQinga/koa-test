const NodeCache = require( "node-cache" );
const myCache = new NodeCache();



const ajax = (ctx,next) => {
    return ctx.response.body = '啊实打实的阿斯顿阿三'
}

module.exports = {ajax}