<?php

namespace ChauPanza\Subscription;

use ChauPanza\Base\BaseEntity;

class Subscription extends BaseEntity
{
    protected $fillable = ['user_id','plan_id','start_date'];
   	protected $hidden = ['created_at','updated_at'];
   	
   	public function plan()
    {
        return $this->belongsTo('ChauPanza\Plan\Plan');
    }

    public function user()
    {
        return $this->belongsTo('ChauPanza\User\User');
    }
   
}	
