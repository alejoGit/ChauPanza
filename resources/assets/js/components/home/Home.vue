<template>
<!-- <h1 class="display-4" v-once>Bienvenido a {{siteName}}</h1> -->
<div>
	<div class="ctn-bg-home">
		
	</div>
	<h2 class="text-center title-home">BIENVENID<span v-if="user.profile.gender == 'M'">O</span><span v-if="user.profile.gender == 'F'">A</span> </h2>
		<h1 class="text-center text-uppercase subtitle-home">
			{{user.profile.name}}
		</h1>
	<div class="columns ctn-buttons">
		<div class="column col-sm-12">

			<div class="columns ctn-plans-welcome" v-bind:class="{ paddingBottomPremium : userIsFree }">
				<div class="column col-sm-10 col-xl-10 col-mx-auto">
					<router-link :to="{name: 'routines'}" tag="div" class="" activeClass="active" exact>
						<div class="app-button">
							<div class="left">
								<img src="/img/rutina-icon.png" alt="Chau Panza">
								VER <br> RUTINAS
							</div>
							<div class="right">
								<i class="icon icon-arrow-right"></i>
							</div>
						</div>
					</router-link>
					<router-link v-if="user.status=='premium'" :to="{name: 'feeding'}" tag="div" class="" activeClass="active" exact>
						<div class="app-button default-cursor">
							<div class="left">
								<img src="/img/guia-alimentacion-icon.png" alt="Chau Panza">
								GUÍA DE <br>
								ALIMENTACIÓN
							</div>
							<div class="right">
								<i class="icon icon-arrow-right"></i>
							</div>
						</div>
					</router-link>
					<router-link :to="{name: 'control'}" tag="div" class="" activeClass="active" exact>
						<div class="app-button default-cursor">
							<div class="left">
								<img src="/img/seguimiento-icon.png" alt="Chau Panza">
								SEGUIMIENTO <br>
								Y CONTROL
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
	<router-link v-if="user.status=='free'" :to="{name: 'plans'}" tag="div" class="btn-premium" activeClass="active" exact>
		PASAR A PLAN PERSONALIZADO
	</router-link>
</div>
</template>
<script>
	import {mapState} from 'vuex'
	import jwtToken from '../../helpers/jwt-token';
	import EventBus from '../../event-bus';
	import {api} from "../../config";
	export default {
		computed: mapState({
			user: state => state.auth
		}),
		data(){
			return {
				// arrVideos:[],
				userIsFree: true,
			}
		},
		created(){
			if(this.user.status == 'premium' && this.user.level <= 0 ){
				this.$router.push({name: 'diagnostic'})
			}
		},
		mounted(){
			EventBus.$emit('EVENT_ROUTE_NAME', {name:this.$route.name})
			if(this.user.status=='premium'){
				this.userIsFree = false
			}
		},
		beforeDestroy(){
			EventBus.$emit('EVENT_ROUTE_NAME', {name:""})
		},
		methods: {
			logout() {
				jwtToken.removeToken()
				this.$store.dispatch('unsetAuthUser')
					.then(() => {
						this.$noty.success('Gracias, te esperamos de vuelta')
						this.$router.push({name: 'login'})
					});
			}
		}
	}
</script>