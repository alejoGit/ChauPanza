<?php

namespace ChauPanza\Plan;

use ChauPanza\Base\BaseEntity;

class Plan extends BaseEntity
{
    protected $fillable = ['name','price','months'];
   	protected $hidden = ['created_at','updated_at'];
   	
   	public function subscriptions()
    {
        return $this->hasMany('ChauPanza\Subscription\Subscription');
    }
   
}	
