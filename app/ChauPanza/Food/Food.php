<?php

namespace ChauPanza\Food;

use ChauPanza\Base\BaseEntity;

class Food extends BaseEntity
{
    protected $fillable = ['name','category','description','type','type2']; 
    
  	/*public function getPath()
    {
        return $_SERVER["DOCUMENT_ROOT"] . '/images/foods/';
    }*/

    
    public function users()
    {
        return $this->hasMany('ChauPanza\FoodUser\FoodUser');
    }
}	
