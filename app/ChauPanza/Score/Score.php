<?php

namespace ChauPanza\Score;

use ChauPanza\Base\BaseEntity;

class Score extends BaseEntity
{
    protected $fillable = ['score','date','heart_rate','user_id','routine_id']; 
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
    public function routine()
    {
        return $this->belongsTo('ChauPanza\Routine\Routine');
    }
}	
