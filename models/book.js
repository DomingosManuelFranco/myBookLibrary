const mongose = require('mongoose');

const Schema = mongose.Schema;

//Creating the Book Schema
const BookSchema = new Schema({
    title: {type: String, required: true},
    author: {type: Schema.Types.ObjectId, ref: 'Author', required: true},
    summary: {type: String, required: true},
    isbn: {type: String, required: true},
    genre: [{type: Schema.Types.ObjectId, ref: 'Genre'}]
});

//a virtual  for book's URL
BookSchema.virtual('url').get( function () {
    return 'catalog/book/' + this._id;
});

module.exports = mongose.model('Book', BookSchema);