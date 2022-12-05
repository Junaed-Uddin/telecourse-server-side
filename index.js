const express = require('express');
const app = express();
var cors = require('cors');
app.use(cors());

const port = process.env.PORT || 5000;
const categories = require('./data/categories.json'); 
const courses = require('./data/courses.json');
    
app.get('/', (req, res) => {
    res.send('teleCourse Server is Running');
}); 

app.get('/categories', (req, res) => {
    res.send(categories);
});

app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
    const category = courses.filter(ct => ct.category_id === id);
    res.send(category);
});

app.get('/courses', (req, res) => {
    res.send(courses);
});

app.get('/course/:id', (req, res) => {
    const id = req.params.id;
    const course = courses.find(cs => cs.course_id === id);
    res.send(course);
})

app.listen(port, () => {
    console.log(`Server is running at ${port}`);
});