const express = require('express');
// const bodyParser = require('body-parser')
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'build')));

app.get('/api/team', function (req, res) {
  return res.send(
    {
      "teamId": 1610612747,
      "abbreviation": "LAL",
      "teamName": "Los Angeles Lakers",
      "simpleName": "Lakers",
      "location": "Los Angeles"
    }
  );
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || 8080, () => {
  console.log(`Server is listening on port ${process.env.PORT || 8080}`)
});