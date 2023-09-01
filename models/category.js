// models/category.js

const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
});

const Category = mongoose.model('Category', categorySchema);

// Create some static categories if they don't exist
const createStaticCategories = async () => {
    try {
        const categories = await Category.find({});
        if (categories.length === 0) {
            await Category.create([
                { name: 'Category 1' },
                { name: 'Category 2' },
                { name: 'Category 3' },
            ]);
            console.log('Static categories created successfully');
        } else {
            console.log('Static categories already exist');
        }
    } catch (err) {
        console.error('Error creating static categories:', err);
    }
};

createStaticCategories(); // Invoke the function to create categories if needed

module.exports = Category;
