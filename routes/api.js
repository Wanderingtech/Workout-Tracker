var router = require("express").Router()
var db = require("../models")

router.get("/api/workouts",function(req,res){
    db.find()
    .then(function(exercises){
        console.log("Get route",exercises)
        res.json(exercises)
    })
})
router.put("/api/workouts/:id",function(req,res){
    db.findByIdAndUpdate(req.params.id,
        {$push:{exercises: req.body}},{new: true})
    .then(function(exercises){
        console.log("Put route",exercises)
        res.json(exercises)
    })
})
router.post("/api/workouts",function(req,res){
    db.create(req.body)
    .then(function(exercises){
        console.log("Post route",exercises)
        res.json(exercises)
    })
})
router.get("/api/workouts/range",function(req,res){
    db.find({}).limit(7)
    .then(function(exercises){
        console.log("Get range route",exercises)
        res.json(exercises)
    })
})
module.exports = router