const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true }, // adresse mail - unique - 
  password: { type: String, required: true }
});

userSchema.plugin(uniqueValidator); // a installer dans le terminal - pour que l'utilisateur puisse pas utiliser deux fois la meme adresse mail 

module.exports = mongoose.model('User', userSchema);