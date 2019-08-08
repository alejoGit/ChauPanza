<?php

namespace ChauPanza\User;

use ChauPanza\Base\BaseEntity;

class Diagnostic extends BaseEntity
{
    protected $fillable = [ 'health_history', 'physical_condition' ,'answers','user_id'];
    protected $hidden = ['created_at','updated_at'];
    public function user()
    {
        return $this->belongsTo('ChauPanza\User\User');
    }

}
