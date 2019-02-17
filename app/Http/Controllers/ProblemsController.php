<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProblemsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $problem = DB::table('problem')->orderby('priority','desc')->get();
        $call = DB::table('call')->get();
        $call_problem = DB::table('call_problem')->get();
        return view('problems/index', ['problem' => $problem, 'call' => $call, 'call_problem' => $call_problem]);
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
        DB::table('problem')
            -> where('id', $id)
            -> update([
                'description' => $request->input('description'),
                'priority' => $request->input('editPriority' )
            ]);

        return ['id'=>$id, 'description' => $request->description, 'priority' => $request->editPriority];

        /*
        $problemUpdate = Problem::where('id', $request->id)
            ->update([
                'priority' => $request->input('editPriority')
                'description' => $request->input('description')
        ]);
        */
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
        return DB::select('SELECT id, title, description, priority FROM problem;');
    }

    public function types()
    {
        return DB::select('SELECT id, name FROM problem_type;');
    }
}
