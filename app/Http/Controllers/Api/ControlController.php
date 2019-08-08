<?php

namespace App\Http\Controllers\Api;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use ChauPanza\User\ControlRepository;

class ControlController extends Controller
{
	private $repository;
	public function __construct(ControlRepository $repo )
    {
    	$this->repository = $repo;
      
    }

	public function getControls (Request $request){
		$user = $this->getUserByToken($request);

		$controls = $this->repository->getUserControls($user);
		$routineControls =  $this->repository->getRoutineControls($user);
		$foodControls =  $this->repository->getFoodControls($user);
		return ['controls'=>$controls,'routineControls'=>$routineControls,'foodControls'=>$foodControls];
	}

	public function setControls(Request $request){
		$user = $this->getUserByToken($request);
		$controls = $this->repository->setControls($user,$request->all());
		return $controls;
	}
	
}

