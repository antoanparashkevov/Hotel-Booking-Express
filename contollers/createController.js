const {parseError} = require("../util/parser");
const {create} = require("../services/hotelService");
const router = require('express').Router();

router.get('/', (req,res)=>{
    res.render('pages/create', {
        title: 'Create page'
    })
})
router.post('/', async (req,res)=>{
   const formData = req.body;
   formData.rooms = Number(formData.rooms)
   formData.owner = req.user._id
   console.log('Entered data during the creation process >>> ', formData)
    
    try{
       await create(formData);
       res.redirect('/')
    }catch (error){
       const errors = parseError(error)
        res.render('pages/create',{
            title: 'An error occurred',
            body: formData,
            errors
        })
    }
})


module.exports = router;