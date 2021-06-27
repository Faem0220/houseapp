const mongoose = require('mongoose');
const {Schema} = mongoose;

const House = new Schema({
    name: String,
    surface: String,
    rooms: String,
    bathrooms: String,
    pool: String,
    spaces: String,
    pic1: String,
    pic2: String,
    pic3: String,
    pic4: String,
    pic5: String,
    pic6: String,
    pic7: String,
    pic8: String,
    pic9: String,
    pic10: String,
});
module.exports = mongoose.model('House', House);// Se le da nombre y Schema 
