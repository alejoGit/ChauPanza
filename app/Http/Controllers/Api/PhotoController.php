<?php

namespace App\Http\Controllers\Api;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use ChauPanza\User\PhotoRepository;
use Log;
class PhotoController extends Controller
{
	private $repository;
	public function __construct(PhotoRepository $repo )
    {
    	$this->repository = $repo;
      
    }

	public function getPhotos (Request $request){
		
		$user = $this->getUserByToken($request);
		$photos =$this->repository->getUserPhotos($user);
		return $photos;
	}

	public function setPhoto(Request $request){
		//$user = $this->getUserByToken($request);
		$this->repository->setPhoto($request->all());
		//Log::info($img['meta']);
		return "ok";
	}
	
}