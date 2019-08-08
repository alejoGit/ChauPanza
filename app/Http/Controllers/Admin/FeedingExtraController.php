<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
//use App\Http\Requests\ExampleFormRequest;
use ChauPanza\FeedingExtra\FeedingExtraRepository;

class FeedingExtraController extends Controller
{

    /**
     * Create a new controller instance.
     *
     * @return void
     */

    private $repository;
    
    public function __construct(FeedingExtraRepository $repository)
    {
        $this->middleware(['auth','is_admin']);
        $this->repository = $repository;
    }
    
    /**
     * Display index admin view
     *
     * 
     * @return \Illuminate\Contracts\View\Factory | \Illuminate\View\View
     */
    public function indicationsView($dietType){
        $data['indications'] = $this->repository->getIndications('indications'.$dietType);
        $data['dietType'] = $dietType;
        return view('admin_content.feeding_extras.indications',$data);
    } 

 

     /**
     * saveIndications.
     *
     * @param  
     * @return Illuminate\Routing\Redirector
     */
    public function saveIndications(Request $request)
    {

        $entity = $this->repository->saveIndications($request->all());
        $request->session()->flash('ok', 'Se actualizaron las indicaciones correctamente!');
        return redirect()->back();
    }


    /**
     * Display index admin view
     *
     * 
     * @return \Illuminate\Contracts\View\Factory | \Illuminate\View\View
     */
    public function forbiddenView(){
        $data['forbiddens'] = $this->repository->getForbiddens();
        return view('admin_content.feeding_extras.forbidden',$data);
    } 
    public function editForbiddenView($id){
        $data['forbidden'] = $this->repository->findOrFail($id);
        return view('admin_content.feeding_extras.edit_forbidden',$data);
    } 

    /**
     * createForbidden.
     *
     * @param  
     * @return Illuminate\Routing\Redirector
     */
    public function createForbidden(Request $request)
    {
        $entity = $this->repository->createForbidden($request->all());
        $request->session()->flash('ok', 'Se creó el prohibido correctamente!');
        return redirect()->back();
    }



    /**
     * Update.
     *
     * @param  
     * @return Illuminate\Routing\Redirector
     */
    public function editForbidden(Request $request)
    {
        $entity = $this->repository->findOrFail($request->id);
        $this->repository->update($entity, $request->all());
        $request->session()->flash('ok', 'Se actualizó el prohibido correctamente!');
        return redirect()->back();

    }

    /**
     * Update positions.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return Illuminate\Routing\Redirector
     */
    public function updatePositions(Request $request)
    {
        $this->repository->updatePositions($request->positions);
        $request->session()->flash('ok', 'Se actualizaron las posiciones correctamente!');
        return redirect()->back();
    }

    /**
     * Delete.
     *
     * @param  Illuminate\Http\Request
     * @return Illuminate\Routing\Redirector
     */
    public function delete(Request $request)
    {
        $entity    = $this->repository->findOrFail($request->id);
        $this->repository->delete($entity);
        
        $request->session()->flash('ok', 'Se eliminó correctamente!');
        return redirect()->back();
    }
    

    

}
