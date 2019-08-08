<template>
	<span>
	<header class="app-header">
		<div class="columns">
			<div class="column col-sm-2 col-md-4">
				<button v-if="showBackButton" @click="onClickBackButton" class="btn btn-primary btn-action btn-lg btn-ham btn-back"><i class="icon icon-arrow-left"></i></button>
			</div>
			<div class="column col-sm-8 col-md-4 text-center">
				<img class="header-logo center" src="/img/logo-chaupanza.png" alt="Chau Panza">
			</div>
			<div class="column col-sm-2 col-md-4">
				<button @click="onClickMenuButton" class="btn btn-primary btn-action btn-lg btn-ham float-right"><i class="icon icon-menu"></i></button>
			</div>
		</div>
	</header>
    <div v-bind:class="{ 'show-menu': showMenu }" class="wrapper-menu" @click="onClickWrapperMenu">
    	<div @click.stop class="content-menu">
    		<div class="ctn-logo-menu">
    			<img src="/img/logo-chaupanza.png" alt="Chau Panza" class="header-logo center">
    		</div>
    		<a href="/perfil"><i class="icon icon-people"></i> &nbsp; MI PERFIL</a>
    		<a href="/rutinas">RUTINAS</a>
    		<a href="/alimentacion">ALIMENTACIÓN</a>
    		<a class="sub-item" href="/alimentacion/guia-alimentacion">Guía de alimentación</a>
    		<a class="sub-item" href="/alimentacion/indicaciones">Indiciaciones</a>
    		<a class="sub-item" href="/alimentacion/prohibidos">Los NO/ Prohibidos</a>
    		<a class="sub-item" href="/alimentacion/porciones">Tus Porciones</a>
    		<a href="/control">SEGUIMIENTO Y CONTROL</a>
    		<a @click.prevent="logout" href="#">Logout</a>
    	</div>
    </div>   
	</span>
</template>

<script>
	import {siteName} from './../../config';
	import {mapGetters} from 'vuex';
	import jwtToken from '../../helpers/jwt-token';
	import EventBus from '../../event-bus';
	export default {
		data() {
			return {
				siteName: siteName,
				showBackButton:true,
				showMenu:false
			}
		},
		mounted () {
			let self = this
		    EventBus.$on('EVENT_ROUTE_NAME', function (payload) {
		       	if(payload.name=='index'|| payload.name=='welcome' || payload.name=='diagnostic' || payload.name=='objectives' || payload.name=='initialPhotos'){
		       		self.showBackButton = false
		       	}else{
		       		self.showBackButton = true
		       	}
		    });
		},
		computed: mapGetters([
			'isLoggedIn'
		]),
		methods: {
		
			logout() {
				jwtToken.removeToken();
				this.$store.dispatch('unsetAuthUser')
					.then(() => {
						this.$noty.success('You are logged out');
						this.$router.push({name: 'login'});
					});
			},
			onClickBackButton(){
				//this.$router.go(-1)
				
				
				if(this.$route.name==='routines' || this.$route.name==='feeding' || this.$route.name==='control'|| this.$route.name==='plans' || this.$route.name==='profile' || this.$route.name==='profile.editProfile'){
					this.$router.push({name: 'index'});
				}
				if(this.$route.name==='routine'){
					this.$router.push({name: 'routines'});
				}
				if(this.$route.name==='qualifyRoutine'){
					this.$router.push({name: 'routine'});
				}
				if(this.$route.name==='feedingGuide' || this.$route.name==='feedingIndications' || this.$route.name==='feedingForbidden' || this.$route.name==='feedingPortions'){
					this.$router.push({name: 'feeding'});
				}
				if(this.$route.name==='feedingSingle' ){
					this.$router.push({name: 'feedingGuide'});
				}
				if(this.$route.name==='controlFeeding' || this.$route.name==='controlRoutines' || this.$route.name==='controlBoard' || this.$route.name==='controlHemogram'){
					this.$router.push({name: 'control'});
				}
				if(this.$route.name==='controlPhotos'){
					this.$router.push({name: 'controlBoard'});
				}
				if(this.$route.name==='uploadPhoto'){
					this.$router.push({name: 'controlPhotos'});
				}

			},
			onClickMenuButton(){
				this.showMenu = true
			},
			onClickWrapperMenu(){
				this.showMenu = false
			}
		}
	}
</script>
