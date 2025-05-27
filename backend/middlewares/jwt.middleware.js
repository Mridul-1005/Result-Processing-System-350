const jwt = require("jsonwebtoken");

const publicRoutes = new Set([
    "/student_login", "/teacher_login", "/admin_login",
    "/student_signup", "/teacher_signup", "/adminstrator_signup"
]);

const jwtAuthentication = (req, res, next) => {
    const { authorization } = req.headers;
    const jwtSecretKey = process.env.JWT_SECRET_KEY;

    // Allow public routes without authentication
    if (publicRoutes.has(req.originalUrl)) {
        return next();
    }

    try {
        if (!authorization?.startsWith("Bearer ")) {
            throw new Error("UnauthorizedError");
        }

        const token = authorization.split(" ")[1];
        const data = jwt.verify(token, jwtSecretKey);

        // Attach user data to request object
        req.dept_id = data.dept_id;
        req.reg_no = data.reg_no || undefined;
        req.session = data.session || undefined;
        req.teacher_id = data.teacher_id || undefined;
        req.designation = data.designation || undefined;
        req.admin_id = data.admin_id || undefined;

        console.log("Authorized entry");

        next();
    } catch (error) {
        console.error("JWT Auth Error:", error);
        next({ name: "UnauthorizedError" });
    }
};

module.exports = jwtAuthentication;