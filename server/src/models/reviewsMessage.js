import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    name: String,
    message: String,
    rating: Number,
    createdAt: {
        type: Date,
        default: new Date()
    },
});


const reviewMessage = mongoose.model('reviewMessage', postSchema);

export default reviewMessage;