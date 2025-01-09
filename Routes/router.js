const express = require('express')

const userController = require('../Controller/userController')
const jwtMiddleware = require('../Middlewares/jwtMiddleware')
const projectController = require('../Controller/projectController')
const multerMiddleware = require('../Middlewares/MulterMiddleware')

const router = express.Router()

router.post('/api/register',userController.registerAPI)
router.post('/api/login',userController.loginAPI)
router.post('/api/addProject', jwtMiddleware, multerMiddleware.single('projectImg'), projectController.addProjectAPI);
router.get('/api/getAllUserProject', jwtMiddleware, projectController.getAllUserProjectAPI);
router.get('/api/getAUserProject', jwtMiddleware, projectController.getAUserProjectAPI);
router.get('/api/getHomeProject', jwtMiddleware, projectController.getHomeProjectAPI);
router.put('/api/editProject/:projectId', jwtMiddleware, multerMiddleware.single('projectImg'), projectController.editProjectAPI);
router.delete('/api/deleteProject/:projectId', jwtMiddleware, multerMiddleware.single('projectImg'), projectController.deleteProjectAPI);

module.exports = router;

