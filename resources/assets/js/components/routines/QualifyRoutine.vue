<template>

	<div id="mainWrapper">
		<div class="ctn-qualify-routine">
			<h2>RUTINA COMPLETADA!</h2>
			<h4>Marque como sintió que fue la rutina:</h4>
			<div class="ctn-cheboxes">
				<div class="form-group">
				  <label class="form-radio">
				    <input type="radio" v-model="score" name="score" value="1"><i class="form-icon"></i> Muy Fácil
				  </label>
				  <label class="form-radio">
				    <input type="radio" v-model="score" name="score" value="2"><i class="form-icon"></i> Fácil
				  </label>
				  <label class="form-radio">
				    <input type="radio" v-model="score" name="score" value="3"><i class="form-icon"></i> Moderada
				  </label>
				  <label class="form-radio">
				    <input type="radio" v-model="score" name="score" value="4"><i class="form-icon"></i> Algo Dura
				  </label>
				  <label class="form-radio">
				    <input type="radio" v-model="score" name="score" value="5"><i class="form-icon"></i> Dura
				  </label>
				
				<label class="form-radio">
				    <input type="radio" v-model="score" name="score" value="6"><i class="form-icon"></i> Muy Dura
				  </label>
				  <label class="form-radio">
				    <input type="radio" v-model="score" name="score" value="7"><i class="form-icon"></i> Máxima +10
				  </label>
				</div>
			</div>
		</div>
		<div class="columns">
			<div class="column col-sm-10 col-xl-10 col-mx-auto">
				<div class="ctn-footer-qualify">
					<p>
						<img class="d-inline-block" src="/img/comillas.png" alt="Frase"> Cuando sientas que vas a rendirte, piensa en proque emepezaste
					</p>
					<div>
						<label for="idFrec">Frecuencia Cardiaca</label>
						<br>
						<input v-model="heartRate" type="number" placeholder="PPM">
						<button @click="onClickQualify" class="btn btn-primary float-right">&nbsp;&nbsp;FINALIZAR&nbsp;&nbsp;</button>
					</div>
				</div>
			</div>
		</div>
		<loading v-if="loading" message='Calificando Rutina ...'></loading>
	</div>
</template>

<script>
	import {mapState} from 'vuex'
	import {api} from '../../config'
	import Loading from './../loading/Loading.vue' 
	export default {
		components: {
			'loading': Loading,
		},
		computed: mapState({
			user: state => state.auth,
			currentRoutine: state => state.currentRoutine
		}),
		data(){
			return {
				score:0,
				loading:false,
				heartRate: '',
			}
		},
		methods:{
			onClickQualify(){

				// if(this.heartRate.length<=0){
				// 	this.$noty.error('Porfavor ingresa tu FRECUENCIA CARDIACA');
				// 	return
				// }

				if(this.score==0){
					this.$noty.error('Porfavor selecciona una calificación');
				}else{

					this.loading = true;
			        let postData = {
			        	score: this.score,
			        	routine_id: this.currentRoutine.id,
			        	heart_rate: this.heartRate,
			        }   
					axios.post(api.qualifyRoutine, postData)
						.then(res => {
							this.loading = false;
							
							if(res.data==='ok'){
								this.$noty.success('Se calificó la rutina correctamente!');
							}
							this.$router.push({name: 'index'});
						})
						.catch(err => {

							console.log(err)

							this.loading = false;
						});
			         
				}
				
			},
		},
		mounted(){
			if( !this.currentRoutine.id ){
				this.$router.push({name: 'routines'})
				return
			}
		}
	}
</script>
