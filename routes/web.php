<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Auth::routes();
Route::group(['prefix' => 'admin'], function () {

    Route::get("/", "Admin\AdminController@index");
    Route::get("/forms", "Admin\AdminController@forms");
    Route::post("/post/test", "Admin\AdminController@postTest");
});
Route::group(['prefix' => 'admin/rutinas'], function () {
    Route::get("/", "Admin\RoutineController@index");
    Route::get("/crear", "Admin\RoutineController@createView");
    Route::get("/editar/{id}", "Admin\RoutineController@editView");
    Route::post("/crear", "Admin\RoutineController@create")->name("create_routine");
    Route::post("/update-videos", "Admin\RoutineController@updateVideos")->name("update_videos");
    Route::put("/editar", "Admin\RoutineController@edit")->name("edit_routine");
   	Route::put("/update-positions", "Admin\RoutineController@updatePositions")->name('update_positions_routines');
    Route::put("/update-positions-videos", "Admin\RoutineController@updatePositionsVideos")->name('update_positions_routines_videos');
    
   	Route::delete("/delete", "Admin\RoutineController@delete")->name('delete_routine');
});

/*Route::group(['prefix' => 'admin/videos'], function () {
    Route::get("/", "Admin\VideoController@index");
    Route::get("/editar/{id}", "Admin\VideoController@editView");
    Route::post("/crear", "Admin\VideoController@create")->name("create_video");
    Route::put("/editar", "Admin\VideoController@edit")->name("edit_video");
    Route::put("/update-positions", "Admin\VideoController@updatePositions")->name('update_positions_videos');
    Route::delete("/delete", "Admin\VideoController@delete")->name('delete_video');
});*/

Route::group(['prefix' => 'admin/alimentos'], function () {
    Route::get("/", "Admin\FoodController@index");
    Route::get("/editar/{id}", "Admin\FoodController@editView");
    Route::get("/crear", "Admin\FoodController@createView");
    Route::post("/crear", "Admin\FoodController@create")->name("create_food");
    Route::put("/editar", "Admin\FoodController@edit")->name("edit_food");
    Route::put("/update-positions", "Admin\FoodController@updatePositions")->name('update_positions_foods');
    Route::delete("/delete", "Admin\FoodController@delete")->name('delete_food');

      
});

Route::group(['prefix' => 'admin/alimentacion'], function () {
    Route::get("/indicaciones/{type}", "Admin\FeedingExtraController@indicationsView");
    Route::get("/prohibidos", "Admin\FeedingExtraController@forbiddenView");
    Route::get("/prohibidos/editar/{id}", "Admin\FeedingExtraController@editForbiddenView");
    Route::get("/porciones", "Admin\FeedingExtraController@portionsView");


   
    Route::post("/save-indications", "Admin\FeedingExtraController@saveIndications")->name("save_indications");

    Route::post("/create-forbidden", "Admin\FeedingExtraController@createForbidden")->name("create_forbidden");

    Route::put("/eidt-forbidden", "Admin\FeedingExtraController@editForbidden")->name("edit_forbidden");

    Route::delete("/delete-forbidden", "Admin\FeedingExtraController@delete")->name('delete_forbidden');
    Route::put("/update-positions-forbidden", "Admin\FeedingExtraController@updatePositions")->name('update_positions_forbidden');

   
});

Route::post('/upload', 'Admin\UploadController@upload');
Route::delete('/upload/revert', 'Admin\UploadController@revertUpload');

/*RUTA PERSONALIZADA PARA MOSTRAR LOS VIDEOS*/
Route::get('/videos/{file}', 'Admin\VideoController@showVideo');





Route::any('{all}', function () {
    return view('app');
})->where(['all' => '.*']);



Route::get('/home', 'HomeController@index')->name('home');
