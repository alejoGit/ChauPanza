<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;

class AuthenticateController extends Controller
{
	public function authenticate(Request $request)
	{
		

		$rules = [
			'email'    => 'required|email',
			'password' => 'required'
		];

		$this->validate($request, $rules);

		$credentials = $request->only('email', 'password');

		try {
			if(!$token = JWTAuth::attempt($credentials)) {
				return response()->json(['error' => 'Datos de acceso invalidos!'], 401);
			}
		} catch(JWTException $e) {
			return response()->json(['error' => 'Could not create token'], 500);
		}

		$user = $request->user();
		$user = \ChauPanza\User\User::find($user->id);
		$user->profile;
		if($user->isValidSubscription()){
			$user->status = "premium";
		}else{
			$user->status = "free";
		}
		$user->past_months = $user->getPastMonths();
		return response()->json(compact('token', 'user'));
	}
}