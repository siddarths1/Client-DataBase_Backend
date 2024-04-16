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
            const {limit, offset,status} = req.query;
                console.log(limit+offset+status+" for view list");
                if(limit==undefined || offset ==undefined){
                    res.status(400).send("Bad Request to server")
                    return;
                }
                else{
                    console.log("at controller");
                    let clientservice = await service.getClientService(req)
                    if(clientservice){
                        res.status(200).send(clientservice);
                    }
                    else{
                        res.status(400).send("no records found");
                    }
            }
        }catch(Error){
            res.status(400).send("Unexpected Error : no records found ");
        }
    },

    async getClient(req,res){
        try{
            const {client_id} = req.query
            console.log(client_id + "sp");
            const getclientService = await service.getSpecificClient(client_id)
            res.status(200).send("requested data "+getclientService)

        }catch(Error){
            console.error(Error);
            res.status(400).send(Error+" failed")
        }
    },

    // to add Remarks
    async addRemark(req,res){
        try{
            const{client_id} = req.query
            const{remarks} = req.body;
            console.log("id + res remark "+  typeof client_id);
            const addRemarkService = await service.addRemarkService(client_id, remarks)   
            res.status(200).send("remarks added "+addRemarkService)

        }catch(Error){

            res.status(400).send("check client id "+ Error);

        }
    },
    async viewRemark(req,res){
        try{

            const {client_id} = req.query
            console.log("params view remark "+ client_id);
            const viewRemarkService = await service.viewRemarks(client_id) 
            res.status(200).send("view client Remarks "+ viewRemarkService)

        }catch(Error){

            res.status(400).send("Error in viewing remarks "+ Error)

        }
    }
} 

module.exports = clientController;