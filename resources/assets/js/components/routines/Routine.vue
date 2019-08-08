<style>
	.wrapper-routine{
		background: url('/img/fondo-login.jpg');
		background-size:cover;
		background-position: center;
		background-repeat: no-repeat;
		height: 100vh;
		width:100%;
		position: absolute;
	}
	.wrapper-iframe{
		background-image: url('/img/loading.gif');
		background-size: 90px;
		background-position: center;
		background-repeat: no-repeat;
	}
	iframe{
		width: 100%!important;
		height: 350px !important;
	}
</style>
<template>
	<div id="mainWrapper" class="wrapper-routine">
		<h2 class="text-center text-light">{{currentRoutine.name}}</h2>
		<!-- <div id="container-iframe" class="w100" v-html="currentVideo"></div> -->
		<div class="wrapper-iframe">
		<iframe id="id-iframe" v-bind:src="currentRoutine.video" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
		</div>
		<br>
		<div class="columns text-center">
			<!-- <div class="col-3">
				<button @click="onClickPrevious" class="btn btn-primary">
					<i class="icon icon-arrow-left"></i> Anterior
				</button>
			</div> -->
			<div class="col-12 text-center">
				<br><br>
				<button @click="onClickQualify" class="btn btn-primary" >Calificar Rutina</button>
			</div>
			<!-- <div class="col-3">
				<button @click="onClickNext" class="btn btn-primary">
					Siguiente
					<i class="icon icon-arrow-right"></i>
				</button>
			</div> -->
		</div>
		<!-- <br><hr><br> -->
	</div>
</template>

<script>
	import {mapState} from 'vuex'

	export default {
		computed: mapState({
			currentRoutine: state => state.currentRoutine
		}),
		data(){
			return {
				// arrVideos:[],
				currentVideo: null,
				video : null
			}
		},
		methods:{
			/*onClickPrevious(){
				
				if(this.currentVideo>0){
					this.currentVideo = this.currentVideo - 1
					this.video.load()
	    			this.video.play()
				}
			},
			onClickNext(){
				
				if(this.currentVideo< this.arrVideos.length -1){
					this.currentVideo = this.currentVideo + 1
					this.video.load()
	    			this.video.play()
				}
			},
			*/
			onClickQualify(){
				this.$router.push({name: 'qualifyRoutine'});
			}
		},
		mounted(){
			let self = this
			if( !this.currentRoutine.video ){
				this.$router.push({name: 'routines'})
				return
			}

			//alert( this.currentRoutine.url)
			// this.video =  document.getElementById('myVideo')
			

			let iframe = document.getElementById('id-iframe');
		    let player = new Vimeo.Player(iframe);

		    player.on('play', function() {
		      	// console.log('END  video');
		      	console.log("start")
				
		    });

		    player.on('ended', function() {
		      	// console.log('END  video');
		      	self.$noty.success('Indica como te pareció la rutina!');
				self.$router.push({name: 'qualifyRoutine'});
		    });

			/*this.arrVideos = [
				'/videos/v1.mp4',
				'/videos/ABSD2.mp4',
				'/videos/ABSD3.mp4',
				'/videos/ABSD5.mp4',
			]*/
			//this.currentVideo = this.arrVideos[this.currentVideo]

			
			/*let self = this
		    self.video.onended = function(e) {
		
		    	
				self.$noty.success('Indica como te pareció la rutina!');
				self.$router.push({name: 'qualifyRoutine'});
    			
		    }*/
		}
	}
</script>



