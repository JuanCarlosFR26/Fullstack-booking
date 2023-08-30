const express = require('express');
const { getListUser, createNewUser, deleteUserByEmail } = require('../controllers/usersControllers');
const { getListRooms } = require('../controllers/roomsControllers');
const { getReservations, getReservationFromUserEmail, createNewReservation, updateReservationById, deleteReservationById } = require('../controllers/reservationsController');
const router = express.Router();


// USERS
router.get('/users', getListUser);
router.post('/user/create', createNewUser);
router.delete('/user/delete/:email', deleteUserByEmail);

// ROOMS
router.get('/rooms', getListRooms);

// RESERVATIONS
router.get('/reservations', getReservations)
router.get('/reservations/:email', getReservationFromUserEmail);
router.post('/reservations/create', createNewReservation)
router.patch('/reservations/update/:id', updateReservationById)
router.delete('/reservation/delete/:id', deleteReservationById);



module.exports = router;