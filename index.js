const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// Midlware (to parse JSON requests)
app.use(express.json());

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
   })
.then(()=>{
  console.log('Connected to MongoDB');
})
.catch((err)=>{
  console.log(`Error connecting to MongoDB ${err}`)
});

app.get("/",(req,res)=> {
  res.send("Student Project Tracker Backend is running")
});
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
