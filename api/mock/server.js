const path = require('path');
const config = require('./config');
const jsonServer = require('json-server');
const rules = require('./routes');
const dbfile = require(config.DB_FILE);

const ip = config.SERVER;
const port = config.PORT;
const db_file = config.DB_FILE;

const server = jsonServer.create();
const router = jsonServer.router(dbfile());
const middlewares = jsonServer.defaults();


server.use(jsonServer.bodyParser);

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);


server.use((req, res, next) => {
    res.header('X-Hello', 'World');
    next();
})


// // Add custom routes before JSON Server router
// server.get('/echo', (req, res) => {
//     res.jsonp(req.query)
// })

server.use((req, res, next) => {

    console.log(req.query)

    if (req.url.indexOf('/user/info') > -1) {
        if(req.headers.token){
            req.url = req.url + `?token=${req.headers.token}`
        }
    }
    req.method = "GET";

    req.query._limit = req.query.limit

    // if (req.method === 'POST') {
    //     if(req.url.indexOf('/login') > -1){
    //         let params = {
    //             id: 1,
    //             token: 'xxxxx-xxxx-xxx-xx-x',
    //             name: req.body.account,
    //             createdAt: Date.now()
    //         }
    //         req.body = params
    //     } else{
    //         req.body.createdAt = Date.now()
    //     }
    // }
    // Continue to JSON Server router

    next()
})

router.render = (req, res) => {
    // res.jsonp(res.locals.data);
    // const result = res.locals.data.constructor == Array ? { totalPage: 1, totalCount: res.locals.data.length, datalist: res.locals.data} : res.locals.data
    res.jsonp({
        status: 1,
        message: "提示信息",
        errCode: "0000",
        result: res.locals.data
    })
}

server.use("/api", router);

server.use(jsonServer.rewriter(rules));

server.use(router);

server.listen({
    host: ip,
    port: port,
}, function() {
    console.log(JSON.stringify(jsonServer));
    console.log(`JSON Server is running in http://${ip}:${port}`);
});
