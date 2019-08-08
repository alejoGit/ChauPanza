<?php

namespace ChauPanza\Routine;

use ChauPanza\Base\BaseEntity;

class Routine extends BaseEntity
{
    protected $fillable = ['name','video','type','status','difficulty','category']; 
    
  	/*public function getPath()
    {
        return $_SERVER["DOCUMENT_ROOT"] . '/images/routines/';
    }*/
    /*public function videos()
    {
        return $this->belongsToMany('ChauPanza\Video\Video')->withPivot('position');
    }*/

    public function scores()
    {
        return $this->hasMany('ChauPanza\Score\Score');
    }
}	
