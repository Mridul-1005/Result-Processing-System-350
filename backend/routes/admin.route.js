const express = require("express");
const router = express.Router(); 

const {
    postCreateCourse,
    postStudentDetails,
    postTeacherDetails,
    postCreateDepartment,
    postOfferCourse,
    assignCourseTeacher,
    getCourseList,
    adminSignUp,
    adminLogin,
    getAdminDetails,
    getControllerApprovalDetails,
    putAdminApproval
} = require("../controllers/admin.controller");

// Admin login & signup
router.put('/adminstrator_signup', adminSignUp);  // Put because signup might update existing user
router.post('/admin_login', adminLogin);

// Admin info
router.get('/adminDetails', getAdminDetails);

// Department & course
router.post("/createDepartment", postCreateDepartment);
router.post("/createCourse", postCreateCourse);
router.get("/getCourse", getCourseList);

// Student & teacher details
router.post("/studentDetailsEntry", postStudentDetails);
router.post("/teacherDetailsEntry", postTeacherDetails);

// Course offer & assignment
router.post("/createOfferCourse", postOfferCourse);
router.post("/assignCourse", assignCourseTeacher);

// Approval
router.get('/adminApproval', getControllerApprovalDetails);
router.put('/adminApproval', putAdminApproval);

module.exports = router;
