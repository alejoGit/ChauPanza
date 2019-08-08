<template>	
	<div id="mainWrapper">
		<br>
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
		  <li class="step-item" :class="{active:currentStep=='step4'}" @click="onClickStep('step4')">
		    <a  class="tooltip" data-tooltip="Paso 4">4</a>
		  </li>
		</ul>
		<div id="step1" v-show="currentStep =='step1'">
			<h3 class="text-center mt-2">OBJETIVOS PERSONALES</h3>
			<p class="text-center">Marque el/los que corresponda</p>
			<div class="columns">
				<div class="column col-sm-10  col-xl-8 col-mx-auto">
					<div class="form-group">
					  <label class="form-checkbox">
					    <input type="checkbox" v-model="objective1">
					    <i class="form-icon"></i> <b>ESTÉTICO</b>
					    <p>Trabajar y modelar partes del cuerpo</p>
					  </label>
					</div>
					<div class="form-group">
					  <label class="form-checkbox">
					    <input type="checkbox" v-model="objective2">
					    <i class="form-icon"></i> <b>SALUD</b>
					    <p>Realizar actividad para fortalecer la salud</p>
					  </label>
					</div>
					<div class="form-group">
					  <label class="form-checkbox">
					    <input type="checkbox" v-model="objective3">
					    <i class="form-icon"></i> <b>RENDIMINENTO FÍSICO</b>
					    <p>Mejorar el rendimiento físico y resistencia</p>
					  </label>
					</div>
					<div class="form-group py-2 my-2">
						<button @click="onClickNextStep1" class="btn btn-lg btn-primary float-right">CONTINUAR</button>
					</div>
				</div>
			</div>
		</div>
		<div id="step2" v-show="currentStep =='step2'">
			<h3 class="text-center mt-1">OBJETIVO ESTÉTICO</h3>
			
			
			<div class="columns">
				<div class="column col-xl-8 col-mx-auto">
					<h5>Seleccione las zonas a trabajar</h5>
					<div class="form-group" v-for="bodyPart in arrBodyParts">
					  <label class="form-checkbox">
					    <input type="checkbox" v-model="bodyPart.selected" value="true" @change="onChangeCheckboxBodyPart(bodyPart.id)">
					    <i class="form-icon"></i> {{bodyPart.name}}
					  </label>
					</div><!-- 
					<div class="form-group">
					  <label class="form-checkbox">
					    <input type="checkbox">
					    <i class="form-icon"></i> Todos
					  </label>
					</div> -->
					<div class="form-group py-2">
						<button @click="onClickNextStep2" class="btn btn-lg btn-primary float-right">CONTINUAR</button>
					</div>
				</div>
			</div>
		</div>
		<div id="step3" v-show="currentStep =='step3'">
			<div class="columns">
				<div class="column col-sm-12 col-xl-10 col-mx-auto">
					<h3 class="text-center mt-1">OBJETIVO SALUD</h3>
					<p class="text-center">Complete los campos con los resultados de los análisis clínicos</p>
				</div>
			</div>
			<div class="columns">
				<div class="column col-sm-12 col-xl-10 col-mx-auto">
					<table class="table table-striped table-hover">
						<thead>
							<tr>
								<th></th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="itemH in arrHemogram">
								<td>{{itemH.name}}</td>
								<td class="text-center">
									<input class="input-table" type="text" v-model="itemH.value">
								</td>
							</tr>
						</tbody>
					</table>
					<div class="text-right">
						<br>
						<button @click="onClickNextStep3" class="btn btn-lg btn-primary float-right">CONTINUAR</button>
					</div>
				</div>
			</div>
		</div>
		<!-- STEP3 -->
		<div id="step4" v-show="currentStep =='step4'">
			<div class="columns">
				<div class="column col-sm-12 col-xl-10 col-mx-auto">
					<h3 class="text-center mt-1">OBJETIVO RENDIMIENTO FÍSICO</h3>
					<!-- <p class="text-center">Seleccione que desea mejorar</p> -->
				</div>
			</div>
			<div class="columns">
				<div class="column col-sm-12 col-xl-8 col-mx-auto">
					<div class="app-button default-cursor">
						<div class="left left-column">
							<!-- <img src="/img/rutina-icon.png" alt="Chau Panza"> -->
							<b>AUMENTAR V02M</b>
						 	<span>Es la capacidad de absorber la máxima cantidad de oxígeno, transportarlo y utilizarlo durante un determinado tiempo. Esto se traduce en una mejor capacidad de resistir un esfuerzo aeróbico - anaeróbico.</span> 
						</div><!-- 
						<div class="right">
							<i class="icon icon-arrow-right"></i>
						</div> -->
					</div>
					<div class="app-button default-cursor">
						<div class="left left-column">
							<!-- <img src="/img/rutina-icon.png" alt="Chau Panza"> -->
							<b>FORTALECIMIENTO MUSCULAR</b>
							<span>La evolución se medirá con los datos cargados luego de cada rutina</span>
						</div><!-- 
						<div class="right">
							<i class="icon icon-arrow-right"></i>
						</div> -->
					</div>

					<div class="form-group py-2 my-2">
						<button @click="sendObjectives" class="btn btn-lg btn-primary float-right">CONTINUAR</button>
					</div>
				</div>
			</div>
		</div>
		<!-- END STEP3 -->
		<div class="modal" v-bind:class="{active: showModal }" id="modal-id" v-if="currentBodyPart">
			<a href="#close" class="modal-overlay" aria-label="Close"></a>
			<div class="modal-container">
				<div class="modal-header">
					<a @click.prevent="closeModal" href="#close" class="btn btn-clear float-right" aria-label="Close"></a>
					<div class="modal-title h3 text-center">{{currentBodyPart.name}}</div>
					<div class="text-center">Marque las zonas específicas a trabajar</div>
					<div class="text-center">
						<div v-for="i in currentBodyPart.partsNumber" class="form-group d-inline-block">
						  <label class="form-checkbox">
						    <input type="checkbox">
						    <i class="form-icon"></i> {{arrLetters[i-1]}}
						  </label>
						</div>
					</div>
				</div>
				<div class="modal-body">
					<div class="content">
						<!-- content here -->
						<div class="columns">
							<div class="column col-sm-8  col-xl-5 col-mx-auto text-center">
								<img v-if="user.profile.gender == 'M'"	 width="100%" v-bind:src="currentBodyPart.imgMan">
								<img v-if="user.profile.gender == 'F'"	 width="100%" v-bind:src="currentBodyPart.imgWoman">
							</div>
						</div>
					</div>
				</div>
				<div class="modal-footer">
					<button @click="closeModal" class="btn btn-sm btn-primary float-right">CONTINUAR</button>
				</div>
			</div>
		</div>
		<loading v-if="loading" message='Cargando ...'></loading>
	</div>
