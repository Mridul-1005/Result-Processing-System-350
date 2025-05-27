const express = require('express');
const router = express.Router();

const {
    getStudentDetails,
    getCourseOfferList,
    getDropCourseList,
    postRegisterCourse,
    studentSignUp,
    studentLogin,
    getApprovalStatus,
    getAdmitCards
} = require('../controllers/student.controller');

// Auth routes
router.put('/student_signup', studentSignUp);
router.post('/student_login', studentLogin);

// Info routes
router.get('/studentDetails', getStudentDetails);
router.get('/courseOfferList', getCourseOfferList);
router.get('/dropCourseList', getDropCourseList);
router.get('/approvalStatus', getApprovalStatus);
router.get('/admit_card', getAdmitCards);

// Course registration
router.post('/registerCourse', postRegisterCourse);

module.exports = router;
