const db = require("../../db");

module.exports = async (req, res, next) => {
    try {
        const { name, description, lat, lng, isActive } = req.body;
        if (!req.params.id) {
            throw new Error("Require id");
        }
        let query = `
            UPDATE shops    
            SET shops.name = '${name}', shops.description = '${description}', shops.lat = '${lat}', shops.lng = '${lng}', shops.isActive = '${isActive}'
            WHERE shops.id = ${req.params.id} 
        `;
        await db.query(query);
        return res.status(200).json({ message: 'Update successfully' });
    } catch (err) {
        next(err);
    }
};
