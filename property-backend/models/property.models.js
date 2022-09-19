const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const propertySchema = new Schema({
        title:{ type: String, required: true},
        rate: {type: Number, required: true},
        bedrooms: {type: Number, required: true},
        bathrooms: {type: Number, required: true},
        pets: {type: String, required: false},
        lookup:{ type: String, required: true},
        street_number:{ type: String, required: true},
        street:{ type: String, required: true},
        locality:{ type: String, required: true},
        city:{ type: String, required: true},
        region:{ type: String, required: true},
        postcode:{ type: String, required: true},
        meshblock:{ type: String, required: true},
        lon:{ type: Number, required: true},
        lat:{ type: Number, required: true},
        formatted:{ type: String, required: true},
    }, {
    timestamps: true,
});

const Propery = mongoose.model('Property', propertySchema);
module.exports = Propery;