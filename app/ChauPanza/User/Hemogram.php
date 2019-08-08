<?php

namespace ChauPanza\User;

use ChauPanza\Base\BaseEntity;

class Hemogram extends BaseEntity
{
	
    protected $fillable = [ 'date','results','user_id'];
    
    protected $hidden = ['created_at','updated_at'];
    
    public function user()
    {
        return $this->belongsTo('ChauPanza\User\User');
    }

}
