const {getById} = require("../services/hotelService");
const router = require('express').Router();

router.get('/:id', async (req,res) => {
    const hotelId = req.params.id;
    const hotel = await getById(hotelId)
    let canBook = true;
    let isOwner = false;
        if(hotel) {
            
            if(hotel.booking.some(id=>id=== req.user._id) || req.user._id === hotel.owner) {
                canBook = false;
            }
            
            if(req.user._id === hotel.owner) {
                isOwner = true;
            }
            
        }
        hotel.canBook = canBook;
        hotel.isOwner = isOwner;
    console.log(req.user._id === hotel.owner)
    res.render('pages/details',  {
        title: 'Hotel Details',
        hotel
    })
})


module.exports = router;