<template>
<!-- <h1 class="display-4" v-once>Bienvenido a {{siteName}}</h1> -->
<div>
	<div class="columns">
		<div class="column col-sm-12 col-xl-10 col-mx-auto">
			<h3 class="text-center">HEMOGRAMA</h3>
			<h5 class="text-center">Compará los valores de tus hemogramas según avanza tu entrenamiento</h5>
		</div>
	</div>
	<div class="columns">
		<div class="column col-sm-12 col-xl-10 col-mx-auto">
			<table class="table table-striped table-hover">
				<thead>
					<tr>
						<th></th>
						<th class="text-center">VALORES</th>
						<!-- <th class="text-center">
							<div class="wrapper-date no-border">
								<div class="ctn-date">
									<div class="back">
										<i class="icon icon-arrow-left"></i>
									</div>
									<div class="date">MES 2</div>
									<div class="next">
										<i class="icon icon-arrow-right"></i>
									</div>
								</div>
							</div>
						</th> -->
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>LDL</td>
						<td class="text-center">
							<input class="input-table" type="text">
						</td>
					</tr>
					<tr>
						<td>Triglicéridos</td>
						<td class="text-center">
							<input class="input-table" type="text">
						</td>
					</tr>
					<tr>
						<td>Glucemia am (ayunas)</td>
						<td class="text-center">
							<input class="input-table" type="text">
						</td>
					</tr>
					<tr>
						<td>Hemoglobina Glucosilada</td>
						<td class="text-center">
							<input class="input-table" type="text">
						</td>
					</tr>
					<tr>
						<td>Insulina am (ayunas)</td>
						<td class="text-center">
							<input class="input-table" type="text">
						</td>
					</tr>
					<tr>
						<td>Proteína C Reactiva</td>
						<td class="text-center">
							<input class="input-table" type="text">
						</td>
					</tr>
					<tr>
						<td>Ultrasensible</td>
						<td class="text-center">
							<input class="input-table" type="text">
						</td>
					</tr>	
					<tr>
						<td>TSH</td>
						<td class="text-center">
							<input class="input-table" type="text">
						</td>
					</tr>	
					<tr>
						<td>T4 Libre</td>
						<td class="text-center">
							<input class="input-table" type="text">
						</td>
					</tr>	
					<tr>
						<td>T3 Libre</td>
						<td class="text-center">
							<input class="input-table" type="text">
						</td>
					</tr>	
					<tr>
						<td>Cortisol am (ayunas)</td>
						<td class="text-center">
							<input class="input-table" type="text">
						</td>
					</tr>	
					<tr>
						<td>Leptina</td>
						<td class="text-center">
							<input class="input-table" type="text">
						</td>
					</tr>	
					<tr>
						<td>Grehalina</td>
						<td class="text-center">
							<input class="input-table" type="text">
						</td>
					</tr>	
				</tbody>
			</table>
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
				
			}
		},
		methods: {
			
		}
	}
</script>