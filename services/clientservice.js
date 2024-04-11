const clientmodel = require("../models/clientmodel");

const ClientService = {
  
    async createService(data){
        try{
            // const{
            //     client_id, 
            //     client_name, 
            //     client_company_name, 
            //     client_designation, 
            //     client_phone, 
            //     client_email, 
            //     user_email_sent, 
            //     client_email_reply, 
            //     user_follow_up,
            //     meeting_held,
            //     client_enquiry_recieved,
            //     user_proposal_given,
            //     remarks,
            //     created_at,
            //     created_by,
            //     updated_at, 
            //     updated_by, 
            //     status
            // } = req.body
       
            // // const clientmodels = mongoose.model('clientusers',listSchema)

        const createData = await clientmodel.createClientModel(data)
        return createData
    }
    catch(error){
        console.log("service module create list error");
        throw Error;
    }
    },

    async getClientService(req,res){
        try{
            // destructuring status from api header query parameter
            console.log("get client service");
            const { status } = req.query;
            console.log(status + " status");
            // to write logic to fetch all users irrespective of status 
            const getUsers = await clientmodel.getClientList(status)
            if (getUsers.length === 0) {
                throw Error;
            }
            return getUsers;
        }catch(Error){
            console.error(error);
            throw Error;
        }

    }

}

module.exports = ClientService;