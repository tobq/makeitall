--
-- PostgreSQL database dump
--

-- Dumped from database version 10.1
-- Dumped by pg_dump version 10.1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: administrator; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE administrator (
    login_id integer NOT NULL
);


ALTER TABLE administrator OWNER TO postgres;

--
-- Name: call; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE call (
    id integer NOT NULL,
    operator_id integer NOT NULL,
    caller_id integer NOT NULL,
    date date DEFAULT now() NOT NULL,
    reason character varying(4096) NOT NULL
);


ALTER TABLE call OWNER TO postgres;

--
-- Name: call_ID_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE "call_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE "call_ID_seq" OWNER TO postgres;

--
-- Name: call_ID_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE "call_ID_seq" OWNED BY call.id;


--
-- Name: call_problem; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE call_problem (
    call_id integer NOT NULL,
    problem_id integer NOT NULL
);


ALTER TABLE call_problem OWNER TO postgres;

--
-- Name: department; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE department (
    id integer NOT NULL,
    name character varying(64) NOT NULL
);


ALTER TABLE department OWNER TO postgres;

--
-- Name: department_ID_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE "department_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE "department_ID_seq" OWNER TO postgres;

--
-- Name: department_ID_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE "department_ID_seq" OWNED BY department.id;


--
-- Name: employee; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE employee (
    id integer NOT NULL,
    department_id integer NOT NULL,
    first_name character varying(64) NOT NULL,
    last_name character varying(64) NOT NULL,
    title character varying(32) NOT NULL,
    job_title character varying(64) NOT NULL,
    telephone character varying(32) NOT NULL
);


ALTER TABLE employee OWNER TO postgres;

--
-- Name: employee_ID_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE "employee_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE "employee_ID_seq" OWNER TO postgres;

--
-- Name: employee_ID_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE "employee_ID_seq" OWNED BY employee.id;


--
-- Name: login; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE login (
    id integer NOT NULL,
    employee_id integer NOT NULL,
    password_hash character varying(128) NOT NULL
);


ALTER TABLE login OWNER TO postgres;

--
-- Name: login_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE login_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE login_id_seq OWNER TO postgres;

--
-- Name: login_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE login_id_seq OWNED BY login.id;


--
-- Name: operator; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE operator (
    employee_id integer NOT NULL
);


ALTER TABLE operator OWNER TO postgres;

--
-- Name: problem; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE problem (
    id integer NOT NULL,
    problem_type_id integer NOT NULL,
    creation date DEFAULT now() NOT NULL,
    priority smallint NOT NULL,
    description character varying(4096) NOT NULL,
    title character varying(1024) NOT NULL
);


ALTER TABLE problem OWNER TO postgres;

--
-- Name: problem_ID_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE "problem_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE "problem_ID_seq" OWNER TO postgres;

--
-- Name: problem_ID_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE "problem_ID_seq" OWNED BY problem.id;


--
-- Name: problem_note; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE problem_note (
    call_id integer NOT NULL,
    problem_id integer NOT NULL,
    text character varying(4096) NOT NULL
);


ALTER TABLE problem_note OWNER TO postgres;

--
-- Name: problem_solution; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE problem_solution (
    problem_id integer NOT NULL,
    discoverer_id integer NOT NULL,
    date date DEFAULT now() NOT NULL,
    description character varying(4096) NOT NULL
);


ALTER TABLE problem_solution OWNER TO postgres;

--
-- Name: problem_type; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE problem_type (
    id integer NOT NULL,
    name character varying(64) NOT NULL
);


ALTER TABLE problem_type OWNER TO postgres;

--
-- Name: problem_type_ID_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE "problem_type_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE "problem_type_ID_seq" OWNER TO postgres;

--
-- Name: problem_type_ID_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE "problem_type_ID_seq" OWNED BY problem_type.id;


--
-- Name: problem_type_hierarchy; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE problem_type_hierarchy (
    parent_id integer NOT NULL,
    child_id integer NOT NULL
);


ALTER TABLE problem_type_hierarchy OWNER TO postgres;

--
-- Name: specialist; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE specialist (
    employee_id integer NOT NULL
);


ALTER TABLE specialist OWNER TO postgres;

--
-- Name: specialist_problem; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE specialist_problem (
    specialist_id integer NOT NULL,
    problem_id integer NOT NULL
);


ALTER TABLE specialist_problem OWNER TO postgres;

--
-- Name: call id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY call ALTER COLUMN id SET DEFAULT nextval('"call_ID_seq"'::regclass);


--
-- Name: department id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY department ALTER COLUMN id SET DEFAULT nextval('"department_ID_seq"'::regclass);


