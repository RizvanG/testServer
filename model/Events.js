import mongoose from "mongoose";

const Events = new mongoose.Schema({
    date: {
        type: String,
        require: true,
    },
    text: {
        type: String,
        require: true,
    }
})

export default mongoose.model('Events', Events);