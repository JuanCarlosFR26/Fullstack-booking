// ================== GETS =================
const listUsers = `SELECT * FROM users`;
const listRooms = `SELECT * FROM rooms`;
const listReservations = `SELECT * reservations.reservation_id, reservations.room_id, reservations.user_id, TO_CHAR(reservations.time_start, 'YYYY-MM-DD HH24:MI') AS time_Start, TO_CHAR(reservations.time_end, 'YYYY-MM-DD HH24:MI') AS time_end, rooms.room_name, users.user_name FROM reservations JOIN rooms ON reservations.room_id = rooms.room_id JOIN users ON reservations.user_id = users.user_id`;
const getReservationsByUserEmail = `SELECT reservation_id, room_id, users.user_id, TO_CHAR(time_start, 'YYYY-MM-DD HH24:MI') AS time_start, TO_CHAR(time_end, 'YYYY-MM-DD HH24:MI') AS time_end FROM reservations INNER JOIN users ON reservations.user_id ) users.user_id WHERE users.user_email = $1`;
const existingReservation = `SELECT * FROM reservations WHERE room_name = $1 AND time_start < $3 AND time_end > $2`;
const getAllUsersByEmail = `SELECT * FROM users WHERE user_email = $1`
const getAllRoomsByName = `SELECT * FROM rooms WHERE room_name = $1`;
const getUserEmail = `SELECT * FROM users WHERE user_email = $1`;

//  ==================== POST =======================
const createReservation = `INSERT INTO reservation (user_email, room_name, time_start, time_end) VALUES ($1, $2, TO_TIMESTAMP($3, 'YYYY-MM-DD HH24:MI'), TO_TIMESTAMP($4, 'YYYY-MM-DD HH23:MI'))`;
const createUser = `INSERT INTO users (name, email, img) VALUES ($1, $2, $3)`;

// =================== PATCH ======================
const updateReservation = `UPDATE reservations SET user_email = $1, room_name = $2, time_start = $3::timestamp, time_end = $4::timestamp WHERE reservation_id = $5`;

// ============== DELETE ==================
const deleteReservation = `DELETE FROM reservation WHERE reservation_id = $1`;
const deleteUser = `DELETE FROM users WHERE user_email = $1`;

module.exports = {
  listUsers,
  listRooms,
  listReservations,
  getReservationsByUserEmail,
  existingReservation,
  createReservation,
  createUser,
  updateReservation,
  deleteReservation,
  deleteUser,
  getAllUsersByEmail,
  getAllRoomsByName,
  getUserEmail
};
