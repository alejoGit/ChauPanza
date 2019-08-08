@if (count($errors) > 0)
	<div id="ctnErrorServer" class="alert alert-danger" role="alert">	
		<i class="fa fa-warning" aria-hidden="true"></i>
		&nbsp;
		Ocurrió un error. Porfavor revise los campos
		@if ($errors->any())
		    <div>
		        <ul>
		            @foreach ($errors->all() as $error)
		                <li>{{ $error }}</li>
		            @endforeach
		        </ul>
		    </div>
		@endif
	
	</div>
	<script>
		setTimeout(function(){$("#ctnErrorServer").fadeOut("slow")},10000);						 
	</script>
@endif
@if(session('ok'))
	<div id="ctnResServer" class="alert alert-success" role="alert">
	  	<i class="fa fa-check" aria-hidden="true"></i>
	  	&nbsp;
	  	{{session('ok')}}
	</div>
	
	<script>
		setTimeout(function(){$("#ctnResServer").fadeOut("slow")},10000);						 
	</script>
@endif
@if(session('error'))
	<div id="ctnErrorServer" class="alert alert-danger" role="alert">	
		<i class="fa fa-warning" aria-hidden="true"></i>
		&nbsp;
		{{session('error')}}
	</div>
	<script>
		setTimeout(function(){$("#ctnErrorServer").fadeOut("slow")},10000);						 
	</script>
@endif