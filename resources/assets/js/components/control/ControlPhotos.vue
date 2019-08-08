<template>
<!-- <h1 class="display-4" v-once>Bienvenido a {{siteName}}</h1> -->
<div>
	<div class="columns">
		<div class="column col-sm-12 col-xl-10 col-mx-auto">
			<h3 class="text-center">SEG. Y CONTROL / FOTOS</h3>
			<h5 class="text-center">Compará las fotos de distintos períodos del entrenamiento y mirá tu evolución</h5>
		</div>
	</div>
	<div class="columns">
		<div class="column col-sm-12 col-xl-10 col-mx-auto">
			<table class="table">
				<thead>
					<tr>
						<th class="text-center">MES 1</th>
						<th class="text-center">
							<div class="wrapper-date no-border">
								<div class="ctn-date">
									<div class="back" @click="onClickBack">
										<i class="icon icon-arrow-left"></i>
									</div>
									<div class="date">MES {{currentMonth}}</div>
									<div class="next" @click="onClickNext">
										<i class="icon icon-arrow-right"></i>
									</div>
								</div>
							</div>
						</th>
					</tr>
				</thead>
				<tbody>
					<tr class="text-center">
						<td class="w50"> 
							<div v-if="photos[0]" v-bind:style="{ backgroundImage: 'url('+getImageUrl(photos[0].photo_1 ,1)+')' }"   class="ctn-image-table" @click="onClickFirstPhoto(1)"></div>
						</td>
						<td class="w50">
							<div v-if="currentPhotos" v-bind:style="{ backgroundImage: 'url('+getImageUrl(currentPhotos.photo_1 ,1)+')' }"   class="ctn-image-table" @click="onClickPhoto(1)"></div>
						</td>
					</tr>
					<tr class="text-center">
						<td class="w50"> 
							<div v-if="photos[0]" v-bind:style="{ backgroundImage: 'url('+getImageUrl(photos[0].photo_2 ,2)+')' }"   class="ctn-image-table" @click="onClickFirstPhoto(2)"></div>
						</td>
						<td class="w50">
							<div v-if="currentPhotos" v-bind:style="{ backgroundImage: 'url('+getImageUrl(currentPhotos.photo_2 ,2)+')' }"   class="ctn-image-table" @click="onClickPhoto(2)"></div>
						</td>
					</tr>
					<tr class="text-center">
						<td class="w50"> 
							<div v-if="photos[0]" v-bind:style="{ backgroundImage: 'url('+getImageUrl(photos[0].photo_3 ,3)+')' }"   class="ctn-image-table" @click="onClickFirstPhoto(3)"></div>
						</td>
						<td class="w50">
							<div v-if="currentPhotos" v-bind:style="{ backgroundImage: 'url('+getImageUrl(currentPhotos.photo_3 ,3)+')' }"   class="ctn-image-table" @click="onClickPhoto(3)"></div>
						</td>
					</tr>
					<tr class="text-center">
						<td class="w50"> 
							<div v-if="photos[0]" v-bind:style="{ backgroundImage: 'url('+getImageUrl(photos[0].photo_4 ,4)+')' }"   class="ctn-image-table" @click="onClickFirstPhoto(4)"></div>
						</td>
						<td class="w50">
							<div v-if="currentPhotos" v-bind:style="{ backgroundImage: 'url('+getImageUrl(currentPhotos.photo_4 ,4)+')' }"   class="ctn-image-table" @click="onClickPhoto(4)"></div>
						</td>
					</tr>
				</tbody>
			</table>
			
		</div>
	</div>
	
	<loading v-if="loading" message='Cargando Fotos ...'></loading>
</div>

</template>

<script>
	import {mapState} from 'vuex'
	import {api} from "../../config"
	import Loading from './../loading/Loading.vue' 
	
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
				currentMonth: 2,
				currentPhotos: null,
				photos:[],
			}
		},
		created(){
			// EventBus.$emit('EVENT_ROUTE_NAME', {name:this.$route.name});
			this.loading= true
			this.httpRequest()

		},
		methods: {
			generateArrPhotos(data){
				let pastMonths = this.user.past_months +1
				let arrAux = []
				if(pastMonths>=1){
					for(let i=0; i<pastMonths ; i++ ){
						let objAux = data.find(photo => photo.month == (i+1))
						console.log(objAux)
						if(objAux){
							arrAux[i] = (objAux)
						}else{
							arrAux[i] = {id:(i+1),month:(i+1),photo_1:"",photo_2:"",photo_3:"",photo_4:"",}
						}
					}
					return arrAux
				}
			},
			httpRequest(){
				axios.get(api.getPhotos).then(res => {
					
					this.loading= false
					this.photos = this.generateArrPhotos(res.data)
					this.currentPhotos = this.photos[1]
					
					if(this.$route.params.month	){
						this.currentMonth = this.$route.params.month
						if(this.currentMonth == 1){
							this.currentPhotos = this.photos[1]
							
						}else{
							this.currentPhotos = this.photos.find(photo => photo.month == this.currentMonth)
						}
						
					}

				})
				.catch(err => {
					console.log(err)
					this.loading= false
				})
			},
			onClickNext(){

				if(this.currentMonth < this.user.past_months  ){
					this.currentMonth++
					this.currentPhotos = this.photos[this.currentMonth-1]
					//alert(JSON.stringify(this.currentPhotos))
				}
			},
			onClickBack(){
				if(this.currentMonth >2 ){
					this.currentMonth--
					this.currentPhotos = this.photos[this.currentMonth-1]
					//alert(JSON.stringify(this.currentPhotos))

				}
			},
			getImageUrl(img ,num){
				if(img){
					return '/images/photos/'+img
				}else{
					if(num == 1){
						return '/img/frente.jpg'
					}
					if(num == 2){
						return '/img/perfil.jpg'
					}
					if(num == 3){
						return '/img/espalda.jpg'
					}
					if(num == 4){
						return '/img/ropa_critica.jpg'
					}
				}

			},
			onClickPhoto(num){
				if(this.currentPhotos){
					let photoAux = this.currentPhotos['photo_'+num]
					if(photoAux.length<=0){
						this.$router.push({
							name: 'uploadPhoto',
							 params: { month: this.currentMonth, photoNum: num },
						})
					}
				}else{
					this.$router.push({
						name: 'uploadPhoto',
					 	params: { month: this.currentMonth, photoNum: num },
					})
				}
			},

			onClickFirstPhoto(num){
				// if(this.photos[0]){
					let photoAux = this.photos[0]['photo_'+num]
					if(photoAux.length<=0){
						this.$router.push({
							name: 'uploadPhoto',
							 params: { month:1, photoNum: num },
						})
					}
				// }else{
				// 	this.$router.push({
				// 		name: 'uploadPhoto',
				// 	 	params: { month: 1, photoNum: num },
				// 	})
				// }
			},
		}
	}
</script>