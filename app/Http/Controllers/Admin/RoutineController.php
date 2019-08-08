<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
//use App\Http\Requests\ExampleFormRequest;
use ChauPanza\Routine\RoutineRepository;
class RoutineController extends Controller
{

    /**
     * Create a new controller instance.
     *
     * @return void
     */

    private $repository;
    public function __construct(RoutineRepository $repository)
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
    public function index(){
        $data['routines'] = $this->repository->getRoutines();
        return view('admin_content.routines.index',$data);
    } 

    /**
     * Display view
     *
     * 
     * @return \Illuminate\Contracts\View\Factory | \Illuminate\View\View
     */
    public function createView(){
        // $data['routines'] = $this->repository->getSortedByPosition();
        return view('admin_content.routines.create');
    } 

    /**
     * Display view
     *
     * @param $id
     * @return \Illuminate\Contracts\View\Factory | \Illuminate\View\View
     */
    public function editView($id)
    {
        $data['routine'] = $this->repository->findOrFail($id);
        // $data['routineVideos'] = $this->repository->getSortedVideos($data['routine']);
        // $data['unrelatedVideos'] = $this->repository->getUnrelatedVideos( $data['routine'] );
       
        return view('admin_content.routines.edit', $data);
    }


     /**
     * Create.
     *
     * @param  
     * @return Illuminate\Routing\Redirector
     */
    public function create(Request $request)
    {
        $entity = $this->repository->create($request->all());
        $request->session()->flash('ok', 'Se creó la rutina correctamente!');
        return redirect()->to('/admin/rutinas');
    }

    /**
     * Update.
     *
     * @param  
     * @return Illuminate\Routing\Redirector
     */
    public function edit(Request $request)
    {

        $entity = $this->repository->findOrFail($request->id);
        $this->repository->update($entity, $request->all());
        $request->session()->flash('ok', 'Se actualizó la rutina correctamente!');
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
        
        $request->session()->flash('ok', 'Se eliminó la rutina correctamente!');
        return redirect()->back();
    }

    public function updateVideos(Request $request){
        $data['routine'] = $this->repository->findOrFail($request->routine_id);
        $data['routine']->videos()->sync($request->to, true); 
        $request->session()->flash('ok', 'Se actualizaron los videos de la rutina correctamente!');
        return redirect()->back();
    }

    public function updatePositionsVideos(Request $request){
        $routine = $this->repository->findOrFail($request->routine_id);
        $this->repository->updatePositionVideos($routine,$request->positions);

        $request->session()->flash('ok', 'Se actualizaron las posiciones de los videos de la rutina correctamente!');
        return redirect()->back();
          
    }
    

}
