<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Specialist extends Model
{
    function query() {
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
