<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Homepage;
use Illuminate\Support\Facades\DB;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return
     */
    public function index()
    {
        //queries are conducted and then passed into the view to allow for further queries
        $problem = DB::table('problem')
            ->select('id', 'creation', 'title', "priority", 'description')
            ->orderByDesc("creation")
            ->get();
        $specialist = DB::table('specialist')->select('employee_id')->get();
        $problem_solution = DB::table('problem_solution')->select('problem_id')->get();
        $specialist_problem = DB::table('specialist_problem')->select('specialist_id')->get();
        return view('homepage', ['problem' => $problem, 'specialist' => $specialist, 'problem_solution' => $problem_solution, 'specialist_problem' => $specialist_problem]);
    }
}
