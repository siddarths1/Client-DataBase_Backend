const clientmodel = require("../models/clientmodel");

const ClientService = {
    // client list 
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
            // setting up offset 
           

            // for searching specific data in list
            if(filter){
                try{    
                    const resFilter = await clientmodel.filterCompanyName(filter)
                    return resFilter;
                }catch(Error){
                    console.Error(Error);
                    return Error
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
            const getUsers = await clientmodel.getClientList()
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
    async getSpecificClient(clientId){
        try{
            console.log("specific controller");
            const getSpecClient = await clientmodel.getSpecClientModel(clientId);
            const dateOptions = { year: 'numeric', month: '2-digit', day: '2-digit' };
            const getSpecObject = {
                _id: getSpecClient?._id.toString(),
                client_name: getSpecClient?.client_name,
                client_company_name: getSpecClient?.client_company_name,
                client_designation: getSpecClient?.client_designation,
                client_phone: getSpecClient?.client_phone,
                client_email: getSpecClient?.client_email,
                user_email_sent: getSpecClient?.user_email_sent,
                client_email_reply:getSpecClient?.client_email_reply,
                meeting_held: getSpecClient?.meeting_held,
                user_follow_up: getSpecClient?.user_follow_up,
                client_enquiry_recieved: getSpecClient?.client_enquiry_recieved,
                user_proposal_given: getSpecClient?.user_proposal_given,
                remarks: getSpecClient?.remarks,
                status: getSpecClient?.status,
                created_at: getSpecClient?.created_at,
                created_by: getSpecClient?.created_by,
                updated_at: getSpecClient?.updated_at,
                updated_by: getSpecClient?.updated_by
            }
            return getSpecObject;

        }catch(Error){
            console.error(Error)
            return Error;
        }
    },

    //to edit client's list ( pavithra ) 
    async editClientService(clientId, clientData) {
        try {
            //console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>clientData-------------106",clientData);
            // Assuming clientmodel.editclient returns a promise
            const updatedClient = await clientmodel.editClient(clientId, clientData);
            console.log(">>>>>>)))))))-------------109",updatedClient)
            const UpdatedObject = {
                _id: updatedClient?._id.toString(),
                client_name: updatedClient?.client_name,
                client_company_name: updatedClient?.client_company_name,
                client_designation: updatedClient?.client_designation,
                client_phone: updatedClient?.client_phone,
                client_email: updatedClient?.client_email,
                user_email_sent: updatedClient?.user_email_sent,
                client_email_reply: updatedClient?.client_email_reply,
                user_follow_up: updatedClient?.user_follow_up,
                meeting_held: updatedClient?.meeting_held,
                client_enquiry_recieved: updatedClient?.client_enquiry_recieved,
                user_proposal_given: updatedClient?.user_proposal_given,
                user_follow_up : updatedClient?.user_follow_up,
                remarks: updatedClient?.remarks,
                status: updatedClient?.status,
                created_at: updatedClient?.created_at,
                created_by: updatedClient?.created_by,
                updated_at: updatedClient?.updated_at,
                updated_by: updatedClient?.updated_by
            }
            return UpdatedObject;
        } catch (Error) {
            return Error;
        }
    },

    //remarks 
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
    },
    // dashboard
    async getDashboardCount(){
        try{ 
            const presentDate = new Date();
            const weekAgo = new Date(presentDate)
            weekAgo.setDate(presentDate.getDate()-7)
            console.log("Today:", presentDate.toISOString());
            console.log("7 days ago:", weekAgo.toISOString());
            console.log("onto dashboard service");
            const getCountCard = await clientmodel.getDashboardCard(weekAgo)
            return getCountCard;

        }catch(Error){

            return Error;

        }
    },
    async getEnquiryCount(req) {
        try {
            console.log("onto service " + req.start_date);
            const startDate = req.start_date;
            const toCheckDate = new Date(startDate);
            console.log(toCheckDate);
            if (isNaN(toCheckDate)) {
                throw new Error('Invalid date format');
            }
            const getEnqCount = await clientmodel.getEnquiryCount(toCheckDate.toISOString());
            return getEnqCount;
        } catch (error) {
            return error;
        }
    },

    // PROPOSAL (Pavithra K)
    async getProposalCount(req) {
        try {
            console.log("onto service " + req.start_date);
            const startDate = req.start_date;
            const toCheckDate = new Date(startDate);
            console.log(toCheckDate);
            if (isNaN(toCheckDate)) {
                throw new Error('Invalid date format');
            }
            const getpropCount = await clientmodel.getproposalCount(toCheckDate.toISOString());
            return getpropCount;
        } catch (error) {
            return error;
        }
    },    
}

module.exports = ClientService;