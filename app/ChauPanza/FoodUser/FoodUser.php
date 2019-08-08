<?php

namespace ChauPanza\FoodUser;

use ChauPanza\Base\BaseEntity;

class FoodUser extends BaseEntity
{
    protected $fillable = ['date','category','type','user_id','food_id']; 
    protected $table = 'food_user';
    protected $casts = [
        'date' => 'date',
    ];
    protected $hidden = ['created_at','updated_at'];
  	/*public function getPath()
    {
        return $_SERVER["DOCUMENT_ROOT"] . '/images/Scores/';
    }*/
    public function user()
    {
        return $this->belongsTo('ChauPanza\User\User');
    }
    public function food()
    {
        return $this->belongsTo('ChauPanza\Food\Food');
    }
}	
