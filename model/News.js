import mongoose from "mongoose";

const News = new mongoose.Schema({
    label: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
});

export default mongoose.model('News', News);