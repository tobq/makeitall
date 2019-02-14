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

Route::get('/calls/new', function () {
    return view('calls.new');
});


Route::get('/specialists', 'SpecialistsController@all');

Route::get('/problem-types', 'ProblemsController@types');


Route::get('/problems', 'ProblemsController@all');

Route::resource('employees', 'EmployeesController');
Route::resource('departments', 'DepartmentsController');