// index.js
import UserDAO from "./dao/UserDAO.js"

const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/login', (req,res) => {
    res.sendFile(path.join(__dirname, '../Client/index.html'));
});

app.post('/save', (req, res) => {
  const { username, password } = req.body;  //THIS ISNOT WORKING, IT'S ALL UNDEFINED....
  // Save the data to a text file (e.g., users.txt)
  fs.appendFile(path.join(__dirname, 'users.txt'), `Username: ${username}, Password: ${password}\n`, (err) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Error saving data.' });
    } else {
      res.status(200).json({ message: 'Data saved successfully.' });
    }
  });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
