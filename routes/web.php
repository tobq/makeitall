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
use Illuminate\Support\Facades\Validator;

Route::get('/', 'UsersController@dashboard');
Route::get('/specialists/list', 'SpecialistsController@list');
Route::get('/problem-types', 'ProblemsController@types');
Route::get('/problems/list', 'ProblemsController@list');
Route::get('/problems/type/{tid}', 'ProblemsController@byType');
Route::get('/problems/{pid}/assign/{sid}', 'ProblemsController@assign');
Route::get('/calls/{cid}/assign/{pid}', 'CallsController@assign');
Route::get('/login', function (Request $request) {
    if ($request->session()->has("id")) return redirect('/');
    return view("login");
});
Route::post('/login', function (Request $request) {
    $data = $request->json()->all();
    $validator = Validator::make($data, [
        'id' => 'required|int',
        'password' => 'required|string|min:6|max:128'
    ]);
    if ($validator->fails()) return ["error" => "Input validation failed"];

    $id = $request->json('id');
    $password = $request->json('password');

    $employees = DB::table('login')->select('first_name', 'password_hash')->where('employee_id', $id)
        ->join('employee', 'login.employee_id', 'employee.id')
        ->get();
    $employee = $employees[0];
    if (!$employee ||
        Hash::check($password, $employee->password_hash)) {
        $request->session()->put("id", $id);
        $request->session()->put("name", $employee->first_name);
    } else  return ["error" => "Username / password mismatch"];
});
Route::get('/employees/list', 'EmployeesController@list');

Route::resource('problems', 'ProblemsController');
Route::resource('calls', 'CallsController');
Route::resource('employees', 'EmployeesController');
Route::resource('departments', 'DepartmentsController');