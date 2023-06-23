import mongoose from "mongoose";

const BarValue = new mongoose.Schema({
    year: {
        type: Number,
        require: true,
    },
    value: {
        type: Number,
        require: true,
    }
})

export default mongoose.model('BarValue', BarValue);