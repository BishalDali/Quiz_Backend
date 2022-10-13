const Category = require('../models/Category');
const mongoose = require('mongoose');

// create a new category
exports.createCategory = (req, res) => {
    const category = new Category({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        description: req.body.description
    });
    category.save()
        .then(result => {
            res.status(201).json({
                message: 'Category Created',
                category: result
            });
        })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        });
}

// get all categories
exports.getAllCategories = (req, res) => {
    Category.find()
        .exec()
        .then(docs => {
            res.status(200).json({
                message: 'Categories retrieved',
                count: docs.length,
                categories: docs
            });
        })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        }
    );

}

// get a category by id
exports.getCategoryById = (req, res) => {
    const id = req.params.id;
    Category.findById(id).exec()
        .then(doc => {
            if (doc) {
                res.status(200).json({
                    category: doc
                });
            } else {
                return res.status(404).json({
                    message: 'No valid entry found for provided ID'
                });
            }
        })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        });
}

// update a category by id
exports.updateCategory = (req, res) => {
    const id = req.params.id;
    Category.update({ _id: id }, { $set: req.body })
        .exec()
        .then(result => {
            res.status(200).json({
                message: 'Category updated',
                category: result
            });
        })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        });
}

// delete a category by id
exports.deleteCategory = (req, res) => {
    const id = req.params.id;
    Category.remove({ _id: id })
        .exec()
        .then(result => {
            res.status(200).json({
                message: 'Category deleted',
                category: result
            });
        }
        )
        .catch(err => {
            res.status(500).json({
                error: err
            });
        }
    );
}

// get all categories by name
exports.getCategoriesByName = (req, res) => {
    const name = req.params.name;
    Category.find({ name: name })
        .exec()
        .then(docs => {
            res.status(200).json({
                message: 'Categories retrieved',
                count: docs.length,
                categories: docs
            });
        })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        }
    );
}


