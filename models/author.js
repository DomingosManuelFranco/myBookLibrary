const mongose = require('mongoose');
const Schema = mongose.Schema;

//Creating the Author Schema
const AuthorSchema = new Schema({

    first_name: {type: String, required: true, maxLength: 100},
    family_name: {type: String, required: true, maxLength: 100},
    date_of_birth: {type: Date},
    date_of_death: {type: Date},
});

//a virtual for author's full name
AuthorSchema.virtual('name').get( () => {
    return this.family_name + ' ' + this.first_name;
});

// a virtual for author's lifespan
AuthorSchema.virtual('lifespan').get( () => {
    return (this.date_of_death.getYear() - this.date_of_birth.getYear()).toString();
});

//a virtual for author's URL
AuthorSchema.virtual('url').get( () => {
    return '/catalog/author' + this._id;
});

model.export = mongose.model('Author', AuthorSchema);