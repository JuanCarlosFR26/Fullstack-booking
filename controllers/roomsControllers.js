const { pool } = require("../config/pgConfig");
const { listRooms } = require("../queries/queries");

const getListRooms = async (req, res) => {
  const client = await pool.connect();

  try {
    const response = await client.query(listRooms);
    res.status(200).json({ response: true, result: response.rows });
  } catch (error) {
    res.status(400).json({ response: false, error: error.message });
  } finally {
    client.release(true);
  }
};

module.exports = {
    getListRooms
}