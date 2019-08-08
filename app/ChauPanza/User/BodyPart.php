<?php

namespace ChauPanza\User;

use ChauPanza\Base\BaseEntity;

class BodyPart extends BaseEntity
{
	protected $table ='body_parts';
    protected $fillable = [ 'category', 'user_id'];
    
    protected $hidden = ['created_at','updated_at'];
    
    public function user()
    {
        return $this->belongsTo('ChauPanza\User\User');
    }

}
