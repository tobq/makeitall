<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    protected $table = 'employee';
    public $primaryKey = 'ID';
    public $timestamps = false;

    public function department()
    {
        return $this->belongsTo('App\Department');
    }
}
