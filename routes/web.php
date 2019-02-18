<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

use Illuminate\Support\Facades\DB;

Route::get('/', function () {
    return view('dashboard');
});

Route::get('/calls/new', function () {
    return view('calls.new');
});
Route::get('/Equipments', function () {
	return view('/Equipments');
});


Route::get('/specialists', function () {
    return DB::select('
SELECT employee.id,
       employee.title,
       employee.first_name,
       employee.last_name,
       (SELECT count(*) from specialist_problem where specialist_id = employee_id) problem_count
FROM specialist
       INNER JOIN employee ON specialist.employee_id = employee.id;');
});


Route::get('/problems', function () {
    return DB::select('SELECT id, title, description, priority FROM problem;');
});

Route::resource('employees', 'EmployeesController');
Route::resource('departments', 'DepartmentsController');