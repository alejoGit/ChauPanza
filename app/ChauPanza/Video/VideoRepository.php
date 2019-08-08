<?php

namespace ChauPanza\Video;

use ChauPanza\Base\BaseRepository;
use ChauPanza\Video\Video;
use Storage;
class VideoRepository extends BaseRepository
{
    /**
     * @var Ad
     */
    protected $model;
   
    /**
     * AdRepository constructor.
     * @param Ad $model
     */
    public function __construct(Video $model)
    {
        $this->model = $model;

    }

    public function getModel()
    {
        return  $this->model;
    }
    
    public function create(array $data){

        $tmpUrl = $data['filepond'];
        $newUrl = str_replace('tmp/', 'videos/', $tmpUrl);
        Storage::move($tmpUrl, $newUrl);
        $data['url']  = $newUrl;
        $entity = $this->model->create($data);
        return $entity;
    }
    
}
