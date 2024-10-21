const router = require('express').Router()
// const { userController, authController, timeController, businessController} = require('../api/controllers')
//const { validateTarjeta} = require('../api/validators/wompi')
const moment = require('moment');
// const { tokenValidation, tokenValidationAdmin, deviceValidation, deviceTokenValidation } = authController;
// Home

router.post('/user')
 

// router.post('/user', userController.createUser)  //listo. ya crea trabajadores
// router.post('/admin', userController.createAdmin)
// router.post('/user/status', userController.updateStatus)
// router.put('/user/deleteuser',tokenValidationAdmin, userController.deleteUser)
// router.put('/user/updateuser',tokenValidationAdmin, userController.updateUser) //actualizar empleado

// router.post('/employe/login', authController.employelogIn)   //rutas para el front.. no vale el uso aun?
// router.post('/employe/newpass', authController.changePassword)   


// router.post('/business', businessController.makeBusiness) 
// router.post('/business/site', businessController.makeSiteForBusiness) 
// router.put('/business/site/deletesite',tokenValidationAdmin, businessController.deleteSiteB)
// router.post('/business/site/employe', businessController.setEmployeeAtSite)  
// router.get('/business/employees', tokenValidation, businessController.getEmployeFromBusiness)  
// router.get('/business/jobs', tokenValidation, businessController.getJobsFromBusiness)  
// router.post('/business/jobs', tokenValidation, businessController.addJobToBusiness)  

// router.post('/business/login', authController.logIn) 
// router.post('/logout', authController.logOut)


// router.get('/time/log',tokenValidation, timeController.createLog)
// router.post('/time/log-manual',tokenValidationAdmin, timeController.createManualLog)
// router.get('/business/timesheet',tokenValidationAdmin, timeController.getTimeSheet) 
// router.get('/export/timesheet',tokenValidationAdmin, timeController.exportTimesheets)  





// router.post('/business/device',tokenValidationAdmin, businessController.addDevice) 
// router.post('/device/login',deviceValidation, businessController.loginDevice) 
// router.get('/business/site',deviceTokenValidation, businessController.employeesFromSite) 


module.exports = router


