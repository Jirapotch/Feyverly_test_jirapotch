const db = require("../../db");

module.exports = async (req, res, next) => {
    try {
        const { username, password, display_name, isActive } = req.body;
        if (!req.params.id) {
            throw new Error("Require id");
        }
        let query = `
            UPDATE users    
            SET users.username = '${username}', users.password = '${password}', users.display_name = '${display_name}', users.isActive = '${isActive}'
            WHERE users.id = ${req.params.id} 
        `;
        await db.query(query);
        return res.status(200).json({ message: 'Update successfully' });
    } catch (err) {
        next(err);
    }
};
