const { pool } = require("../config/pgConfig");
const { listUsers, createUser, getUserEmail, deleteUser } = require("../queries/queries");

const getListUser = async (req, res) => {
  const client = await pool.connect();

  try {
    const response = await client.query(listUsers);
    res.status(200).json({ response: true, result: response.rows });
  } catch (error) {
    res.status(400).json({ response: false, error: error.message });
  } finally {
    client.release(true);
  }
};

const createNewUser = async(req, res) => {
    const { user_name, user_email, user_img } = req.body;
    const client = await pool.connect();

    try {
        const response = await client.query(createUser, [user_name, user_email, user_img]);
        res.status(201).json( { response: true, result: response.rows });
        console.log('User registered')
    } catch (error) {
        res.status(400).json({ response: false, error: error.message });
    } finally {
        client.release(true);
    }
}

const deleteUserByEmail = async(req, res) => {
    const client = await pool.connect();
    const requiredEmail = req.params.email;

    const userEmail = getUserEmail;
    const userResult = await client.query(userEmail, [requiredEmail])
    if(userResult.rows.length === 0) {
        return res.status(400).json({ error: "Este usuario no existe"})
    } else {
        try {
            const finalResponse = await client.query(deleteUser, [requiredEmail])
            res.status(200).json({ response: 'Usuario eliminado'})
        } catch(error) {
            res.status(400).json({ response: false, error: error.message })
        } finally {
            client.release(true);
        }
    }

}

module.exports = {
    getListUser,
    createNewUser,
    deleteUserByEmail
}