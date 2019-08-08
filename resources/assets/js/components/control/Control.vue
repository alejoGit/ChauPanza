<template>
<!-- <h1 class="display-4" v-once>Bienvenido a {{siteName}}</h1> -->
<div>
	
	<div class="columns ctn-buttons">
		<div class="column col-sm-12">
			<h1 class="text-center text-uppercase">
			{{user.profile.name}}
			</h1>
			<h4 class="text-center">Bienvenido(a) a tu panel de seguimiento y control </h4>
			
			<div class="columns ctn-plans-welcome">
				<div class="column col-sm-10 col-xl-10 col-mx-auto">
					<router-link :to="{name: 'controlFeeding'}" tag="div" class="" activeClass="active" exact>
						<div class="app-button">
							<div class="left">
								<img src="/img/seguimiento/control-comidas-icon.png" alt="Icon">
								CONTROL <br> DE COMIDAS
							</div>
							<div class="right">
								<i class="icon icon-arrow-right"></i>
							</div>
						</div>
					</router-link>
					<router-link :to="{name: 'controlRoutines'}" tag="div" class="" activeClass="active" exact>
						<div class="app-button">
							<div class="left">
								<img src="/img/seguimiento/control-rutinas-icon.png" alt="Icon">
								CONTROL <br>
								DE RUTINAS
							</div>
							<div class="right">
								<i class="icon icon-arrow-right"></i>
							</div>
						</div>
					</router-link>
					<router-link v-if="user.status==='premium'" :to="{name: 'controlBoard'}" tag="div" class="" activeClass="active" exact
					>
						<div class="app-button">
							<div class="left">
								<img src="/img/seguimiento/tablero-icon.png" alt="Icon">
								TABLERO<br>
								DE EVOLUCIÓN
							</div>
							<div class="right">
								<i class="icon icon-arrow-right"></i>
							</div>
						</div>
					</router-link>
					<router-link  v-if="user.status==='premium'" :to="{name: 'controlHemogram'}" tag="div" class="" activeClass="active" exact>
						<div class="app-button">
							<div class="left">
								<img src="/img/seguimiento/hemograma-icon.png" alt="Icon">
								HEMOGRAMA
							</div>
							<div class="right">
								<i class="icon icon-arrow-right"></i>
							</div>
						</div>
					</router-link>
				</div>
			</div>
		</div>
	</div>
</div>
</template>
<script>
	import {mapState} from 'vuex'
	import jwtToken from '../../helpers/jwt-token';
	export default {
		computed: mapState({
			user: state => state.auth
		}),
		methods: {
			logout() {
				jwtToken.removeToken();
				this.$store.dispatch('unsetAuthUser')
					.then(() => {
						this.$noty.success('You are logged out');
						this.$router.push({name: 'login'});
					});
			}
		}
	}
</script>