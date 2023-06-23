import express from "express";
import mongoose from "mongoose";
import router from "./router.js";
import cors from 'cors';

const PORT = 5065;
const mongoUrl = `mongodb+srv://user:user@cluster.uj04xnw.mongodb.net/?retryWrites=true&w=majority`;
const server = express();

server.use(cors());
server.use(express.json());
server.use('/api', router);


async function start() {
  try {
    await mongoose.connect(mongoUrl),
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      };
    server.listen(PORT, () => {
      console.log(`Server Up  ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}

start();

// server.post("/week", async (req, res) => {
//   const { prevWeek, currentWeek, nextWeek  } = req.body;
//   WeekData.create({ prevWeek, currentWeek, nextWeek });
//   res.json({
//     "message": "okey"
//   });
// });

// server.get("/week", async (req, res) => {
//   try {
//     const weekData = await WeekData.find();
//     res.json(weekData); 
//   } catch (error) {
//     console.log(error);
//   }
// });
