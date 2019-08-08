<?php

namespace ChauPanza\Routine;

use ChauPanza\Base\BaseRepository;
use ChauPanza\Routine\Routine;
use ChauPanza\Video\Video;
use ChauPanza\Score\Score;
use Storage;
use Carbon\Carbon;
class RoutineRepository extends BaseRepository
{
    /**
     * @var Ad
     */
    protected $model;
   
    /**
     * AdRepository constructor.
     * @param Ad $model
     */
    public function __construct(Routine $model)
    {
        $this->model = $model;
    }

    public function getModel()
    {
        return  $this->model;
    }
    
    public function create(array $data){

        // $tmpUrl = $data['filepond'];
        // $newUrl = str_replace('tmp/', 'videos/', $tmpUrl);
        // Storage::move($tmpUrl, $newUrl);
        // $data['url']  = $newUrl;
        $entity = $this->model->create($data);
        $amount = count($this->getModel()->all());
        $entity->position = $amount;
        $entity->save();
    }

    public function delete($entity)
    {
        if (is_numeric($entity))
        {
            $entity = $this->findOrFail($entity);
        }
        Storage::delete($entity->url);
        $entity->delete();
        return $entity;
    }

    /*

    LOGICA ANTERIOR - RUTINA CON MULTIPLES VIDEOS
    public function getUnrelatedVideos($routine){
        $id = $routine->id;
        $unrelatedVideos = Video::leftJoin('routine_video', function($join) use ($id){
                                $join->on('videos.id', '=', 'routine_video.video_id');
                                $join->on('routine_video.routine_id', '=', \DB::raw("'".$id."'"));
                            })->whereNull('routine_video.video_id')
                            ->select('videos.id','videos.name','videos.url')->get();
        return $unrelatedVideos;
    }

    public function updatePositionVideos($routine,$positions){
        $positions = json_decode($positions,true);
        if(count($positions)>0){
            foreach ($positions as $key => $value) {
                $entityAux = $routine->videos()->where('video_id','=',$key)->first();
                $entityAux->pivot->position = $value;
                $entityAux->pivot->save();
            }  
        } 
    }

    public function getSortedVideos($routine){
        return  $routine->videos()->orderBy("position","asc")->get();
    }*/
    public function generateRelationsListForOnePart($countGroups){
        $arr = array();
        $bases = array();
        $increment = 0;
        for($i = 0; $i<$countGroups;$i++){
           $obj = array($i =>[]);
           $arr[$i] = $obj;

           $bases[$i] = ($countGroups*3) + $increment;
           $increment += 3; 
        }

        //$arr  = array(0 =>[], 1=>[],2=>[],3 =>[]);
        // $base1 = 12;
        // $base2 = 15;
        // $base3 = 18;
        // $base4 = 21;
         for($i = 0; $i<$countGroups;$i++){
            for($j = 0; $j<120; $j++){
                array_push($arr[$i], $bases[$i]);
                $bases[$i] =  $bases[$i] + ($countGroups*3);

                // array_push($arr[1], $bases[1]);
                // $bases[1] =  $bases[1] +12;

                // array_push($arr[2], $bases[2]);
                // $bases[2] =  $bases[2] +12; 

                // array_push($arr[3], $bases[3]);
                // $bases[3] =  $bases[3] +12;  
            }
        }
        return $arr;
    }

    public function generateRelationsListForMultipleParts($countGroups){
        $arr = array();
        $bases = array();
        $increment = 0;
        for($i = 0; $i<$countGroups;$i++){
           $obj = array($i =>[]);
           $arr[$i] = $obj;

           $bases[$i] = ($countGroups) + $increment;
           $increment ++; 
        }

         for($i = 0; $i<$countGroups;$i++){
            for($j = 0; $j<120; $j++){
                array_push($arr[$i], $bases[$i]);
                $bases[$i] =  $bases[$i] + ($countGroups);
            }
        }
        return $arr;
    }
    public function getSkipRelationForOnePart($skip,$count){
        
        $countGroups = $count/3;

        $relationsList = $this->generateRelationsListForOnePart($countGroups);
        $baseSkip = 0;
        for($i = 0; $i<$countGroups;$i++){
            foreach ($relationsList[$i] as $value) {
                if(intval($value) == intval($skip)){
                    return $baseSkip;
                }
            }
            $baseSkip += 3;
        }

        // foreach ($relationsList[0] as $value) {
        //     if(intval($value) == intval($skip)){
        //         return 0;
        //     }
        // }
        // foreach ($relationsList[1] as $value) {
        //     if(intval($value) == intval($skip)){
        //         return 3;
        //     }
        // }
        // foreach ($relationsList[2] as $value) {
        //     if(intval($value) == intval($skip)){
        //         return 6;
        //     }
        // }
        // foreach ($relationsList[3] as $value) {
        //     if(intval($value) == intval($skip)){
        //         return 9;
        //     }
        // }
        return 0;
    }

