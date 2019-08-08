<template>
	<div>
	
		<div class="columns">
			<div class="column col-md-10 col-xl-8 col-mx-auto">
				<h3 class="text-center">Mi Perfil</h3>
				<ul class="profile-list">
					<li><b>Nombre:</b> {{user.profile.name}} {{user.profile.last_name}}</li>
					<li><b>Sexo:</b> {{user.profile.gender}}</li>
					<li><b>Fecha de Nacimiento:</b> {{user.profile.birthdate | formatBirthdate}}</li>
					<li><b>Peso:</b> {{user.profile.weight}} kg</li>
					<li><b>Altura:</b> {{user.profile.height}} cm</li>
				</ul>

				<div v-if="user.subscription">
					<h3 class="text-center">Mi Suscripción</h3>
					<ul class="profile-list">
						<li><b>Fecha de inicio:</b> {{user.subscription.start_date}}</li>
						<li><b>Meses Transcurridos:</b> {{user.past_months}}</li>
					</ul>
				</div>
					
				<div v-if="user.subscription">
					<h3 class="text-center">Mi Diagnostico</h3>
					<ul class="profile-list">
						<li><b>Nivel:</b> {{user.level}}</li>
						<li><b>Tipo de dieta:</b> {{user.diet_type}}</li>
					</ul>
					<br>
					<router-link :to="{name: 'diagnostic'}" tag="a" class="btn btn-primary" activeClass="active" exact>Realizar Diagnostico Nuevamente</router-link>
					
					<p class="warning-profile"><span>Advertencia:</span> Si realizas el diagnostico nuevamente se actualizaran tu puntaje y tipo de dieta</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import {mapState} from 'vuex'

	export default {
		computed: mapState({
			user: state => state.auth
		}),

		filters: {
		  formatBirthdate: function (value) {
		    let formatted = value.split(' ')[0]
		    return formatted
		  }
		}
	}
</script>
