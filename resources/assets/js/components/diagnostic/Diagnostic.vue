<template>	
	<div id="mainWrapper">
		<br>
		<h3 class="text-center mt-2">DIAGNOSTICO INICIAL</h3>
		<ul class="step ctn-steps">
		  <li class="step-item" :class="{active:currentStep=='step1'}" @click="onClickStep('step1')">
		    <a  class="tooltip" data-tooltip="Paso 1">1</a>
		  </li>
		  <li class="step-item" :class="{active:currentStep=='step2'}" @click="onClickStep('step2')">
		    <a  class="tooltip" data-tooltip="Paso 2">2</a>
		  </li>
		  <li class="step-item" :class="{active:currentStep=='step3'}" @click="onClickStep('step3')">
		    <a  class="tooltip" data-tooltip="Paso 3">3</a>
		  </li>
		</ul>
		<div id="step1" v-show="currentStep =='step1'">
			<h3 class="text-center mt-1">Antecedenctes de salud</h3>
			<div class="columns">
				<div class="column col-sm-10  col-xl-8 col-mx-auto">
					<table class="table table-striped">
						<tbody>
							<tr v-for="antecedent in arrHealthHistory">
								<td>{{antecedent.name}}</td>
								<td>
									<div class="form-group">
										<label class="form-radio form-inline">
											<input type="radio" v-bind:name="antecedent.name" value="no" v-model="antecedent.value"><i class="form-icon"></i> No
										</label>
										<label class="form-radio form-inline">
											<input type="radio" v-bind:name="antecedent.name" value="si" v-model="antecedent.value"><i class="form-icon"></i> Si
										</label>
									</div>
								</td>
							</tr>
						</tbody>
					</table>
					<div class="form-group py-2 my-2">
						<button @click="onClickStep('step2')" class="btn btn-lg btn-primary float-right">CONTINUAR</button>
					</div>
				</div>
			</div>
		</div>
		<div id="step2" v-show="currentStep =='step2'">
			<h3 class="text-center mt-1">Condición Física Actual</h3>
			<div class="columns">
				<div class="column col-xl-8 col-mx-auto">
					<div class="ctn-cheboxes">
						<div class="form-group">
						  <label class="form-radio">
						    <input type="radio" v-model="physicalCondition" name="physicalCondition" value="baja"><i class="form-icon"></i><b>BAJA</b>
						    <p>Sedentario, no hago actividad física actualmente.</p>
						  </label>
						  <label class="form-radio">
						    <input type="radio" v-model="physicalCondition" name="physicalCondition" value="media"><i class="form-icon"></i> <b>MEDIA</b>
						    <p>Esporádicamente hago ejercicio (1 vez por semana hago algún tipo de actividad física).</p>
						  </label>
						  <label class="form-radio">
						    <input type="radio" v-model="physicalCondition" name="physicalCondition" value="alta"><i class="form-icon"></i> <b>ALTA</b>
						    <p>Entreno más de 2 veces por semana.</p>
						  </label>
						</div>
					</div>
					<div class="form-group py-2">
						<button @click="onClickStep('step3')" class="btn btn-lg btn-primary float-right">CONTINUAR</button>
					</div>
				</div>
			</div>
		</div>
		<div id="step3" v-show="currentStep =='step3'">
			<h3 class="text-center mt-2">Cuestionario Personal</h3>
			<div class="columns">
				<div class="column col-sm-10  col-xl-8 col-mx-auto">
					<div v-for="(question, i) in arrQuestions" class="form-group">
						<label v-bind:id="'question_'+question.id" class="form-label"><b>{{question.question}}</b></label>
						<label class="form-radio">
							<input type="radio" v-model="answers[question.id]" v-bind:name="'question'+question.id" value="A">
							<i class="form-icon"></i> {{question.optionA}}
						</label>
						<label class="form-radio">
							<input type="radio" v-model="answers[question.id]" v-bind:name="'question'+question.id" value="B">
							<i class="form-icon"></i> {{question.optionB}}
						</label>
						<hr>
					</div>
					<div class="form-group py-2">
						<button @click="onClickStep('step4')" class="btn btn-lg btn-primary float-right">CONTINUAR</button>
					</div>
				</div>
			</div>
		</div>
		<loading v-if="loading" message='Cargando ...'></loading>
	</div>
	


</template>


