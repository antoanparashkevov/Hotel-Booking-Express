const {getAll} = require("../services/hotelService");
const router = require('express').Router();

router.get('/', async (req,res) => {
    const allHotels = await getAll();
    res.render('pages/home', {
        title: 'Home page',
        user: req.user,
        hotels: allHotels
    })
})


module.exports = router;