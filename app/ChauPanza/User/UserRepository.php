<?php

namespace ChauPanza\User;

use ChauPanza\Base\BaseRepository;

use Carbon\Carbon;
class UserRepository extends BaseRepository
{
    /**
     * @var User
     */
    protected $model;
    /**
     * UserRepository constructor.
     * @param User $model
     */
    public function __construct(User $model)
    {
        $this->model   = $model;
    
    }

    public function getModel()
    {
        return $this->model;
    }
    /**
     * @overwrite method create
     * @param  array $data
     * @return ChauPanza\User\User $user
     */
    public function create(array $data)
    {

        try{
            $data['birthdate'] = Carbon::parse($data['birthdate'] )->format('Y-m-d');

        }catch(\Exception $e){
            $data['birthdate'] = null;
        }


        $data['password'] = bcrypt($data['password']);
        $user             = $this->model->create($data);
        $data['user_id']  = $user->id;
    
       Profile::create($data);
        
       
        return $user;
    }

    public function calculateDietType($user){
        $answers = json_decode($user->diagnostic->answers);
        $countA = 0;
        $countB = 0;
        foreach ($answers as $key => $value) {
            if($value == 'A'){
                $countA++;
            }
            if($value == 'B'){
                $countB++;
            }
        }
        $dietType = "";
        if($countA > $countB){
            $dietType = "P";
        }else{
            $dietType = "S";
        }
        $user->diet_type = $dietType;
        $user->save();
        return $dietType;

    }
    
    public function createInitialDiagnostic($data,$user){
        $data['user_id'] = $user->id;
        $diagAux = \ChauPanza\User\Diagnostic::where('user_id',$user->id)->first();
        if(!$diagAux){
            $diagnostic = \ChauPanza\User\Diagnostic::create($data); 
        }else{
            $diagAux->fill($data);
            $diagAux->save();
        }
        
        return $this->calculateDietType($user);
    }

    public function setLevel($user,$objectives, $isPhysical){
        $levelAux = 0;
        
        if($user->profile->gender == "M"){
            $levelAux += 10;
        }
        if($user->profile->gender == "F"){
            $levelAux += 5;
        }

        $userYears = $user->getYears();
        if($userYears <=39){
            $levelAux += 25;
        }else if($userYears>39 && $userYears <= 59){
            $levelAux += 15;
        }else if($userYears>59){
            $levelAux += 5;
        }

        if($user->diagnostic->physical_condition =='alta'){
            $levelAux += 40;
        }
        if($user->diagnostic->physical_condition =='media'){
            $levelAux += 20;
        }
        if($user->diagnostic->physical_condition =='baja'){
            $levelAux += 5;
        }

        if($isPhysical){
            $levelAux += 5;
        }

        $user->objectives = $objectives;
        $user->level = $levelAux;
        $user->save();
    }
    public function setBodyParts($user, $bodyParts){
        $user->bodyParts()->delete();
        foreach ($bodyParts as $part) {
            \ChauPanza\User\BodyPart::create([
                'category' => $part,
                'user_id' => $user->id,
            ]);
        }

    }
    public function setHemogram($data, $user){
        $today = Carbon::today()->format('Y-m-d');
        \ChauPanza\User\Hemogram::create([
            'date'    => $today,
            'results' => $data,
            'user_id' => $user->id,
        ]);
    }
    public function setObjectives($data, $user){
     
        $this->setLevel($user, $data['objectives'], $data['objective3']);
        if($data['objective1']){
            $this->setBodyParts($user, $data['body_parts']);
        }
        if($data['objective2']){
            $this->setHemogram( $data['hemogram'], $user);
        }
        return $user;
    }

    public function updateProfile(array $data, $user)
    {

        try{
            $data['birthdate'] = Carbon::parse($data['birthdate'] )->format('Y-m-d');

        }catch(\Exception $e){
            $data['birthdate'] = null;
        }

        $user->fill($data);
        $user->save();
        $data['user_id']  = $user->id;

        $user->profile->fill($data);
        $user->profile->save();
        
       
        return $user;
    }

   
}
