<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

class ProblemsController extends Controller
{
    public function list()
    {
        return DB::select('SELECT id, title, description, priority FROM problem;');
    }
    public function types()
    {
        return DB::select('SELECT id, name FROM problem_type;');
    }
}
