'use strict';

const videosController  = require('../controllers/videos-controller'),
    express             = require('express'),
    router              = express.Router();

router
    .get('/inicio', videosController.getAll)
    .get('/agregar', videosController.addForm)
    .post('/inicio', videosController.save)
    .get('/editar/:id', videosController.getOne)
    .post('/actualizar', videosController.save)
    .post('/eliminar/:id', videosController.delete)
    .get('/detalles/:id', videosController.getDetails)
    .get('/perfil', videosController.getProfile)
    .get('/perfil/:idUser', videosController.getProfileUser)
    .post('/calificar', videosController.calificarVideo)
    .post('/comentar', videosController.comentarVideo)
    .post('/upload_avatar', videosController.uploadAvatar)
    .get('/video/votos/:id_video', videosController.getAllUsersWhoHaveRated);
    
module.exports = router;