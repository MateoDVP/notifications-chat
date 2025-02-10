const { ChatService } = require('../services')


let moment = require('moment');


module.exports = {
    async SendNotification(req, res) {
        try{
          let message = await ChatService.SendMsgChat(req.body.text, req.body.spaceID);
          res.status(200).json({error: null, data: message})
        }catch(error){
            console.log('error: ', error);
          res.status(200).json({error: error, data: null})
        }   
      },
}