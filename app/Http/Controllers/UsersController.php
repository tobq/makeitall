<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class UsersController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param Request $request
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if ($request->session()->has("id")) return redirect('/');
        return view("login");
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
            return ["valid" => true];
        } else  return ["error" => "Username and password mismatch"];
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
    public function destroy(Request $request)
    {
        $request->session()->remove('id');
        $request->session()->remove('name');
        return redirect('/login');
    }
}
