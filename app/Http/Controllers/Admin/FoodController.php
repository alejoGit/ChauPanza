<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
//use App\Http\Requests\ExampleFormRequest;
use ChauPanza\Food\FoodRepository;

class FoodController extends Controller
{

    /**
     * Create a new controller instance.
     *
     * @return void
     */

    private $repository;
    
    public function __construct(FoodRepository $repository)
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
        // $data['breakfasts'] = $this->repository->getBreakfasts();
        // $data['lunchs'] = $this->repository->getLunchs();
        // $data['snaks'] = $this->repository->getSnaks();
        // $data['dinners'] = $this->repository->getDinners();

        $data['foods'] = $this->repository->getPremiumFoods();
        return view('admin_content.foods.index',$data);
    } 

    /**
     * Display view
     *
     * 
     * @return \Illuminate\Contracts\View\Factory | \Illuminate\View\View
     */
    public function createView()
    {
        return view('admin_content.foods.create');
    }

    /**
     * Display view
     *
     * @param $id
     * @return \Illuminate\Contracts\View\Factory | \Illuminate\View\View
     */
    public function editView($id)
    {
        $data['food'] = $this->repository->findOrFail($id);
        return view('admin_content.foods.edit', $data);
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
        $request->session()->flash('ok', 'Se creó la dieta correctamente!');
        return redirect()->to('/admin/alimentos');
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
        $request->session()->flash('ok', 'Se actualizó la dieta correctamente!');
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
        
        $request->session()->flash('ok', 'Se eliminó la dieta correctamente!');
        return redirect()->back();
    }
    

    

}
