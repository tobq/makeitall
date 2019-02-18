<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use MongoDB\BSON\Timestamp;

class SolutionsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request, $id)
    {

        DB::table('problem_solution')->insert([
            ['problem_id'=>$id],['date'=>Carbon\Carbon::now()],['description'=>$request->input('description')]
        ]);
        DB::table('solution_employee')->insert([
            ['problem_id'=>$id,'employee_id'=>$request->input('employee-id')]
        ]);
        return ['problem_id'=>$id, 'description' => $request->description,'employee_id'=>$request->employee-id];
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
//        DB::table('problem')
//            -> where('id', $id)
//            -> update([
//                'priority' => 0
//           );

//        return ['id'=>$id, 'priority' => 0];
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
