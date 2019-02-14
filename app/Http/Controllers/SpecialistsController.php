<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

class SpecialistsController extends Controller
{
    public function list()
    {
        return DB::select('
SELECT employee.id,
       employee.title,
       employee.first_name,
       employee.last_name,
       (SELECT count(*) from specialist_problem where specialist_id = employee_id) problem_count
FROM specialist
       INNER JOIN employee ON specialist.employee_id = employee.id;');
    }
}
