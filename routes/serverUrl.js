const router = require('koa-router')()
var sha1 = require('sha1'); 

router.prefix('/serverUrl')

router.get('/', function (ctx, next) {
    let wx = ctx.request.query
    let token = 'weixin'
    let timestamp = wx.timestamp
    let nonce = wx.nonce
    
    // 1）将token、timestamp、nonce三个参数进行字典序排序
    let list = [token, timestamp, nonce].sort()
    
    // 2）将三个参数字符串拼接成一个字符串进行sha1加密
    let str = list.join('')
    let result = sha1(str)
    
    // 3）开发者获得加密后的字符串可与signature对比，标识该请求来源于微信
    if (result === wx.signature) {
      ctx.response.status = 200;
      ctx.response.message = 'success'
      ctx.response.body = wx.echostr // 返回微信传来的echostr，表示校验成功，此处不能返回其它
    } else {
      ctx.response.body = 'error'
    }

    console.log(ctx.response)
})


module.exports = router