--
-- Name: employee id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY employee ALTER COLUMN id SET DEFAULT nextval('"employee_ID_seq"'::regclass);


--
-- Name: login id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY login ALTER COLUMN id SET DEFAULT nextval('login_id_seq'::regclass);


--
-- Name: problem id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY problem ALTER COLUMN id SET DEFAULT nextval('"problem_ID_seq"'::regclass);


--
-- Name: problem_type id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY problem_type ALTER COLUMN id SET DEFAULT nextval('"problem_type_ID_seq"'::regclass);


--
-- Data for Name: administrator; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY administrator (login_id) FROM stdin;
\.


--
-- Data for Name: call; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY call (id, operator_id, caller_id, date, reason) FROM stdin;
\.


--
-- Data for Name: call_problem; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY call_problem (call_id, problem_id) FROM stdin;
\.


--
-- Data for Name: department; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY department (id, name) FROM stdin;
1	Help Desk
2	Human Resources
3	Sales
4	Finance
5	Administration
6	Customer Service
\.


--
-- Data for Name: employee; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY employee (id, department_id, first_name, last_name, title, job_title, telephone) FROM stdin;
1	4	Paul	Mason	Mr	Accountant	+442072358765
2	1	Alice	Jones	Ms	Help Desk Operator	+441509392845
3	1	Tobi	Akinyemi	Mr	Help Desk Hardware Specialist	+442072490725
4	6	Mohammed 	Smith	Mr	Head Customer Service 	+443004937204
6	3	Lisa	Jackson	Ms	Chief Sales Director	+442049589340
7	1	Lisa	Jackson	Ms	Help Desk Specialist	+442072670722
8	1	Bill	Gates	Dr	Help Desk Specialist	+441538466445
5	5	Mister	Boseman	Dr	Chief Executive Officer	+441504359683
\.


--
-- Data for Name: login; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY login (id, employee_id, password_hash) FROM stdin;
1	2	HASH
\.


--
-- Data for Name: operator; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY operator (employee_id) FROM stdin;
\.


--
-- Data for Name: problem; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY problem (id, problem_type_id, creation, priority, description, title) FROM stdin;
1	1	2018-12-30	1	DESCRIPTION IS THIS SHIT HERE BOI	this is a problem title
\.


--
-- Data for Name: problem_note; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY problem_note (call_id, problem_id, text) FROM stdin;
\.


--
-- Data for Name: problem_solution; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY problem_solution (problem_id, discoverer_id, date, description) FROM stdin;
\.


--
-- Data for Name: problem_type; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY problem_type (id, name) FROM stdin;
10	BIOS
6	Boot Loop
9	Ethernet
7	Networking
5	Operating System
1	Printer
2	Printer Driver
4	Printer Software
8	Wifi
3	Windows Printer Drivers
\.


--
-- Data for Name: problem_type_hierarchy; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY problem_type_hierarchy (parent_id, child_id) FROM stdin;
1	2
1	4
2	3
5	6
7	8
7	9
\.


--
-- Data for Name: specialist; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY specialist (employee_id) FROM stdin;
3
7
8
\.


--
-- Data for Name: specialist_problem; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY specialist_problem (specialist_id, problem_id) FROM stdin;
\.


--
-- Name: call_ID_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"call_ID_seq"', 1, false);


--
-- Name: department_ID_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"department_ID_seq"', 1, false);


--
-- Name: employee_ID_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"employee_ID_seq"', 1, false);


--
-- Name: login_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('login_id_seq', 1, true);


--
-- Name: problem_ID_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"problem_ID_seq"', 1, true);


--
-- Name: problem_type_ID_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"problem_type_ID_seq"', 1, false);


--
-- Name: administrator administrator_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY administrator
    ADD CONSTRAINT administrator_pkey PRIMARY KEY (login_id);


--
-- Name: call call_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY call
    ADD CONSTRAINT call_pkey PRIMARY KEY (id);


--
-- Name: call_problem call_problem_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY call_problem
    ADD CONSTRAINT call_problem_pkey PRIMARY KEY (call_id, problem_id);


--
-- Name: department department_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY department
    ADD CONSTRAINT department_pkey PRIMARY KEY (id);


--
-- Name: employee employee_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY employee
    ADD CONSTRAINT employee_pkey PRIMARY KEY (id);


--
-- Name: login login_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY login
    ADD CONSTRAINT login_pkey PRIMARY KEY (id);


--
-- Name: operator operator_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY operator
    ADD CONSTRAINT operator_pkey PRIMARY KEY (employee_id);


