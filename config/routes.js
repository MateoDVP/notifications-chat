const router = require('express').Router()
const { ChatController } = require('../api/controllers')
const { ExchangeService } = require('../api/services/index')
const moment = require('moment');

router.get('/test', async function(req, res) {
    try {
      
        res.json("im a live")
    }catch(err) {
        console.log('error: ', err);
        res.json("error");
    }
    
    })
 
router.get('/exchanges/getAll', ExchangeService.getExchangeRate)

router.post('/send-notifications',)




module.exports = router


