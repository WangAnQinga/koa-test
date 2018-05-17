const router = require('koa-router')()
const cache = require('memory-cache');
const {ajax} = require('../methods/cache')

router.prefix('/cache')
router.get('/', (ctx, next) => {
   ajax(ctx,next)
  }
)


module.exports = router