--
-- Name: problem_type_hierarchy problem_hierarchy_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY problem_type_hierarchy
    ADD CONSTRAINT problem_hierarchy_pkey PRIMARY KEY (parent_id, child_id);


--
-- Name: problem problem_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY problem
    ADD CONSTRAINT problem_pkey PRIMARY KEY (id);


--
-- Name: problem_solution problem_solutions_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY problem_solution
    ADD CONSTRAINT problem_solutions_pkey PRIMARY KEY (problem_id);


--
-- Name: problem_type problem_type_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY problem_type
    ADD CONSTRAINT problem_type_pkey PRIMARY KEY (id);


--
-- Name: specialist specialist_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY specialist
    ADD CONSTRAINT specialist_pkey PRIMARY KEY (employee_id);


--
-- Name: specialist_problem specialist_problem_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY specialist_problem
    ADD CONSTRAINT specialist_problem_pkey PRIMARY KEY (specialist_id, problem_id);


--
-- Name: administrator administrator_login_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY administrator
    ADD CONSTRAINT administrator_login_id_fkey FOREIGN KEY (login_id) REFERENCES login(id);


--
-- Name: call call_caller_ID_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY call
    ADD CONSTRAINT "call_caller_ID_fkey" FOREIGN KEY (caller_id) REFERENCES employee(id);


--
-- Name: call call_operator_ID_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY call
    ADD CONSTRAINT "call_operator_ID_fkey" FOREIGN KEY (operator_id) REFERENCES operator(employee_id);


--
-- Name: call_problem call_problem_call_ID_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY call_problem
    ADD CONSTRAINT "call_problem_call_ID_fkey" FOREIGN KEY (call_id) REFERENCES call(id);


--
-- Name: call_problem call_problem_problem_ID_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY call_problem
    ADD CONSTRAINT "call_problem_problem_ID_fkey" FOREIGN KEY (problem_id) REFERENCES problem(id);


--
-- Name: employee employee_department_ID_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY employee
    ADD CONSTRAINT "employee_department_ID_fkey" FOREIGN KEY (department_id) REFERENCES department(id);


--
-- Name: operator operator_employee_ID_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY operator
    ADD CONSTRAINT "operator_employee_ID_fkey" FOREIGN KEY (employee_id) REFERENCES employee(id);


--
-- Name: problem_type_hierarchy problem_hierarchy_child_ID_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY problem_type_hierarchy
    ADD CONSTRAINT "problem_hierarchy_child_ID_fkey" FOREIGN KEY (child_id) REFERENCES problem_type(id);


--
-- Name: problem_type_hierarchy problem_hierarchy_parent_ID_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY problem_type_hierarchy
    ADD CONSTRAINT "problem_hierarchy_parent_ID_fkey" FOREIGN KEY (parent_id) REFERENCES problem_type(id);


--
-- Name: problem_note problem_note_call_ID_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY problem_note
    ADD CONSTRAINT "problem_note_call_ID_fkey" FOREIGN KEY (call_id) REFERENCES call(id);


--
-- Name: problem_note problem_note_problem_ID_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY problem_note
    ADD CONSTRAINT "problem_note_problem_ID_fkey" FOREIGN KEY (problem_id) REFERENCES problem(id);


--
-- Name: problem problem_problem_type_ID_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY problem
    ADD CONSTRAINT "problem_problem_type_ID_fkey" FOREIGN KEY (problem_type_id) REFERENCES problem_type(id);


--
-- Name: problem_solution problem_solutions_discoverer_ID_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY problem_solution
    ADD CONSTRAINT "problem_solutions_discoverer_ID_fkey" FOREIGN KEY (discoverer_id) REFERENCES problem(id);


--
-- Name: problem_solution problem_solutions_problem_ID_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY problem_solution
    ADD CONSTRAINT "problem_solutions_problem_ID_fkey" FOREIGN KEY (problem_id) REFERENCES problem(id);


--
-- Name: specialist specialist_employee_ID_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY specialist
    ADD CONSTRAINT "specialist_employee_ID_fkey" FOREIGN KEY (employee_id) REFERENCES employee(id);


--
-- Name: specialist_problem specialist_problem_problem_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY specialist_problem
    ADD CONSTRAINT specialist_problem_problem_id_fkey FOREIGN KEY (problem_id) REFERENCES problem(id);


--
-- Name: specialist_problem specialist_problem_specialist_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY specialist_problem
    ADD CONSTRAINT specialist_problem_specialist_id_fkey FOREIGN KEY (specialist_id) REFERENCES specialist(employee_id);


--
-- PostgreSQL database dump complete
--

