<!--header start-->
<header id="header" class="ui-header">

    <div class="navbar-header">
        <!--logo start-->
        <a href="/" class="navbar-brand">
            <span class="logo"><img style="height: 100%" src="/img/logo-chaupanza.png" alt="ChauPanza"/></span>
            <span class="logo-compact"><img style="    width: 100%;" src="/favicon.png" alt="ChauPanza"/></span>
        </a>
        <!--logo end-->
    </div>

    <!-- <div class="search-dropdown dropdown pull-right visible-xs">
        <button type="button" class="btn dropdown-toggle" data-toggle="dropdown" aria-expanded="true"><i class="fa fa-search"></i></button>
        <div class="dropdown-menu">
            <form action="">
                <input class="form-control" placeholder="Search here..." type="text">
            </form>
        </div>
    </div> -->

    <div class="navbar-collapse nav-responsive-disabled">

        <!--toggle buttons start-->
        <ul class="nav navbar-nav">
            <li>
                <a class="toggle-btn" data-toggle="ui-nav" href="">
                    <i class="fa fa-bars"></i>
                </a>
            </li>
        </ul>
        <!-- toggle buttons end -->

        <!--search start-->
        <form class="search-content hidden-xs" action="">
           <!--  <button type="submit" name="search" class="btn srch-btn">
                <i class="fa fa-search"></i>
            </button>
            <input type="text" class="form-control" name="keyword" placeholder="Search here..."> -->
        </form>
        <!--search end-->

        <!--notification start-->
        <ul class="nav navbar-nav navbar-right">
           

            <li class="dropdown dropdown-usermenu">
                <a href="#" class=" dropdown-toggle" data-toggle="dropdown" aria-expanded="true">
                    <div class="user-avatar"><img src="/imgs/a0.jpg" alt="..."></div>
                    <span class="hidden-sm hidden-xs"> @auth {{\Auth::user()->email}} @endauth</span>
                    <!--<i class="fa fa-angle-down"></i>-->
                    <span class="caret hidden-sm hidden-xs"></span>
                </a>
                <ul class="dropdown-menu dropdown-menu-usermenu pull-right">
                    <li><a href="#"><i class="fa fa-cogs"></i>  Settings</a></li>
                    <li><a href="#"><i class="fa fa-user"></i>  Profile</a></li>
                    <li><a href="#"><i class="fa fa-commenting-o"></i>  Feedback</a></li>
                    <li><a href="#"><i class="fa fa-life-ring"></i>  Help</a></li>
                    <li class="divider"></li>
                    <li>
                        <a href=""
                            onclick="event.preventDefault();
                                     document.getElementById('logout-form').submit();">
                            <i class="fa fa-sign-out"></i> Salir
                        </a>
                        <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                            {{ csrf_field() }}
                        </form>
                    </li>
                </ul>
            </li>

            <!--<li>
                <a data-toggle="ui-aside-right" href=""><i class="glyphicon glyphicon-option-vertical"></i></a>
            </li>-->
        </ul>
        <!--notification end-->

    </div>

</header>
<!--header end