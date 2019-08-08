<template>
<div>
	<div class="columns">
		<div class="column col-sm-12 col-xl-10 col-mx-auto">
			<h3 class="text-center">Subir Foto - <b>{{photoName}}</b> - Mes {{month}}</h3>
		</div>
	</div>
	<div class="columns">
		<div class="column col-sm-10 col-xl-6 col-mx-auto">
			<div id="myCropper" class="slim"
                 data-size="1200,1000"
                 data-post="output">
                <input type="file" name="image"  >
            </div>
		</div>
	</div>
	
	
	
	<loading v-if="loading" message='Cargando ...'></loading>
</div>

</template>

<script>
	import {mapState} from 'vuex'
	import {api} from "../../config"
	import Loading from './../loading/Loading.vue' 
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
		data(){
			return{
				loading: false,
				month: 0,
				photoNum: 0,
				photoName:'',
				photo: null,
				cropper:null,
			}
		},
		created(){
			this.month = this.$route.params.month	
			this.photoNum    =   this.$route.params.photoNum

			if(!this.month || !this.photoNum){
				this.$router.push({name: 'controlPhotos'})
			}	
			if(this.photoNum == 1)
				this.photoName = 'Frente'
			if(this.photoNum == 2)
				this.photoName = 'Pefil'
			if(this.photoNum == 3)
				this.photoName = 'Espalda'
			if(this.photoNum == 4)
				this.photoName = 'Ropa Critica'
		},
		mounted(){
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
		      			month:this.month,
		      			photo_num:this.photoNum, 
		      			user_id: this.user.id
		      		},
		      		label:'<div><i class="icon icon-upload"></i></div>Suelta tu imagen aquí',
		      		willSave: function(data, ready) {
				        ready(data)
				        setTimeout(function(){  
				        	self.$router.push({
								name: 'controlPhotos',
								params: { month: self.month, },
							})

				         }, 2000)

				       
				    },
		      	}
		      )

		      


		    })
		    .catch(() => {
		     
		    })

		    

		},
		methods: {
			
		}
	}
</script>