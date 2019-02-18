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

Route::get('/', function () {
    return view('dashboard');
});

Route::get('/specialists/list', 'SpecialistsController@list');

Route::get('/problem-types', 'ProblemsController@types');

Route::get('/problems/list', 'ProblemsController@list');

Route::get('/employees/list', 'EmployeesController@list');

Route::post('/solutions/assign/{id}, SolutionController@assign');

Route::resource('solutions', 'SolutionsController');
Route::resource('problems', 'ProblemsController');
Route::resource('calls', 'CallsController');
Route::resource('employees', 'EmployeesController');
Route::resource('departments', 'DepartmentsController');
