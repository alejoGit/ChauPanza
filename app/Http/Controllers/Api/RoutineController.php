<?php

namespace App\Http\Controllers\Api;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
//use App\Http\Requests\User\FreeRegisterRequest;
use ChauPanza\Routine\RoutineRepository;

class RoutineController extends Controller
{
	private $repository;
	public function __construct( RoutineRepository $repo)
    {
    	$this->repository = $repo;
      
    }

	public function getRoutines (Request $request){
		
		$user = $this->getUserByToken($request);
		if($user->subscription){
			if($user->isValidSubscription()){
				$routines = $this->repository->getPremiumRoutines($user);
				return ['status'=>'premium', 'routines'=>$routines];
			}
		}

		$routines = $this->repository->getFreeRoutines();

		return ['status'=>'free', 'routines'=>$routines];
	}

	public function qualifyRoutine(Request $request){
		
		$user = $this->getUserByToken($request);
		return $this->repository->qualifyRoutine($request->all() , $user->id);
		
	}

	public function getUserScores(Request $request){
		$user = $this->getUserByToken($request);
		$scores = $this->repository->getUserScores($user);
		return $scores;
	}
	
}