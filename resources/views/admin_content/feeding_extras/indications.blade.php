@extends('admin.master')

@section('title', 'Indicaciones')
@section('head')
    @parent
    <link rel="stylesheet" href="{{asset('assets/summernote/dist/summernote.css')}}">
    <link rel="stylesheet" href="{{asset('assets/slim/slim.min.css')}}">
  
@endsection

@section('content')

<!--main content start-->

<div class="ui-container">

    <!--page title and breadcrumb start -->
    <div class="row">
        <div class="col-md-8">
            <h1 class="page-title">Indicaciones</h1>
        </div>
        <!-- <div class="col-md-4">
            <ul class="breadcrumb pull-right">
                <li>Admin</li>
                <li><a href="/admin/dietas" class="active">Dietas</a></li>
                <li><a href="#" class="active">Crear dieta</a></li>
            </ul>
        </div> -->
    </div>
    <!--page title and breadcrumb end -->
    <form id="form1" action="{{route('save_indications')}}" method="POST" class="form-validate form-loading" enctype="multipart/form-data">
        <div class="row">
            <!-- <div class="col-md-4">
                <div class="panel panel-primary">
                    <header class="panel-heading">
                         <label for="">Imagen</label>
                    </header>
                    <div class="panel-body">
                        <div class="row">
                            <div class="form-group col-md-12">
                                <div class="slim"
                                     data-label="<div class='ctn-icon-img'><i class='fa fa-picture-o'></i></div> Seleccionar Imagen"
                                     data-size="1920,1920"
                                     data-ratio="16:9"
                                     data-post="output"
                                     data-instant-edit="true">
                                    <input type="file" name="image" @if(!$indications) required @endif>
                                    @if($indications)
                                        <img src="/images/feeding_extras/{{$indications->image}}" alt="Chau Panza"/>
                                    @endif
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div> -->
            <div class="col-md-8">
                <div class="panel panel-primary">
                    <header class="panel-heading">
                        Información
                    </header>
                    <div class="panel-body">
                     
                            <div class="row">
                                <div class="form-group col-md-12">
                                    <label for="idTitle">Titulo</label>
                                    <input name="title" class="form-control" id="idTitle" type="text" required value="@if($indications){{$indications->title}}@else @endif">
                                </div>
                            </div>
                           
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <label for="summernote">Contenido</label>
                                        <textarea id="summernote" name="body"cols="30" rows="4" class="form-control">@if($indications){{$indications->body}}@else @endif</textarea>
                                    </div>
                                </div>
                            </div>
                            <input type="hidden" name="type" value="indications{{$dietType}}">
                            {{csrf_field()}}
                            <textarea id="idTextareaBody" name="body" class="hidden"></textarea>
                            
                            
                            <button id="btnSave" class="btn btn-lg btn-block btn-primary submit-form"><i class="fa fa-save"></i> GUARDAR CAMBIOS</button>
                    </div>
                </div>
            </div>
        </div>
    </form>
</div>



@include('admin.right_sidebar')

<!--main content end-->

@endsection

@section('footer')
    @parent
    <script src="{{asset('assets/summernote/dist/summernote.min.js')}}"></script>
    <script src="{{asset('assets/slim/slim.jquery.min.js')}}"></script>
    <script>
        $(document).ready(function() {
            $(".aMainFeeding").click();
            $(".slim").slim();
            $('#summernote').summernote({
                height: 300,                 // set editor height
                minHeight: null,             // set minimum height of editor
                maxHeight: null,             // set maximum height of editor
                focus: false                  // set focus to editable area after initializing summernote
            });
            $("#btnSave").on("click",function(e){
                var strHtml = $('#summernote').summernote('code');
                $("#idTextareaBody").text(strHtml);
            });
        });
    </script>
@endsection