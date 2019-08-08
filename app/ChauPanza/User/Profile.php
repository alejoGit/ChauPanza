<?php

namespace ChauPanza\User;

use ChauPanza\Base\BaseEntity;

class Profile extends BaseEntity
{
    protected $fillable = [ 'name', 'last_name' ,'birthdate','weight','height','gender','user_id'];
    protected $hidden = ['created_at','updated_at'];

    protected $casts = [
        'birthdate' => 'date',
    ];
    public function user()
    {
        return $this->belongsTo('ChauPanza\User\User');
    }

}
