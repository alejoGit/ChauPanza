<template>
	<div>
		<h3 class="text-center">Editar Perfil</h3>
		<div class="columns">
			<div class="column col-xl-8 col-mx-auto">
				<div class="columns">
					<div class="column col-sm-12 col-12 form-group" :class="{ 'has-error': errors.has('email') }">
						<label class="form-label" for="idName" name="name">Email</label>
						<input id="idName" name="email" v-model="email" v-validate="'required|email'"  class="form-input" type="text">
              			<span v-show="errors.has('email')" class="form-input-hint">{{ errors.first('email') }}</span>
					</div>
				</div>
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
					<button @click="onClickSave()" class="btn btn-lg btn-primary float-right">GUARDAR CAMBIOS</button>
				</div>
			</div>
		</div>
		<loading v-if="loading" message='Cargando ...'></loading>
	</div>
</template>

<script>
	import {mapState} from 'vuex'
	import {mapActions} from 'vuex'
	import {api} from "../../../config"
	import Loading from './../../loading/Loading.vue' 
	export default {
		components: {
			'loading': Loading
		},
		computed: mapState({
			user: state => state.auth
		}),
		data() {
			return {
				isValidForm:false,
				email: '',
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
		mounted(){
			this.email = this.user.email
			this.nombre = this.user.profile.name
			this.apellido = this.user.profile.last_name
			this.sexo = this.user.profile.gender
			this.dia = this.user.profile.birthdate.split(' ')[0].split('-')[2]
			this.mes = this.user.profile.birthdate.split(' ')[0].split('-')[1]
			this.año = this.user.profile.birthdate.split(' ')[0].split('-')[0]
			this.peso = this.user.profile.weight
			this.altura = this.user.profile.height

			let momentScript = document.createElement('script')
		    momentScript.setAttribute('src', '/js/moment.js')
		    document.head.appendChild(momentScript)
		},
		methods: {
			...mapActions([
				'setAuthUser'
			]),
			onChangeDate(){
				this.showInvalidDateError = false
			},
			sendUpdateRequest(){
				this.loading = true
				let objAux = {
					name: this.nombre,
					last_name: this.apellido,
					birthdate: this.año + '-' + this.mes + '-' + this.dia,
					weight: this.peso,
					height: this.altura,
					email: this.email,
					gender: this.sexo,

				}

				axios.post(api.updateUserProfile, objAux)
				.then(res => {
					this.$noty.success('Se actualizó el prefil correctamente!');
					this.loading = false;
					//this.loginSuccess(res.data);
					console.log(res.data)
					this.setAuthUser(res.data.newUser);
				})
				.catch(err => {
					
					console.log(err)
					this.loading = false;
					// (err.response.data.errors)
					// 	? this.setErrors(err.response.data.errors)
					// 	: this.clearErrors();

					
				});
			},
			onClickSave(){
				let self = this
				const results = Promise.all([
				this.$validator.validate('email'),
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
						this.sendUpdateRequest()
					}else{
						this.$noty.error("Porfavor revise los campos")
						
					}
				});
				
					
				
			}
		},
	}
</script>
