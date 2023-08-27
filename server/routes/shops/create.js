const db = require("../../db");

module.exports = async (req, res, next) => {
    try {
        const { name, description, lat, lng } = req.body;

        let query = `
            INSERT INTO shops (name, description, lat, lng, isActive)
            VALUES ('${name}', '${description}', '${lat}', '${lng}', 1);
        `;
        
        await db.query(query);

        return res.status(200).json({ message: 'Shop created successfully' });
    } catch (err) {
        next(err);
    }
};
