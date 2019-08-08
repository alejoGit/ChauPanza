<template>
<!-- <h1 class="display-4" v-once>Bienvenido a {{siteName}}</h1> -->
<div>
	<div class="columns">
		<div class="column col-sm-10 col-xl-10 col-mx-auto">
			<h2 class="text-center">Control de alimentación</h2>
		</div>
	</div>
	<div class="columns">
		<div class="column col-sm-12 col-xl-8 col-mx-auto">
			<div class="wrapper-date">
				<div  @click="onClickCalendar" class="calendar-button"></div>
				<div class="ctn-date">
					<!-- <div  class="back">
						<i class="icon icon-arrow-left"></i>
					</div> -->
					<div class="date">{{currentFormatDate}}</div>
					<!-- <div class="next">
						<i class="icon icon-arrow-right"></i>
					</div> -->
				</div>
			</div>
		</div>
	</div> <br>
	<ul class="tab tab-block ul-tabs-feeding">
		<li class="tab-item" v-bind:class="{active: currentTab==0}">
			<a href="#" v-on:click.prevent="onClickTab(0)">Desayuno</a>
		</li>
		<li class="tab-item" v-bind:class="{active: currentTab==1}">
			<a href="#" v-on:click.prevent="onClickTab(1)">Almuerzo</a>
		</li>
		<li class="tab-item" v-bind:class="{active: currentTab==2}">
			<a href="#" v-on:click.prevent="onClickTab(2)">Merienda</a>
		</li>
		<li class="tab-item" v-bind:class="{active: currentTab==3}">
			<a href="#" v-on:click.prevent="onClickTab(3)">Cena</a>
		</li>
	</ul>

	<h2 class="text-center">Seleccione un tipo de alimento</h2>
	<div class="ctn-pyramid">
		<!-- <div v-bind:class="{ active_top: topIsActive }" class="item-pyramid item-carbohidratos" @click="onClickItemPyramid('consumo_reducido')"></div>
		<div v-bind:class="{ active_middle: middleIsActive }" class="item-pyramid item-grasas" @click="onClickItemPyramid('grasas')"></div>
		<div v-bind:class="{ active_bottom: bottomIsActive }" class="item-pyramid item-proteinas" @click="onClickItemPyramid('proteinas')"></div> -->
		<div v-if="currentPyramid" class="text-center">
			<!-- <div v-for="pyramidAux in currentPyramid">
				<img v-bind:src="pyramidAux.img1" alt="" @click="onClickItemPyramid(pyramidAux.value, pyramidAux.name)">
			</div> -->
			<img v-if="!topIsActive" v-bind:src="currentPyramid[0].img1" alt="" @click="onClickItemPyramid(currentPyramid[0].value, currentPyramid[0].name)">
			<img v-if="topIsActive" v-bind:src="currentPyramid[0].img2" alt="" @click="onClickItemPyramid(currentPyramid[0].value, currentPyramid[0].name)">

			<img v-if="!middleIsActive" v-bind:src="currentPyramid[1].img1" alt="" @click="onClickItemPyramid(currentPyramid[1].value, currentPyramid[1].name)">
			<img v-if="middleIsActive" v-bind:src="currentPyramid[1].img2" alt="" @click="onClickItemPyramid(currentPyramid[1].value, currentPyramid[1].name)">

			<img v-if="!bottomIsActive" v-bind:src="currentPyramid[2].img1" alt="" @click="onClickItemPyramid(currentPyramid[2].value, currentPyramid[2].name)">
			<img v-if="bottomIsActive" v-bind:src="currentPyramid[2].img2" alt="" @click="onClickItemPyramid(currentPyramid[2].value, currentPyramid[2].name)">
		</div>
	</div>
	<div class="wrapper-cards">
		<div id="ctnTab1" v-if="currentTab == 0">
			
		</div>
		<div id="ctnTab2" v-if="currentTab == 1">
			
		</div>
		<div id="ctnTab3" v-if="currentTab == 2">
			
		</div>
		<div id="ctnTab4" v-if="currentTab == 3">
			
		</div>
	</div>

	<div class="modal" v-bind:class="{active: modalIsActive }" id="modal-id">
		<a @click="onClickCloseModal" class="modal-overlay" aria-label="Close"></a>
		<div class="modal-container" >
			<div class="modal-header">
				<a @click="onClickCloseModal" class="btn btn-clear float-right" aria-label="Close"></a>
				<br><br>
				<h3 class="modal-title h3 text-center text-capitalize no-margin">{{currentFoodName}}</h3>
				<div class="text-center">Seleccione una opción</div>
				<br>
				<div class="columns">
					<div class="column col-sm-10 col-xl-4 col-mx-auto">
						<div class="ctn-cheboxes">
							<div class="form-group">
							  <label v-for="food in currentFoods" class="form-radio">
									<input type="radio" v-model="currentFood" name="currentFood" v-bind:value="food.id"><i class="form-icon"></i> {{food.name}}
							  </label>
							</div>
						</div>
						<br>
						<button class="btn btn-primary" @click="onClickChoose">Elegír para {{currentFormatDate}}</button>
					</div>
				</div>
				
			</div>
			<div class="modal-body">
				<div class="content text-center">
				<!-- content here -->
					
				</div>
			</div>
			<div class="modal-footer">
				<!-- <button @click="onClickCloseModal" class="btn btn-primary">Cerrar</button> -->
			</div>
		</div>
	</div>
	

	<div class="modal" v-bind:class="{active: modalCalendarIsActive }" id="modal-id">
		<a @click="onClickCloseModal" class="modal-overlay" aria-label="Close"></a>
		<div class="modal-container" style="width: 420px; max-width: 100%;">
			<div class="modal-header">
				<a @click="onClickCloseModal" class="btn btn-clear float-right" aria-label="Close"></a>
				<div class="modal-title h5 text-center">Calendario</div>
			</div>
			<div class="modal-body">
				<div class="content text-center">
				<!-- content here -->
					<v-calendar :pane-width='320' :attributes='attrs' @dayclick="onClickDay">
					</v-calendar>
				</div>
			</div>
			<div class="modal-footer">
				<!-- <button @click="onClickCloseModal" class="btn btn-primary">Cerrar</button> -->
			</div>
		</div>
	</div>

	<loading v-if="loading" message='Cargando Alimentos ...'></loading>
