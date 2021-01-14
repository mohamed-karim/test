const db = require("../models");
const Task = require("../models/Task");
const Tag = require("../models/Tag");


//create new task
exports.create = (req,res)=>{
    db.Tag.findOne({
        where: {
            title: req.body.title
        }
    })
        .then(tag => {
            if (!tag) {
                db.Tag.create({
                    title: req.body.title,
                    TaskId:  req.params.TaskId
                })
                    .then(tag => {
                        res.json({ status: tag.title + 'added successfully!' })
                    })
                    .catch(err => {
                        res.send('error: ' + err)
                    })
            } else {
                res.json({ error: 'tag is already exist!' })
            }
        })
        .catch(err => {
            res.send('error: ' + err)
        })
    }

    //get tags by id
    exports.tagsById = (req,res)=>{
        db.Tag.findAll({
            where: {
                TaskId: req.params.id
            }
        }).then(task => res.send(task));
    }


    //get tags by id
    exports.allTag = (req,res)=>{
        db.Tag.findAll().then(task => res.send(task));
    }
