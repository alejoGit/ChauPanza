@extends('admin.master')

@section('title', 'Alimentos')
@section('head')
    @parent	
    <style>
       .nav-tabs > li.active > a, .nav-tabs > li.active > a:hover, .nav-tabs > li.active > a:focus{
            background: #584B8A;
            color:white;
       }
    </style>
@endsection

@section('content')

<div class="ui-container">

    <!--page title and breadcrumb start -->
    <div class="row">
        <div class="col-md-8">
            <h1 class="page-title"> Alimentos</h1>
         
        </div>
        <div class="col-md-4">
            <ul class="breadcrumb pull-right">
                <li><a href="#" class="active">Alimentos</a></li>
            </ul>
        </div>
        <div class="col-md-12 text-right">
            <a href="/admin/alimentos/crear" class="btn btn-primary btn-lg"><i class="fa fa-plus"></i> CREAR NUEVO ALIMENTO</a> <br><br>
        </div>
    </div>
    <!--page title and breadcrumb end -->
    
    <div class="row">
        <!-- <div class="col-md-12">
            <ul class="nav nav-tabs" role="tablist">
                <li role="presentation" class="active"><a href="#breakfast" aria-controls="home" role="tab" data-toggle="tab">DESAYUNOS</a></li>
                <li role="presentation"><a href="#lunch" aria-controls="profile" role="tab" data-toggle="tab">ALMUERZOS</a></li>
                <li role="presentation"><a href="#snak" aria-controls="messages" role="tab" data-toggle="tab">MERIENDAS</a></li>
                <li role="presentation"><a href="#dinner" aria-controls="settings" role="tab" data-toggle="tab">CENAS</a></li>
            </ul>
        </div> -->
    
        <div class="col-md-12">
            <div class="row">
                <div class="col-md-12">
                    <div class="panel">
                        <header class="panel-heading">
                            Listado de alimentos
                            <!--<span class="tools pull-right">
                                <a class="collapse-box fa fa-chevron-down" href="javascript:;"></a>
                                <a class="close-box fa fa-times" href="javascript:;"></a>
                            </span>-->
                        </header>
                        <div class="panel-body">
                            @include('admin_content.foods.table_food',['entities'=>$foods])
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    
</div>
<!-- Modal -->
<div id="modalDelete" class="modal fade" role="dialog">
    <div class="modal-dialog">
        <form role="form" id="deleteForm" action="{{route('delete_food')}}" method="post" class="form-validate">
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
            $(".aMainFeeding").click();
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