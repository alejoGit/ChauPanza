<template>	
	<!-- <h1 class="display-4" v-once>Bienvenido a {{siteName}}</h1> -->
	<div id="mainWrapper">
		<br>
		<h3 class="text-center mt-2">REGISTRO</h3>
		<ul class="step ctn-steps">
		  <li class="step-item" :class="{active:currentStep=='step1'}" @click="onClickStep('step1')">
		    <a  class="tooltip" data-tooltip="Información personal">Paso 1</a>
		  </li>
		  <li class="step-item" :class="{active:currentStep=='step2'}" @click="onClickStep('step2')">
		    <a  class="tooltip" data-tooltip="Datos de acceso">Paso 2</a>
		  </li>
		  <li class="step-item" :class="{active:currentStep=='step3'}" @click="onClickStep('step3')">
		    <a  class="tooltip" data-tooltip="Terminos y condiciones">Paso 3</a>
		  </li>
		</ul>
		<div id="step1" v-show="currentStep =='step1'">
			<h3 class="text-center mt-1">Información Personal</h3>
			<div class="columns">
				<div class="column col-xl-8 col-mx-auto">
					<div class="columns">
			
						<div class="column col-sm-12 col-6 form-group" :class="{ 'has-error': errors.has('nombre') }">
							<label class="form-label" for="idName" name="name">Nombre</label>
							<input id="idName" name="nombre" v-model="nombre" v-validate="'required|alpha|min:2'"  class="form-input" type="text">
	              			<span v-show="errors.has('nombre')" class="form-input-hint">{{ errors.first('nombre') }}</span>
						</div>
					
					
						<div class="column col-sm-12 col-6 form-group" :class="{ 'has-error': errors.has('apellido') }">
							<label class="form-label" for="idLastName">Apellido</label>
							<input id="idLastName" name="apellido" v-model="apellido" v-validate="'required|alpha|min:2'"  class="form-input" type="text">
	              			<span v-show="errors.has('apellido')" class="form-input-hint">{{ errors.first('apellido') }}</span>
						</div>
						
					</div>
					
					<div class="columns">
						<div class="column col-6 form-group" :class="{ 'has-error': errors.has('sexo') }">
							<label class="form-label" for="idLastName">Sexo</label>
							<select v-validate="'required'" name="sexo" v-model="sexo" class="form-select">
								<option value="">Seleccione una opción</option>
								<option value="M">Masculino</option>
								<option value="F">Femenino</option>
							</select>
						</div>
					</div>
					
					<div class="form-group">
						<label class="form-label" for="idBirthdate">Fecha Nacimiento</label>
							<div class="columns">
							<div class="column col-3 form-group" :class="{ 'has-error': errors.has('dia') }">
								<input v-on:focus="onChangeDate" v-model="dia" name="dia" v-validate="'required|max_value:31|min_value:1'" class="form-input" type="text" placeholder="Día">
							</div>
							<div class="column col-5 form-group">
								<select v-model="mes" class="form-select">
									<option value="01">Enero</option>
									<option value="02">Febrero</option>
									<option value="03">Marzo</option>
									<option value="04">Abril</option>
									<option value="05">Mayo</option>
									<option value="06">Junio</option>
									<option value="07">Julio</option>
									<option value="08">Agosto</option>
									<option value="09">Septiembre</option>
									<option value="10">Octubre</option>
									<option value="11">Noviembre</option>
									<option value="12">Diciembre</option>
								</select>
							</div>
							<div class="column col-4" :class="{ 'has-error': errors.has('año') }">
								<input v-model="año" name="año" v-validate="'required|max_value:2010|min_value:1920'" class="form-input" type="text" placeholder="Año">
							</div>
							</div>
							<div :class="{ 'has-error': errors.has('dia') }">
								<span v-show="errors.has('dia')" class="form-input-hint">{{ errors.first('dia') }}</span>
							</div>
							<div :class="{ 'has-error': errors.has('año') }">
								<span v-show="errors.has('año')" class="form-input-hint">{{ errors.first('año') }}</span>
							</div>
							<div class="has-error" v-show="showInvalidDateError">
								<span class="form-input-hint">La fecha ingresada no es valida</span>
							</div>
						<!-- <input id="idBirthdate" name="fechaNacimiento" v-model="fechaNacimiento" v-validate="'required|date_format:YYYY-MM-DD'"  class="form-input" type="text"> -->
              			<span v-show="errors.has('fechaNacimiento')" class="form-input-hint">{{ errors.first('fechaNacimiento') }}</span>
					</div>
					<div class="columns">
						<div class="column col-6 form-group" :class="{ 'has-error': errors.has('peso') }">
							<label class="form-label" for="idWeight">Peso <b>(kg)</b></label>
							<input id="idWeight" name="peso" v-model="peso" v-validate="'required|numeric'"  class="form-input" type="text">
              				<span v-show="errors.has('peso')" class="form-input-hint">{{ errors.first('peso') }}</span>
						</div>
						<div class="column col-6 form-group" :class="{ 'has-error': errors.has('altura') }">
							<label class="form-label" for="idHeight">Altura <b>(m)</b></label>
							<input id="idHeight" name="altura" v-model="altura" v-validate="'required|decimal'"  class="form-input" type="text">
              				<span v-show="errors.has('altura')" class="form-input-hint">{{ errors.first('altura') }}</span>
						</div>
					</div>
					<div class="form-group py-2">
						<button @click="onClickStep('step2')" class="btn btn-lg btn-primary float-right">CONTINUAR</button>
					</div>
				</div>
			</div>
		</div>
		<div id="step2" v-show="currentStep =='step2'">
			<h3 class="text-center mt-1">Datos de acceso</h3>
			<div class="columns">
				<div class="column col-xl-8 col-mx-auto">
					
					<div class="form-group" :class="{ 'has-error': errors.has('email') }">
						<label class="form-label" for="idEmail">E-mail</label>
						<input id="idEmail" name="email" v-model="email" v-validate="'required|email'"  class="form-input" type="text">
              			<span v-show="errors.has('email')" class="form-input-hint">{{ errors.first('email') }}</span>
					</div>
					
					<div class="form-group" :class="{ 'has-error': errors.has('password') }">
						<label class="form-label" for="idPassword">Contraseña</label>
						<input id="idPassword" name="password" v-model="password" v-validate="'required|confirmed:confirmacionPassword|min:6'"  class="form-input" type="password">
              			<span v-show="errors.has('password')" class="form-input-hint">{{ errors.first('password') }}</span>
					</div>
					<div class="form-group" :class="{ 'has-error': errors.has('confirmacionPassword') }">
						<label class="form-label" for="idConfirm">Confirmar Contraseña</label>
						<input id="idConfirm" name="confirmacionPassword" v-model="confirmacionPassword" v-validate="'required|min:6'" ref="confirmacionPassword"  class="form-input" type="password">
              			<span v-show="errors.has('confirmacionPassword')" class="form-input-hint">{{ errors.first('confirmacionPassword') }}</span>
					</div>

					<div class="form-group py-2">
						<button @click="onClickStep('step3')" class="btn btn-lg btn-primary float-right">CONTINUAR</button>
					</div>
				</div>
			</div>
		</div>
		<div id="step3" v-show="currentStep =='step3'">
			<h3 class="text-center mt-2">Términos y condiciones</h3>
			<div class="columns">
				<div class="column col-sm-10  col-xl-8 col-mx-auto">
					<p class="p-terms text-justify">
						
					</p>
					<div class="card">
						<div class="card-body terms-card text-justify">
							Al aceptar, usted certifica queha sido autorizado por su médico para participar en programas de entrenamiento, ya que al no ser presencial, no nos responsabilizados de cualquier daño o lesión
						</div>
					</div>
					<br>
					<div class="form-group" :class="{ 'has-error': errors.has('aceptarTerminos') }">
					  <label class="form-checkbox" :class="{ 'is-error': errors.has('aceptarTerminos') }">
					    <input name="aceptarTerminos" v-model="aceptarTerminos" v-validate="'required'" type="checkbox">
					    <i class="form-icon"></i> Acepto los términos y condiciones bajo mi responsabilidad
					  </label>
					  <span v-show="errors.has('aceptarTerminos')" class="form-input-hint">{{ errors.first('aceptarTerminos') }}</span>
					</div>
					<div class="form-group py-2">
						<button @click="onClickRegister" class="btn btn-lg btn-primary float-right">CONTINUAR</button>
					</div>
				</div>
			</div>
		</div>
		<loading v-if="loading" message='Cargando ...'></loading>
	</div>
	


