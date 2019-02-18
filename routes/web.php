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

use Illuminate\Http\Request;


Route::get('/', 'HomeController@index');
Route::get('/specialists/list', 'SpecialistsController@list');
Route::get('/problem-types', 'ProblemsController@types');
Route::get('/problems/list', 'ProblemsController@list');
Route::get('/problems/type/{tid}', 'ProblemsController@byType');
Route::get('/problems/{pid}/assign/{sid}', 'ProblemsController@assign');
Route::get('/calls/{cid}/assign/{pid}', 'CallsController@assign');
Route::get('/login', 'UsersController@index');
Route::get('/logout', 'UsersController@destroy');
Route::post('/login', 'UsersController@store');
Route::get('/employees/list', 'EmployeesController@list');

Route::resource('problems', 'ProblemsController');
Route::resource('calls', 'CallsController');
Route::resource('employees', 'EmployeesController');
Route::resource('departments', 'DepartmentsController');
Route::resource('equipment', 'EquipmentController');