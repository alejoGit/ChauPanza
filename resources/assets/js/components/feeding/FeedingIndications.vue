
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
			<!-- <div class="img-single-feeding" style="background-image:url('https://mejorconsalud.com/wp-content/uploads/2015/07/%C2%BFCu%C3%A1l-es-el-desayuno-m%C3%A1s-sano.jpg');"></div> -->
			<!-- <img v-bind:src="image" class="w100" alt="ChauPanza"> -->
		</div>
	</div>
	<div class="columns wrapper-indications">
		<div class="column col-sm-10 col-xl-10 col-mx-auto text-center">
			
			<h2>INDICACIONES</h2>
			<!-- <div v-html="body"></div> -->
			<div v-if="user.diet_type=='S'">
				<b>Base de la pirámide</b>

				<p>En la alimentación indicada para este tipo de deben predominar las verduras y hortalizas (ver clasificación). La mitad de la ingesta en una comida, deberá ser este tipo de alimentación.  Si lo vemos en un plato, éste representa la mitad del mismo.</p>

				<b>Centro de la pirámide</b>

				 <p>Se recomienda consumir una ingesta moderada de proteínas, principalmente blancas y bajas en grasas como como el pollo, pavo, pescado, etc.  Tambien pequeñas porciones de quesos bajos en grasas están permitidos y componen esta parte de la alimentación, lo mismo que huevos cocidos en agua, en omelette o revueltos (no fritos!)</p>

				<b>Punta de la pirámide</b>

				<p>Son los llamados alimentos de consumo reducido o limitado (ver clasificación). En cada comida, éstos deben representar menos del ¼ del plato.</p>

				<div style="text-align: center;">
					<img src="/img/plato-icon.png" style="width: 50%;">
				</div>

				<b>Hidratación</b>

				<p>Tu peso/7 es la cantidad de vasos  de agua de 200cc que debes beber al día</p>

				<b> Sal</b>
				<p>Moderada</p>
				
				<b>Fruta</b>

				<p>No consumirla después de las 4:00 PM.</p>

				<b>Alimentos procesados</b>

				<p>(Tales como harinas, dulces, helados, pizzas, postres light y no light, flanes, helados, chocolates en cualquiera de sus formas,  etc.): Tampoco consumir después de las 4:00PM</p>

				<b> Condimentos</b>

				<p>Aceite de oliva extra virgen, cucharita de té, limón, mostaza, pimienta, canela, jengibre, vinagre de manzana y aceto</p>

				<b>Colaciones</b>

				 <p>Si durante el día se siente hambre, consumir una colación que puede ser nueces o almendras (tres unidades), fruta (una) baja en azúcar, como manzana verde o fresas, bastoncitos de zanahoria o apio con queso untable descremado (max tres).</p>

				<b> Café</b>

				<p>Máximo dos por día</p>

				<b>Endulzante</b>

				<p>Evitar azúcar, reemplazar por estevia (preferentemente) o endulzantes</p>

				<b> Huevos</b>

				<p>Solo clara (hasta 2 al día). No usar aceite durante la cocción.</p>

				<b>Pastas</b>

				 <p>Si las consumo como “consumo reducido”, que sea ¼ del plato, y el resto deben ser verduras, preferentemente verdes.  </p>  
			</div>

			<div v-if="user.diet_type=='P'">
				<b>Base de la pirámide</b>

				<p>En la alimentación indicada para este tipo de deben predominar las proteínas como las carnes, pescado, etc..al igual que los lácteos. La mitad de la ingesta en una comida, deberá ser este tipo de alimentación.  Si lo vemos en un plato, éste representa la mitad del mismo.</p>

				<b>Centro de la pirámide</b>

				<p>Lo componen las  verduras y hortalizas (ver clasificación). Más de ¼ de la ingesta en una comida, deberá ser este tipo de alimentación.</p>

				<b>Punta de la pirámide</b>

				<p>Son los llamados alimentos de consumo reducido o limitado (ver clasificación). En cada comida, éstos deben representar menos del ¼ del plato.</p>

				<div style="text-align: center;">
					<img src="/img/plato-icon.png" style="width: 50%;">
				</div>
				
				<b>Hidratación</b>

				<p>Tu peso/7 es la cantidad de vasos  de agua de 200cc que debes beber al día</p>

				<b>Sal</b>

				<p>Moderada</p>

				<b>Fruta</b>

				<p> No consumirla después de las 4:00 PM.</p>

				<b>Alimentos procesados</b>

				<p>(Tales como harinas, dulces, helados, pizzas, postres light y no light, flanes, helados, chocolates en cualquiera de sus formas,  etc.): Tampoco consumir después de las 4:00PM</p>

				 <b>Condimentos</b>

				 <p>Aceite de oliva extra virgen, cucharita de té, limón, mostaza, pimienta, canela, jengibre, vinagre de manzana y aceto</p>

				<b>Colaciones</b>

				<p>Si durante el día se siente hambre, consumir una colación que puede ser nueces o almendras (tres unidades), fruta (una) baja en azúcar, como manzana verde o fresas, bastoncitos de zanahoria o apio con queso untable descremado (max tres), rollitos de fiambre (jamón, lomito, queso).</p>

				<b>Café</b>

				<p>Máximo dos por día</p>

				<b>Endulzante</b>

				<p>Evitar azúcar, reemplazar por estevia (preferentemente) o endulzantes</p>

				<b>Huevos</b>

				<p>Hasta 2 al día. No usar aceite durante la cocción.</p>


				 <b>Pastas</b>

				 <p>Si las consumo como “consumo reducido”, que sea ¼ del plato, y el resto deben ser verduras de todo tipo.</p>
			</div>
			
			<!-- INDICACIONES PARTE 2 -->
			<div>
				<h3>CONSUMO REDUCIDO</h3>
				<b>HARINAS: </b>
				<ul>
					<li>Harina de trigo integral</li>
					<li>Harina de Soya-soja</li>
					<li>Harina sin glúten</li>
					<li>Harina de Arroz</li>
					<li>Harina de Cebada</li>
					<li>Harina de Centeno</li>
					<li>Harina de Alforfón <br> (proviene del trigo sarraceno)</li>
					<li>Harina de garbanzos</li>
					<li>Harina de Maiz</li>
				</ul>
				<b>FRUTAS</b><br> <small>(Clasificación según índice glucémico) <br>  Solo consumiremos las de índice glucémico bajo:</small>
				<ul>
					<li>Limón</li>
					<li>Frutos Rojos: moras, arándanos, arándanos, frambuesas</li>
					<li>Cerezas</li>
					<li>Pomelo o toronja</li>
					<li>Duraznos o melocotones</li>
					<li>Peras</li>
					<li>Maracuyá</li>
					<li>Mandarinas</li>
					<li>Ciruelas</li>
					<li>Coco fresco</li>
					<li>Manzanas</li>
				</ul>

				<b>CIERTAS BEBIDAS</b>
				<ul>
					<li>Alcohólicas: Aperitivos, vinos de mesa, aguardientes, digestivas, </li>refrescantes.
					<li>No Alcohólicas: Jugos, leche, sodas, gaseosas, energizantes, yogurt ,kumis </li>  
				</ul>

				<b>DULCES</b>
				<ul>
					<li>chocolate más 75% de  cacao</li>
					<li>Postre light (reducido en glucosa y grasa)</li>
					<li>Gelatina Light </li>
				</ul>

				<h4>PROTEINAS Y GRASAS BUENAS</h4>
				<b>ORIGEN VEGETAL</b>
				<ul>
					<li>Legumbres: lentejas, garbanzos, judías, soja, habas secas, guisantes secos.</li>
					<li>Cereales: arroz integral, mijo, avena, centeno, quinua, trigo, maíz</li>
					<li>Frutos secos: nuez, almendra, avellana, pistacho, cacahuete (maní), anacardo, castaña.</li>
					<b>ORGEN ANIMAL</b>
					<li>Carnes
						Rojas: ternera, vaca, cerdo, cordero, oveja, ciervo <br>
						Blancas: pollo, pavo, conejo</li>
					<li>Pescados: 
						Azul (proporción alta en grasas): Atún, salmón, sardina, arenque,  pez espada,  caballa, anguila, boquerón
						<br>
						Blanco(proporción baja en grasas): Merluza, lenguado, rape,  gallo, rodaballo, bacalao, pescadilla, trucha.</li>
					<li>Huevos</li>
					<li>Lácteos: leche, yogures, quesos</li>
				</ul>
				<b>GRASAS BUENAS</b>
				<ul>
					<li>Aceites de semilla de uva, de oliva , de ajonjolí, de coco</li>
					<li>palta o aguacate</li>
					<li>humu</li>
					<li>nueces, almendras, castañas, pecanas, pistachos, avellanas</li>
					<li>semillas de lino, de cáñamo, de calabaza, de girasol.  </li>
				</ul>

				<b>HIDRATOS DE CARBONO</b>
				<ul>
					<li>Verduras de hoja: espinaca, lechuga, acelgas, rúcula, coles, endibia, grelo y nabiza.</li>
					<li>Verduras de Bulbo: ajo, cebolla, cebollín, hinojos, alcachofas, puerros.</li>
					<li>Verduras de raíz: zanahoria, yuca o mandioca, ocumo, nabo.</li>
					<li>Verduras de Flor o inflorescencias: alcachofas, brócoli y coliflor.</li>
					<li>Verduras de Brote:  Brote de soja, alfalfa, trigo, arvejas  y de mostaza.</li>
					<li>Verduras de Fruto: Berenjena, pepino, tomate, pimientos, calabacín, aguacate</li>
					<li>Verduras de Tallo: Apio, espárragos, cardos y puerro.</li>
					<li>Tubérculos: papa, batata, yuca, ñame, remolacha</li>
				</ul>

			</div>
			<!-- END  PARTE 2 -->
			<!-- PARTE 3 P -->
			<div v-if="user.diet_type=='P'">
				<h3>DESAYUNOS/ MERIENDAS</h3>
				<ul>
					<li>Omelette con jamón y queso, y 2 huevos (1 huevo entero + 1 clara) PROTEÍNAS</li>
					<li>1 fruta + una tostada untada con queso  cuartirolo light o rodajas de PaltaCONSUMO REDUCIDO+ PROTEÍANAS / GRASAS BUENAS</li>
					<li>Tres galletas de salvado untadas con queso descremado  CONSUMO REDUCIDO + PROTEÍNAS</li>
					<li>Una tostada de pan integran con 1 feta de jamón cocido + 1 feta de queso  CONSUMO REDUCIDO + PROTEÍANAS</li>
					<li>Un pote chico de yougurt descremado con semillas de chía y lino previamente molidas en el mortero  PROTEÍANAS + GRASAS BUENAS</li>
					<li>2 tostadas integrales untadas con ricota descremada o queso untable descremado  CONSUMO REDUCIDO + PROTEÍANAS</li>
					<li>½ pote de frutos rojos (arándanos, frutillas, cerezas, moras, etc)  CONSUMO REDUCIDO</li>
					<p><i>Acompañados con una taza de café cortado, té verde, té negro o una taza de mate cocido.</i></p>
				</ul>
				<h3>ALMUERZOS / CENAS</h3>
				<ul>
					<li>Wok de pollo, carne, o pescado  con vegetales (condimento: aceite de oliva)  HIDRATOS DE CARBONO + PROTEÍANAS+ GRASAS BUENAS</li>
					<li>Milanesa de ternera con ensalada (ej zanahoria,  tomate, rúcula). Condimento: Aceite de Oliva  HIDRATOS DE CARBONO + PROTEÍANAS+ CONSUMO REDUCIDO (pan rallado)+ GRASAS BUENAS</li>
					<li>Carne (magra) al horno con verduras grilladas (morrones de distintos colores, berenjenas,  cebollas, champiñones) PROTEÍNA + HIDRATOS DE CARBONO</li>
					<li>¼ Pollo (sin piel) con puré de papas o zapallo, o ensalada de hojas verdes. Condimento: Aceite de oliva  PROTEÍNA + HIDRATOS DE CABONO+ GRASAS BUENAS</li>
					<li>Carne de cerdo con ensalada de hojas verdes y media palta  PROTEÍNA + GRASAS BUENAS (PALTA Y CONDIMENTO) + HIDRATOS DE CARBONO</li>
					<li>2 Rapiditas con vegetales y pollo  CONSUMO REDUCIDO (MASA) + HIDRATOS DE CARBONO + PROTEÍNA</li>
					<li>Soufflé de calabaza  PROTEÍNAS + HIDRATOS DE CARBONO</li>
					<li>Salmon con papas y zanahorias cocidas al horno   PROTEÍNAS + HIDRATOS DE CARBONO</li>
					<li>Postre: Gelatina light  CONSUMO REDUCIDO</li>
				</ul>
			</div>
			<!-- END PARTE 3 P -->

			<!-- PARTE 3 S -->
			<div v-if="user.diet_type=='S'">
				<h3>DESAYUNOS/ MERIENDAS </h3>
				<ul>
					<li>1 rodaja de pan integral untada con queso descremado y/o mermelada (de naranja, frutillas o arándanos)  HIDRATOS DE CARBONO+ PROTEÍNA</li>
					<li>Yogurt descremado + 1 fruta (manzana verde, naranja)  PROTEÍNA+ CONSUMO REDCIDO </li>
					<li>Omelette de verduras,  con dos claras de huevo (sin yema)  PROTEÍNAS</li>
					<li>1 fruta + una tostada untada con queso light o rodajas de Palta  CONSUMO REDUCIDO + HIDRATO DE CARBONO + PROTEÍNA Y GRASAS BUENAS</li>
					<li>Tres galletas de salvado untadas con queso descremado  CONSUMO REDUCIDO + PROTEÍNA</li>
					<li>Una tostada de pan integran con 2 fetas de jamón cocido + 2 fetas de queso. descremado  CONSUMO REDUCIDO + PROTEÍNA</li>
					<li>Un pote chico de yogurt descremado con semillas de chía y lino previamente pisadas en el mortero, y una tostada integral untada con ricota descremada o queso untable descremado  PROTEÍANA + GRASAS BUENAS + CONSUMO REDUCIDO</li>
					<li>1 bowl con frutas (manzana verde, frutillas, duraznos, naranja, arándanos)  CONSUMO REDUCIDO</li>
				</ul>
				<p><i>Acompañados con una taza de café cortado, té verde, té negro o una taza de mate cocido.</i></p>

				<h3>ALMUERZO / CENA</h3>
				<ul>
					<li>Wok de vegetales y proteínas (pollo, pavo, pescado), condimentado con aceite de oliva  PROTEÍNAS + HIDRATOS DE CARBONO + GRASAS BUENAS</li>
					<li>Milanesa de carne con ensalada de hojas verdes y tomate. Condimento: aceite de oliva PROTEÍNA + CONSUMO REDUCIDO + HIDRATOS DE CARBONO+ GRASAS BUENAS (aceite de oliva)</li>
					<li>Carne magra al horno/ensalada de hojas verdes, o espinacas revueltas o verduras grilladas (morrones de distintos colores, berenjenas,  cebollas, champiñones). Condimento: aceite de oliva PROTEÍANAS + GRASAS BUENAS + HIDRATOS DE CARBONO</li>
					<li>¼ Pollo con ensalada de hojas verdes condimentado con aceite de oliva  PROTEÍANAS + GRASAS BUENAS + HIDRATOS DE CARBONO</li>
					<li>2 Rapiditas con verduras y pollo  CONSUMO REDUCIDO+ PROTEÍANAS + HIDRATOS DE CARBONO)</li>
					<li>Souffle de verduras  PROTEÍANAS + HIDRATOS DE CARBONO</li>
					<li>Pescado bajo en grasas (Merluza, Lenguado, Trucha, Mero, Bacalao, Rape, Besugo) con ensalada de hojas verdes o de rúcula y tomate  PROTEÍNAS+ GRASAS BUENAS + HIDRATOS DE CARBONO </li>
					<li>Postre: gelatina light  PROTEÍNA</li>
				</ul>

			</div>
			<!-- END PARTE 3 S -->
		</div>
	</div>
	
</div>

</template>
<script>
	import {mapState} from 'vuex'
	import {api} from "../../config"
	export default {
		computed: mapState({
			user: state => state.auth
		}),
		data(){
			return{
				// title:'',
				// body:'',
				// image:'',
			}
		},
		// created(){
		// 	this.loading= true
		// 	console.log(this.user)
		// 	axios.get(api.getUserIndications).then(res => {
		// 		console.log(res.data)
		// 		this.loading= false
		// 		this.title = res.data.title
		// 		this.body = res.data.body
		// 		this.image = '/images/feeding_extras/'+res.data.image
				
		// 	})
		// 	.catch(err => {
		// 		console.log("err")
		// 		this.loading= false
		// 	});
		// },
		methods: {
			onClickTab(tab){
				this.currentTab = tab
			},
		}
	}
</script>