<?php

namespace ChauPanza\User;

use ChauPanza\Base\BaseEntity;
use Carbon\Carbon;
class User extends BaseEntity
{
    protected $fillable = ['email','password'];
   	protected $hidden = ['password','created_at','updated_at'];
   	
   	public function profile()
    {
        return $this->hasOne('ChauPanza\User\Profile');
    }
    public function diagnostic()
    {
        return $this->hasOne('ChauPanza\User\Diagnostic');
    }
    public function subscription()
    {
        return $this->hasOne('ChauPanza\Subscription\Subscription');
    }

    public function scores()
    {
        return $this->hasMany('ChauPanza\Score\Score');
    }

    public function foods()
    {
        return $this->hasMany('ChauPanza\FoodUser\FoodUser');
    }

    public function bodyParts()
    {
        return $this->hasMany('ChauPanza\User\BodyPart');
    }
    public function hemograms()
    {
        return $this->hasMany('ChauPanza\User\Hemogram');
    }
    public function photos()
    {
        return $this->hasMany('ChauPanza\User\Photo');
    }
    public function controls()
    {
        return $this->hasMany('ChauPanza\User\Control');
    }

    public function isValidSubscription(){
        if($this->subscription){
            $subscription = $this->subscription;
            $startDate    = $subscription->start_date;
            $today        = Carbon::today();
            $diffInMonths = $today->diffInMonths($startDate);
         
            if($diffInMonths < $subscription->plan->months){
              return true;
            }
        }
        return false;
    }

    public function getUserDifficulty(){
        if($this->level<=39){
            return 'baja';
        }
        if($this->level>39 && $this->level<=69){
            return 'media';
        }
        if($this->level>69){
            return 'alta';
        }
    }

    public function getPastMonths(){
        $diffInMonths = 0;
        $subscription = $this->subscription;
        $today        = Carbon::today();
        if($subscription){
            $startDate    = $subscription->start_date;
            $diffInMonths = $today->diffInMonths($startDate);
        }else{
            $startDate    = $this->created_at;
            $diffInMonths = $today->diffInMonths($startDate);
        }
        return $diffInMonths;
     
    }

    public function getYears(){
        $today  = Carbon::today();
        return $today->diffInYears($this->profile->birthdate);
    }
   
}	
