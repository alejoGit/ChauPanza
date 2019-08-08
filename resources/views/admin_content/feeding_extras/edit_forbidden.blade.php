@extends('admin.master')

@section('title', 'Prohibidos')
@section('head')
    @parent 
    <link rel="stylesheet" href="{{asset('assets/slim/slim.min.css')}}">
@endsection

@section('content')

<div class="ui-container">

    <!--page title and breadcrumb start -->
    <div class="row">
        <div class="col-md-8">
            <h1 class="page-title">Editar Prohibidos</h1>
        </div>
       <!--  <div class="col-md-4">
            <ul class="breadcrumb pull-right">
                <li>Admin</li>
                <li><a href="#" class="active">Tipos de Alumnos</a></li>
            </ul>
        </div> -->
    </div>
    <!--page title and breadcrumb end -->

    <div class="row">
        <div class="col-md-4">
            <div class="panel panel-primary">
                <header class="panel-heading">
                    Información Prohibido
                    <span class="tools pull-right">
                        <a class="collapse-box fa fa-chevron-down" href="javascript:;"></a>
                        <a class="close-box fa fa-times" href="javascript:;"></a>
                    </span>
                </header>
                <div class="panel-body">
                    <form role="form" action="{{route('edit_forbidden')}}" class="form-validate form-loading" method="POST" enctype="multipart/form-data">
                        <div class="form-group col-md-12">
                            <div class="slim"
                                 data-label="<div class='ctn-icon-img'><i class='fa fa-picture-o'></i></div> Seleccionar Imagen"
                                 data-size="1920,1920"
                                 data-ratio="3:2"
                                 data-post="output"
                                 data-instant-edit="true">
                                <img src="/images/feeding_extras/{{$forbidden->image}}" />
                                <input type="file" name="image">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="idTitle">Nombre</label>
                            <input name="title" class="form-control" id="idTitle" type="text" required value="{{$forbidden->title}}">
                        </div>
                        <div class="form-group">
                            <label for="idDesc">Descripción</label>
                            <textarea name="body" id="idDesc" cols="30" rows="4" class="form-control">{{$forbidden->body}}</textarea>
                        </div>
                        <input type="hidden" name="id" value="{{$forbidden->id}}">
                        {{ method_field('PUT') }}
                        {{csrf_field()}}
                        <button type="submit" class="btn btn-primary pull-right submit-form"><i class="fa fa-save"></i> GUARDAR CAMBIOS</button>
                    </form>
                </div>
            </div>
        </div>
      

</div>

@include('admin.right_sidebar')

@endsection

@section('footer')
    @parent 
    <script src="{{asset('assets/slim/slim.jquery.min.js')}}"></script> 
     <script src="{{asset('assets/jquery-ui-1.12.1.custom/jquery-ui.min.js')}}"></script>
    <script>
        $(document).ready(function(){
            $(".aMainFeeding").click();
            $(".slim").slim();

            var deleteTitle = $(".delete-title");
            var deleteId = $("#deleteId");
            $(".btn-delete").on("click",function(){
                var self = $(this);
                var dataId = self.attr("data-id");
                var dataName = self.attr("data-name");
                deleteId.val(dataId);
                deleteTitle.text(dataName);
            });
            
        });
    </script>
@endsection