const { Router } = require('express');
const { sendDataController } = require('../controller/sendData.js');

const router = Router();

router.get('/',(req,res)=>{
    res.send("using api route");
})
router.get('/data', sendDataController)
module.exports = router;