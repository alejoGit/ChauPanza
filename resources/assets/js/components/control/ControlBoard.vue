<template>
<!-- <h1 class="display-4" v-once>Bienvenido a {{siteName}}</h1> -->
<div>
	<div class="columns">
		<div class="column col-sm-12 col-xl-10 col-mx-auto">
			<h3 class="text-center">SEG. Y CONTROL / ESTADISTICAS</h3>
			<h5 class="text-center">Compará las estadísticas de dos períodos distintos y mirá la evolución en fotos</h5>
			<div class="text-center my-2">
				<a href="#" @click.prevent="onClickModal" class="btn btn-gray">Cargar datos del mes</a>
			</div>
		</div>
	</div>
	<div class="columns">
		<div class="column col-sm-12 col-xl-10 col-mx-auto">
			<table class="table table-striped table-hover">
				<thead>
					<tr>
						<th>PERÍODO</th>
						<th class="text-center">MES 1</th>
						<th class="text-center">
							<div class="wrapper-date no-border">
								<div class="ctn-date">
									<div class="back" @click="onClickBack">
										<i class="icon icon-arrow-left"></i>
									</div>
									<div class="date">MES {{currentMonth}}</div>
									<div class="next" @click="onClickNext">
										<i class="icon icon-arrow-right"></i>
									</div>
								</div>
							</div>
						</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>PESO (KG)</td>
						<td class="text-center">
							<div v-if="controlMonth1">
								{{controlMonth1.peso}}
							</div>
						</td>
						<td class="text-center">
							<div v-if="currentControl">
								{{currentControl.peso}}
							</div>
						</td>
					</tr>
					<tr>
						<td>INDICE CINTURA / CADERA</td>
						<td class="text-center">
							<div v-if="controlMonth1">
								{{controlMonth1.indice_cadera}}
							</div>
						</td>
						<td class="text-center">
							<div v-if="currentControl">
								{{currentControl.indice_cadera}}
							</div>
						</td>
					</tr>
					<tr>
						<td>PERIMETRO ABDOMINAL</td>
						<td class="text-center">
							<div v-if="controlMonth1">
								{{controlMonth1.perimetro_abdominal}}
							</div>
						</td>
						<td class="text-center">
							<div v-if="currentControl">
								{{currentControl.perimetro_abdominal}}
							</div>
						</td>
					</tr>
					<tr>
						<td>COMO ME SENTÍ (PROMEDIO MENSUAL)</td>
						<td class="text-center">
							{{routineControlMonth1 | getScoreName}}
						</td>
						<td class="text-center">
							{{currentRoutineControl | getScoreName}}
						</td>
					</tr>
					<tr>
						<td>COMIDAS COMPLETADAS</td>
						<td class="text-center">
							{{foodsControlMonth1}} %
						</td>
						<td class="text-center">
							{{currentFoodControl}} %
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>

	<div class="columns">
		<div class="column col-sm-12 col-xl-10 col-mx-auto">
			<br>
			<router-link :to="{name: 'controlPhotos'}" tag="button" class="btn btn-primary btn-block" activeClass="active" exact
					>ANTES Y DESPUES EN FOTOS</router-link>
			<div class="ctn-frase">
				<p>
					<img class="d-inline-block" src="/img/comillas.png" alt="Frase"> Cuando sientas que vas a rendirte, piensa en proque emepezaste
				</p>
			</div>
			
			
		</div>
	</div>
	
	<div class="modal" v-bind:class="{active: showModal }" id="modal-id">
		<a @click="onClickCloseModal" class="modal-overlay" aria-label="Close"></a>
		<div class="modal-container" >
			<div class="modal-header">
				<a @click="onClickCloseModal" class="btn btn-clear float-right" aria-label="Close"></a>
				<br><br>
				<h3 class="modal-title h3 text-center text-capitalize no-margin">INGRESAR DATOS DEL MES</h3>
				
				<div class="form-group ctn-form-modal-control">
					<select  class="form-select"" name="" id="" @change="onChangeSelectMonth">
						<option value="0">Seleccione el mes</option>
						<option v-for="i in user.past_months" v-bind:value="i">Mes {{i}}</option>
					</select>
				</div>
			</div>
			<div class="modal-body">
				<div class="content text-center">
				<!-- content here -->
					<table class="table table-striped table-hover">
						<!-- <thead>
							<tr>
								<th>PERÍODO</th>
								<th class="text-center">MES 1</th>
							</tr>
						</thead> -->
						<tbody>
							<tr>
								<td>PESO (KG)</td>
								<td class="text-center">
									<input id="inputPeso" class="input-table" type="number" v-bind:value="currentControlSelect.peso">
								</td>
							</tr>
							<tr>
								<td>INDICE CINTURA / CADERA</td>
								<td class="text-center">
									<input id="inputIndiceCadera" class="input-table" type="number" v-bind:value="currentControlSelect.indice_cadera">
									
								</td>
								
							</tr>
							<tr>
								<td>PERIMETRO ABDOMINAL</td>
								<td class="text-center">
									<input id="inputPerimetroAbdominal" class="input-table" type="number" v-bind:value="currentControlSelect.perimetro_abdominal">
								</td>
							</tr>
							<!-- <tr>
								<td>IMC (INDICE MASA CORPORAL)</td>
								<td class="text-center">
									<input class="input-table" type="text">
								</td>
								
							</tr> -->
						</tbody>
					</table>
					<br><br>
					<div class="text-center">
						<button class="btn btn-lg btn-primary" @click="onClickSaveControls">GUARDAR</button>	
					</div>
				</div>
			</div>
			<div class="modal-footer">
				<!-- <button @click="onClickCloseModal" class="btn btn-primary">Cerrar</button> -->
			</div>
		</div>
	</div>
	<loading v-if="loading" message='Cargando Información ...'></loading>
	
