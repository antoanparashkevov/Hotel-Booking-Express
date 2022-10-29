const router = require('express').Router();

router.get('/:id', (req,res) => {
    res.render('pages/details',  {
        title: 'Hotel Details'
    })
})


module.exports = router;