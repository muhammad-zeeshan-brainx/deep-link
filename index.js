const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  const filePath = path.join(__dirname, 'assetLinks.json');
  fs.readFile(filePath, 'utf8', (err, jsonString) => {
    if (err) {
      console.log('Error reading file:', err);
      return;
    }
    try {
      // Parse the JSON string into a JavaScript object
      const data = JSON.parse(jsonString);
      res.status(200).send(data);
    } catch (err) {
      console.log('Error parsing JSON string:', err);
    }
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