</div>

</template>
<script>
	import {mapState} from 'vuex'
	import {api} from "../../config"
	import Loading from './../loading/Loading.vue' 
	export default {
		components: {
			'loading': Loading
		},
		computed: mapState({
			user: state => state.auth
		}),
		data(){
			return{
				loading: false,
				showModal: false,
				currentMonth:2,
				arrControls:[],
				controlMonth1:null,
				currentControl:{},
				currentMonthSelect:0,
				currentControlSelect:{},

				arrRoutineControls:[],
				routineControlMonth1:null,
				currentRoutineControl:null,

				arrFoodsControls:[],
				foodsControlMonth1:null,
				currentFoodControl:null,
				inputPeso: null,
				inputIndiceCadera:  null,
				inputPerimetroAbdominal: null,
			}
		},
		created(){
			this.loading= true
			axios.get(api.getControls).then(res => {
				this.loading= false
				this.arrControls = res.data.controls
				this.arrRoutineControls = res.data.routineControls
				this.arrFoodsControls = res.data.foodControls

				console.log(res.data)

				this.controlMonth1 = this.findControl(1)
				this.currentControl = this.findControl(2)

				this.routineControlMonth1 = this.arrRoutineControls[0]
				this.currentRoutineControl = this.arrRoutineControls[1]

				this.foodsControlMonth1 = this.arrFoodsControls[0]
				this.currentFoodControl = this.arrFoodsControls[1]


			})
			.catch(err => {
				console.log(err)
				this.loading= false
			})

			
		},
		mounted(){
			this.inputPeso = document.getElementById('inputPeso')
			this.inputIndiceCadera = document.getElementById('inputIndiceCadera')
			this.inputPerimetroAbdominal = document.getElementById('inputPerimetroAbdominal')
		},
		methods: {
			onClickModal(){
				this.showModal = true
			},
			onClickCloseModal(){
				this.showModal = false
			},
			onClickNext(){

				if(this.currentMonth < this.user.past_months  ){
					this.currentMonth++
					this.currentControl = this.findControl(this.currentMonth)
					this.currentRoutineControl = this.arrRoutineControls[this.currentMonth -1 ]
					this.currentFoodControl = this.arrFoodsControls[this.currentMonth -1 ]
				}
			},
			onClickBack(){
				if(this.currentMonth >2 ){
					this.currentMonth--
					this.currentControl = this.findControl(this.currentMonth)
					this.currentRoutineControl = this.arrRoutineControls[this.currentMonth -1 ]
					this.currentFoodControl = this.arrFoodsControls[this.currentMonth -1 ]
					//alert(JSON.stringify(this.currentPhotos))

				}
			},
			findControl(month){
				let controlAux = this.arrControls.find(function(control) {
				  return control.month === month;
				})

				if( controlAux){
					return controlAux
				}else{
					return {}
				}
				
			},
			onChangeSelectMonth(event){
				this.currentMonthSelect = parseInt(event.target.value)
				this.currentControlSelect = this.findControl(this.currentMonthSelect)
				
			},
			isBlank: function (str) {
                return (!str || /^\s*$/.test(str));
            },
			onClickSaveControls(){
				if(this.currentMonthSelect <=0){
					alert('Porfavor seleccione el mes')
					return
				}
				
		
				if(this.inputPeso.value !== undefined && this.inputIndiceCadera.value !== undefined && !this.isBlank(this.inputPeso.value) && !this.isBlank(this.inputIndiceCadera.value) ){
					this.loading = true
			        let postData = {
			        	month: this.currentMonthSelect,
			        	peso: this.inputPeso.value,
			        	indice_cadera: this.inputIndiceCadera.value,
			        	perimetro_abdominal: this.inputPerimetroAbdominal.value,
			        }   
					axios.post(api.setControls, postData)
						.then(res => {
							this.loading = false
						
							this.$noty.success('Se guardó la Información correctamente!');
							setTimeout(function(){ 
								window.location.reload()
							}, 2000)
							

							
							this.showModal = false
							// this.$router.push({name: 'index'});
						})
						.catch(err => {

							(err.response.data.error) && this.$noty.error(err.response.data.error);

							(err.response.data.errors)
								? this.setErrors(err.response.data.errors)
								: this.clearErrors();

							this.loading = false;
						});
				}else{
					alert("Todos los campos son obligatorios")
					return
				}
			}
		},
		filters: {
		  getScoreName: function (value) {
		  		let scoreNames = [' ','Muy Fácil','Fácil','Moderada','Algo Dura','Dura','Muy Dura','Máxima']
		  		value = parseInt(value)
		   		return scoreNames[value]
		  }
		}
	}
</script>