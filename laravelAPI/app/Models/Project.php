<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Model; 

class Project extends Model {

    public function client(){

        return $this->belongsTo('App\Models\Client');

    }
    public function urls(){

        return $this->hasMany('App\Models\Url');

    }

}
