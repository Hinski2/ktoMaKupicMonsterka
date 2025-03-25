import mongoose  from "mongoose";

const contractSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    members: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }],
    createdAt: {
        type: Date,
        default: Date.now
    },
    rotationOrder: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }], 
    lastBuyer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
})

const Contract = mongoose.model('Contract', contractSchema);

export default Contract;