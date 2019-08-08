<template>
	<footer>
		<br>
		<!-- <div class="divider"></div>
		<div class="text-center">
			&copy;<span v-once> {{ siteName }}</span> <span v-once>{{ currentYear }},
			Desarrollado por <br> <a href="https://www.mensorestudio.com.ar/" target="_blank">Mensore Studio</a></span>
		</div> -->
	</footer>
</template>

<script>
	import {siteName} from '../../config';

	export default {
		data() {
			return {
				siteName: siteName,
				currentYear: (new Date).getFullYear()
			}
		}
	}
</script>
