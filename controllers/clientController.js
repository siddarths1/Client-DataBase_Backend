
const createClientController = async (req, res)=>{
    try{
        const{
            client_id, 
            client_name, 
            client_company_name, 
            client_designation, 
            client_phone, 
            client_email, 
            user_email_sent, 
            client_email_reply, 
            user_follow_up,
            meeting_held,
            client_enquiry_recieved,
            user_proposal_given,
            remarks,
            created_at,
            created_by,
            updated_at, 
            updated_by, 
            status
        } = req.body
    }catch(error){
        console.log(error);
    }

} 
