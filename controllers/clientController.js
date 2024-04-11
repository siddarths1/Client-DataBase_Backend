const service = require('../services/clientservice') 

const clientController = {
    async createClient(req, res){
    try
    {
        let clientservice = await service.createService(req.body)     
        res.status(200).send("Client list created successfully")
    }
    catch(error)
    {
        console.log(error);
        res.status(400).send("Unexpected Error : could not create");
        // throw Error;
    }

},
    async viewClient(req,res){
        try{
            console.log("at controller");
            let clientservice = await service.getClientService(req)
            if(clientservice){
                 res.status(200).send(clientservice);
            }
            else{
                res.status(400).send("no records found");
            }
        }catch(Error){
            res.status(400).send("Unexpected Error : no records found ");
        }
    }
} 

module.exports = clientController;