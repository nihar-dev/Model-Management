import mongoose from 'mongoose';


const Schema = mongoose.Schema;

export const ModelsSchema = new Schema({
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        // required: true
    },
    modelWear:{
        type: String,
        
    },
    height:{
        type: Number,
    },
    bust:{
        type: Number,
    },
    waist:{
        type: Number,
    },
    highHip:{
        type: Number,
    },
    lowHip:{
        type: Number,
    },
    imageData:[],
    created_date:{
        type: Date,
        default: Date.now
    },
})