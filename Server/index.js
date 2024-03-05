const express = require("express")
const app = express() 
const mysql = require("mysql2")
const cors = require("cors")




const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'estate',
  });

  db.connect((err) =>{
    if (!err) {
        console.log('Connected to MySQL database');
      } else {
        console.error('MySQL connection error:', err);
      }
  });


const port = 3001;

app.listen(port , ()=>{
    console.log(`Server is running on port ${port}`);
});