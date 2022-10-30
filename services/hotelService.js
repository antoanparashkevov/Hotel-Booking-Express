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

   
}

async function deleteById(hotelId) {
    
}

async function book(hotelId, userId) {

}

module.exports = {
    getById,
    getAll,
    create,
    update,
    deleteById,
    book
}