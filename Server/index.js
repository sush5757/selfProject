const express = require("express")
const app = express() 
const db = require(`./models`)

// Routers
const postRouter = require("./Routes/Login")
app.use("/login", postRouter)


const port = 3001;

db.sequelize.sync().then(() => {
  app.listen(port , ()=>{
    console.log(`Server is running on port ${port}`);
});
});