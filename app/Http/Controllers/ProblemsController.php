<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProblemsController extends Controller
{
    public function __construct() {
        $this->middleware( 'admin');
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $problem = DB::table('problem')->get();
        return view('problems/index', ['problem' => $problem]);
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
        $id = DB::table('problem')->insertGetId(
            [
                'title' => $data['title'],
                'description' => $data['description'],
                'problem_type_id' => $data['type'],
                'priority' => $data['priority'],
            ]
        );
        return ['id' => $id];
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
        return DB::select('SELECT id, title, description, priority FROM problem;');
    }

    public function types()
    {
        return DB::select('SELECT id, name FROM problem_type;');
    }

    public function assign($pid, $sid)
    {
        DB::table('specialist_problem')->insert(
            [
                'specialist_id' => $sid,
                'problem_id' => $pid,
            ]
        );
        return;
    }

    public function byType($tid)
    {
        return DB::table('problem')
            ->select('id', 'creation', 'title', 'solution.description')
            ->join('problem_solution','problem_solution.problem_id','problem.id')
            ->where('problem_type_id', $tid)
            ->orderByDesc('creation')
            ->get();
    }
}