const express = require("express");
const { createCategory, getAllCategories, getSingleCategory, updateCategory, deleteCategory } = require("../controllers/categoryController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();


router.route("/admin/add/category").post(isAuthenticatedUser,authorizeRoles("admin"),createCategory);
router.route("/admin/categories").get(getAllCategories);
router.route("/admin/category/:id").get(isAuthenticatedUser,authorizeRoles("admin"),getSingleCategory);
router.route("/admin/category/:id").put(isAuthenticatedUser,authorizeRoles("admin"),updateCategory);
router.route("/admin/category/:id").delete(isAuthenticatedUser,authorizeRoles("admin"),deleteCategory);


module.exports = router;