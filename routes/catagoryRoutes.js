const express=require('express');
const router=express.Router()
const {catagoryController, getCatagory, getAllCatagory, updateCatagory,deleteCatagory} = require("../Controllers/catagoryController");
router.post('/create-catagory',catagoryController)
router.get('/get-catagory/:id',getCatagory)
router.get('/get-all-catagory',getAllCatagory)
router.patch('/update-catagory/:id',updateCatagory)
router.delete('/delete-catagory/:id',deleteCatagory)

module.exports=router;