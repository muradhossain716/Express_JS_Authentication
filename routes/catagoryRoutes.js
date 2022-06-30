const express=require('express');
const router=express.Router()
const {createCatagory, getCatagory, getAllCatagory, updateCatagory,deleteCatagory} = require("../Controllers/catagoryController");
router.post('/create-catagory',createCatagory)
router.get('/get-catagory/:id',getCatagory)
router.get('/get-all-catagory',getAllCatagory)
router.put('/update-catagory/:id',updateCatagory)
router.delete('/delete-catagory/:id',deleteCatagory)

module.exports=router;