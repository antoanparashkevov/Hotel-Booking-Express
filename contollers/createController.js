const router = require('express').Router();

router.get('/', (req,res)=>{
    res.render('pages/create', {
        title: 'Create page'
    })
})
router.post('/', (req,res)=>{
   //TODO to handle a post request.
})


module.exports = router;