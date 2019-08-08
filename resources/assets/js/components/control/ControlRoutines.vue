<template>
<!-- <h1 class="display-4" v-once>Bienvenido a {{siteName}}</h1> -->
<div>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fullcalendar/3.9.0/fullcalendar.css">
	<div class="columns">
		<div class="column col-sm-12 col-xl-10 col-mx-auto">
			<h5 class="text-center">Seguimiento y control de rutinas</h5>
		</div>
	</div>
	<div class="columns" v-if="scores.length>0">
		<div class="column col-sm-12 col-xl-8 col-mx-auto">
			<div class="wrapper-date">
				<div @click="onClickCalendar" class="calendar-button"></div>
				<div class="ctn-date">
					<div @click="onClickBack" class="back">
						<i class="icon icon-arrow-left"></i>
					</div>
					<div class="date">{{currentScore.format_date}}</div>
					<div @click="onClickNext" class="next">
						<i class="icon icon-arrow-right"></i>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="columns" v-if="scores.length>0">
		<div class="column col-sm-12 col-xl-10 col-mx-auto">
			<div class="ctn-emoji">
				<img v-bind:src="getCurrentImage()" alt="emoji">
				<h2>{{currentScoreName}}</h2>
				<p>La rutina fue exigente pero no tuviste problemas para completarla</p>
			</div>

			<div class="ctn-frase">
				<p>
					<img class="d-inline-block" src="/img/comillas.png" alt="Frase"> Cuando sientas que vas a rendirte, piensa en proque emepezaste
				</p>
			</div>
			<router-link :to="{name: 'controlBoard'}" tag="button" class="btn btn-primary btn-block" activeClass="active" exact>
				VER TABLERO EVOLUTIVO
			</router-link>
			
		</div>
	</div>

	<div class="modal" v-bind:class="{active: modalIsActive }" id="modal-id">
		<a @click="onClickCloseModal" class="modal-overlay" aria-label="Close"></a>
		<div class="modal-container" style="width: 420px; max-width: 100%;">
			<div class="modal-header">
				<a @click="onClickCloseModal" class="btn btn-clear float-right" aria-label="Close"></a>
				<div class="modal-title h5 text-center">Calendario de rutinas realizadas</div>
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
	<loading v-if="loading" message='Cargando ...'></loading>
</div>

</template>
<script>
	//import {mapState} from 'vuex'
	import {api} from '../../config'
	import Loading from './../loading/Loading.vue' 
	import { setupCalendar, Calendar} from 'v-calendar'
	import 'v-calendar/lib/v-calendar.min.css'

	// Remember to setup calendar (passing in defaults if needed)
	setupCalendar({
	  firstDayOfWeek: 2,  // Monday,
	                  // ...other defaults
	});

	export default {
		// computed: mapState({
		// 	user: state => state.auth
		// }),
		components: {
			'loading': Loading,
			'v-calendar': Calendar
		},
		data(){
			return{
				loading:false,
				modalIsActive: false,
				scores:[],
				indexScore:0,
				currentScore:{},
				scoreNames: ['Muy Fácil','Fácil','Moderada','Algo Dura','Dura','Muy Dura','Máxima +10'],
				scoreImages:['7-muy-facil.png','6-facil.png','5-moderada.png','4-algo-dura.png','3-dura.png','2-muy-dura.png','1-maxima.png'],
				currentScoreName:'',
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
		methods: {
			onClickNext(){
				if(this.indexScore > 0){
					this.indexScore--
					this.currentScore = this.scores[this.indexScore]
					this.currentScoreName = this.scoreNames[ this.currentScore.score - 1 ]
				}
			},
			onClickBack(){
				if(this.indexScore < this.scores.length - 1){
					this.indexScore++
					this.currentScore = this.scores[this.indexScore]
					this.currentScoreName = this.scoreNames[ this.currentScore.score - 1 ]
				}
			},
			onClickCalendar(){
				this.modalIsActive = true
			},
			onClickCloseModal(){
				this.modalIsActive = false
			},
			setDatesArray(){
				let arrDates = [];
				for(let i=0; i<this.scores.length; i++){
					let date  =  this.scores[i].date.split(" ")[0]
					let year  =  parseInt(date.split("-")[0])
					let month =  parseInt(date.split("-")[1]) - 1 
					let day   =  parseInt(date.split("-")[2])
					arrDates[i] = new Date(year, month, day)
				}
				this.attrs[0].dates = arrDates
			},
			formatNumber(num){
				num = parseInt(num)
				if(num<=9){
					num = '0'+num
				}
				return num;
			},
			onClickDay(day){
				let stringDate =  day.year+'-'+this.formatNumber(day.month)+'-'+this.formatNumber(day.day)+' '+'00:00:00'
				for(let i=0; i<this.scores.length; i++){
					if(this.scores[i].date === stringDate){	
						this.indexScore = i
						this.currentScore = this.scores[i]
						this.currentScoreName = this.scoreNames[ this.currentScore.score - 1 ]
						this.modalIsActive = false
						return
					}
				}
			},
			getCurrentImage(){
				let currentImg = this.scoreImages[this.currentScore.score - 1]
				return '/img/caras/'+ currentImg
			}
		},
		created(){
			this.loading= true
			axios.get(api.getUserScores).then(res => {
				console.log(res.data)
				this.loading= false
				this.scores = res.data
				this.currentScore = this.scores[this.indexScore]
				this.currentScoreName = this.scoreNames[ this.currentScore.score - 1 ]
				this.setDatesArray()
				//this.routines = res.data.routines
			})
			.catch(err => {
				console.log("err")
				this.loading= false
			});
		},
	}
</script>