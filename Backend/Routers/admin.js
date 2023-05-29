const router = require('express').Router();

const { getAccessToAdminRoute } = require("../Middlewares/Authorization/auth");

router.get("/listallstories")
router.get("/:slug/accept")
router.get("/:slug/reject")

module.exports = router;