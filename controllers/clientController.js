const service = require('../services/clientservice') 



const clientController = {
    async createClient(req, res){
    try
    {
        const clientservice = await service.createService(req.body)     
        res.status(200).send("Client list created successfully "+ clientservice)
    }
    catch(Error)
    {
        console.log(Error);
        res.status(400).send("Unexpected Error : could not create "+ Error) ;
        // throw Error;
    }

    },
    async viewClient(req,res){
        try{
            const {limit, offset,status} = req.query;
                console.log(limit+offset+status+" for view list");
                // if(limit==undefined || offset ==undefined){
                //     res.status(400).send("Bad Request to server : undefined")
                //     return;
                // }
                // else{
                    console.log("at controller");
                    const clientservice = await service.getClientService(req)
                    if(clientservice){
                        res.status(200).send(clientservice);
                    }
                    else{
                        res.status(400).send("no records found");
                    }
            //}
        }catch(Error){
            res.status(400).send("Unexpected Error : no records found "+Error);
        }
    },

    async getClient(req,res){
        try{
            const {client_id} = req.query;
            console.log(client_id);
            const objNum = '661e0178c79fab699c3733eb';
            console.log(typeof _id + "sp");
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
            const{_id} = req.query
            const{remarks} = req.body;
            console.log("id + res remark "+  typeof _id);
            const addRemarkService = await service.addRemarkService(_id, remarks)   
            res.status(200).send("remarks added "+addRemarkService)

        }catch(Error){

            res.status(400).send("check client id "+ Error);

        }
    },
    async viewRemark(req,res){
        try{

            const {_id} = req.query
            console.log("params view remark "+ _id);
            const viewRemarkService = await service.viewRemarks(_id) 
            res.status(200).send("view client Remarks "+ viewRemarkService)

        }catch(Error){

            res.status(400).send("Error in viewing remarks "+ Error)

        }
    },
    async dashboardCount(req,res){
        try{
            // calling service 
            console.log("onto dashboard controller");
            const cardCount = await service.getDashboardCount();
            res.status(200).send(cardCount)

        }catch(Error){

            res.status(400).send(Error)

        }
    },
    async enquiryGraph(req, res) {
        try {
            console.log("onto cont graph");
            console.log(req.body);
            const enquiryResp = await service.getEnquiryCount(req.body);
            console.log(enquiryResp);
            // structuring the api format
            const enqDashBoard = {
                labels: ['Yes', 'No'],
                datasets: [{
                    label: 'Enquiry Proposal',
                    data: [enquiryResp],
                    backgroundColor: [
                        'rgb(255, 99, 132)',
                        'rgb(54, 162, 235)'
                    ],
                    hoverOffset: 4
                }]
            };
            res.status(200).json(enqDashBoard);
        } catch (error) {
            res.status(400).send(error + " errorr");
        }
    }
} 

module.exports = clientController;