const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    image: { type: String, required: true },
    name: { type: String, required: true },
    surname: { type: String, required: true },
    address: { type: String, required: true },
    codePostal: { type: String, required: true },
    city: { type: String, required: true },
    country: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    profession: { type: String, required:true },
    telephone: { type: String, required: true },
    whatsapp: { type: String, required: false },
    linkedin: { type: String, required: false },
    instagram: { type: String, required: false },
    facebook: { type: String, required: false },
    tiktok: { type: String, required: false },
    biography: { type: String, required: true },
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);