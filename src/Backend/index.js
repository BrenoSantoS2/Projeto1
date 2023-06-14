const express = require('express');
const app = express();
const cors = require('cors');

const databaseMiddleware = require('./src/Backend/middlewares/database-connection');

const teachersController = require('./src/Backend/controllers/teacher-controller');
const classesController = require('./src/Backend/controllers/class-controller');

const HOST = '127.0.0.1';
const PORT = 3000;

app.use(express.json());
app.use(cors());
app.use(databaseMiddleware);

app.get('/teachers', teachersController.getAllTeachers);
app.get('/teachers/:teacher_id', teachersController.getTeacher);
app.post('/teachers', teachersController.addTeacher);
app.put('/teachers/:teacher_id', teachersController.updateTeacher);
app.delete('/teachers/:teacher_id', teachersController.removeTeacher);

app.get('/teachers/:teacher_id/classes', teachersController.getClasses);
app.get('/teachers/:teacher_id/activities', teachersController.getActivities);

app.post('/login', teachersController.loginTeacher);

app.get('/classes', classesController.getAllClasses);
app.get('/classes/:class_id', classesController.getClass);
app.post('/classes', classesController.addClass);
app.put('/classes/:class_id', classesController.updateClass);
app.delete('/classes/:class_id', classesController.removeClass);

app.get('/classes/:class_id/activities', classesController.getActivities);

app.listen(PORT, HOST, () => {
    console.log(`Server running on http://${HOST}:${PORT}`);
});
