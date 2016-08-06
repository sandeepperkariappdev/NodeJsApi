var router = require("express").Routers();
var controller = require("./controller");

router.post("/signin", controller.signin);

module.exports = router;