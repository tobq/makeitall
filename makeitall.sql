DROP DATABASE IF EXISTS makeitall;
CREATE DATABASE makeitall;
\c makeitall;
\dt;

CREATE TABLE department
(
  "ID"   SERIAL      NOT NULL PRIMARY KEY,
  "name" varchar(64) NOT NULL
);

CREATE TABLE employee
(
  "ID"            SERIAL      NOT NULL PRIMARY KEY,
  "department_ID" INTEGER     NOT NULL REFERENCES department ("ID"),
  "first_name"    varchar(64) NOT NULL,
  "last_name"     varchar(64) NOT NULL,
  "title"         varchar(32) NOT NULL,
  "job_title"     varchar(64) NOT NULL,
  "telephone"     varchar(32) NOT NULL
);

CREATE TABLE login
(
  "ID"            INTEGER      NOT NULL PRIMARY KEY,
  "employee_ID"   INTEGER      NOT NULL REFERENCES employee ("ID"),
  "password_hash" varchar(128) NOT NULL
);

CREATE TABLE administrator
(
  "login_ID" SERIAL NOT NULL PRIMARY KEY REFERENCES login ("ID")
);
CREATE TABLE operator
(
  "employee_ID" INTEGER NOT NULL PRIMARY KEY REFERENCES employee ("ID")
);

CREATE TABLE call
(
  "ID"          SERIAL        NOT NULL PRIMARY KEY,
  "operator_ID" INTEGER       NOT NULL REFERENCES operator ("employee_ID"),
  "caller_ID"   INTEGER       NOT NULL REFERENCES employee ("ID"),
  "date"        DATE          NOT NULL DEFAULT NOW(),
  "reason"      varchar(4096) NOT NULL
);

CREATE TABLE problem_type
(
  "ID"   SERIAL      NOT NULL PRIMARY KEY,
  "name" varchar(64) NOT NULL
);

CREATE TABLE problem
(
  "ID"              SERIAL        NOT NULL PRIMARY KEY,
  "problem_type_ID" INTEGER       NOT NULL REFERENCES problem_type ("ID"),
  "creation"        DATE          NOT NULL DEFAULT NOW(),
  "priority"        SMALLINT      NOT NULL,
  "description"     varchar(4096) NOT NULL
);

CREATE TABLE call_problem
(
  "call_ID"    INTEGER NOT NULL REFERENCES call ("ID"),
  "problem_ID" INTEGER NOT NULL REFERENCES problem ("ID"),
  PRIMARY KEY ("call_ID", "problem_ID")
);
INSERT INTO department ("ID", "name")
VALUES (1, 'Help Desk'),
       (2, 'Human Resources'),
       (3, 'Sales'),
       (4, 'Finance'),
       (5, 'Administration'),
       (6, 'Customer Service');

INSERT INTO employee ("ID", "department_ID", "first_name", "last_name", "title", "job_title", "telephone")
VALUES (1, 4, 'Paul', 'Mason', 'Mr', 'Accountant', '+442072358765'),
       (2, 1, 'Alice', 'Jones', 'Ms', 'Help Desk Operator', '+441509392845'),
       (3, 1, 'Tobi', 'Akinyemi', 'Mr', 'Help Desk Hardware Specialist', '+442072490725'),
       (4, 6, 'Mohammed ', 'Smith', 'Mr', 'Head Customer Service ', '+443004937204'),
       (5, 5, 'Mister', 'Boseman', 'Mr', 'Chief Executive Officer', '+441504359683'),
       (6, 3, 'Lisa', 'Jackson', 'Ms', 'Chief Sales Director', '+442049589340'),
       (7, 1, 'Lisa', 'Jackson', 'Ms', 'Help Desk Specialist', '+442072670722'),
       (8, 1, 'Bill', 'Gates', 'Mr', 'Help Desk Specialist', '+441538466445');


CREATE TABLE problem_hierarchy
(
  "parent_ID" INTEGER NOT NULL REFERENCES problem_type ("ID"),
  "child_ID"  INTEGER NOT NULL REFERENCES problem_type ("ID"),
  PRIMARY KEY ("parent_ID", "child_ID")
);

CREATE TABLE problem_note
(
  "call_ID"    INTEGER       NOT NULL REFERENCES call ("ID"),
  "problem_ID" INTEGER       NOT NULL REFERENCES problem ("ID"),
  "text"       varchar(4096) NOT NULL
);

CREATE TABLE problem_solutions
(
  "problem_ID"    INTEGER       NOT NULL PRIMARY KEY REFERENCES problem ("ID"),
  "discoverer_ID" INTEGER       NOT NULL REFERENCES problem ("ID"),
  "date"          date          NOT NULL DEFAULT NOW(),
  "description"   varchar(4096) NOT NULL
);
CREATE TABLE specialist
(
  "employee_ID" INTEGER NOT NULL PRIMARY KEY REFERENCES employee ("ID")
);

INSERT INTO problem_type ("ID", "name")
VALUES (10, 'BIOS'),
       (6, 'Boot Loop'),
       (9, 'Ethernet'),
       (7, 'Networking'),
       (5, 'Operating System'),
       (1, 'Printer'),
       (2, 'Printer Driver'),
       (4, 'Printer Software'),
       (8, 'Wifi'),
       (3, 'Windows Printer Drivers');



INSERT INTO problem_type_hierarchy ("parent_ID", "child_ID")
VALUES (1, 2),
       (1, 4),
       (2, 3),
       (5, 6),
       (7, 8),
       (7, 9);
INSERT INTO specialist ("employee_ID")
VALUES (3),
       (7),
       (8);
