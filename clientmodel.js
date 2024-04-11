const mongoose = require('mongoose');

const listSchema = new mongoose.Schema({
    client_id : { type : Number , required: true },
    client_name : {type: String, required: true},
    client_company_name : {type: String, required: true },
    client_designation : {type: String, required: true},
    client_phone : {type:Number, required: true},
    client_email : {type:String },
    user_email_sent : {type: Date },
    client_email_reply :  {type: Date},
    user_follow_up :  {type: Date },
    meeting_held : {type: Date },
    client_enquiry_recieved : {type:String , enum:['yes','no'], default:'no'},
    user_proposal_given : {type: String, enum:['yes','no'], default:'no'},
    remarks : {type: String},
    created_at: {type:Date},
    created_by: {type:String},
    updated_at: {type:Date}, 
    updated_by: {type:String}, 
    status: { type: String, enum: ['active', 'inactive'], default: 'active'}
})


const getClientList = async(req,res)=>{
    try{
      console.log("in to client get list");
      const getclients = await clientmodels.find()
      return getclients;
    }
    catch(Error){
      console.error(error);
      throw Error;
    }
}



// inorder to create new client list 
const clientmodels = mongoose.model('clientusers',listSchema)

const createClientModel = async(data)=>{
    try{
        const newClient = new clientmodels(data)
        const savedclient = newClient.save()
        return savedclient;
    }
    catch(error){
        console.log(error);
        throw Error;
    }

}



// const clients = new clientmodels({
//     client_id : 39,
//     client_name : 'Gopi ',
//     client_company_name : 'HookzApp',
//     client_designation : 'Founder ',
//     client_phone : 90278456,
//     client_email : 'adminhp@1gmail.com',
//     user_email_sent : new Date('2024-01-10'),
//     client_email_reply : new Date('2024-01-14'),
//     user_follow_up : new Date('2024-01-15'),
//     meeting_held :  new Date('2024-01-20'),
//     client_enquiry_recieved : 'yes',
//     user_proposal_given : 'yes',
//     remarks : 'nil',
//     created_at: new Date('2020-02-02'),
//     created_by: 'ats',
//     updated_at: new Date('2020-02-04'), 
//     updated_by: 'admin', 
//     status: 'active'
// })

// clients.save().then(()=>console.log('saved')).catch((error)=>{console.log(error);})

module.exports = {clientmodels,getClientList, createClientModel};