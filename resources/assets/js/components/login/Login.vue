<style>
	.wrapper-login{
		background: url('/img/fondo-login.jpg');
		background-size:cover;
		background-position: center;
		background-repeat: no-repeat;
		height: 100vh;
		width:100%;
		position: absolute;
		top:-50px;
		padding-bottom: 60px;
	}
	.logo-login{
		display: block;
		width:150px;
		margin:60px auto;
	}

</style>

<template>
	<div class="wrapper-login">
		<div class="column col-sm-10 col-xl-10 col-mx-auto">
			<img class="logo-login" src="/img/logo2.png" alt="Chau Panza">
			<div class="columns">
				<div class="column col-sm-10 col-xl-8 col-mx-auto">
					<login-form @loginSuccess="loginSuccess"></login-form>
					<div class="my-2">
						<router-link :to="{name: 'freeRegister'}" tag="a" class="text-light" activeClass="" exact>
							Aún no tenés cuenta? Registrate
						</router-link>
						<a class="" href="/"></a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import LoginForm from './../login/LoginForm.vue'
	import jwtToken from "../../helpers/jwt-token";
	import {mapActions} from "vuex";

	export default {
		
		components: {
			'login-form': LoginForm
		},
		methods: {

			...mapActions([
				'setAuthUser'
			]),
			loginSuccess(data) {
				jwtToken.setToken(data.token);
				this.setAuthUser(data.user);
				this.$router.push({name: 'index'});
			}
		}
	}
</script>
