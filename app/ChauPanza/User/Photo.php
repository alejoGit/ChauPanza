<?php

namespace ChauPanza\User;

use ChauPanza\Base\BaseEntity;

class Photo extends BaseEntity
{
	
    protected $fillable = [ 'month','user_id'];
    
    protected $hidden = ['created_at','updated_at'];
    
    public function getPath()
    {
        return $_SERVER["DOCUMENT_ROOT"] . '/images/photos/';
    }

    public function user()
    {
        return $this->belongsTo('ChauPanza\User\User');
    }

}
