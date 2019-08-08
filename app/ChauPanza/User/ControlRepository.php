<?php

namespace ChauPanza\User;

use ChauPanza\Base\BaseRepository;
use ChauPanza\User\Control;

use Carbon\Carbon;
class ControlRepository extends BaseRepository
{
    /**
     * @var Control
     */
    protected $model;
    /**
     * ControlRepository constructor.
     * @param Control $model
     */
    public function __construct(Control $model)
    {
        $this->model   = $model;
    
    }

    public function getModel()
    {
        return $this->model;
    }
    
    public function getUserControls($user){
        return $this->getModel()->where('user_id',$user->id)->orderBy('month','asc')->get();
    }

    public function getRoutineControls($user){
        $str='';
        $startDate = new Carbon($user->subscription->start_date);
        $startDateAux = new Carbon($user->subscription->start_date);
        $arrDates = [];
        for($i=0; $i<$user->getPastMonths(); $i++){
            $month = $i+1;
            
            $nextDate =  $startDate->copy()->addMonths($month);
            if($i==0){
                $objAux = ['start'=>$startDate->format('Y-m-d') ,'end'=> $nextDate->format('Y-m-d')];
                // $str .= 'Mes'.$month.' '.$startDate->format('Y-m-d').' / '.$nextDate->format('Y-m-d').' ____ ';
            }else{
                $firtsDateAux = $startDateAux->addMonths(1);
                $objAux = ['start'=>$firtsDateAux->format('Y-m-d') ,'end'=> $nextDate->format('Y-m-d')];
                // $str .= 'Mes'.$month.' '.$firtsDateAux->format('Y-m-d').' / '.$nextDate->format('Y-m-d').' ____ ';
            }
            array_push($arrDates, $objAux);
            
        }
        //$str ='';
        $arrScores =[];
        foreach ($arrDates as $key => $monthDates) {
            $scores = $user->scores()->whereBetween('date',[$monthDates['start'], $monthDates['end']])->get();
            $scoreAux = 0;
            $countScores = count($scores);   
            foreach ($scores as $score) {
                $scoreAux += $score->score;
            }
            if($scores&& $countScores>0){
                $scoreAux= round($scoreAux/$countScores);
            }
            array_push($arrScores, $scoreAux);
            //$str .= $monthDates['start'] .'/'. $monthDates['end'] .' .... '.$scoreAux.'  ';
        }
        return $arrScores;
    }

    public function getFoodControls($user){
        $str='';
        $startDate = new Carbon($user->subscription->start_date);
        $startDateAux = new Carbon($user->subscription->start_date);
        $arrDates = [];
        for($i=0; $i<$user->getPastMonths(); $i++){
            $month = $i+1;
            
            $nextDate =  $startDate->copy()->addMonths($month);
            if($i==0){
                $pastDays= $startDate->diffInDays($nextDate);
                $objAux = ['start'=>$startDate->format('Y-m-d') ,'end'=> $nextDate->format('Y-m-d'),'pastDays'=>$pastDays];
                $str .= 'PastDays'.$pastDays.' Mes'.$month.' '.$startDate->format('Y-m-d').' / '.$nextDate->format('Y-m-d').' ____ ';
            }else{
                $firtsDateAux = $startDateAux->addMonths(1);
                $pastDays= $firtsDateAux->diffInDays($nextDate);
                $objAux = ['start'=>$firtsDateAux->format('Y-m-d') ,'end'=> $nextDate->format('Y-m-d'),'pastDays'=>$pastDays];
                $str .= 'PastDays'.$pastDays.'Mes'.$month.' '.$firtsDateAux->format('Y-m-d').' / '.$nextDate->format('Y-m-d').' ____ ';
            }
            array_push($arrDates, $objAux);
            
        }
        $arrFoods = [];
        foreach ($arrDates as $key => $monthDates) {
            $totalFoods = $monthDates['pastDays'] * 12;   
            $foodsCount = $user->foods()->whereBetween('date',[$monthDates['start'], $monthDates['end']])->count();
            $percentageAux = $foodsCount *100 / $totalFoods;
            $percentageAux = number_format((float)$percentageAux, 2, '.', '');
            array_push($arrFoods, $percentageAux);
            
        }
        return $arrFoods;
    }


    public function setControls($user,$data){
        $controlsAux = $user->controls()->where('month',$data['month'])->first();
        if($controlsAux){
            $controlsAux->peso = $data['peso'];
            $controlsAux->indice_cadera = $data['indice_cadera'];
            $controlsAux->perimetro_abdominal = $data['perimetro_abdominal'];
            $controlsAux->save();
        }else{
            $controlsAux = \ChauPanza\User\Control::create([
                'peso' => $data['peso'],
                'indice_cadera' => $data['indice_cadera'],
                'perimetro_abdominal' => $data['perimetro_abdominal'],
                'month' => $data['month'],
                'user_id' => $user->id,
            ]);
        }
        return $controlsAux;
    }
   
}
