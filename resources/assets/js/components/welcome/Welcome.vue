<template>	
	<!-- <h1 class="display-4" v-once>Bienvenido a {{siteName}}</h1> -->
	<div>
		<div class="video-responsive">
			<iframe src="https://www.youtube.com/embed/cFIbsF0I6XE" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
		</div>
		<div class="columns ctn-buttons">
			<div class="column col-sm-10 col-xl-10 col-mx-auto">
				<router-link :to="{name: 'freeRegister'}" tag="div" class="" activeClass="active" exact>
					<div class="app-button">
						<div class="left">
							REGISTRO <br>
							GRATUITO
						</div>
						<div class="right">
							<i class="icon icon-arrow-right"></i>
						</div>
					</div>
				</router-link>
				<router-link :to="{name: 'login'}" tag="div" class="" activeClass="active" exact>
					<div class="app-button">
						<div class="left">
							YA TENGO <br>
							UNA CUENTA
						</div>
						<div class="right">
							<i class="icon icon-arrow-right"></i>
						</div>
					</div>
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
	import {siteName} from './../../config';
	import EventBus from '../../event-bus';
	export default {
		data() {
			return {
				siteName: siteName
			}
		},
		mounted(){
			EventBus.$emit('EVENT_ROUTE_NAME', {name:this.$route.name});
		},
		beforeDestroy(){
			EventBus.$emit('EVENT_ROUTE_NAME', {name:""});
		},
	}
</script>
