// listSchema.pre('save', async function(next) {
//     try {
//         if (this.isNew) {
//             console.log("middleware");
//             const latestClient = await clientmodel.findOne({}, {}, { sort: { 'client_id' : -1 } });
//             const latestClientId = latestClient ? latestClient.client_id : 0;  
//             this.client_id = latestClientId + 1;  // Increment the latest client_id by 1
//         }
//         next();
//     } catch (error) {
//         next(error);
//     }
// });


// // Middleware to set the created_at and updated_at fields
// listSchema.pre('save', function (next) {
//     const currentDate = new Date();
//     if (!this.created_at) {
//         this.created_at = currentDate;
//     }
//     this.updated_at = currentDate;

//     next();
// });