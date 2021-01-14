const db = require("../models");
const Task = require("../models/Task");
const Tag = require("../models/Tag");



//create new task
exports.create = (req,res)=>{
db.Task.findOne({
    where: {
        title: req.body.title
    }
})
    .then(task => {
        if (!task) {
            db.Task.create({
                description: req.body.description,
                title: req.body.title,
            })
                .then(task => {
                    res.json({ status: task.title + 'added successfully!' })
                })
                .catch(err => {
                    res.send('error: ' + err)
                })
        } else {
            res.json({ error: 'task is already exist!' })
        }
    })
    .catch(err => {
        res.send('error: ' + err)
    })
}

//find all task

exports.findAll = (req,res)=>{
    console.log("test findall")
    db.Task.findAll().then(task => res.send(task));

}

//delete task by id
exports.delete = (req,res)=>{
    db.Task.destroy({
        where: {
            id: req.params.id
        }
    }).then(() => res.send("task is deleted successfully"));
}

//update Task
exports.update = (req,res)=>{
    db.Task.update({
        description: req.body.description,      
    },
        {
            where: {
                id: req.params.id
            }
        }
    ).then(() => res.send("updated successfuly"));
}

//update state of the task
exports.updateTask = (req,res)=>{
    
}

//get task by id
exports.getTaskById = (req,res)=>{
    console.log("service layer")
    db.Task.findAll({
        where: {
            id: req.params.id
        }
    }).then(task => res.send(task));
 
}

