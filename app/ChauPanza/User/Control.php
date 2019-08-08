<?php

namespace ChauPanza\User;

use ChauPanza\Base\BaseEntity;

class Control extends BaseEntity
{
	
    protected $fillable = ['peso','indice_cadera','perimetro_abdominal', 'month','user_id'];
    
    protected $hidden = ['created_at','updated_at'];
    
    
    public function user()
    {
        return $this->belongsTo('ChauPanza\User\User');
    }

}
