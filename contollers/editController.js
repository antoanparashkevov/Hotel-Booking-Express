const {getById, update} = require("../services/hotelService");
const router = require('express').Router();
const parseError = require('../util/parser')

router.get('/:id/edit', async (req,res)=> {
    const hotelId = req.params.id
    const hotel = await getById(hotelId)
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

    try{
        if(Object.values(formData).some(v=> !v )) {
            throw new Error('All fields are required!')
        }
        await update(hotelId,formData);
        res.redirect('/hotel/' + hotelId + '/details' )
    }catch (error){
        const errors = parseError(error)
        res.render('pages/edit',{
            title: 'An error occurred',
            hotel: formData,
            errors
        })
    }})

router.post('/:id/delete', (req,res)=> {
    //TODO handle a post request..
})

module.exports = router;