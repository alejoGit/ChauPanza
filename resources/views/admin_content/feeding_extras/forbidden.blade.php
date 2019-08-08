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
            <h1 class="page-title"> Prohibidos</h1>
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
                    Crear Prohibido
                    <span class="tools pull-right">
                        <a class="collapse-box fa fa-chevron-down" href="javascript:;"></a>
                        <a class="close-box fa fa-times" href="javascript:;"></a>
                    </span>
                </header>
                <div class="panel-body">
                    <form role="form" action="{{route('create_forbidden')}}" class="form-validate form-loading" method="POST" enctype="multipart/form-data">
                        <div class="form-group col-md-12">
                            <div class="slim"
                                 data-label="<div class='ctn-icon-img'><i class='fa fa-picture-o'></i></div> Seleccionar Imagen"
                                 data-size="1920,1920"
                                 data-ratio="3:2"
                                 data-post="output"
                                 data-instant-edit="true">
                                <input type="file" name="image" required>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="idTitle">Nombre</label>
                            <input name="title" class="form-control" id="idTitle" type="text" required>
                        </div>
                        <div class="form-group">
                            <label for="idDesc">Descripción</label>
                            <textarea name="body" id="idDesc" cols="30" rows="4" class="form-control"></textarea>
                        </div>
                        
                        {{csrf_field()}}
                        <button type="submit" class="btn btn-primary pull-right submit-form">Crear Prohibido</button>
                    </form>
                </div>
            </div>
        </div>
        <div class="col-md-8">
            <div class="panel panel-primary">
                <header class="panel-heading">
                    Listado de prohibidos
                    <span class="tools pull-right">
                        <a class="collapse-box fa fa-chevron-down" href="javascript:;"></a>
                        <a class="close-box fa fa-times" href="javascript:;"></a>
                    </span>
                </header>
                <div class="panel-body">
                    <table class="table table-striped data-table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Imagen</th>
                                <th>Nombre</th>
                                <th>Tools</th>
                            </tr>
                        </thead>
                        <tbody class="tbody-sortable" data-textarea="idTextareaPositions">
                            @foreach($forbiddens as $forbidden)
                            <tr data-id="{{$forbidden->id}}">
                                 <td><span class="num-sort">{{$loop->iteration}}</span></td>
                                <td><img width="200" src="{{ asset('images/feeding_extras').'/'.$forbidden->image }}"></td>
                                <td>{{$forbidden->title}}</td>
                                <td class="text-right">
                                 
                                    <a href="/admin/alimentacion/prohibidos/editar/{{$forbidden->id}}" class="btn btn-warning">
                                        <i class="fa fa-cog" aria-hidden="true"></i>
                                    </a>
                                    <a href="#" class="btn btn-danger btn-delete" data-toggle="modal" data-target="#modalDelete" data-id="{{$forbidden->id}}" data-name="{{$forbidden->title}}">
                                        <i class="fa fa-trash" aria-hidden="true"></i>
                                    </a>  
                                  
                                </td>
                            </tr>
                            @endforeach
                        </tbody>
                    </table>
                    <form id="formPositions" action="{{route('update_positions_forbidden')}}" method="POST" class="form-loading">
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
        <form role="form" id="deleteForm" action="{{ route('delete_forbidden') }}" method="post" class="form-validate">
            {{ csrf_field() }}
            {{ method_field('DELETE') }}
        <!-- Modal content-->
        <div class="modal-content">
            <div class="modal-header bg-danger">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title white-text"><i class="fa fa-warning"></i> Advertencia</h4>
            </div>
            <div class="modal-body bg-danger">
                <h3 class="white-text">Esta seguro de eliminar el prohibido?</h3>
                <h4 class="delete-title"></h4>
            </div>
            <div class="modal-footer bg-danger">
                <input type="hidden" id="deleteId" name="id">
                <button type="button" class="btn btn-default" data-dismiss="modal">NO</button>
                <button type="submit" class="btn btn-success">SI</button>
            </div>
        </div>
        </form>
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