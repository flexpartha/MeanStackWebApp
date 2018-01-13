var mongoose=require('mongoose');

var BookSchema=new mongoose.Schema({
    isbn: String,
    title: String,
    author: String,
    publisher: String,
    published_date: String,
    price: Number,
    updated_at: String,
});

module.exports=mongoose.model('BookInfo',BookSchema);