module.exports = function (app) {
	var index = require('../controllers/controller.index');
	var ctrl = require('../controllers/controller.main');
	app.get("/", index.getUserDetails);
	app.post("/api/register", ctrl.registerUser);
	app.post("/api/login", ctrl.loginUser);
	app.post("/api/logout", ctrl.logout);
	app.get("/api/checkStatus", ctrl.checkStatus);
	console.log('router Initialized');
};
