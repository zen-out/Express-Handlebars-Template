const {
    query
} = require("../../controller/index.js")

const express = require("express")
const router = express.Router()


router.get("/api/:type", function(req, res) {
    let type = req.params.type.trim()
    query.getAll(type).then((array) => {
        res.json(array)
    })
})

router.get("/api/:type/:id", function(req, res) {
    let type = req.params.type.trim()
    let id = req.params.id
    query.getById(type, id).then((obj) => {
        res.status(200).json(obj)
    })
})

router.post("/api/:type", function(req, res) {
    let type = req.params.type.trim()
    query.post(type).then((object) => {
        res.status(200).json(object)
    })
})

router.delete("/api/:type/:id", function(req, res) {
    let type = req.params.type.trim()
    let id = req.params.id
    query.delete(type, id).then((result) => {
        res.json(result)
    })
})

module.exports = router