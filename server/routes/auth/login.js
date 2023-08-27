const jwt = require("jsonwebtoken");
const jwtSecret = "secret";
const jwtExpire = "1d";
const db = require("../../db");

module.exports = async (req, res, next) => {
    try {
        if (!req.body.username || !req.body.password) {
            throw new Error("invalid username or password.");
        }

        let query = `
            SELECT *
            FROM users    
            WHERE users.username = '${req.body.username}'
            and users.isActive = true 
            limit 1
        `;
        let result = await db.query(query);

        if (result.length === 0) {
            throw new Error("Invalid username or password.");
        }

        if (req.body.password === result[0].password) {
            let token = jwt.sign(
                {
                    uid: result[0].ms_user_id,
                    un: result[0].username,
                    name: result[0].display_name
                },
                jwtSecret,
                { expiresIn: jwtExpire }
            );
            return res.status(200).json({
                token: token
            });
        } else {
            throw new Error("invalid username or password.");
        }
    } catch (err) {
        next(err);
    }
};
