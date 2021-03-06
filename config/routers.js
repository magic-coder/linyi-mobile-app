var Admin = require('../app/controllers/admin');
var Index = require('../app/controllers/index');


module.exports = function(router){

	// admin
	router.get('/admin', Admin.showListZone);
	router.get('/admin/listZone', Admin.showListZone);
	router.get('/admin/addZone', Admin.showAddZone);
	router.post('/admin/addZone', Admin.uploadZoneFileList, Admin.uploadZoneFile, Admin.addZone);
	router.get('/admin/updateZone/:id', Admin.updateZone);
	router.get('/admin/removeZone/:id', Admin.removeZone);
	router.get('/admin/listAssessment/:id', Admin.listAssessment);
	router.get('/admin/removeAssessment/:zoneid/:id', Admin.removeAssessment);

	// index
	router.get('/', Index.index);
	router.get('/index', Index.index);
	router.get('/detail/:id', Index.detail);
	router.post('/addAssessment', Index.addAssessment);
	router.get('/getWeather', Index.getWeather);

};
