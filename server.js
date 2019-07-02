const express = require('express');
const connectDb = require('./config/db');

const app = express();

connectDb();


//Init Middleware
app.use(express.json({ extended: false }));



app.get('/', (req, res)=>{
    res.send(' csi API running');
});



//Define Routes here
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxx

//

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});
  