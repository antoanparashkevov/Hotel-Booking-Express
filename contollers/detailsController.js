const {getById} = require("../services/hotelService");
const router = require('express').Router();

router.get('/:id', async (req,res) => {
    const hotelId = req.params.id;
    const hotel = await getById(hotelId)
    let canBook = true;
    let isOwner = false;
    let noUser = false;
        if(hotel && req.user) {
            if(hotel.booking.map(i=>i.toString()).includes(req.user._id.toString())) {
                canBook = false;
            } else if(req.user._id === hotel.owner) {
                isOwner = true;
            }
            
            
        } else {
            canBook = false;
            noUser = true;
        }
        hotel.canBook = canBook;
        hotel.isOwner = isOwner;
        hotel.noUser = noUser;
         res.render('pages/details',  {
        title: 'Hotel Details',
        hotel
    })
})


module.exports = router;