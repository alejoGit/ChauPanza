<?php

namespace ChauPanza\FeedingExtra;

use ChauPanza\Base\BaseRepository;
use ChauPanza\FeedingExtra\FeedingExtra;
use Storage;
class FeedingExtraRepository extends BaseRepository
{
    /**
     * @var Ad
     */
    protected $model;
   
    /**
     * AdRepository constructor.
     * @param Ad $model
     */
    public function __construct(FeedingExtra $model)
    {
        $this->model = $model;

    }

    public function getModel()
    {
        return  $this->model;
    }
    
   
    /**
     * @overwrite method update
     * @param  array $data
     * @return $entity
    */
    public function update($entity, array $data){
        
        $entity->fill($data);
        $entity->save();  
        if(isset($data['photo'])){   
            $this->saveImage($entity,'photo',$data['photo'],$entity->getPath());
        } 

        return $entity;
    }

    /**
     * @overwrite method delete
     * @param  $entity
     * @return boolean
    */
    public function delete($entity){
        if (is_numeric($entity))
        {
            $entity = $this->findOrFail($entity);
        }
        $this->deleteImage($entity->getPath(),$entity->image);
        $entity->delete();
        return true;
    }

   
    public function getIndications($dietType){
        return $this->getModel()->where('type', $dietType)->first();
    }

    public function saveIndications($data){
      
        $indicationsAux = $this->getIndications($data['type']);
        if($indicationsAux){
            $indicationsAux->fill($data);
            $indicationsAux->save();  
            if(isset($data['image'])){   
                $this->saveImage($indicationsAux,'image',$data['image'],$indicationsAux->getPath());
            } 
            return $indicationsAux;
        }else{
            $newIndications = $this->model->create($data);
            if(isset($data['image'])){   
                $this->saveImage($newIndications,'image',$data['image'],$newIndications->getPath());
            } 
            return $newIndications;
        }
    }

    public function getForbiddens(){
        return $this->getModel()->where('type','forbidden')->orderBy('position','asc')->get();
    }

    public function createForbidden($data){
        $data['type'] = 'forbidden';
        $entity = $this->model->create($data);

        $amount = count($this->getModel()->where('type','forbidden')->get());
        $entity->position = $amount;
        $entity->save();


        if(isset($data['image'])){   
            $this->saveImage($entity,'image',$data['image'],$entity->getPath());
        } 
        return $entity;
    }
    
}
