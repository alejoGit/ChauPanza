<?php

namespace ChauPanza\User;

use ChauPanza\Base\BaseRepository;
use ChauPanza\User\Photo;
//use Carbon\Carbon;
class PhotoRepository extends BaseRepository
{
    /**
     * @var Photo
     */
    protected $model;
    /**
     * PhotoRepository constructor.
     * @param Photo $model
     */
    public function __construct(Photo $model)
    {
        $this->model   = $model;
    
    }

    public function getModel()
    {
        return $this->model;
    }
    
    public function getUserPhotos($user){
        return $this->getModel()->where('user_id',$user->id)->orderBy('month','asc')->get();
    }

    public function setPhoto($data){
        $imgAux = json_decode($data['image'],true);
        $userId = $imgAux['meta']['user_id'];
        $month = $imgAux['meta']['month'];
        $photoName = 'photo_'.$imgAux['meta']['photo_num'];

        $photosAux = $this->getModel()->where('user_id',$userId)->where('month',$month)->first();
        if($photosAux){
            if(isset($data['image'])){
                $this->saveImage($photosAux,$photoName,$data['image'], $photosAux->getPath());
            }
        }else{
            $photosAux = $this->getModel()->create(["user_id"=>$userId, "month" =>$month]);
            if(isset($data['image'])){
                $this->saveImage($photosAux,$photoName,$data['image'], $photosAux->getPath());
            }
        }
        return "ok";
    }

   
}
