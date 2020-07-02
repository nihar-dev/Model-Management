import mongoose from 'mongoose';

import { ModelsSchema } from '../models/dataModels';

const DataScema = mongoose.model('player',ModelsSchema);

export const addNewModel = (req,res) =>{
    let newPlayer = new DataScema(req.body);
    console.log(req.body);
    newPlayer.save( (err,DataScema) => {
        if(err) {
            res.send(err);
        }
        res.json(DataScema);
    })
};

export const getModel = (req,res) =>{

    DataScema.find({}, (err,DataScema) => {
        if(err) {
            res.send(err);
        }
        res.json(DataScema);
    })
};

export const getModelWithID = (req,res) =>{

    DataScema.findById(req.params.ModelId, (err,DataScema) => {
        if(err) {
            res.send(err);
        }
        res.json(DataScema);
    })
};

export const getModelWithMeta = (req,res) =>{
    const search_type = Object.keys(req.query).length !== 0 ? req.query  : req.params.ModelName === 'allData' ? {} : {firstName : new RegExp('^' +req.params.ModelName , 'i')}
    
    
    DataScema.find(search_type, (err,DataScema) => {
        if(err) {
            res.send(err);
        }
        res.json(DataScema);
    })
};

export const updateModel = (req,res) =>{
    console.log(req.body)
    DataScema.findOneAndUpdate({_id:req.params.ModelId},req.body,{new: true}, (err,DataScema) => {
        if(err) {
            res.send(err);
        }
        res.json(DataScema);
    })
};

