<?php
namespace App\Http\Controllers\Admin;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class UploadController extends Controller
{
    public function upload(Request $request){
    	$file = $request->file('filepond');
    	return Storage::put('tmp', $file);
    }

    public function revertUpload(Request $request){
    	Storage::delete($request->getContent());
    	return'ok';
    }
}