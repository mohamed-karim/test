const express = require("express");
const router = express.Router();
const db = require("../models");
const Tag = require("../models/Tag");
const tagService = require("../service/tagService");

//create new tak
exports.create = (req,res)=>{
    tagService.create(req,res);
}

//get tag by id task 
exports.tagsById = (req,res)=>{
    tagService.tagsById(req,res);
}

//get tag by id task 
exports.allTag = (req,res)=>{
    tagService.allTag(req,res);
}