<script>
	import {api} from "../../config";
	import Loading from './../loading/Loading.vue' 
	
	import jwtToken from "../../helpers/jwt-token";
	import {mapActions} from "vuex";
	import EventBus from '../../event-bus';
	export default {
		components: {
			'loading': Loading
		},
		data() {
			return {
				currentStep:'step1',
				arrHealthHistory: [
					{id:1, name:"HIPERTENSIÓN", value:'no'},
					{id:2, name:"HIPOTIROIDISMO", value:'no'},
					{id:3, name:"SARCOPENIA", value:'no'},
					{id:4, name:"DIABETES TIPO II", value:'no'},
					{id:5, name:"HIPERCOLESTEROLEMIA", value:'no'},
					{id:6, name:"OBESIDAD", value:'no'},
					{id:7, name:"HIPERGLUCEMIA", value:'no'},
					{id:8, name:"HÍGADO GRASO", value:'no'},
					{id:9, name:"POLIQUISTOSIS", value:'no'},
					{id:10, name:"HIPERINSULINEMIA", value:'no'},
					{id:11, name:"MENOPAUSIA", value:'no'},
					{id:12, name:"COLON IRRITABLE", value:'no'},
					{id:13, name:"INFLAMACIÓN", value:'no'},

				],
				physicalCondition: null,
				arrQuestions:[
					{
						id:1,
						question:"ENTRENANDO: Durante el ejercicio",
						optionA: "Tiene dificultades para ejercitar, suele frenar y descansar durante el entrenamiento",
						optionB: "No tiene dificultades, lo disfruta",
					},
					{
						id:2,
						question:"LUEGO DE ENTRENAR",
						optionA: "Se siente cansado, con pocas energías",
						optionB: "Se siente renovado, con energías",
					},
					{
						id:3,
						question:"DIGESTIÓN: ¿Como suele digerir la comida?",
						optionA: "No suele tener problemas para digerir la comida, y puedo comer en cualquier horario",
						optionB: "Suele tener digestión lenta, y si come mucho por la noche, le suele caer mal",
					},
					{
						id:4,
						question:"ALIMENTACIÓN: que prefiere? Elija una opción",
						optionA: "Alimentos salados, condimentados",
						optionB: "Dulces, alimentos con azúcar",
					},
					{
						id:5,
						question:"GRASAS SATURADAS: Como se siente frente a una ingesta de grasas saturadas (papas fritas, panceta, hamburguesas, etc).",
						optionA: "Las tolera sin problemas",
						optionB: "No las tolera",
					},
					{
						id:6,
						question:"CALIDAD DE SUEÑO",
						optionA: "Duerme profundamente",
						optionB: "Suele tener sueño liviano",
					},
					{
						id:7,
						question:"CLIMA",
						optionA: "Prefiere el clima frío. No aguanta mucho el calor",
						optionB: " Prefiere el calor. No aguanta demasiado el frío",
					},
					{
						id:8,
						question:"BAÑO",
						optionA: "Sufre de tránsito lento, estreñimiento, etc",
						optionB: "No tienen problemas. Puede ir una vez o más al día",
					},
				],
				answers: {'1':null,'2':null,'3':null,'4':null,'5':null,'6':null,'7':null,'8':null},
				loading: false,
			}
		},
		mounted() { 
			EventBus.$emit('EVENT_ROUTE_NAME', {name:this.$route.name});
		    //EJEMPLO CARGAR LIBRERIA EXTERNA (fuera de laravel mix)
		    let momentScript = document.createElement('script')
		    momentScript.setAttribute('src', '/js/moment.js')
		    document.head.appendChild(momentScript)
		     
		},
		beforeMounted(){
			Vue.use(VeeValidate); 
		},
		methods:{
			...mapActions([
				'setAuthUser'
			]),
			onClickStep(val){
				if(val=='step1'){
					this.currentStep = 'step1'
				}
				if(val=='step2'){
					if(this.currentStep=='step1'){
						this.validateStep1()		
					}
					if(this.currentStep=='step3'){
						this.currentStep = 'step2'
					}
				}
				if(val=='step3'){
					if(this.currentStep=='step2'){
						this.validateStep2()
					}
				}
				if(val=='step4'){
					if(this.currentStep=='step3'){
						this.validateStep3()		
					}
				}
			},
			scrollTo(element) {
			  window.scroll({
			    behavior: 'smooth',
			    left: 0,
			    top: element.offsetTop - 100 
			  });
			},
			validateStep1(){
				let self = this
				self.currentStep = 'step2'

			},
			validateStep2(){
				let self = this
				if(!this.physicalCondition){
					this.$noty.error("Porfavor ingrese su condición fisica")
				}else{
					self.currentStep = 'step3'
				}
			},
			validateStep3(){
				let self = this
				for(let key in this.answers){
					let answerAux = this.answers[key]
					if( answerAux == null ){
						let element = document.getElementById('question_'+key)
						this.scrollTo(element)
						this.$noty.error("Todas las preguntas son obligatorias")
						return
					}	
				}
				console.log(JSON.stringify(this.arrHealthHistory))
				console.log(JSON.stringify(this.physicalCondition))
				console.log(JSON.stringify(this.answers))
				
				this.loading = true
				let objAux = {
					health_history: JSON.stringify(this.arrHealthHistory),
					physical_condition: this.physicalCondition,
					answers: JSON.stringify(this.answers),

				}	
				axios.post(api.setDiagnostic, objAux)
				.then(res => {
					this.$noty.success('Diagnostico Exitoso!');
					this.loading = false;
					//console.log(res.data)
					this.$router.push({name: 'objectives'});
				})
				.catch(err => {
					
					console.log(err.response);
					 (err.response.data.errors) && this.$noty.error(this.processErrors(err.response.data.errors));
					this.loading = false;
					// (err.response.data.errors)
					// 	? this.setErrors(err.response.data.errors)
					// 	: this.clearErrors();

					
				});
			},
		}
	}
</script>
