const {
    query
} = require("../index.js")

const express = require("express")
const router = express.Router()


router.get("/api/get/:type", function(req, res) {
    let type = req.params.type.trim()
    query.getAll(type).then((array) => {
        res.json(array)
    })
})

router.get("/api/get/:type/:id", function(req, res) {
    let type = req.params.type.trim()
    let id = req.params.id
    query.getById(type, id).then((obj) => {
        res.status(200).json(obj)
    })
})

router.get("/api/condition/:type", function(req, res) {
    let type = req.params.type.trim()
    let testCondition = "status"
    let testValue = "to do"
    query.getByCondition(type, testCondition, testValue).then((response) => {
        res.send(response)
    })
})

router.get("/api/joins/:type/:type2", function(req, res) {
    let type = req.params.type.trim()
    let type2 = req.params.type2.trim()
    query.getByImportanceJoin(type, type2).then((response) => {
        res.json(response)
    })
})

router.post("/api/post/:type", function(req, res) {
    let type = req.params.type.trim()
    query.post(type).then((object) => {
        res.status(200).json(object)
    })
})

router.delete("/api/delete/:type/:id", function(req, res) {
    let type = req.params.type.trim()
    let id = req.params.id
    query.delete(type, id).then((result) => {
        res.json(result)
    })
})

module.exports = router