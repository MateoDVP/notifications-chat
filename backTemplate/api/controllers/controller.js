
let moment = require('moment');


module.exports = {
    async getOrderDetails(req, res) {
        try{
          let orderDetail = await ShopifyService.getOrderDetail(req.query.order);
          res.status(200).json({error: null, data:orderDetail})
        }catch(error){
            console.log('error: ', error);
          res.status(200).json({error: error, data: null})
        }   
      },
}