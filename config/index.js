const node_env = process.env.NODE_ENV == 'dev' ? 'dev':'pro';
const runPort = require(`./${node_env}.config.js`);
console.log(process.env.NODE_ENV,process.env.NODE_ENV == 'dev')




module.exports = {
    node_env,
    runPort
}