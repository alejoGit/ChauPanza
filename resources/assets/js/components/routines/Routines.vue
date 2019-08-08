<template>
<!-- <h1 class="display-4" v-once>Bienvenido a {{siteName}}</h1> -->
<div>
	<div class="columns">
		<div class="py-2 column col-sm-10 col-xl-10 col-mx-auto">	
			<h1 class="py-2 text-center text-uppercase subtitle-home">
				RUTINAS
			</h1>
		</div>
	</div>
	<div class="columns ctn-buttons">
		<div class="column col-sm-12">
			<div class="columns ctn-plans-welcome">
				<div class="column col-sm-10 col-xl-10 col-mx-auto">
					<div v-for="routine in routines" @click="onClickRoutine(routine)">
						<!-- <router-link  :to="{name: 'routine', params: {name: routine.name } }"  tag="div" class="" activeClass="active" exact> -->
							<div class="app-button">
								<div class="left">
									<img src="/img/play-icon.png" alt="Chau Panza">
									{{routine.name}} 
								</div>
								<div class="right">
									<i class="icon icon-arrow-right"></i>
								</div>
							</div>
						<!-- </router-link> -->
					</div>
				</div>
			</div>
		</div>
	</div>
	<loading v-if="loading" message='Cargando Rutinas ...'></loading>
</div>
</template>
<script>
	import {mapState} from 'vuex'
	import jwtToken from '../../helpers/jwt-token'
	// import EventBus from '../../event-bus';
	import {api} from "../../config"
	import Loading from './../loading/Loading.vue' 
	import {mapActions} from "vuex"
	export default {
		components: {
			'loading': Loading
		},
		computed: mapState({
			currentRoutine: state => state.currentRoutine
		}),
		data() {
			return {
				loading: false,
				routines:[],
			}
		},
		created(){
			// EventBus.$emit('EVENT_ROUTE_NAME', {name:this.$route.name});
			this.loading= true
			axios.get(api.getRoutines).then(res => {
				console.log(res.data)
				this.loading= false
				this.routines = res.data.routines
			})
			.catch(err => {
				console.log(err)
				this.loading= false
			});
		},
		/*beforeDestroy(){
			EventBus.$emit('EVENT_ROUTE_NAME', {name:""});
		},*/
		methods: {
			...mapActions([
				'setCurrentRoutine'
			]),
			onClickRoutine(routine){
				let objAux = {id:routine.id,name:routine.name, video:routine.video}
				this.setCurrentRoutine(objAux)
				this.$router.push({name: 'routine'});
				//console.log(objAux)
				
			},
		}
	}
</script>