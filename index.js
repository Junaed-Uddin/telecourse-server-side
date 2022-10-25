const express = require('express');
const app = express();
var cors = require('cors');
app.use(cors());

const port = process.env.PORT || 5000;
const categories = require('./data/categories.json'); 
const courses = require('./data/courses.json');
    
app.get('/', (req, res) => {
    res.send('tele course Server is Running');
}); 

app.get('/categories', (req, res) => {
    res.send(categories);
});

app.get('/categories/:id', (req, res) => {
    const id = req.params.id;
    const category = courses.filter(ct => ct.category_id === id);
    res.send(category);
});

app.listen(port, () => {
    console.log(`Server is running at ${port}`);
});