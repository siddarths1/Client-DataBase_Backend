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

    async getClientService(req){
        try{
            // destructuring status, limit, offset, search , filterfrom api header query parameter
            
            console.log("get client service");
            const { status,limit,offset, } = req.query;
            const {search} = req.body
            const {filter} = req.body
            console.log(filter+" filter is ");
            // for searching specific data in list
            if(filter){
                try{    
                    const resFilter = await clientmodel.filterCompanyName(filter)
                    return resFilter;
                }catch(Error){
                    console.Error(Error);
                }
            }
            else if(search){
                try{
                    if(typeof search === Number){

                        const searchTextRes = await clientmodel.searchClientReqNo(search)
                        return searchTextRes;

                    }else if(typeof search === Date){

                        const searchDate = await clientmodel.searchClientDate(search)
                        return searchDate;

                    }else{
                        const searchText = await clientmodel.searchClientText(search)
                        return searchText;
                    }
                }catch(Error){
                    console.error(Error);
                }
            }else{
            console.log("at service to fetch list");
            // to write logic to fetch all users irrespective of status 
            const getUsers = await clientmodel.getClientList(status)
            if (getUsers.length === 0) {
                throw Error;
            }
            return getUsers;
        }
        }catch(Error){
            console.error(error);
            throw Error;
        }
    },
    async getSpecificClient(client_id){
        try{
            console.log("specific controller");
            const getSpecClient = await clientmodel.getSpecClientModel(client_id);
            return getSpecClient;

        }catch(Error){
            console.error(Error)
            return Error;
        }
    },
    async addRemarkService(getClientId, getRemarks){
        try{

            console.log("onto remark service "+ getClientId + getRemarks);
            // passing id to models to write mongoose query
            const addRemarkModel = await clientmodel.addRemarkModel(getClientId, getRemarks);
            return addRemarkModel;

        }catch(Error){

            return Error;

        }
    },
    async viewRemarks(client_Id){
        try{
            console.log(client_Id + "on view re mark controller");
            const viewRemarksModel = await clientmodel.viewRemarkModel(client_Id);
            return viewRemarksModel;

        }catch(Error){

            return Error;

        }
    }

}

module.exports = ClientService;