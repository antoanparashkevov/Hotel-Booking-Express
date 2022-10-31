const {getById, update, deleteById} = require("../services/hotelService");
const router = require('express').Router();
const {parseError} = require('../util/parser')

router.get('/:id/edit', async (req,res)=> {
    const hotelId = req.params.id
    const hotel = await getById(hotelId)
    
    if(hotel.owner !== req.user._id) {
        return res.redirect('/auth/login')
    }
    
    res.render('pages/edit', {
        title: 'Edit',
        hotel
    })
})

router.post('/:id/edit', async (req,res)=> {
    const hotelId = req.params.id;
    const formData = req.body;
    formData.rooms = Number(formData.rooms)
    console.log('Entered data during the edited process >>> ', formData)

    const hotel = await getById(hotelId)

    if(hotel.owner !== req.user._id) {
        return res.redirect('/auth/login')
    }

    try{
        if(Object.values(formData).some(v=> !v )) {
            throw new Error('All fields are required!')
        }
        await update(hotelId,formData);
        res.redirect('/hotel/' + hotelId)
    }catch (error){
        const errors = parseError(error)
        formData._id = hotelId
        res.render('pages/edit',{
            title: 'An error occurred',
            hotel: formData,
            errors
        })
    }})

router.get('/:id/delete', async (req,res)=> {
    const hotelId = req.params.id;
    const hotel = await getById(hotelId)
    
    if(hotel.owner !== req.user._id) {
        return res.redirect('/auth/login')
    }
    
    await deleteById(hotelId)
    res.redirect('/')
})

module.exports = router;