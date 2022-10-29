const router = require('express').Router();

router.get('/details', (req,res)=> {
    res.render('pages/profile', {
        title: 'Profile details'
    })
})