
const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    phone: { type: String, required: true },
    id: { type: String, required: true },
    place: { type: String, required: true },
    age: { type: Number, required: true },
    position: { type: String, required: true }
});

module.exports = mongoose.model('Employee', EmployeeSchema);
