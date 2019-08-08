@extends('admin.master')

@section('title', 'Videos')
@section('head')
    @parent	
    <!-- <link rel="stylesheet" href="{{asset('assets/filepond/filepond.min.css')}}"> -->
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
            <h1 class="page-title"> Crear Rutina</h1>
         
        </div>
        <div class="col-md-4">
            <ul class="breadcrumb pull-right">
                <li><a href="/admin/rutinas" class="active">Rutinas</a></li>
                <li><a href="#" class="active">Crear Rutina</a></li>
            </ul>
        </div>
    </div>

    <div class="row">

    
        <div class="col-md-5">
            <div class="panel panel-primary">
                <header class="panel-heading">Agregar Nueva Rutina</header>
                <div class="panel-body">
                    <form action="{{route('create_routine')}}" class="form-validate" method="POST" enctype="multipart/form-data">
                        <div class="row">
                            <div class="col-md-12 form-group">
                                <label for="idName">Nombre de la rutina</label>
                                <input name="name" class="form-control" id="idName" type="text" required>
                            </div>
                            <div class="col-md-12 form-gorup">
                                <label for="idVideo">Video (Código de Vimeo)</label>
                                <textarea class="form-control" name="video"  rows="6"></textarea>
                            </div>
                             <div class="col-md-6 form-group">
                                <label for="idStatus">Dificultad</label>
                                <select class="form-control" name="difficulty" id="idStatus">
                                    <option value="alta">ALTA</option>
                                    <option value="media">MEDIA</option>
                                    <option value="baja">BAJA</option>
                                </select>
                            </div>
                            <div class="col-md-6 form-group">
                                <label for="idStatus">Estado</label>
                                <select class="form-control" name="status" id="idStatus">
                                    <option value="active">Activa</option>
                                    <option value="paused">Pausada</option>
                                </select>
                            </div>
                             <div class="col-md-12 form-group">
                                <label for="idStatus">Categoría</label>
                                <select class="form-control" name="category" id="idStatus">
                                    <option value="gluteos">Gluteos</option>
                                    <option value="piernas">Piernas</option>
                                    <option value="abdomen">Abdomen</option>
                                    <option value="brazos_pecho">Brazos/Pecho</option>
                                    <option value="tpc">Todas las partes del cuerpo</option>
                                </select>
                            </div>
                            <div class="col-md-12">
                                <div style="height: 24px;"></div>
                                {{ csrf_field() }}
                                <button id="btnAddVideo"  class="btn btn-lg large btn-primary">CREAR RUTINA</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
           
        </div>
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

            // let btnAddVideo = $("#btnAddVideo");

            // $('.filepond').on('FilePond:processfile', function(e) {
              
            //     if(  e.detail.error == null){
            //       btnAddVideo.removeAttr("disabled","disabled")
            //     }
            //     if(e.detail.status){
            //          btnAddVideo.attr("disabled","disabled")
            //     }
            // });
            // $('.filepond').on('FilePond:removefile', function(e) {
            //      btnAddVideo.attr("disabled","disabled")
            // });
            
        });
    </script>
@endsection