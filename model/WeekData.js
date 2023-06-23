import mongoose from "mongoose";

const WeekData = new mongoose.Schema({
    prevWeek: [
        {
         name: String,
         calories: Number,
         fat: String,
         carbs: Number,
         protein: Number   
        }
    ],
    currentWeek: [
        {
            name: String,
            calories: Number,
            fat: String,
            carbs: Number,
            protein: Number   
           }
    ],
    nextWeek: [
        {
            name: String,
            calories: Number,
            fat: String,
            carbs: Number,
            protein: Number   
           }
    ],
})

export default mongoose.model('WeekData', WeekData);