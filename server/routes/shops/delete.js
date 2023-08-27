const db = require("../../db");

module.exports = async (req, res, next) => {
    try {
        if (!req.params.id) {
            throw new Error("Require id");
        }
        let query = `
            DELETE 
            FROM shops    
            WHERE shops.id = '${req.params.id}'
        `;
        await db.query(query);
        return res.status(200).json({ message: 'Delete successfully' });
    } catch (err) {
        next(err);
    }
};
