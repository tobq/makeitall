<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Department extends Model
{
    protected $table = 'department';
    public $primaryKey = 'ID';
    public $timestamps = false;


//    public function employees()
//    {
//        return $this->hasMany('App\Employee');
//    }
}
