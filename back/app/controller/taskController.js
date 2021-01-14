const express = require("express");
const router = express.Router();
const db = require("../models");
const Task = require("../models/Task");
const taskService = require("../service/taskService");

//create new tak
exports.create = (req,res)=>{
    taskService.create(req,res);;
}

exports.findAll = (req,res)=>{
    taskService.findAll(req,res);
}

exports.delete= (req,res)=>{
    taskService.delete(req,res);
}

exports.update= (req,res)=>{
    taskService.update(req,res);
}

exports.updateTask= (req,res)=>{
    taskService.updateTask(req,res);
}

exports.getTaskById= (req,res)=>{
    console.log("contr");
    taskService.getTaskById(req,res);
}