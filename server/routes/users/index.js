var router = require("express").Router();

router.get("/", require("./getuser"));
router.post("/", require("./create"));
router.put("/:id", require("./update"));
router.delete("/:id", require("./delete"));

module.exports = router;