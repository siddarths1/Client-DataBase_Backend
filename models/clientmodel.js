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
    user_proposal_given : {type: String, enum: ['yes','no'], default:'no'},
    remarks : {type: String},
    created_at: {type:Date},
    created_by: {type:String},
    updated_at: {type:Date}, 
    updated_by: {type:String}, 
    status: { type: String, enum: ['active', 'inactive'], default: 'active'}
})


const clientmodel = mongoose.model('clientusers',listSchema)


const clients = new clientmodel({
    client_id : 7837,
    client_name : 'ats',
    client_company_name : 'ATS',
    client_designation : 'pm',
    client_phone : 986123,
    client_email : 'ats@1gmail.com',
    user_email_sent : new Date('04/2/21'),
    client_email_reply : new Date('06/2/21'),
    user_follow_up : new Date('10/4/22'),
    meeting_held :  new Date('5/5/22'),
    client_enquiry_recieved : 'yes',
    user_proposal_given : 'no',
    remarks : 'nil',
    created_at: new Date('1/2/20'),
    created_by: 'ats',
    updated_at: new Date('9/4/23'), 
    updated_by: 'ats', 
    status: 'active'
})

clients.save().then(()=>console.log('saved')).catch((error)=>{console.log(error);})



module.exports = clientmodel;