<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Carbon\Carbon;
class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    public function profile()
    {
        return $this->hasOne('ChauPanza\User\Profile');
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
}
