const router = require('express').Router();
const { acceptStory } = require('../Controllers/admin');

const { getAccessToAdminRoute } = require("../Middlewares/Authorization/auth");
const { getAccessToRoute } = require("../Middlewares/Authorization/auth");

router.get("/:slug/accept", getAccessToRoute, acceptStory)

module.exports = router;