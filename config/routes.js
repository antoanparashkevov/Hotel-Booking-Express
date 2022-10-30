const homeController = require('../contollers/homeController');
const authController = require('../contollers/authController');
const detailsController = require('../contollers/detailsController');
const createController = require('../contollers/createController');
const editController = require('../contollers/editController');
const profileController = require('../contollers/profileController');
const {isUser} = require("../middlewares/guards");

module.exports = (app) => {
    app.use('/', homeController);
    app.use('/auth', authController);
    app.use('/hotel', detailsController);
    app.use('/create',isUser(), createController);
    app.use('/hotel', editController);
    app.use('/profile', isUser(),profileController);
    
}