@extends('admin.master')

@section('title', 'Videos')
@section('head')
    @parent	
    <link rel="stylesheet" href="{{asset('assets/filepond/filepond.min.css')}}">
    <style>
        .filepond--drop-label label{
            position: absolute;
            width: 100%;
            height: 100%;
            display: flex!important;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
    </style>
@endsection

@section('content')

<div class="ui-container">

    <!--page title and breadcrumb start -->
    <div class="row">
        <div class="col-md-8">
            <h1 class="page-title"> Videos</h1>
         
        </div>
        <div class="col-md-4">
            <ul class="breadcrumb pull-right">
                <li><a href="#" class="active">Videos</a></li>
            </ul>
        </div>
    </div>

    <div class="row">

    
        <div class="col-md-5">
            <div class="panel panel-primary">
                <header class="panel-heading">Agregar Nuevo Video</header>
                <div class="panel-body">
                    <form action="{{route('create_video')}}" class="form-validate" method="POST" enctype="multipart/form-data">
                        <div class="row">
                            <div class="col-md-12 form-group">
                                <label for="idName">Nombre del video</label>
                                <input name="name" class="form-control" id="idName" type="text" required>
                            </div>
                            <div class="col-md-12 form-gorup">
                                <label for="idVideo">Video (mp4)</label>
                                <input type="file" 
                                    class="filepond"
                                    name="filepond" 
                                    required 
                                    data-max-file-size="100MB"
                                    id="idVideo"
                                   >
                            </div>
                            <div class="col-md-12">
                                <div style="height: 24px;"></div>
                                {{ csrf_field() }}
                                <button id="btnAddVideo"  disabled class="btn btn-lg large btn-primary">Agregar Video</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
           
        </div>


        <div class="col-md-7">
            <div class="panel panel-primary">
                <header class="panel-heading">
                    Listado de Videos
                    <!--<span class="tools pull-right">
                        <a class="collapse-box fa fa-chevron-down" href="javascript:;"></a>
                        <a class="close-box fa fa-times" href="javascript:;"></a>
                    </span>-->
                </header>
                <div class="panel-body">
                    <table class="table table-striped data-table">
                    	<thead>
                    		<tr>
                                <th>ID</th>
                    			<th>Nombre del video</th>
                                <th>URL</th>
                    			<th class="no-sort text-right">Acciones</th>
                    		</tr>
                    	</thead>
                    	<tbody class="tbody-sortableX" data-textarea="idTextareaPositions">
                    		@foreach($videos as $video)
                            <tr>
                                <td>{{$video->id}}</td>
                                <td>{{$video->name}}</td>
                                <td><a href="{{url('/')}}/{{$video->url}}" target="_blank">Ver video</a></td>
                                <td></td>
                            </tr>
                            @endforeach
                    	</tbody>
                    </table>
                    <form id="formPositionsCourses" action="{{route('update_positions_routines')}}" method="POST" class="form-loading">
                        <textarea name="positions" class="textarea-positions hide" id="idTextareaPositions"></textarea>
                        {{ method_field('PUT') }}
                        {{ csrf_field() }}
                        <br>
                        <button class="btn btn-primary hide submit-form btn-update-positions"><i class="fa fa-list-ol"></i> Actualizar Posiciones</button>
                    </form> 
                </div>
            </div>
        </div>
    </div>
</div>
<!-- Modal -->
<div id="modalDelete" class="modal fade" role="dialog">
    <div class="modal-dialog">
        <form role="form" id="deleteForm" action="{{route('delete_routine')}}" method="post" class="form-validate">
        <!-- Modal content-->
        <div class="modal-content">
            <div class="modal-header bg-danger">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title white-text"><i class="fa fa-warning"></i> Advertencia</h4>
            </div>
            <div class="modal-body bg-danger">
                <h3 class="white-text">Esta seguro de eliminar   <span class="delete-title"></span> ? </h3>
                 
            </div>
            <div class="modal-footer bg-danger">
                <input id="deleteId" type="hidden" name="id">
                {{ csrf_field() }}
                {{ method_field('DELETE')}}
                <button type="button" class="btn btn-default" data-dismiss="modal">NO</button>
                 <button type="submit" class="btn btn-default">SI</button>
            </div>
        </div>
        </form>
    </div>
</div>
@include('admin.right_sidebar')

@endsection

@section('footer')
    @parent	 
    <!-- include FilePond plugins -->
    <script src="https://unpkg.com/filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.js"></script>
    <script src="https://unpkg.com/filepond-plugin-file-validate-size/dist/filepond-plugin-file-validate-size.js"></script>


    <!-- include FilePond library -->
    <script src="https://unpkg.com/filepond/dist/filepond.min.js"></script>


    <!-- include FilePond jQuery adapter -->
    <script src="https://unpkg.com/jquery-filepond/filepond.jquery.js"></script>
    <script src="{{asset('assets/jquery-ui-1.12.1.custom/jquery-ui.min.js')}}"></script>
    <script>
        FilePond.registerPlugin(
          //FilePondPluginImagePreview,
          //FilePondPluginImageExifOrientation,
          FilePondPluginFileValidateSize
        );

        const inputElement = document.querySelector('input[type="file"]');
        const pond = FilePond.create( inputElement );
        FilePond.setOptions({
            labelIdle:'SELECCIONAR VIDEO',

            server: {
                url: '/upload',
                revert: '/revert',
                process: {
                    headers: {
                        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                    },
                   
                }
            },
            
        });

        $(document).ready(function(){
          
            var deleteTitle = $(".delete-title");
            var deleteId = $("#deleteId");
            $(".aMainRoutines").click();
            /*$(".btn-delete").on("click",function(){
                var self = $(this);
                var dataId = self.attr("data-id");
                var dataName = self.attr("data-name");
                deleteId.val(dataId);
                deleteTitle.text(dataName);
            });*/

            let btnAddVideo = $("#btnAddVideo");

            $('.filepond').on('FilePond:processfile', function(e) {
              
                if(  e.detail.error == null){
                  btnAddVideo.removeAttr("disabled","disabled")
                }
                if(e.detail.status){
                     btnAddVideo.attr("disabled","disabled")
                }
            });
            $('.filepond').on('FilePond:removefile', function(e) {
                 btnAddVideo.attr("disabled","disabled")
            });
            
        });
    </script>
@endsection