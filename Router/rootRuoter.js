const studentRouter = require('./student.router');

const rootRouter = (req,res) => {
    const {url,method} = req;
    switch(url) {
        case "/student" :
            studentRouter(method,res);
            return;
        case "/course" :

        case "/triners" :
        case "/trackers" :
        case "/course/mern" :
            
        
        default :
            res.writeHead(404,{ "content-type" : "application/json"})
            res.end(JSON.stringify({ msg : "Not Found"}))

    }
}

module.exports = rootRouter;