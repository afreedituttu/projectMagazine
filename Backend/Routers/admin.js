const router = require('express').Router();

const { getAccessToAdminRoute } = require("../Middlewares/Authorization/auth");

router.get("/liststories")
router.get("/:slug/accept")
router.get("/:slug/reject")

module.exports = router;