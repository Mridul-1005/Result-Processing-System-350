const express = require('express');
const router = express.Router(); 
const {
    getAssignedCourseList,
    getTakenCourseStudentList,
    postCourseEvaluationMarkEntry,
    postLabFinalMarkEntry,
    putPartAMark,
    putPartBMark,
    getCourseWiseAttendaceAndEvaluation,
    getLabCourseFinalMarkList,
    getTheoryCourseFinalMarkList,
    teacherSignUp,
    teacherLogin,
    getTeacherDetails,
    putTeacherApproval,
    getTeacherApprovalDetails
} = require('../controllers/teacher.controller');

// Auth routes
router.put('/teacher_signup', teacherSignUp);
router.post('/teacher_login', teacherLogin);

// Info routes
router.get('/teacherDetails', getTeacherDetails);
router.get('/assignedCourse', getAssignedCourseList);
router.get('/takenCourse', getTakenCourseStudentList);
router.get('/courseWiseAttendaceAndEvaluation', getCourseWiseAttendaceAndEvaluation);
router.get('/labCourseFinalMarkList', getLabCourseFinalMarkList);
router.get('/theoryCourseFinalMarkList', getTheoryCourseFinalMarkList);
router.get('/teacherApproval', getTeacherApprovalDetails);

// Course marking
router.post('/courseEvaluationMarkEntry', postCourseEvaluationMarkEntry);
router.post('/labFinalMarkEntry', postLabFinalMarkEntry);
router.put('/partAMarkEntry', putPartAMark);
router.put('/partBMarkEntry', putPartBMark);

// Approval
router.put('/teacherApproval', putTeacherApproval);

module.exports = router;
