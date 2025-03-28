const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello from the server!!', app: 'Natours' });
});

app.post('/', (req, res)=> {
    res.send('Received a POST request');
})

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
