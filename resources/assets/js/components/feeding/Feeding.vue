<template>
<!-- <h1 class="display-4" v-once>Bienvenido a {{siteName}}</h1> -->
<div>
	<div class="columns">
		<div class="column col-sm-10 col-xl-10 col-mx-auto">
			<h1 class="text-center">Guía de alimentación</h1>
			<h4 class="text-center">Según tu perfil metabólico</h4>
			
			<div>
				<router-link :to="{name: 'feedingGuide'}" tag="div" class="" activeClass="active" exact>
					<div class="app-button">
						<div class="left">
							<img src="/img/alimentacion/guia-icon.png" alt="Icon">
							GUIA DE <br> ALIMENTACIÓN
						</div>
						<div class="right">
							<i class="icon icon-arrow-right"></i>
						</div>
					</div>
				</router-link>
				<router-link :to="{name: 'feedingIndications'}" tag="div" class="" activeClass="active" exact>
					<div class="app-button">
						<div class="left">
							<img src="/img/alimentacion/indicaciones-icon.png" alt="Icon">
							INDICACIONES
						</div>
						<div class="right">
							<i class="icon icon-arrow-right"></i>
						</div>
					</div>
				</router-link>
				<router-link :to="{name: 'feedingForbidden'}" tag="div" class="" activeClass="active" exact>
					<div class="app-button">
						<div class="left">
							<img src="/img/alimentacion/prohibidos-icon.png" alt="Icon">
							LOS NO <br>
							PROHIBIDOS
						</div>
						<div class="right">
							<i class="icon icon-arrow-right"></i>
						</div>
					</div>
				</router-link>
				<router-link :to="{name: 'feedingPortions'}" tag="div" class="" activeClass="active" exact>
					<div class="app-button">
						<div class="left">
							<img src="/img/alimentacion/porciones-icon.png" alt="Icon">
							TUS<br>
							PORCIONES
						</div>
						<div class="right">
							<i class="icon icon-arrow-right"></i>
						</div>
					</div>
				</router-link>
			</div>
			
			
			
		</div>
	</div>
</div>
</template>
<script>
	//import {mapState} from 'vuex'
	
	export default {
		// computed: mapState({
		// 	user: state => state.auth
		// }),
		
		methods: {
			
		}
	}
</script>