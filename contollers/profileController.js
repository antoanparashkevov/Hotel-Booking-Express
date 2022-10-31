const {findByBookingUser} = require("../services/hotelService");
const router = require('express').Router();

router.get('/details', async (req,res)=> {
    const user = req.user;
    const userId = user._id
    console.log(user);
    const bookingHotels = await findByBookingUser(userId)
    res.render('pages/profile', {
        title: 'Profile details',
        user: Object.assign({bookings: bookingHotels.map(h=>h.name).join(', ')}, user)
    })
})

module.exports = router;