const express = require('express');
const route = express.Router();

const empController = require('../controller/employee_controller.js');

route.get('/load', empController.employee_api);

route.get('/employee', empController.get);

route.post('/employee', empController.create);

route.put('/employee/:id', empController.update);

route.delete('/employee/:id', empController.destroy);

route.get('/employee/:id', empController.getById);

module.exports = route;