-- Set SQL mode and transaction settings
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

-- Department table
CREATE TABLE department (
  dept_id INT PRIMARY KEY AUTO_INCREMENT,
  dept_name VARCHAR(70) NOT NULL
);

-- Course table
CREATE TABLE course (
  course_id VARCHAR(36) PRIMARY KEY,
  course_title VARCHAR(70) NOT NULL,
  dept_id INT,
  course_credits DECIMAL(3,1),
  course_type ENUM('Theory', 'Lab'),
  is_major BOOLEAN DEFAULT FALSE,
  FOREIGN KEY (dept_id) REFERENCES department(dept_id)
);

-- Course prerequisite table
CREATE TABLE course_prerequisite (
  course_id VARCHAR(36),
  prerequisite_id VARCHAR(36),
  PRIMARY KEY (course_id, prerequisite_id),
  FOREIGN KEY (course_id) REFERENCES course(course_id),
  FOREIGN KEY (prerequisite_id) REFERENCES course(course_id)
);

-- Student table
CREATE TABLE student (
  reg_no INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(40) NOT NULL,
  dept_id INT,
  email VARCHAR(40) UNIQUE,
  phone VARCHAR(15) UNIQUE,
  address VARCHAR(200),
  date_of_birth DATE,
  FOREIGN KEY (dept_id) REFERENCES department(dept_id)
);

-- Teacher table
CREATE TABLE teacher (
  teacher_id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(40) NOT NULL,
  dept_id INT,
  email VARCHAR(40) UNIQUE,
  phone VARCHAR(15) UNIQUE,
  FOREIGN KEY (dept_id) REFERENCES department(dept_id)
);

-- Student course enrollment table
CREATE TABLE takes (
  reg_no INT,
  course_id VARCHAR(36),
  semester VARCHAR(15),
  year YEAR,
  PRIMARY KEY (reg_no, course_id),
  FOREIGN KEY (reg_no) REFERENCES student(reg_no),
  FOREIGN KEY (course_id) REFERENCES course(course_id)
);

-- Teacher course assignment table
CREATE TABLE teaches (
  teacher_id INT,
  course_id VARCHAR(36),
  semester VARCHAR(15),
  year YEAR,
  PRIMARY KEY (teacher_id, course_id),
  FOREIGN KEY (teacher_id) REFERENCES teacher(teacher_id),
  FOREIGN KEY (course_id) REFERENCES course(course_id)
);

-- Result table for theoretical courses
CREATE TABLE result (
  reg_no INT,
  course_id VARCHAR(36),
  teacher_id INT,
  class_attendance INT,
  term_test INT,
  class_assessment INT,
  part_A INT,
  part_B INT,
  total_mark DECIMAL(4,1),
  gpa DECIMAL(3,2),
  letter_grade VARCHAR(2),
  PRIMARY KEY (reg_no, course_id),
  FOREIGN KEY (reg_no) REFERENCES student(reg_no),
  FOREIGN KEY (course_id) REFERENCES course(course_id),
  FOREIGN KEY (teacher_id) REFERENCES teacher(teacher_id)
);

-- Result table for lab courses
CREATE TABLE result_lab (
  reg_no INT,
  course_id VARCHAR(36),
  teacher_id INT,
  total_mark DECIMAL(4,1),
  gpa DECIMAL(3,2),
  letter_grade VARCHAR(2),
  PRIMARY KEY (reg_no, course_id),
  FOREIGN KEY (reg_no) REFERENCES student(reg_no),
  FOREIGN KEY (course_id) REFERENCES course(course_id),
  FOREIGN KEY (teacher_id) REFERENCES teacher(teacher_id)
);

COMMIT;