</div>

</template>
<script>
	import {mapState} from 'vuex'
	import {api} from "../../config"
	import Loading from './../loading/Loading.vue' 
	import { setupCalendar, Calendar} from 'v-calendar'
	import 'v-calendar/lib/v-calendar.min.css'

	// Remember to setup calendar (passing in defaults if needed)
	setupCalendar({
	  firstDayOfWeek: 2,  // Monday,
	                  // ...other defaults
	});

	export default {
		computed: mapState({
			user: state => state.auth
		}),
		components: {
			'loading': Loading,
			'v-calendar': Calendar
		},
		data(){
			return{
				currentDate:'',
				currentFormatDate:'',
				currentTab:0,
				modalIsActive: false,
				modalCalendarIsActive:false,
				loading: false,
				userFoods:[],
				arrFoods:[],
				// arrBreakfast:[],
				// arrLunch:[],
				// arrSnak:[],
				// arrDinner:[],
				currentFoods:[],
				currentFoodCategory:'',
				currentFoodName:'',
				currentFood:0,
				topIsActive:false,
				middleIsActive:false,
				bottomIsActive:false,
				currentPyramid:null,
				pyramid1:[
					{id:1, name:"Consumo Reducido", value:"consumo_reducido", img1:'/img/piramide/1SP.png',img2:'/img/piramide/1SP-GRIS.png'},
					{id:2, name:"Proteínas y Grasas Buenas", value:"proteinas_grasas", img1:'/img/piramide/2S.png',img2:'/img/piramide/2S-GRIS.png'},
					{id:3, name:"Hidratos de carbono", value:"hidratos_carbono", img1:'/img/piramide/3S.png',img2:'/img/piramide/3S-GRIS.png'},
				],
				pyramid2:[
					{id:1, name:"Consumo Reducido", value:"consumo_reducido", img1:'/img/piramide/1SP.png',img2:'/img/piramide/1SP-GRIS.png'},
					{id:2, name:"Hidratos de carbono", value:"hidratos_carbono", img1:'/img/piramide/2P.png',img2:'/img/piramide/2P-GRIS.png'},
					{id:3, name:"Proteínas y Grasas Buenas", value:"proteinas_grasas", img1:'/img/piramide/3P.png',img2:'/img/piramide/3P-GRIS.png'},
				],
				attrs: [
			        {
			          key: 'today',
			          highlight: {
			            backgroundColor: '#280459',
			            // Other properties are available too, like `height` & `borderRadius`
			          },
			           contentStyle: {
			            color: '#fafafa',
			          },
			          dates: [],
			
			        }
			      ],

			}
		},
		created(){
			this.loading= true
			console.log(this.user)
			let data = {
				
			}
			axios.post(api.getFoodsByDate, data).then(res => {
				this.arrFoods = res.data.foods
				this.loading= false
				this.userFoods =res.data.todayUserFoods
				this.currentDate = res.data.currentDate
				this.currentFormatDate = res.data.formatDate
				this.attrs[0].dates = this.currentDate
				this.setClassActiveItems()

				if(this.user.diet_type ==="S" || this.user.diet_type ==="s"){
					this.currentPyramid = this.pyramid1
				}
				if(this.user.diet_type === "P" || this.user.diet_type ==="p"){
					this.currentPyramid = this.pyramid2
				}
				
			})
			.catch(err => {

				console.log(err)
				this.loading= false
			});
		},
		methods: {
			onClickTab(tab){
				this.currentTab = tab
				this.setClassActiveItems()
			},
			getFoods(cat){
				let arrAux = this.arrFoods
				arrAux =  arrAux.filter(food => food.category == cat);
				this.currentFoods = arrAux
			},
			getTypeName(){
				let typeAux = ''
				if(this.currentTab==0)
					typeAux = 'breakfast'
				if(this.currentTab==1)
					typeAux = 'lunch'
				if(this.currentTab==2)
					typeAux = 'snak'
				if(this.currentTab==3)
					typeAux = 'dinner'
				return typeAux
			},
			setClassActiveItems(){
				let typeAux = this.getTypeName()
				

				this.topIsActive = false
				this.middleIsActive = false
				this.bottomIsActive = false
				for(let i=0; i<this.userFoods.length; i++){
					let foodAux = this.userFoods[i]
					if(foodAux.category==='consumo_reducido' && foodAux.type=== typeAux){
						this.topIsActive = true 
					}
					if(foodAux.category==='proteinas_grasas' && foodAux.type=== typeAux){
						if(this.user.diet_type=="P"){
							this.bottomIsActive = true
						}else{
							this.middleIsActive = true 
						}
						
					}
					if(foodAux.category==='hidratos_carbono' && foodAux.type=== typeAux){
						if(this.user.diet_type=="P"){
							this.middleIsActive = true
						}else{
							this.bottomIsActive = true 
						}
					}
					

				}
			},
			selectCurrentFood(cat){
				let typeAux = this.getTypeName()
				

				for(let i=0; i<this.userFoods.length; i++){
					let foodAux = this.userFoods[i]
					if(foodAux.category===cat && foodAux.type=== typeAux){
						this.currentFood = foodAux.food_id
					}
				}



			},
			onClickItemPyramid(category,name){
				this.modalIsActive = true
				this.currentFood = 0
				this.currentFoodCategory = category
				this.currentFoodName = name
				this.getFoods(category)

				this.selectCurrentFood(category)
				
			},
			onClickCalendar(){
				this.modalCalendarIsActive = true
			},
			onClickCloseModal(){
				this.modalIsActive = false
				this.modalCalendarIsActive = false
			},
			getCurrentTabName(){
				if(this.currentTab ===0)
					return 'breakfast'
				if(this.currentTab ===1)
					return 'lunch'
				if(this.currentTab ===2)
					return 'snak'
				if(this.currentTab ===3)
					return 'dinner'
			},
			onClickChoose(){

				if(this.currentFood > 0){
					let postData = {
						food_id : this.currentFood,
						type: this.getCurrentTabName(),
						date: this.currentDate,
					}

					axios.post(api.setFoodUserByDate, postData)
					.then(res => {
						this.loading = false
						console.log(res.data)
						if(res.data.status==='ok'){
							this.userFoods = res.data.userFoods
							this.modalIsActive = false
							this.$noty.success('Se eligió el alimento correctamente!')
							
							if(this.currentFoodCategory==='consumo_reducido'){
								this.topIsActive = true 
							}
							if(this.currentFoodCategory==='proteinas_grasas'){
								if(this.user.diet_type=="P"){
									this.bottomIsActive = true
								}else{
									this.middleIsActive = true 
								}
							}
							if(this.currentFoodCategory==='hidratos_carbono'){
								if(this.user.diet_type=="P"){
									this.middleIsActive = true
								}else{
									this.bottomIsActive = true 
								}
							}

						}
						//this.$router.push({name: 'index'});
					})
					.catch(err => {

						console.log(err)
						this.loading = false;
					});
				}else{
					this.$noty.error('Porfavor seleccione un alimento!');
				}
				
			},
			formatNumber(num){
				num = parseInt(num)
				if(num<=9){
					num = '0'+num
				}
				return num;
			},
			onClickDay(day){
				this.loading= true

				let stringDate =  day.year+'-'+this.formatNumber(day.month)+'-'+this.formatNumber(day.day)
				this.currentDate = stringDate
				let data = {
					date: this.currentDate
				}

				axios.post(api.getFoodsByDate, data).then(res => {
					this.arrFoods = res.data.foods
					this.loading= false
					this.modalCalendarIsActive = false
					this.userFoods =res.data.todayUserFoods
					this.currentDate = res.data.currentDate
					this.currentFormatDate = res.data.formatDate
					this.attrs[0].dates = this.currentDate
					this.setClassActiveItems()

					if(this.user.diet_type ==="S" || this.user.diet_type ==="s"){
						this.currentPyramid = this.pyramid1
					}
					if(this.user.diet_type === "P" || this.user.diet_type ==="p"){
						this.currentPyramid = this.pyramid2
					}
					
				})
				.catch(err => {

					console.log(err)
					this.loading= false
					this.modalCalendarIsActive = false
				});
			}

		},

	}
</script>