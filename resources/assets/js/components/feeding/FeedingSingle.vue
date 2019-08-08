<template>
<!-- <h1 class="display-4" v-once>Bienvenido a {{siteName}}</h1> -->
<div>
	<!-- <div class="columns">
		<div class="column col-sm-10 col-xl-10 col-mx-auto">
			<h2 class="text-center">Guía de alimentación</h2>
		</div>
	</div> -->
	<div class="columns">
		<div class="column col-sm-12 col-xl-10 col-mx-auto text-center">
			<div class="img-single-feeding" style="background-image:url('http://tipsparaellas.com/wp-content/uploads/2016/10/tpe1-1.png');"></div>
		</div>
	</div>
	<div class="columns">
		<div class="column col-sm-10 col-xl-10 col-mx-auto text-center">
			<div class="info-single-feeding">
				<h3 class="title">Pollo con vegetales</h3>
				<h5 class="subtitle">380 Kcal.</h5>
				<p class="description">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa quod dolorem placeat delectus, nostrum laborum, dolore facere, porro aspernatur omnis, unde reiciendis. Fuga suscipit fugit repudiandae, culpa ea ad! Repellat.
				</p>
			</div>
			<!-- <button class="btn btn-md">ELEGIR PARA HOY</button> -->
			<router-link :to="{name: 'feeding'}" tag="button" class="btn btn-lg" activeClass="active" exact>
				ELEGIR PARA HOY
			</router-link>
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
		data(){
			return{
				currentTab:0
			}
		},
		methods: {
			onClickTab(tab){
				this.currentTab = tab
			},
		}
	}
</script>