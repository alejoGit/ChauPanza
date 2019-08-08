<template>
	<div class="container">
		<div class="row">
			<div class="col s12">
				<ul class="tab tab-block">
				  <li class="tab-item">
				    <router-link :to="{name: 'profile'}" class="nav-link" activeClass="active" exact>
						Ver Perfil
						</router-link>
				  </li>
				  <li class="tab-item">
				   	<router-link :to="{name: 'profile.editProfile'}" class="nav-link" activeClass="active" exact>
							Editar Perfil
						</router-link>
				  </li>
				 <!--  <li class="tab-item">
				  	<router-link :to="{name: 'profile.editPassword'}" class="nav-link" activeClass="active" exact>
							Editar Password
					</router-link>
				  </li> -->
				</ul>
			</div>
			<div>
				<transition name="fade" mode="out-in">
					<router-view></router-view>
				</transition>
			</div>
		</div>
	</div>
</template>

<script>
	export default {}
</script>
