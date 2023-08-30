const { pool } = require("../config/pgConfig");
const {
  listReservations,
  existingReservation,
  getAllUsersByEmail,
  getAllRoomsByName,
  createReservation,
  getReservationsByUserEmail,
  updateReservation,
  deleteReservation,
} = require("../queries/queries");

const getReservations = async (req, res) => {
  const client = await pool.connect();

  try {
    const response = await client.query(listReservations);
    res.status(200).json({ response: true, result: response.rows });
  } catch (error) {
    res.status(400).json({ response: false, error: error.message });
  } finally {
    client.release(true);
  }
};

const createNewReservation = async (req, res) => {
  const client = await pool.connect();
  const { user_email, room_name, time_start, time_end } = req.body;

  try {
    const existsReservation = await pool.query(existingReservation, [
      room_name,
      time_start,
      time_end,
    ]);

    if (existsReservation.rows.lenght > 0) {
      return res
        .status(400)
        .json({ error: "El horario está ocupado en esta habitación" });
    }

    const response = await client.query(getAllUsersByEmail, [user_email]);
    if (response.rows.length === 0) {
      return res.status(400).json({ error: "Este usuario no existe" });
    }

    const responseRoom = await client.query(getAllRoomsByName, [room_name]);
    if (responseRoom.rows.length === 0) {
      return res.status(400).json({ error: "Esta habitación no existe" });
    }

    const finalResponse = await client.query(createReservation, [
      user_email,
      room_name,
      time_start,
      time_end,
    ]);
    res.status(201).json({ response: true, result: finalResponse.rows });
  } catch (error) {
    res.status(400).json({ response: false, error: error.message });
  } finally {
    client.release(true);
  }
};

const getReservationFromUserEmail = async (req, res) => {
  const client = await pool.connect();
  const requiredEmail = req.params.email;

  try {
    const response = await client.query(getReservationsByUserEmail, [
      requiredEmail,
    ]);
    if (response.rows.length === 0) {
      res.status(200).json({
        response: true,
        message: "Este usuario no tiene reservas",
      });
    } else {
      res.status(200).json({ response: true, result: response.rows });
    }
  } catch (error) {
    res.status(400).json({ response: false, error: error.message });
  } finally {
    client.release(true);
  }
};

const updateReservationById = async (req, res) => {
  const client = await pool.connect();
  const { room_name, time_start, time_end } = req.body;
  const requiredEmail = req.params.email;

  try {
    const response = await client.query(updateReservation, [
      requiredEmail,
      room_name,
      time_start,
      time_end,
    ]);
    res.status(200).json({ response: true, result: response.rows });
  } catch (error) {
    res.status(400).json({ response: false, error: error.message });
  } finally {
    client.release(true);
  }
};

const deleteReservationById = async (req, res) => {
  const client = await pool.connect();
  const requiredId = req.params.id;

  try {
    const response = await client.query(deleteReservation, [requiredId]);
    res.status(200).json({ response: true, result: response.rows });
  } catch (error) {
    res.status(400).json({ response: false, error: error.message });
  } finally {
    client.release(true);
  }
};

module.exports = {
  getReservations,
  createNewReservation,
  getReservationFromUserEmail,
  updateReservationById,
  deleteReservationById,
};