</template>


<script>
	import {api} from "../../config";
	import Loading from './../loading/Loading.vue' 
	import {mapState} from 'vuex'
	import jwtToken from "../../helpers/jwt-token";
	import {mapActions} from "vuex";
	import EventBus from '../../event-bus';
	export default {
		components: {
			'loading': Loading
		},
		computed: mapState({
			user: state => state.auth
		}),
		data() {
			return {
				currentStep:'step1',
				objective1: false,
				objective2: false,
				objective3: false,
				showModal:false,
				arrBodyParts:[
					{id:1, name:'Abdomen' , selected:false, value:'abdomen' , partsNumber: 3 , imgMan: '/img/siluetas/abdomen-hombre.png', imgWoman:'/img/siluetas/abdomen-mujer.png' },
					{id:2, name:'Piernas' , selected:false, value:'piernas' , partsNumber: 4 , imgMan: '/img/siluetas/piernas-hombre.png', imgWoman:'/img/siluetas/piernas-mujer.png' },
					{id:3, name:'Glúteos' , selected:false, value:'gluteos' , partsNumber: 2 , imgMan: '/img/siluetas/gluteos-hombre.png', imgWoman:'/img/siluetas/gluteos-mujer.png' },
					{id:4, name:'Espalda' , selected:false, value:'brazos_pecho' , partsNumber: 2 , imgMan: '/img/siluetas/espalda-hombre.png', imgWoman:'/img/siluetas/espalda-mujer.png' },
					{id:5, name:'Pecho' ,   selected:false, value:'brazos_pecho' , partsNumber: 1 , imgMan: '/img/siluetas/pecho-hombre.png', imgWoman:'/img/siluetas/pecho-mujer.png' },
					{id:6, name:'Brazos' ,  selected:false, value:'brazos_pecho' , partsNumber: 3 , imgMan: '/img/siluetas/brazos-hombre.png', imgWoman:'/img/siluetas/brazos-mujer.png' },
				],
				currentBodyPart: null,
				arrLetters:['A','B','C','D','E','F','G'],
				arrHemogram:[
					{id:1, name:'LDL', value:'' },
					{id:1, name:'Triglicéridos', value:'' },
					{id:1, name:'Glucemia am (ayunas)', value:'' },
					{id:1, name:'Hemoglobina Glucosilada', value:'' },
					{id:1, name:'Insulina am (ayunas)', value:'' },
					{id:1, name:'Proteína C Reactiva Ultrasensible', value:'' },
					{id:1, name:'TSH', value:'' },
					{id:1, name:'T4 Libre', value:'' },
					{id:1, name:'T3 Libre', value:'' },
					{id:1, name:'Cortisol am (ayunas)', value:'' },
					{id:1, name:'Leptina', value:'' },
					{id:1, name:'Grehalina', value:'' },
				],
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
					this.currentStep = 'step2'
				}
				if(val=='step3'){
					this.currentStep = 'step3'
				}
				if(val=='step4'){
					this.currentStep = 'step4'
				}
			},
			scrollTo(element) {
			  window.scroll({
			    behavior: 'smooth',
			    left: 0,
			    top: element.offsetTop - 100 
			  });
			},
			getObjectivesValue(){
				let valAux = ""
				if(this.objective1){
					valAux += '1'
				}else{
					valAux += '0'
				}
				if(this.objective2){
					valAux += '1'
				}else{
					valAux += '0'
				}
				if(this.objective3){
					valAux += '1'
				}else{
					valAux += '0'
				}
				return valAux
			},
			sendObjectives(){
				this.loading = true
				let arrPartsAux = []
				for(let i = 0; i<this.arrBodyParts.length; i++){
					if(this.arrBodyParts[i].selected){
						arrPartsAux.push(this.arrBodyParts[i].value)
					}
				}
				arrPartsAux = arrPartsAux.filter(function(item, pos) {
				    return arrPartsAux.indexOf(item) == pos
				})

				let objAux = {
					objectives: this.getObjectivesValue(),
					body_parts: arrPartsAux,
					hemogram: JSON.stringify(this.arrHemogram),
					objective1: this.objective1,
					objective2: this.objective2,
					objective3: this.objective3,
			
				}	
				//console.log(objAux)
				axios.post(api.setObjectives, objAux)
				.then(res => {
					this.$noty.success('Selección de objetivos completada!');
					this.setAuthUser(res.data);
					this.loading = false;
					console.log(res.data)
					this.$router.push({name: 'initialPhotos'});
				})
				.catch(err => {
					
					console.log(err.response);
					 (err.response.data.errors) && this.$noty.error(this.processErrors(err.response.data.errors));
					this.loading = false;
					// (err.response.data.errors)
					// 	? this.setErrors(err.response.data.errors)
					// 	: this.clearErrors();

					
				})
			},
			onClickNextStep1(){
				
				if(this.getObjectivesValue() =='000'){
					this.$noty.error("Porfavor seleccione al menos un objetivo")
				}else{
					if(this.objective1){
						this.currentStep = 'step2'
					}else{
						if(this.objective2){
							this.currentStep = 'step3'
						}else{
							if(this.objective3){
								this.currentStep = 'step4'
							}
						}
					}
					
				}

			},
			validateBodyParts(){
				let count = 0
				for(let i=0; i< this.arrBodyParts.length; i++){
						if(this.arrBodyParts[i].selected)
							count ++
				}
				if(count > 0){
					return true
				}else{
					return false;
				}
			},
			onClickNextStep2(){
				if(this.objective2){
					if(this.validateBodyParts()){
						this.currentStep = 'step3'
					}else{
						this.$noty.error("Seleccione al menos una parte del cuerpo")
					}
				}else{
					if(this.objective3){
						this.currentStep = 'step4'
					}else{
						if(this.validateBodyParts()){
							this.sendObjectives()
						}else{
							this.$noty.error("Seleccione al menos una parte del cuerpo")
						}
					}
				}
			},
			onClickNextStep3(){
				if(this.objective3){
					this.currentStep = 'step4'
				}else{
					this.sendObjectives()
				}
			},
			closeModal(){
				this.showModal = false
				this.currentBodyPart = null
			},
			onChangeCheckboxBodyPart(id){
				this.currentBodyPart = this.arrBodyParts.find(bodyPart => bodyPart.id == id)
				this.showModal = this.currentBodyPart.selected

			},
		}
	}
</script>
