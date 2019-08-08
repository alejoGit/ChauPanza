<template>
	<div>
		<form @submit.prevent="login">

			<div class="form-group" :class="{ 'has-error': errors.has('email') }">
				
				<input
					type="email"
					placeholder="Email"
					class="form-input"
					:class="{'is-invalid' : error.email}"
					id="email"
					v-model="form.email"
					autocomplete="off"
					:disabled="loading"
					name="email"
					v-validate="'required|email'"
				/>
				<span v-show="errors.has('email')" class="form-input-hint">{{ errors.first('email') }}</span>
			</div>
			<div class="form-group" :class="{ 'has-error': errors.has('password') }">
				<input
					type="password"
					placeholder="Contraseña"
					class="form-input"
					:class="{'is-invalid' : error.password}"
					id="password"
					v-model="form.password"
					:disabled="loading"
					name="password"
					v-validate="'required|min:6'"

				/>
				
				<span v-show="errors.has('password')" class="form-input-hint">{{ errors.first('password') }}</span>
			</div>
			<div class="form-group">
				<button type="submit" class="btn btn-primary btn-block" :disabled="loading">
					<span v-show="loading">VALIDANDO INFORMACIÓN...</span>
					<span v-show="!loading">INGRESAR</span>
				</button>
			</div>
		</form>
	</div>
</template>

<script>
	import {api} from "../../config";

	export default {
		data() {
			return {
				loading: false,
				form: {
					email: 'alejo@gmail.com',
					password: null
				},
				error: {
					email: null,
					password: null
				}
			}
		},
		methods: {
			login() {
				this.$validator.validateAll().then((result) => {
			        if (result) {
			          this.loading = true;
			           
						axios.post(api.login, this.form)
							.then(res => {
								this.loading = false;
								this.$noty.success('Bienvenido!');
								this.$emit('loginSuccess', res.data);
							})
							.catch(err => {

								(err.response.data.error) && this.$noty.error(err.response.data.error);

								(err.response.data.errors)
									? this.setErrors(err.response.data.errors)
									: this.clearErrors();

								this.loading = false;
							});
			         
			          return;
		        	}

		        	//alert('Correct them errors!');
		      	});


				
			},
			setErrors(errors) {
				this.error.email = errors.email ? errors.email[0] : null;
				this.error.password = errors.password ? errors.password[0] : null;
			},
			clearErrors() {
				this.error.email = null;
				this.error.password = null;
			}
		}
	}
</script>
