<?php

//use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });


Route::post('authenticate', 'AuthenticateController@authenticate');
Route::post('user/free-register', 'Api\UserController@freeRegister');

Route::get('test', 'Api\UserController@test');

Route::group(['middleware' => 'jwt.auth'], function()
{
    Route::get('user', 'Api\UserController@show');
    Route::post('user/profile/update', 'Api\UserController@updateProfile');
    Route::post('user/password/update', 'Api\UserController@updatePassword');


	Route::get('get-routines', 'Api\RoutineController@getRoutines');
	Route::get('get-user-scores', 'Api\RoutineController@getUserScores');
	Route::post('qualify-routine', 'Api\RoutineController@qualifyRoutine');

	Route::get('get-foods', 'Api\FoodController@getFoods');
    Route::get('get-user-indications','Api\FoodController@getIndications');
    Route::post('get-foods-by-date', 'Api\FoodController@getFoodsByDate');
    Route::post('set-food-user', 'Api\FoodController@setFoodUser');
    Route::post('set-food-user-by-date', 'Api\FoodController@setFoodUserByDate');

    Route::post('url-user-plan', 'Api\MercadoPagoController@urlUserPlan');
    Route::post('set-diagnostic', 'Api\UserController@setDiagnostic');
    Route::post('set-objectives', 'Api\UserController@setObjectives');

    Route::get('get-photos', 'Api\PhotoController@getPhotos');
    Route::get('get-controls', 'Api\ControlController@getControls');
    Route::post('set-controls', 'Api\ControlController@setControls');

    Route::post('update-profile', 'Api\UserController@updateProfile');
    
});
Route::post('set-photo', 'Api\PhotoController@setPhoto');
