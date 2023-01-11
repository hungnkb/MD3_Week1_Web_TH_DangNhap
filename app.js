const http = require('http');

const sever = http.createServer((req, res) => {
    let mess = ''
    if(req.url == '/login') {
        mess = 'Login sucess';
    } else {
        mess = 'Login fail';
    }
    res.end(mess)
}).listen(8080, 'localhost')

