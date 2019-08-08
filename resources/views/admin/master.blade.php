<!DOCTYPE html>
<html lang="es">
	<head>
		@section('head')
		<title>ChauPanza - @yield('title')</title>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta name="description" content="" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<!-- <link rel="icon" type="image/png" href="{{ asset('favicon.png') }}" /> -->
		<!-- <link rel="apple-touch-icon" href="{{ asset('assets/img/iconapple.png') }}"> -->
		<link rel="stylesheet" href="{{ mix('css/admin.css') }}">
		<!-- CSRF Token -->
    	<meta name="csrf-token" content="{{ csrf_token() }}">
   
		@show
	</head>
	<body>
		<div id="ui" class="ui">
		@include('admin.header')
		@include('admin.sidebar')
		<!--main content start-->
		<div id="content" class="ui-content">
    		<div class="ui-content-body">
        	@include('admin.notifications')
			@yield('content')	
			{{-- @include('admin.right_sidebar') --}}
			<div class="ctn-loading">
				<div class="tbl">
					<div class="tcc">
						<h2>Loading...</h2>
					</div>
				</div>
			</div>
		    </div>
		</div>
		<!--main content end-->
		<script src="{{ mix('js/manifest.js') }}"></script>
        <script src="{{ mix('js/vendor.js') }}"></script>
        <!-- <script src="{{ mix('js/app.js') }}"></script> -->
		<script type="text/javascript" src="{{ mix('js/admin.js') }}"></script>
		<footer class="footer">
			@section('footer') 
			<script>
				$(document).ready(function(){
					$(".li"+"@yield('title')").addClass("active");
					var submitsForm   = $(".submit-form");
					var ctnLoading = $(".ctn-loading")
					submitsForm.on("click",function(e){
				    	var self = $(this);
				    	var formAux = self.parents(".form-loading");
		    			if(formAux.valid()){
		    				ctnLoading.fadeIn("fast");
		    			}
		    		});
				});
			</script>
			 <div id="footer" class="ui-footer">
                2019 &copy; Alejandro Manrique
            </div>		
			@show
		</footer>
		</div>
	</body>
</html>


