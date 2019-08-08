<?php

namespace ChauPanza\Video;

use ChauPanza\Base\BaseEntity;

class Video extends BaseEntity
{
    protected $fillable = ['name','url']; 
    
  	public function getPath()
    {
        return $_SERVER["DOCUMENT_ROOT"] . '/images/videos/';
    }

    public function routines()
    {
        return $this->belongsToMany('ChauPanza\Routine\Routine')->withPivot('position');
    }
}	
