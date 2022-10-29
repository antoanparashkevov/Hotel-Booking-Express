const router = require('express').Router();

router.get('/', (req,res) => {
    res.render('pages/home', {
        title: 'Home page',
        user: req.user
    })
})


module.exports = router;