const Employee = require('../models/Employee');

const createEmployee = async (req, res) => {
    try {
        const { name, phone, id, place, age, position } = req.body; // ✅ Ensure all necessary fields are included

        // Create a new employee instance
        const employee = new Employee({
            name,  // ✅ Use correct casing and match schema
            phone,
            id,
            place,
            age,
            position
        });

        await employee.save(); 
        res.status(201).json(employee); 
    } catch (error) {
        console.error('There is an error:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = { createEmployee };
