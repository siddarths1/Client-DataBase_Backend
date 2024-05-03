const service = require('../services/clientservice') 



const clientController = {
    async createClient(req, res){
    try
    {
        const clientservice = await service.createService(req.body)     
        res.status(200).send(clientservice)
    }
    catch(Error)
    {
        console.log(Error);
        res.status(400).send(Error) ;
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
            res.status(400).send(Error);
        }
    },

    async getClient(req,res){
        try{
            const {client_id} = req.query;
            console.log(client_id);
            const objNum = '661e0178c79fab699c3733eb';
            console.log(typeof _id + "sp");
            const getclientService = await service.getSpecificClient(client_id)
            res.status(200).send(getclientService)

        }catch(Error){
            console.error(Error);
            res.status(400).send(Error)
        }
    },

    //to edit client's list ( pavithra ) 
    async edit(req, res) {
        console.log("*********req--------- 57",req.body);
        try {
            const{_id} = req.query
            const {  client_name, client_company_name, client_designation, client_phone, client_email, user_email_sent, client_email_reply, user_follow_up, meeting_held, client_enquiry_received, user_proposal_given, remarks, updated_at, updated_by, status } = req.body;

            console.log("editClientService");

            //edit remark
            // console.log(client_id + remarks);
            // const editClientRemarks = await service.editClientRemarks(client_id,remarks).then(()=>{
            //     console.log("success promise")
            // }).catch((error)=>{
            //     console.log("*************error******", error);
            // });

            const editClientServiceResult = await service.editClientService(_id, { client_name, client_company_name, client_designation, client_phone, client_email, user_email_sent, client_email_reply, user_follow_up, meeting_held, client_enquiry_received, user_proposal_given, remarks, updated_at, updated_by, status });

            res.status(200).send(editClientServiceResult);
        } catch (Error) {
            res.status(400).send(Error);
        }
    },

    // to add Remarks
    async addRemark(req,res){
        try{
            const{_id} = req.query
            const{remarks} = req.body;
            console.log("id + res remark "+  typeof _id);
            const addRemarkService = await service.addRemarkService(_id, remarks)   
            res.status(200).send(addRemarkService)

        }catch(Error){

            res.status(400).send(Error);

        }
    },
    async viewRemark(req,res){
        try{

            const {_id} = req.query
            console.log("params view remark "+ _id);
            const viewRemarkService = await service.viewRemarks(_id) 
            res.status(200).send(viewRemarkService)

        }catch(Error){

            res.status(400).send(Error)

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
        } catch (Error) {
            res.status(400).send(Error);
        }
    }
} 

module.exports = clientController;