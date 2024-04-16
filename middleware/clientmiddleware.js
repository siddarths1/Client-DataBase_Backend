listSchema.pre('save', async function(next) {
    try {
        if (this.isNew) {
            const lastClient = await this.constructor.findOne({}, { client_id: 1 }, { sort: { client_id: -1 } });
            this.client_id = lastClient ? lastClient.client_id + 1 : 1;
        }
        next();
    } catch (error) {
        next(error);
    }
});
