<?php

namespace App\Http\Controllers\Api;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\User\FreeRegisterRequest;
use ChauPanza\User\UserRepository;
use ChauPanza\Subscription\Subscription;
use MP;
use Carbon\Carbon;
class MercadoPagoController extends Controller
{
	private $userRepo;
	public function __construct( UserRepository $userRepo)
    {
    	$this->userRepo = $userRepo;
      
    }

	public function urlUserPlan(Request $request){
		$user = $this->getUserByToken($request);
		$plan = \ChauPanza\Plan\Plan::find($request->plan_id);
		
		Subscription::create([
			"user_id" => $user->id,
			"plan_id" => $plan->id,
			"start_date" => Carbon::today()->format('Y-m-d'),
		]);
		return json_encode(['status' => 'ok', 'url' => '/']);

		if(!$plan){
			return json_encode(['status' => 'error', 'message' => 'Plan invalido']);
		}else{
			$strRand = str_random(8);
			$transactionID  = 'subscription-' . $plan->id . '-'.$user->id.'-'.$strRand;
			$preferenceData = [
	            'items'              => [
	                [
	                    'id'          => $transactionID,
	                    'title'       => 'ChauPanza: Suscripción plan '.$plan->name.' '.$user->email,
	                    'description' => 'Suscripción '.$plan->name,
	                    //'picture_url' => 'https://chaupanza.mensorestudio.com.ar/img/logo2.png',
	                    'quantity'    => 1,
	                    'currency_id' => 'ARS',
	                    'unit_price'  => $plan->price,
	                ],
	            ],
	            'back_urls'          => [
	                'success' => url('/').'/suscripcion/aprobado',
	                'pending' => url('/').'/suscripcion/pendiente',
	                'failure' => url('/').'/suscripcion/fallo',
	            ],
	            'external_reference' => 'external reference',
	            'notification_url'   => url('/').'suscripcion/ipn',
	            'reason'             => 'reason',
	        ];
	        $preference                 = MP::create_preference($preferenceData);

			return  json_encode(['status' => 'ok', 'url' => $preference['response']['sandbox_init_point']]); 
		
		}
	
	}

	public function subscriptionSuccess(Request $request)
    {
        $user = \Auth::user();
        $request->session()->flash('ok', 'Se acreditó el pago  correctamente!');
        $this->payment->updateCourseFeePaymentInfo($user, $request, 'approved');
        return redirect('/perfil');
    }
    public function subscriptionPending(Request $request)
    {
        $user = \Auth::user();
        $request->session()->flash('error', 'Pago pendiente de acreditación!');
        $this->payment->updateCourseFeePaymentInfo($user, $request, 'pending');
        return redirect('/perfil');
    }

    public function subscriptionFailure(Request $request)
    {
        $request->session()->flash('error', 'Error: Fallo el pago!');
        return redirect('/perfil');

    }

}