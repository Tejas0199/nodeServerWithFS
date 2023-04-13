
const courseRouter = (method,res) => {

    const {method,url} = req;
    switch(method) {
        case "GET" :
            return;
        default : 
            res.whiteHead(405,{ "contect-type" : "application/json"})
            res.end(JSON.stringify({ msg : "Method not allowed"}));
        return;
    }
}

module.exports = courseRouter