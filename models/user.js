const mongoose = require('./db')

const UserSchema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    } 
    
})

// UserSchema.plugin(passportLocalMongooseEmail, {
//     usernameField: 'email'
// })

module.exports = mongoose.model('User', UserSchema);