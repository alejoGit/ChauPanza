<!--sidebar start-->
<aside id="aside" class="ui-aside">
    <ul class="nav" ui-nav>
        <li class="nav-head">
            <h5 class="nav-title text-uppercase light-txt">Navigation</h5>
        </li>
       
        <li>
            <a class="aMainRoutines" href=""><i class="fa fa-play-circle"></i><span>Rutinas</span><i class="fa fa-angle-right pull-right"></i></a>
            <ul class="nav nav-sub">
                <li class="liRutinas"><a href="/admin/rutinas"><span>Listado de rutinas</span></a></li>
                <li class="liVideos"><a href="/admin/rutinas/crear"><span>Crear rutina</span></a></li>
            </ul>
        </li>

        <li>
            <a class="aMainFeeding" href=""><i class="fa fa-cutlery"></i><span>Alimentación</span><i class="fa fa-angle-right pull-right"></i></a>
            <ul class="nav nav-sub">
                <li class="liAlimentos"><a href="/admin/alimentos"><span>Listado de alimentos</span></a></li>
                <li class="liCrearAlimento"><a href="/admin/alimentos/crear"><span>Crear alimento</span></a></li>
                <li class="liIndicaciones"><a href="/admin/alimentacion/indicaciones/P"><span>
                Indicaciones (P)</span></a></li>
                <li class="liIndicaciones"><a href="/admin/alimentacion/indicaciones/S"><span>Indicaciones (S)</span></a></li>
                <li class="liProhibidos"><a href="/admin/alimentacion/prohibidos"><span>Prohibidos</span></a></li>
            </ul>
        </li>
      
        <li>
            <a class="aMainUsers" href=""><i class="fa fa-users"></i><span>Usuarios</span><i class="fa fa-angle-right pull-right"></i></a>
            <ul class="nav nav-sub">
                <li class="liSocios"><a href="/admin/socios"><span>Listado de socios</span></a></li>
                <li class="liUsuarios"><a href="/admin/usuarios"><span>Listado de usuarios</span></a></li>
                @if(Auth::user()->rol =='root' || Auth::user()->rol =='admin' )
                <li class="liCrearUsuario"><a href="/admin/usuarios/crear"><span>Crear usuario / socio</span></a></li>
                @endif
            </ul>
        </li>
        
        <li>
            <a href=""
                onclick="event.preventDefault();
                         document.getElementById('logout-form-sidebar').submit();">
                <i class="fa fa-sign-out"></i> Salir
            </a>
            <form id="logout-form-sidebar" action="{{ route('logout') }}" method="POST" style="display: none;">
                {{ csrf_field() }}
            </form>
        </li>
       

        
    </ul>
</aside>
<!--sidebar end-->