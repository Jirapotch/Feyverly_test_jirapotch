const db = require("../../db");

module.exports = async (req, res, next) => {
    try {
        let query = `
            SELECT *
            FROM shops    
            WHERE shops.isActive = true 
        `;
        let result = await db.query(query);
        return res.status(200).json(result);
    } catch (err) {
        next(err);
    }
};
