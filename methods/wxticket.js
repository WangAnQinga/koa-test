const axios = require('axios');
const cache = require('memory-cache');
const sign = require('./wechatSign')

// cache.put('houdini', 'disappear', 10000, function(key, value) {
//     console.log(key + ' did ' + value);
// }); // Time in ms

const testInfo = {
    "appID":"wx12b5b857daaeefc7",
    "appsecret":"16fd6608aab7fd3fba0251ae26e9a6cb"
}


//获取access_token_url
const access_token_url = `https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${testInfo.appID}&secret=${testInfo.appsecret}`;
const access_ticket = async()=>{

    let access_token = cache.get('access_token');
    let jsapi_ticket = cache.get('jsapi_ticket');

    if(!access_token || !jsapi_ticket) {
        const token_result = await axios.get(access_token_url);
        access_token = token_result.data.access_token

    }

    if(access_token){

        //缓存access_token
        cache.put('access_token',access_token, 7190, function(key, value) {
            // console.log(key,value);
        });

        const jsapi_ticket_url = `https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token=${access_token}&type=jsapi`;
        //获取jsapi_ticket
        let ticket_result = await axios.get(jsapi_ticket_url);
        jsapi_ticket = ticket_result.data.ticket;

        if(jsapi_ticket){
            //缓存jsapi_ticket
            cache.put('jsapi_ticket',jsapi_ticket, 7190, function(key, value) {
                // console.log(key,value);
            });
            console.log(jsapi_ticket)
            var wesign = sign(jsapi_ticket,'http://www.waqll.com');
            console.log('wesign='+wesign)
        } 
    }else{

    }
}

access_ticket()

