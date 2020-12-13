const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({ student_number: 'S39482948'})
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);

console.log();