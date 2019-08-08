<?php

namespace ChauPanza\FeedingExtra;

use ChauPanza\Base\BaseEntity;

class FeedingExtra extends BaseEntity
{
    protected $fillable = ['title','body','type']; 
    
  	public function getPath()
    {
        return $_SERVER["DOCUMENT_ROOT"] . '/images/feeding_extras/';
    }

    
}	
