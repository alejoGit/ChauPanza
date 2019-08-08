@extends('admin.master')

@section('title', 'Rutinas')
@section('head')
    @parent	

@endsection

@section('content')

<div class="ui-container">

    <!--page title and breadcrumb start -->
    <div class="row">
        <div class="col-md-8">
            <h1 class="page-title"> Rutinas</h1>
         
        </div>
        <div class="col-md-4">
            <ul class="breadcrumb pull-right">
                <li><a href="#" class="active">Rutinas</a></li>
            </ul>
        </div>
    </div>
    <!--page title and breadcrumb end -->
    <div class="row">
        <div class="col-md-12">
            <a href="/admin/rutinas/crear" class="btn btn-lg btn-primary"><i class="fa fa-plus"></i> Crear Rutina</a>
            <div style="height: 16px;"></div>
        </div>
    </div>
    <div class="row">
        <div class="col-md-12">
            <div class="panel panel-primary">
                <header class="panel-heading">
                    Listado de rutinas
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
                    			<th>Nombre de la rutina</th>
                                <th>Estado</th>
                                <th class="text-center">Categoría</th>
                                 <th class="text-center">Dificultad</th>
                    			<th class="no-sort text-right">Acciones</th>
                    		</tr>
                    	</thead>
                    	<tbody class="tbody-sortableXX" data-textarea="idTextareaPositions">
                    		@foreach($routines as $routine)
                            <tr data-id="{{$routine->id}}">
                                <td>{{$routine->id}}</td>
                                <td>{{$routine->name}}</td>
                                <td>
                                    @if($routine->status == 'active')
                                        <span class="label label-success label-mini">Activa</span>
                                    @endif

                                    @if($routine->status == 'paused')
                                             
                                        <span class="label label-danger label-mini">Pausada</span>
                                    @endif
                                </td>
                                <td class="text-center text-uppercase">
                                    {{$routine->category}}
                                </td>
                                 <td class="text-center text-capitalize">
                                    {{$routine->difficulty}}
                                </td>
                                <td class="text-right">
                                    <a href="/admin/rutinas/editar/{{$routine->id}}" class="btn btn-warning">
                                        <i class="fa fa-cog" aria-hidden="true"></i>
                                    </a>
                                    <a href="#" id="deleteButton" data-id="{{$routine->id}}" data-name="{{$routine->name}}" class="btn btn-danger btn-delete" data-toggle="modal" data-target="#modalDelete">
                                        <i class="fa fa-trash" aria-hidden="true"></i>
                                    </a>
                                </td>
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
    <script src="{{asset('assets/jquery-ui-1.12.1.custom/jquery-ui.min.js')}}"></script>
    <script>
        $(document).ready(function(){
          
            var deleteTitle = $(".delete-title");
            var deleteId = $("#deleteId");
            $(".aMainRoutines").click();
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