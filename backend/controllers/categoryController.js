const Category = require("../models/categoryModel");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ErrorHandler = require("../utils/errorhandler");


// ctrate category
exports.createCategory = catchAsyncErrors(async (req, res, next) => {
    const {name} = req.body;
    // console.log(name);
    const category = await Category.create({name});
    res.status(201).json({
        success: true,
        category,
        message  :"Category created successfully"
    });
});

// get all categories
exports.getAllCategories = catchAsyncErrors(async (req, res, next) => {
    const categories = await Category.find();
    res.status(200).json({
        success: true,
        categories,
    });
});

// get single category
exports.getSingleCategory = catchAsyncErrors(async (req, res, next) => {
    const category = await Category.findById(req.params.id);
    if (!category) {
        return next(new ErrorHandler(`Category not found with id : ${req.params.id}`, 404));
    }
    res.status(200).json({
        success: true,
        category,
    });
});

// update category
exports.updateCategory = catchAsyncErrors(async (req, res, next) => {

    const {name} = req.body;
    const category = await Category.findById(req.params.id);
    if (!category) {
        return next(new ErrorHandler(`Category not found with id : ${req.params.id}`, 404));
    }

    category.name = name;
    await category.save();


    res.status(200).json({
        success: true,
        category,
        message  :"Category updated successfully"
    });
    

});
// delete category
exports.deleteCategory = catchAsyncErrors(async (req, res, next) => {

    const category = await Category.findByIdAndDelete(req.params.id);
    if (!category) {
        return next(new ErrorHandler(`Category not found with id : ${req.params.id}`, 404));
    }

    res.status(200).json({
        success: true,
        message  :"Category deleted successfully"
    });
});