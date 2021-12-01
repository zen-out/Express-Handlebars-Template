const {
    Query
} = require("../../../backend/queries/index.js")
const {
    connection
} = require("../../../backend/database/index")
let query = new Query("features", connection)

const express = require("express")
const {
    app
} = require("../../../expressConfig.js")
const router = express.Router()


router.get("/api/features", function(req, res) {
    query.getAll().then((array) => {
        res.json(array)
    })
})

router.get("/api/features/:id", function(req, res) {
    query.getById(req.params.id).then((obj) => {
        res.status(200).json(obj)
    })
})

router.post("/api/features", function(req, res) {
    query.post(req.body).then((object) => {
        res.status(200).json(object)
    })
})

router.delete("/api/features/:id", function(req, res) {
    query.delete(req.params.id).then((result) => {
        res.json(result)
    })
})

module.exports = router