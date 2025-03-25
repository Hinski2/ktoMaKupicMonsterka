import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    nick: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true, 
        unique: true
    }, 
    password: {
        type: String, 
        required: true, 
        minlength: 7,
        trim: true
    },
    friends: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }]
})

const User = mongoose.model('User', userSchema);

export default User;