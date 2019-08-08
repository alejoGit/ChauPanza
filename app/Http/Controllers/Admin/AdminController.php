<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\ExampleFormRequest;
class AdminController extends Controller
{

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware(['auth','is_admin']);
    }
    
    /**
     * Display index admin view
     *
     * 
     * @return \Illuminate\Contracts\View\Factory | \Illuminate\View\View
     */
    public function index(){
        return view('admin_content.index');
    } 

    /**
     * Display forms admin view
     *
     * 
     * @return \Illuminate\Contracts\View\Factory | \Illuminate\View\View
     */
    public function forms(){
        return view('admin_content.forms');
    }

    /**
     * Post Test.
     *
     * @param  App\Http\Requests\Menu\CreateMenuRequest  $request
     * @return Illuminate\Routing\Redirector
     */
    public function postTest(ExampleFormRequest $request){
        //$post = $this->post->create($request->all());
        $request->session()->flash('ok', 'Se creó el post correctamente!');
        //$request->session()->flash('error', 'Esto es un error personalizado');
        return redirect()->to('/admin/forms');
    }

    

}
