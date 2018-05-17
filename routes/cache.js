const router = require('koa-router')()

const cache = require('memory-cache');

cache.put('houdini', 'disappear', 10000, function(key, value) {
    console.log(key + ' did ' + value);
}); // Time in ms


router.prefix('/cache')
router.get('/', function (ctx, next) {
  var a = cache.get('houdini');
  console.log('a='+a);
  ctx.body = String(a)
})

router.get('/bar', function (ctx, next) {
  var a = cache.get('houdini');
  ctx.body = 'a'
})

module.exports = router
