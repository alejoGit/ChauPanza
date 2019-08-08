@extends('admin.master')

@section('title', 'Dashboard')
@section('head')
    @parent	
    
@endsection

@section('content')

<div class="ui-container">

    <!--page title and breadcrumb start -->
    <div class="row">
        <div class="col-md-8">
            <h1 class="page-title"> Plataforma Administrativa de Chau Panza</h1>
        </div>
        <div class="col-md-4">
            <ul class="breadcrumb pull-right">
                <li>Home</li>
                <li><a href="#" class="active">Dashboard</a></li>
            </ul>
        </div>
    </div>
    <!--page title and breadcrumb end -->

    <div class="row">
        <div class="col-md-12">
            <div class="panel panel-primary">
                <header class="panel-heading">
                    Home
                    <span class="tools pull-right">
                        <a class="refresh-box fa fa-repeat" href="javascript:;"></a>
                        <a class="collapse-box fa fa-chevron-down" href="javascript:;"></a>
                        <a class="close-box fa fa-times" href="javascript:;"></a>
                    </span>
                </header>
                <div class="panel-body">
                    <h2>Bienvendio a la plataforma administrativa de CHAU PANZA</h2>
                </div>
            </div>
        </div>
    </div>

</div>

@include('admin.right_sidebar')

@endsection

@section('footer')
    @parent	 
@endsection