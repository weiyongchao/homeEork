   let querystring = require('querystring');
   let bodyParser={
        json(){
            return (req,res,next)=>{
                if (req.headers['content-type'].indexOf('application/json') !== -1) {
                    let arr=[]
                    res.on('data',chunk=>{arr.push(chunk)})
                    res.on('end',()=>{
                        req.body=JSON.parse(Buffer.concat(arr).toString())
                        next()
                    })
                }else{
                    next()
                }
            }
        },
        urlencoded(){
            return (req,res,next)=>{
                if (req.headers['content-type'].indexOf('application/x-www-form-urlencoded') !== -1) {
                    let arr = []
                    res.on('data',chunk=>{arr.push(chunk)})
                    req.on('end', () => {
                      req.body = querystring.parse(Buffer.concat(arr).toString());
                      next()
                    })
                }else{
                    next()
                }
            }
        }
    }
module.exports = bodyParser;
