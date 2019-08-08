<template>	
	<!-- <h1 class="display-4" v-once>Bienvenido a {{siteName}}</h1> -->
	<div id="mainWrapper">
		<br>
		<ul class="step ctn-steps">
		  <li class="step-item" :class="{active:currentStep==1}" @click="onClickStep(1)">
		    <a  class="tooltip" data-tooltip="Frente">Frente</a>
		  </li>
		  <li class="step-item" :class="{active:currentStep==2}" @click="onClickStep(2)">
		    <a  class="tooltip" data-tooltip="Perfil">Perfil</a>
		  </li>
		  <li class="step-item" :class="{active:currentStep==3}" @click="onClickStep(3)">
		    <a  class="tooltip" data-tooltip="Espalda">Espalda</a>
		  </li>
		  <li class="step-item" :class="{active:currentStep==4}" @click="onClickStep(4)">
		    <a  class="tooltip" data-tooltip="Ropa">Ropa</a>
		  </li>
		</ul>
		<div id="step1" v-show="currentStep ==1">
			<div class="columns">
				<div class="column col-sm-10 col-xl-6 col-mx-auto">
					<div id="myCropper" class="slim"
		                 data-size="1200,1000"
		                 data-post="output">
		                <input type="file" name="image"  >
		            </div>
				</div>
			</div>
		</div>
		<div id="step2" v-show="currentStep ==2">
			<div class="columns">
				<div class="column col-sm-10 col-xl-6 col-mx-auto">
					<div id="myCropper2" class="slim"
		                 data-size="1200,1000"
		                 data-post="output">
		                <input type="file" name="image"  >
		            </div>
				</div>
			</div>
		</div>
		<div id="step3" v-show="currentStep ==3">
			<div class="columns">
				<div class="column col-sm-10 col-xl-6 col-mx-auto">
					<div id="myCropper3" class="slim"
		                 data-size="1200,1000"
		                 data-post="output">
		                <input type="file" name="image"  >
		            </div>
				</div>
			</div>
			
		</div>
		<div id="step4" v-show="currentStep ==4">
			<div class="columns">
				<div class="column col-sm-10 col-xl-6 col-mx-auto">
					<div id="myCropper4" class="slim"
		                 data-size="1200,1000"
		                 data-post="output">
		                <input type="file" name="image"  >
		            </div>
				</div>
			</div>
		</div>

		<div class="columns">
			<div class="column col-sm-10 col-xl-10 col-mx-auto text-center">
				<br>
				<br>
				<a href="#" class=" my-2" @click.prevent="onClickSkip">Omitir Paso</a>
			</div>
		</div>
		<loading v-if="loading" message='Cargando ...'></loading>
	</div>
	


</template>


<script>
	import {mapState} from 'vuex'
	import {siteName} from './../../config';
	import {api} from "../../config";
	import Loading from './../loading/Loading.vue' 
	import EventBus from '../../event-bus';
	import jwtToken from "../../helpers/jwt-token";
	import {mapActions} from "vuex";
	import LoadScript from 'vue-plugin-load-script'
	import Vue from 'vue'
 	Vue.use(LoadScript)
	export default {
		components: {
			'loading': Loading
		},
		computed: mapState({
			user: state => state.auth,
		}),
		data() {
			return {
				currentStep:1,
				loading: false,
			}
		},
		mounted(){
			EventBus.$emit('EVENT_ROUTE_NAME', {name:this.$route.name});
			let self = this
			Vue.loadScript("/assets/slim/slim.global.min.js")
		    .then(() => {

		      	let cropper = new Slim(
		      	document.getElementById('myCropper'),
		      	{ 
		      		ratio: '3:5',
		      		instantEdit: true,
		      		service:'/api/set-photo',
		      		push:true,
		      		uploadBase64:true,
		      		meta:{
		      			month:1,
		      			photo_num:1, 
		      			user_id: this.user.id
		      		},
		      		label:'<img src="/img/frente.jpg"><div><i class="icon icon-upload"></i></div>Suelta tu imagen aquí',
		      		willSave: function(data, ready) {
				        ready(data)
				  		self.currentStep = 2

				       
				    },
		      	}
		      )

		      cropper = new Slim(
		      	document.getElementById('myCropper2'),
		      	{ 
		      		ratio: '3:5',
		      		instantEdit: true,
		      		service:'/api/set-photo',
		      		push:true,
		      		uploadBase64:true,
		      		meta:{
		      			month:1,
		      			photo_num:2, 
		      			user_id: this.user.id
		      		},
		      		label:'<img src="/img/perfil.jpg"><div><i class="icon icon-upload"></i></div>Suelta tu imagen aquí',
		      		willSave: function(data, ready) {
				        ready(data)
				   		self.currentStep = 3
				       
				    },
		      	}
		      )

		      cropper = new Slim(
		      	document.getElementById('myCropper3'),
		      	{ 
		      		ratio: '3:5',
		      		instantEdit: true,
		      		service:'/api/set-photo',
		      		push:true,
		      		uploadBase64:true,
		      		meta:{
		      			month:1,
		      			photo_num:3, 
		      			user_id: this.user.id
		      		},
		      		label:'<img src="/img/espalda.jpg"><div><i class="icon icon-upload"></i></div>Suelta tu imagen aquí',
		      		willSave: function(data, ready) {
				        ready(data)
				       	self.currentStep = 4
				    },
		      	}
		      )

		      cropper = new Slim(
		      	document.getElementById('myCropper4'),
		      	{ 
		      		ratio: '3:5',
		      		instantEdit: true,
		      		service:'/api/set-photo',
		      		push:true,
		      		uploadBase64:true,
		      		meta:{
		      			month:1,
		      			photo_num:4, 
		      			user_id: this.user.id
		      		},
		      		label:'<img src="/img/ropa_critica.jpg"><div><i class="icon icon-upload"></i></div>Suelta tu imagen aquí',
		      		willSave: function(data, ready) {
				        ready(data)
				       	self.$noty.success('Fotos ingresadas correctamente!')
				  		self.$router.push({name:"index"})
				    },
		      	}
		      )


		    })
		    .catch(() => {
		     
		    })

		    

		},
		beforeMounted(){
			Vue.use(VeeValidate); 
		},
		methods:{
			...mapActions([
				'setAuthUser'
			]),
			onClickStep(val){
				if(val==1){
					this.currentStep = 1
				}
				if(val==2){
					this.currentStep = 2
				}
				if(val==3){
					this.currentStep = 3
				}
				if(val==4){
					this.currentStep = 4
				}
			},

			onClickSkip(){
				// this.$router.push({name:"index"})
				window.location.href = "/"
			},
			
		}
	}
</script>
