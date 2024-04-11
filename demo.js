const democa = {
    async call(req,res){
        console.log("bjxv");
        res.send(JSON.stringify(req.body))
        console.log(req);
    }
}
module.exports = democa;