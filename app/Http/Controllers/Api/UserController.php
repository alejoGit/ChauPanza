<?php

namespace App\Http\Controllers\Api;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\User\FreeRegisterRequest;
use App\Http\Requests\User\UpdateProfileRequest;

use ChauPanza\User\UserRepository;
use Tymon\JWTAuth\Facades\JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;
class UserController extends Controller
{
	private $userRepo;
	public function __construct( UserRepository $userRepo)
    {
    	$this->userRepo = $userRepo;
      
    }

	public function show(Request $request)
	{	
		$user = $this->getUserByToken($request);
		$user->profile;
		
		if($user->isValidSubscription()){
			$user->status = "premium";
		}else{
			$user->status = "free";
		}

		$user->past_months = $user->getPastMonths();
		return $user;
	}

	public function test (Request $request){
		$token = $request->header('Authorization');
		$token = str_replace('Bearer ', '', $token);
		$user  = JWTAuth::toUser($token);
		$user->profile;
		return $user;
	}

	public function updateProfile(Request $request)
	{
		$user = $this->getUserByToken($request);
		
		$newUser = $this->userRepo->updateProfile($request->all() , $user);
		//Devuelve el perfil del usuario en el JSON
		$newUser->profile;
	
	

		return response()->json(compact('newUser'));	
	}

	public function updatePassword(Request $request)
	{
		// $rules = [
		// 	'new_password'         => 'required',
		// 	'confirm_new_password' => 'required|same:new_password'
		// ];

		// $this->validate($request, $rules);

		// $user = $request->user();
		// $user->password = bcrypt($request->input('new_password'));
		// $user->saveOrFail();

		// return response()->json(compact('user'));
	}

	public function freeRegister(FreeRegisterRequest $request){
		
		$user = $this->userRepo->create($request->all());

		$credentials = $request->only('email', 'password');

		try {
			if(!$token = JWTAuth::attempt($credentials)) {
				return response()->json(['error' => 'Credenciales invalidas'], 401);
			}
		} catch(JWTException $e) {
			return response()->json(['error' => 'No se pudo crear el token'], 500);
		}
		//Devuelve el perfil del usuario en el JSON
		$user->profile;
	
		$user->status = "free";
		$user->past_months = $user->getPastMonths();

		return response()->json(compact('token', 'user'));	
	}

	public function setDiagnostic(Request $request){
		$user = $this->getUserByToken($request);
		$res = $this->userRepo->createInitialDiagnostic($request->all(),$user);
		return $res;
	}

	public function setObjectives(Request $request){
		$user = $this->getUserByToken($request);
		$res = $this->userRepo->setObjectives($request->all(),$user);
		return $res;
	}

	
}