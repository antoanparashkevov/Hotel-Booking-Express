const router = require('express').Router();

router.get('/:id/edit', (req,res)=> {
    res.render('pages/edit', {
        title: 'Edit'
    })
})

router.post('/:id/edit', (req,res)=> {
    //TODO handle a post request..
})

router.post('/:id/delete', (req,res)=> {
    //TODO handle a post request..
})

module.exports = router;