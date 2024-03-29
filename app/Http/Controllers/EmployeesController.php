<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Employee;
use Illuminate\Support\Facades\DB;
class EmployeesController extends Controller
{
    public function __construct() {
        $this->middleware( 'admin');
    }
    /**
     * Display a listing of the resource.
     *
     * @return Employee[]|\Illuminate\Database\Eloquent\Collection|\Illuminate\Http\Response
     */
    public function index()
    {
        $employee = DB::table('employee')->get();
        $department = DB::table('department')->get();
        $specialist_problem = DB::table('specialist_problem')->get();
        $problem = DB::table('problem')->get();
        return view('employees/index', ['employee' => $employee, 'specialist_problem' => $specialist_problem, 'department' => $department, 'problem' => $problem]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function list()
    {
        return DB::select('
SELECT employee.id, employee.title, employee.first_name, employee.last_name, department.name department_name
FROM employee
       INNER JOIN department ON employee.department_id = department.id;
');

        //
    }


}
