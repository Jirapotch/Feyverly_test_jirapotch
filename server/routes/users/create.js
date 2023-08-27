const db = require("../../db");

module.exports = async (req, res, next) => {
    try {
        const { username, password, display_name } = req.body;

        let query = `
            INSERT INTO users (username, password, display_name, isActive)
            VALUES ('${username}', '${password}', '${display_name}', 1);
        `;
        
        await db.query(query);

        return res.status(200).json({ message: 'User created successfully' });
    } catch (err) {
        next(err);
    }
};
