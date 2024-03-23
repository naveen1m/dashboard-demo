const pool = require("../database/pgConnection");
const { getProcessInfo } = require("../model/queries");

const sendDataController = async (req, res) => {
    try {
      // Query PostgreSQL database
      const result = await pool.query(getProcessInfo);
  
      // Send response with fetched data
      res.json(result.rows);
    } catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }

 module.exports = {sendDataController}
