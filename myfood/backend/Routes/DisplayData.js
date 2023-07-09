const express = require('express')
const router = express.Router()

router.post('/foodData',(req,res)=>{
    try {
        res.send([global.fooditems,foodcategory])
    } catch (error) {
        console.error(error.message);
        res.send("server error")
    }
})

module.exports =router;