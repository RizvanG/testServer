import mongoose from "mongoose";

const Scenarios = new mongoose.Schema({
    date: {
        type: String,
        require: true
    },
    text: {
        type: String,
        require: true
    }
})

export default mongoose.model('Scenatios', Scenarios);