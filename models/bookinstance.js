const mongose = require('mongoose');
const { DateTime } = require("luxon");

const Schema = mongose.Schema;

//Creating an Instance of the Book Schema
const BookInstanceSchema = new Schema({
    book: {type: Schema.Types.ObjectId, ref: 'Book', required: true},
    imprint: {type: String, required: true},
    status: {type: String, required: true, enum: ['Available', 'Maintance', 'Loaned', 'Reserved'], default: 'Maintance'},
    due_back: {type: Date, default: Date.now}
});

//A virtual bookinstance's URL
BookInstanceSchema.virtual('url').get( function () {

    BookInstanceSchema
        .virtual('due_back_formatted')
        .get(function () {
        return DateTime.fromJSDate(this.due_back).toLocaleString(DateTime.DATE_MED);
});
    return 'catalog/bookinstance/' + this._id;
});

module.exports = mongose.model('BookInstance', BookInstanceSchema);