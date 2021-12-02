const express = require("express")
const router = express.Router()

router.get("/dashboard", function(req, res) {
    res.render("components/page/dashboard/layout", {
        layout: "main"
    })
})

router.get("/logic/dashboard", function(req, res) {
    res.render("pageLogic/dashboard/dashboard", {
        layout: "main"
    })
})

module.exports = router