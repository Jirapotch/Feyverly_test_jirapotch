var router = require("express").Router();

router.get("/", require("./getshops"));
router.post("/", require("./create"));
router.put("/:id", require("./update"));
router.delete("/:id", require("./delete"));

module.exports = router;