const Hotel = require('../models/Hotel');

const getAll = () => {
    return Hotel.find({}).lean();
}

const getById = (id) => {
    return Hotel.findById(id).lean();
}

async function create(hotelData) {
    await Hotel.create(hotelData)
}

async function update(hotelId, hotelData) {
   const hotel = await Hotel.findById(hotelId)
    
    hotel.name = hotelData.name
    hotel.city = hotelData.city
    hotel.imageUrl = hotelData.imageUrl
    hotel.rooms = hotelData.rooms
    
   
    await hotel.save();
}

async function deleteById(hotelId) {
    await Hotel.findByIdAndRemove(hotelId)
}

async function book(hotelId, userId) {
    const hotel = await Hotel.findById(hotelId);
    const isBooked = hotel.booking.includes(userId)
    if(isBooked){
        throw new Error('You already have booked this hotel!')
    }
    hotel.booking.push(userId)
    await hotel.save();
}

module.exports = {
    getById,
    getAll,
    create,
    update,
    deleteById,
    book
}