</template>


<script>
	import {siteName} from './../../config';
	import {api} from "../../config";
	import Loading from './../loading/Loading.vue' 
	
	import jwtToken from "../../helpers/jwt-token";
	import {mapActions} from "vuex";

	export default {
		components: {
			'loading': Loading
		},
		data() {
			return {
				siteName: siteName,
				currentStep:'step1',
				nombre: '',
				apellido:'',
				sexo:'',
				dia:'',
				mes:'',
				año:'',
				peso:'',
				altura:'',
				email:'',
				password:'',
				confirmacionPassword:'',
				aceptarTerminos:false,
				showInvalidDateError:false,
				loading: false,
			}
		},
		mounted() { 
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
			},
			validateStep1(){
				let self = this
				const results = Promise.all([
				  this.$validator.validate('nombre'),
				  this.$validator.validate('apellido'),
				  // this.$validator.validate('fechaNacimiento'),
				  this.$validator.validate('sexo'),
				  this.$validator.validate('dia'),
				  this.$validator.validate('año'),
				  this.$validator.validate('peso'),
				  this.$validator.validate('altura'),
				]).then(res => {
					let isValid = true
					for(let i=0; i<res.length; i++){
						if(res[i]==false){
							isValid =false
						}
					}
					
					let dateAux = moment(this.año+ this.mes + (this.dia))
					if(!dateAux.isValid()){
						isValid = false
						this.showInvalidDateError = true
					}
					
					if(isValid){
						self.currentStep = 'step2'
					}else{
						this.$noty.error("Porfavor revise los campos")
					}
				});

			},
			validateStep2(){
				let self = this
				const results = Promise.all([
				  this.$validator.validate('email'),
				  this.$validator.validate('password'),
				  this.$validator.validate('confirmacionPassword'),
				]).then(res => {
					let isValid = true
					for(let i=0; i<res.length; i++){
						if(res[i]==false){
							isValid =false
						}
					}
					if(isValid){
						self.currentStep = 'step3'
					}else{
						this.$noty.error("Porfavor revise los campos")
					}
				});
				
			},
			loginSuccess(data) {
				jwtToken.setToken(data.token);
				this.setAuthUser(data.user);
				this.$router.push({name: 'index'});
			},
			onClickRegister(){
				this.$validator.validate('aceptarTerminos')
				if(this.aceptarTerminos){
					this.loading = true
					let objAux = {
						name: this.nombre,
						last_name: this.apellido,
						birthdate: this.año + '-' + this.mes + '-' + this.dia,
						weight: this.peso,
						height: this.altura,
						email: this.email,
						gender: this.sexo,
						password: this.password,

					}

					axios.post(api.freeRegister, objAux)
					.then(res => {
						this.$noty.success('Registro Exitoso!');
						this.loading = false;
						this.loginSuccess(res.data);
						console.log(res.data)
					})
					.catch(err => {
						
						console.log(err.response);
						 (err.response.data.errors) && this.$noty.error(this.processErrors(err.response.data.errors));
						this.loading = false;
						// (err.response.data.errors)
						// 	? this.setErrors(err.response.data.errors)
						// 	: this.clearErrors();

						
					});

					console.log(objAux)
				}
			},
			processErrors(arr){
				let errorsAux = "";
				for(let error in arr){
					errorsAux += '- '+ arr[error]+'<br>';
				}
				return errorsAux
			},
			onChangeDate(){
				this.showInvalidDateError = false
			}
		}
	}
</script>