    public function getSkipRelationForMultipleParts($skip,$count){
        
        $countGroups = $count;

        $relationsList = $this->generateRelationsListForMultipleParts($countGroups);
        $baseSkip = 0;
        for($i = 0; $i<$countGroups;$i++){
            foreach ($relationsList[$i] as $value) {
                if(intval($value) == intval($skip)){
                    return $baseSkip;
                }
            }
            $baseSkip++;
        }

        return 0;
    }
    public function getTpcRoutines($difficulty,$skip){
        $query = $this->getModel()
                        ->where('type','premium')  
                        ->where('status','active') 
                        ->where('difficulty',$difficulty) 
                        ->where('category','tpc')
                        ->orderBy('created_at','asc');

        $count =  $query->count();
        if($count % 3 != 0){
            $count--;
             if($count % 3 != 0){
                $count--;
             }
        }
       
        if($skip >= $count ){
            $skip = $this->getSkipRelationForOnePart($skip,$count);

        }
        return $query->skip($skip)->take(3)->get();
    }
    public function getEstheticRoutines($user){
        $difficulty = $user->getUserDifficulty();
        $numberParts = count($user->bodyParts);
        $pastMonths = $user->getPastMonths();
        

        // 1 PARTE DEL CUERPO
        if($numberParts == 1){
            $query = $this->getModel()
                            ->where('type','premium')  
                            ->where('status','active') 
                            ->where('difficulty',$difficulty) 
                            ->where('category',$user->bodyParts[0]->category)
                            ->orderBy('created_at','asc');
                            
            $count =  $query->count();
            if($count % 3 != 0){
                $count--;
                 if($count % 3 != 0){
                    $count--;
                 }
            }
            $skip = $pastMonths *3;
            if($skip >= $count ){
                $skip = $this->getSkipRelationForOnePart($skip,$count);

            }
            $routines = $query->skip($skip)->take(3)->get();
        }


        // 2 PARTES DEL CUERPO 
        if($numberParts == 2){

            $skip = $pastMonths;
            $routines = [];
            for($i = 0; $i<2; $i++){
                $query = $this->getModel()
                                    ->where('type','premium')  
                                    ->where('status','active') 
                                    ->where('difficulty',$difficulty) 
                                    ->where('category',$user->bodyParts[$i]->category)
                                    ->orderBy('created_at','asc');
                $count =  $query->count();   
                if($skip >= $count ){
                    $skip = $this->getSkipRelationForMultipleParts($skip,$count);
                }             
                $routines[$i] = $query->skip($skip)->first();
            }

            /*LA TERCER RUTINA ES 1 RUTINA DE TPC*/
            $query = $this->getModel()
                            ->where('type','premium')  
                            ->where('status','active') 
                            ->where('difficulty',$difficulty) 
                            ->where('category','tpc')
                            ->orderBy('created_at','asc');
            $count =  $query->count();                   
            if($skip >= $count ){
                $skip = $this->getSkipRelationForMultipleParts($skip,$count);
            }   
            $routine3 =   $query->skip($skip)->first();       
            $routines[2] = $routine3;

        }

        if($numberParts == 3){
            $skip = $pastMonths;
            $routines = [];
            for($i = 0; $i<3; $i++){
                $query = $this->getModel()
                            ->where('type','premium')  
                            ->where('status','active') 
                            ->where('difficulty',$difficulty) 
                            ->where('category',$user->bodyParts[$i]->category)
                            ->orderBy('created_at','asc');
                $count =  $query->count();   
                if($skip >= $count ){
                    $skip = $this->getSkipRelationForMultipleParts($skip,$count);
                }  
                $routines[$i] = $query->skip($skip)->first();
            }
        }

        if($numberParts >= 4){
            $skip = $pastMonths *3;
            $routines = $this->getTpcRoutines($difficulty,$skip);
        }
        

        return $routines;
    }
    public function getPremiumRoutines($user){
         $difficulty = $user->getUserDifficulty();

        if( $user->objectives=='100'
            || $user->objectives=='110'
            || $user->objectives=='101'
            || $user->objectives=='111')
        {
            $routines = $this->getEstheticRoutines($user);
        }

        if( $user->objectives=='010'
            || $user->objectives=='001'
            || $user->objectives=='011')
        {
            $skip =  $user->getPastMonths() *3;
            $routines = $this->getTpcRoutines($difficulty,$skip);
        }
        
        return $routines;
    }

    public function qualifyRoutine($data, $userId){
        $today = Carbon::today()->format('Y-m-d');
        $scoreAux = Score::where('date',$today)
                            ->where('user_id',$userId)
                            ->first();
        if($scoreAux){
            $scoreAux->delete();
        }

        if(empty($data['heart_rate'])){
            $data['heart_rate'] = 0;
        }
         Score::create([
            'score'=> $data['score'],
            'date' => $today,
            'user_id' => $userId,
            'heart_rate' => $data['heart_rate'],
            'routine_id' => $data['routine_id']
        ]);
        
        return "ok";
       
    }

    public function getUserScores($user){
        $scores =  Score::where('user_id', $user->id )
                        ->orderBy('date','desc')
                        ->get();
        foreach ($scores as $score) {
            $month = $this->translateMonth(intval($score->date->format('m')));
            $day   = $score->date->format('d'); 
            $dayName = $this->translateDay($score->date->format('D'));
            $label = "";
            if($score->date->isToday()){
                $label = "Hoy ";
            }
            if($score->date->isYesterday()){
                $label = "Ayer ";
            }
            $score->format_date =  $label .$dayName.' '.$day.' de '. $month;
        }
        return $scores;
                  
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


    public function getFreeRoutines(){
        return $this->getModel()
                ->where('type','free')  
                ->where('status','active') 
                ->orderBy('created_at','asc')
                ->get();

    }
    
}
