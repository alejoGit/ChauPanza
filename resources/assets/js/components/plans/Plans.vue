<template>
<!-- <h1 class="display-4" v-once>Bienvenido a {{siteName}}</h1> -->
<div>
	<div class="columns">
		<div class="column col-sm-10 col-xl-10 col-mx-auto">
			<h1 class="text-center">PLANES PERSONALIZADOS</h1>
			<p class="text-center">Entrenamiento Personalizado <b>+</b> Plan de alimentación adecuado Diagnóstico inicial <b>+</b> Entrenamientos en videos a tiempo real<b>+</b> Plan de alimentación adecuado <b>+</b> Seguimiento mensual <b>+</b> Interconsultas</p>
			
			
			
			<div class="app-button" @click="onClickPlanButton(1)">
				<div class="left">
					<!-- <img src="/img/alimentacion/guia-icon.png" alt="Icon"> -->
					PLAN 3 MESES ($100) 
				</div>
				<div class="right">
					<i class="icon icon-arrow-right"></i>
				</div>
			</div>

			<div class="app-button" @click="onClickPlanButton(2)">
				<div class="left">
					<!-- <img src="/img/alimentacion/guia-icon.png" alt="Icon"> -->
					PLAN 6 MESES ($200) 
				</div>
				<div class="right">
					<i class="icon icon-arrow-right"></i>
				</div>
			</div>

			<div class="app-button" @click="onClickPlanButton(3)">
				<div class="left">
					<!-- <img src="/img/alimentacion/guia-icon.png" alt="Icon"> -->
					PLAN 12 MESES ($300) 
				</div>
				<div class="right">
					<i class="icon icon-arrow-right"></i>
				</div>
			</div>
		
				
		
			
			
			
		</div>
	</div>
	<loading v-if="loading" message='Cargando ...'></loading>
</div>
</template>
<script>
	//import {mapState} from 'vuex'
	import {api} from '../../config'
	import Loading from './../loading/Loading.vue' 
	export default {
		// computed: mapState({
		// 	user: state => state.auth
		// }),
		components: {
			'loading': Loading
		},
		data(){
			return {
				loading:false,
			}
		},
		methods: {
			onClickPlanButton(planId){
				this.loading = true;
			        let postData = {
			        	plan_id: planId
			        }   
				axios.post(api.postUrlUserPlan, postData)
					.then(res => {
						this.loading = false
						//window.location.href = res.data
						if(res.data.status == 'error'){
							console.log("Plan Invalido");
							return
						}
						
						window.location.href =res.data.url
					})
					.catch(err => {

						console.log(err)

						this.loading = false;
					});
			}
		}
	}
</script>