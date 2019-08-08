<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
//use App\Http\Requests\ExampleFormRequest;
use ChauPanza\Video\VideoRepository;
use Storage;
class VideoController extends Controller
{

    /**
     * Create a new controller instance.
     *
     * @return void
     */

    private $repository;
    
    public function __construct(VideoRepository $repository)
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
        $data['videos'] = $this->repository->getModel()->all();
        return view('admin_content.videos.index',$data);
    } 

    /**
     * Display view
     *
     * @param $id
     * @return \Illuminate\Contracts\View\Factory | \Illuminate\View\View
     */
    public function editView($id)
    {
        $data['Video'] = $this->repository->findOrFail($id);
        return view('admin_content.videos.edit', $data);
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
        $request->session()->flash('ok', 'Se creó el video correctamente!');
        return redirect()->to('/admin/videos');
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
    

    public function showVideo($file){
         return Storage::response("videos/$file");
    }

}
