@extends('admin.master')

@section('title', 'EditarDieta')
@section('head')
    @parent
<!--     <link rel="stylesheet" href="{{asset('assets/summernote/dist/summernote.css')}}"> -->
    <link rel="stylesheet" href="{{asset('assets/slim/slim.min.css')}}">
@endsection

@section('content')

<!--main content start-->

<div class="ui-container">

    <!--page title and breadcrumb start -->
    <div class="row">
        <div class="col-md-8">
            <h1 class="page-title">Editar alimento</h1>
        </div>
        <div class="col-md-4">
            <ul class="breadcrumb pull-right">
                <li><a href="/admin/alimentos" class="active">Alimentos</a></li>
                <li><a href="#" class="active">Editar alimento</a></li>
            </ul>
        </div>
    </div>
    <!--page title and breadcrumb end -->
    <form id="form1" action="{{route('edit_food')}}" method="POST" class="form-validate form-loading" enctype="multipart/form-data">
        <div class="row">
            <!-- <div class="col-md-4">
                <div class="panel panel-primary">
                    <header class="panel-heading">
                         <label for="">Imagen de la dieta</label>
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
                                     <img src="/images/foods/{{$food->photo}}" alt="Chau Panza"/>
                                    <input type="file" name="photo">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> -->
            <div class="col-md-8">
                <div class="panel panel-primary">
                    <header class="panel-heading">
                        Información de la dieta
                    </header>
                    <div class="panel-body">
                     
                            <div class="row">
                                <div class="form-group col-md-8">
                                    <label for="idName">Nombre de la dieta</label>
                                    <input name="name" class="form-control" id="idName" type="text" required value="{{$food->name}}">
                                </div>
                                <div class="form-group col-md-4">
                                   <label for="idCalories">Categoría</label>
                                    <select name="category" id="idCategory" class="form-control">
                                        <option value="consumo_reducido">Consumo Reducido</option>
                                        <option value="proteinas_grasas">Proteínas y Grasas Buenas</option>
                                        <option value="hidratos_carbono">Hidratos de Carbono</option>
                                    </select>
                                </div>
                            </div>
                            <div class="row">
                                <div class="form-group col-md-6">
                                     <label for="idType">Categoría</label>
                                    <select name="type" id="idType" class="form-control">
                                        <option value="premium">Premium</option>
                                        <option value="free">Gratuita</option>
                                    </select>
                                </div>
                            </div>
                            
                            {{csrf_field()}}
                            {{ method_field('PUT')}}
                            <input type="hidden" name="id" value="{{$food->id}}">
                            <button id="btnCreate" class="btn btn-lg btn-primary submit-form"><i class="fa fa-save"></i> Guardar Cambios</button>
                       
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
    <!-- <script src="{{asset('assets/summernote/dist/summernote.min.js')}}"></script> -->
    <script src="{{asset('assets/slim/slim.jquery.min.js')}}"></script>
    <script>
        $(document).ready(function() {
            $(".aMainFeeding").click();
            $(".slim").slim();
            $("#idType").val("{{$food->type}}");
            
            $("#idCategory").val("{{$food->category}}");
            /*$('#summernote').summernote({
                height: 300,                 // set editor height
                minHeight: null,             // set minimum height of editor
                maxHeight: null,             // set maximum height of editor
                focus: true                  // set focus to editable area after initializing summernote
            });*/
            $("#btnCreate").on("click",function(e){
                var strHtml = $('#summernote').summernote('code');
                $("#idTextareaBody").text(strHtml);
            });
        });
    </script>
@endsection