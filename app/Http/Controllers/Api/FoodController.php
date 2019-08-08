<?php

namespace App\Http\Controllers\Api;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
//use App\Http\Requests\User\FreeRegisterRequest;
use ChauPanza\Food\FoodRepository;

class FoodController extends Controller
{
	private $repository;
	public function __construct( FoodRepository $repo)
    {
    	$this->repository = $repo;
      
    }

	public function getFoods (Request $request){
		
		$user = $this->getUserByToken($request);
		$foods = $this->repository->getPremiumFoods();
		$todayUserFoods = $this->repository->getTodayUserFoods($user);
		return ['status'=>'premium', 'foods'=>$foods,'todayUserFoods'=>$todayUserFoods];

		// return 'free';
	}


	public function getFoodsByDate (Request $request){
		
		$user = $this->getUserByToken($request);	
		$foods = $this->repository->getPremiumFoods();
		$todayUserFoods = $this->repository->getUserFoodsByDate($user,$request->date);
		return ['status'=>'premium', 'foods'=>$foods,'todayUserFoods'=>$todayUserFoods['foods'],'currentDate'=>$todayUserFoods['date'],'formatDate'=>$todayUserFoods['formatDate']];
		
	}

	public function setFoodUser(Request $request){
		$user = $this->getUserByToken($request);
		return $this->repository->setFoodUser($request->all() , $user);
	}

	public function setFoodUserByDate(Request $request){
		$user = $this->getUserByToken($request);
		return $this->repository->setFoodUserByDate($request->all() , $user);
	}

	public function getIndications(Request $request){
		$user = $this->getUserByToken($request);
		return $this->repository->getUserIndications($user);
	}
	
}