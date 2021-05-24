const mongose = require('mongoose');

const Schema = mongose.Schema;

//Creating an Instance of the Book Schema
const BookInstanceSchema = new Schema({
    book: {type: Schema.Types.ObjectId, ref: 'Book', required: true},
    imprint: {type: String, required: true},
    status: {type: String, required: true, enum: ['Available', 'Maintance', 'Loaned', 'Reserved'], default: 'Maintance'},
    due_back: {type: Date, default: Date.now}
});

//A virtual bookinstance's URL
BookInstanceSchema.virtual('url').get( () => {
    return 'catalog/bookinstance/' + this._id;
});

module.exports = mongose.model('BookInstance', BookInstanceSchema);