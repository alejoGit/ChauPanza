<?php

namespace ChauPanza\Food;

use ChauPanza\Base\BaseRepository;
use ChauPanza\Food\Food;
use ChauPanza\FoodUser\FoodUser;
use ChauPanza\FeedingExtra\FeedingExtra;
use Storage;
use Carbon\Carbon;

class FoodRepository extends BaseRepository
{
    /**
     * @var Ad
     */
    protected $model;
   
    /**
     * AdRepository constructor.
     * @param Ad $model
     */
    public function __construct(Food $model)
    {
        $this->model = $model;

    }

    public function getModel()
    {
        return  $this->model;
    }
    
    /**
     * @overwrite method create
     * @param  array $data
     * @return $entity
    */
    public function create(array $data){
       
        $entity = $this->model->create($data);
        $amount = count($this->getModel()->where('type',$data['type'])->get());
        $entity->position = $amount;
        $entity->save();
        
        /*if(isset($data['photo'])){
            $this->saveImage($entity,'photo',$data['photo'], $entity->getPath());
        }*/
        return $entity;
    }
    /**
     * @overwrite method update
     * @param  array $data
     * @return $entity
    */
    public function update($entity, array $data){
        
        $entity->fill($data);
        $entity->save();  
        /*if(isset($data['photo'])){   
            $this->saveImage($entity,'photo',$data['photo'],$entity->getPath());
        } */

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
        // $this->deleteImage($entity->getPath(),$entity->photo);
        $entity->delete();
        return true;
    }

    public function getBreakfasts(){
        return $this->getModel()->where('type','breakfast')->where('type2','premium')->orderBy('position','asc')->get();
    }
    public function getLunchs(){
        return $this->getModel()->where('type','lunch')->where('type2','premium')->orderBy('position','asc')->get();
    }
    public function getSnaks(){
        return $this->getModel()->where('type','snak')->where('type2','premium')->orderBy('position','asc')->get();
    }
    public function getDinners(){
        return $this->getModel()->where('type','dinner')->where('type2','premium')->orderBy('position','asc')->get();
    }

    public function getPremiumFoods(){
        $foods = $this->getModel()
                        ->where('type','premium')  
                        ->get();

        return $foods;
    }
    
    public function setFoodUser($data, $user){
        $today = Carbon::today()->format('Y-m-d');
        $food = $this->getModel()->find($data['food_id']);
       
        $foodUserAux = FoodUser::where('date',$today)
                            ->where('user_id',$user->id)
                            ->where('category', $food->category)
                            ->where('type', $data['type'])
                            ->first();
        
       
        if($foodUserAux){
            $foodUserAux->delete();
        }

       
         FoodUser::create([
            'date' => $today,
            'category' => $food->category,
            'type' => $data['type'],
            'user_id' => $user->id,
            'food_id' => $data['food_id'],
        ]);
        
        return ["status"=>"ok","userFoods"=>$this->getTodayUserFoods($user)];
       
    }


    public function setFoodUserByDate($data, $user){
        
        if(!$data['date']){
            $data['date'] = Carbon::today()->format('Y-m-d');  
        } 

        $food = $this->getModel()->find($data['food_id']);
       
        $foodUserAux = FoodUser::where('date',$data['date'])
                            ->where('user_id',$user->id)
                            ->where('category', $food->category)
                            ->where('type', $data['type'])
                            ->first();
        
       
        if($foodUserAux){
            $foodUserAux->delete();
        }

       
         FoodUser::create([
            'date' => $data['date'],
            'category' => $food->category,
            'type' => $data['type'],
            'user_id' => $user->id,
            'food_id' => $data['food_id'],
        ]);
        
        return ["status"=>"ok","userFoods"=>$this->getTodayUserFoods($user)];
       
    }

    public function getTodayUserFoods($user){
        $today = Carbon::today()->format('Y-m-d');
        return FoodUser::where('date',$today)
                            ->where('user_id',$user->id)   
                            ->get();
    }

    public function getUserFoodsByDate($user,$date){
        if(!$date){
            $date = Carbon::today()->format('Y-m-d');  
        }
        $foods = FoodUser::where('date',$date)
                            ->where('user_id',$user->id)   
                            ->get();
        
        $dateAux =  Carbon::parse($date);
        $month = $this->translateMonth(intval($dateAux->format('m')));
        $day   = $dateAux->format('d'); 
        $dayName = $this->translateDay($dateAux->format('D'));
        $label = "";
        if($dateAux->isToday()){
            $label = "Hoy ";
        }
        if($dateAux->isYesterday()){
            $label = "Ayer ";
        }
        $formatDate =  $label .$dayName.' '.$day.' de '. $month;

        return ['foods'=> $foods  , 'date'=> $date, 'formatDate'=>$formatDate];
    }


    public function translateMonth($num){
        $num = $num -1;
        $arrSpanish = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
        return $arrSpanish[$num];
    }
    public function translateDay($day){
        $arrTranslations = array( 'Mon'=>'Lunes' , 'Tue'=>'Martes' , 'Wed'=>'Miercoles' , 'Thu'=>'Jueves' , 'Fri'=>'Viernes' , 'Sat'=>'Saturday', 'Sun'=>'Domingo' );
        return $arrTranslations[$day];
    }
    public function getUserIndications($user){
        $type = 'indications'.$user->diet_type;
        $indications = FeedingExtra::where('type',$type)->first();
        return $indications;
    }
}
